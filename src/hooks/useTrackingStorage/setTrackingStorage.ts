import type {
  BannerTrackingProps,
  ListTrackingProps,
  ProductId,
  TrackingType,
} from './types';
import { getAllTracking, setCookie } from './utils';

function removeListProps(
  trackingData: BannerTrackingProps & ListTrackingProps
) {
  const { index, item_list_id, item_list_name, ...rest } = trackingData;
  return rest;
}

function removeBannerProps(
  trackingData: BannerTrackingProps & ListTrackingProps
) {
  const {
    creative_name,
    creative_slot,
    promotion_id,
    promotion_name,
    ...rest
  } = trackingData;

  return rest;
}

/**
 * Usado para inserir dados de algum produto, ou dados temporários, no tracking
 *
 * @param type 'banner' ou 'list'. Dependendo desse parâmetro, apenas alguns valores serão aceitos no objeto trackingdata
 * @param trackingData Objeto com os dados desse produto
 * @param trackingData.index (só é aceito se type for "list") Posição do produto na lista em que ele estava quando foi clicado ou adicionado ao carrinho
 * @param trackingData.item_list_id (só é aceito se type for "list") ID da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param trackingData.item_list_name (só é aceito se type for "list") Nome da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param trackingData.creative_name (só é aceito se type for "banner") Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ('banner', "carrossel", "stories")
 * @param trackingData.creative_slot (só é aceito se type for "banner") Identificador do criativo que trouxe o usuário para esse produto, e o índice do banner clicado separados por dois pontos. Ex.: "carrossel-home:2" É um carrossel da home, onde o segundo slide dele foi clicado
 * @param trackingData.promotion_id (só é aceito se type for "banner") URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param trackingData.promotion_name (só é aceito se type for "banner") Texto principal (CTA) presente dentro do componente (o mesmo componente de creative_name)
 * @param productId ID do produto que se quer salvar os dados. Se não for passado, será salvo nos dados temporários
 * @param expirationDays Quantidade de dias que o cookie vai durar. O padrão é 7 dias. Usar valor -1 para excluir o cookie
 */
export function setTrackingStorage<T extends TrackingType>(
  type: T,
  trackingData: T extends 'banner' ? BannerTrackingProps : ListTrackingProps,
  productId: ProductId = 'temp'
) {
  const currentTracking = getAllTracking();

  const currentProductTracking = currentTracking.hasOwnProperty(productId)
    ? currentTracking[productId]
    : {};

  const productTrackingNoOldData =
    type === 'banner'
      ? removeBannerProps(currentProductTracking)
      : removeListProps(currentProductTracking);

  const newTracking = {
    ...currentTracking,
    [productId]: {
      ...productTrackingNoOldData,
      ...trackingData,
    },
  };

  setCookie('tracking-storage', JSON.stringify(newTracking));
}
