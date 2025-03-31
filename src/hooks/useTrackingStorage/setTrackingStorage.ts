import type {
  BannerTrackingProps,
  ListTrackingProps,
  ProductId,
  TrackingProps,
  TrackingType,
} from './types';
import { getAllTracking, removeProps, setCookie } from './utils';

function removeOldProps(trackingProps: TrackingProps, type: TrackingType) {
  const propsToRemoveMap: {
    banner: (keyof BannerTrackingProps)[];
    list: (keyof ListTrackingProps)[];
  } = {
    banner: [
      'creative_name',
      'creative_slot',
      'promotion_id',
      'promotion_name',
    ],
    list: ['index', 'item_list_id', 'item_list_name'],
  };

  const propsToRemove = propsToRemoveMap[type];
  if (!propsToRemove) return trackingProps;

  return removeProps(trackingProps, propsToRemove);
}

/**
 * Usado para inserir dados de algum produto, ou dados temporários, no tracking
 *
 * @param type "banner" ou "list". Marque "banner" se o evento disparou em um banner, carrossel de banner, stores ou banner com reloginho, nesse caso só aceitará 4 valores no objeto de dados: "promotion_name", "promotion_id", "creative_name" e "creative_slot". Marque "list" se o evento disparou em uma lista de produtos, nesse caso só aceitará 3 valores: "index", "item_list_id" e "item_list_name"
 * @param trackingData Objeto com os dados desse produto
 * @param trackingData.index Posição do produto na lista em que ele estava quando foi clicado ou adicionado ao carrinho
 * @param trackingData.item_list_id ID da lista onde o usuário clicou antes de adicionar esse produto ao carrinho. Por lista entendemos: carrossel de produtos da home, recomendações de produto da PDP, recomendações de produto do minicart, outras recomendações de produto. Ainda não temos definido o que é esse ID.
 * @param trackingData.item_list_name Nome da lista onde o usuário clicou antes de adicionar esse produto ao carrinho. Por lista entendemos: carrossel de produtos da home, recomendações de produto da PDP, recomendações de produto do minicart, outras recomendações de produto.
 * @param trackingData.creative_name Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ("banner", "carrossel", "stories", "reloginho")
 * @param trackingData.creative_slot Identificador do criativo que trouxe o usuário para esse produto, e o índice do banner clicado separados por dois pontos. Ex.: "carrossel-home:2" É um carrossel da home, onde o segundo slide dele foi clicado
 * @param trackingData.promotion_id URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param trackingData.promotion_name Texto principal (CTA) presente dentro do componente (o mesmo componente de creative_name)
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

  const productTrackingNoOldData = removeOldProps(currentProductTracking, type);

  const newTracking = {
    ...currentTracking,
    [productId]: {
      ...productTrackingNoOldData,
      ...trackingData,
    },
  };

  setCookie('tracking-storage', JSON.stringify(newTracking));
}
