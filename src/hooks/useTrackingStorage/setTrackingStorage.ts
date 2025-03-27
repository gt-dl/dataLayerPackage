import { TrackingProps } from '../../types';
import type { ProductId } from './types';
import { getAllTrackingFromSessionStorage } from './utils';

/**
 * Usado para inserir dados de algum produto, ou dados temporários, no session storage. Não envia dados ao order form. Isso fica na responsabilidade da função syncTrackingStorage que deve executar no load de cada página
 * 
 * @param trackingData Objeto com os dados desse produto
 * @param trackingData.index Posição do produto na lista em que ele estava quando foi clicado ou adicionado ao carrinho
 * @param trackingData.creative_name Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ('banner', "carrossel", "stories")
 * @param trackingData.creative_slot Identificador do criativo que trouxe o usuário para esse produto. Ex.: "carrossel-home:3:2" É um carrossel da home, o terceiro da página, o segundo slide dele
 * @param trackingData.item_list_id ID da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param trackingData.item_list_name Nome da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param trackingData.promotion_id URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param trackingData.promotion_name Texto principal presente dentro do componente (o mesmo componente de creative_name)
 * @param productId ID do produto que quer salvar os dados. Se não for passado, será salvo nos dados temporários
 
 */
export function setTrackingStorage(
  trackingData: TrackingProps,
  productId: ProductId = 'temp',
) {
  if (typeof window === 'undefined') return;

  const currentTracking = getAllTrackingFromSessionStorage
  ();

  const currentProductTracking = currentTracking.hasOwnProperty(productId)
  ? currentTracking[productId]
  : {};

  const newTracking = {
    ...currentTracking,
    [productId]: {
      ...currentProductTracking,
      ...trackingData
    },
  }

  window.sessionStorage.setItem("tracking-storage", JSON.stringify(newTracking));
}
