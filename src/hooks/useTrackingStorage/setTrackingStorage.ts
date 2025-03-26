import { TrackingProps } from '../../types';
import type { AccountUrl, ProductId, StoreId } from './types';
import { getMergedTrackingStorage, updateOrderFormTracking } from './utils';

/**
 * @param trackingData Objeto com os dados desse produto
 * @param trackingData.index Posição do produto na lista em que ele estava quando foi clicado ou adicionado ao carrinho
 * @param trackingData.creative_name Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ('banner', "carrossel", "stories")
 * @param trackingData.creative_slot Identificador do criativo que trouxe o usuário para esse produto. Ex.: "carrossel-home:3:2" É um carrossel da home, o terceiro da página, o segundo slide dele
 * @param trackingData.item_list_id ID da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param trackingData.item_list_name Nome da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param trackingData.promotion_id URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param trackingData.promotion_name Texto principal presente dentro do componente (o mesmo componente de creative_name)
 * @param storeId ID da loja. Ex.: "{storeId}.vtexcommercestable.com.br"
 * @param productId ID do produto que quer salvar os dados. Se não for passado, será salvo nos dados temporários
 * @param orderFormId ID do orderForm. Se não for passado, será salvo apenas nos dados temporários e não no orderForm
 */
export async function setTrackingStorage(
  trackingData: TrackingProps,
  storeId: StoreId,
  accountUrl: AccountUrl,
  productId: ProductId = 'temp',
  orderFormId = '',
) {
  if (typeof window === 'undefined') return;

  const mergedTracking = await getMergedTrackingStorage(
    orderFormId,
    accountUrl,
  );

  const mergedProductTracking = mergedTracking.hasOwnProperty(productId)
    ? mergedTracking[productId]
    : {};

  const newTracking = {
    ...mergedTracking,
    [productId]: {
      ...mergedProductTracking,
      ...trackingData
    },
  }

  const newTrackingJSON = JSON.stringify(newTracking);

  window.sessionStorage.setItem("tracking-storage", newTrackingJSON);

  if (orderFormId !== '') {
    updateOrderFormTracking(storeId, orderFormId, newTrackingJSON);
  }
}
