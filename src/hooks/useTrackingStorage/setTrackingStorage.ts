import type { TrackingProps, TrackingStorageProps } from './types';
import { getAllTrackingStorage } from './utils';

/**
 * @param productId ID do produto que quer salvar os dados
 * @param trackingData Objeto com os dados desse produto
 * @param trackingData.index Posição do produto na lista em que ele estava quando foi clicado ou adicionado ao carrinho
 * @param trackingData.creative_name Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ('banner', "carrossel", "stories")
 * @param trackingData.creative_slot Identificador do criativo que trouxe o usuário para esse produto. Ex.: "carrossel-home:3:2" É um carrossel da home, o terceiro da página, o segundo slide dele
 * @param trackingData.item_list_id ID da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param trackingData.item_list_name Nome da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param trackingData.promotion_id URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param trackingData.promotion_name Texto principal presente dentro do componente (o mesmo componente de creative_name)
 */
export function setTrackingStorage(
  productId: string,
  trackingData: TrackingProps
) {
  if (typeof window === 'undefined') return;

  const allTrackingStorage = getAllTrackingStorage() || {};

  const productCurrentTracking = allTrackingStorage.hasOwnProperty(productId)
    ? allTrackingStorage[productId]
    : {};

  const newTracking: TrackingStorageProps = {
    ...allTrackingStorage,
    [productId]: {
      ...productCurrentTracking,
      ...trackingData,
    },
  };

  window.sessionStorage.setItem(
    "tracking-storage",
    JSON.stringify(newTracking)
  );
}
