import { AccountUrl, ProductId } from './types';
import { getTrackingFromOrderForm, getTrackingFromSessionStorage } from './utils';

/**
 * @param productId ID do produto que se quer pegar os dados ou 'temp'. Se não for passado, retorna os dados temporários
 * @returns Dados de tracking do produto ou temporários
 */
export async function getTrackingStorageByProductId(
  orderFormId: string,
  accountUrl: AccountUrl,
  productId: ProductId = 'temp'
) {
  const trackingFromSessionStorage = getTrackingFromSessionStorage();

  if (trackingFromSessionStorage.hasOwnProperty(productId)) {
    return trackingFromSessionStorage[productId];
  }

  const trackingFromOrderForm = await getTrackingFromOrderForm(
    orderFormId,
    accountUrl
  );

  if (trackingFromOrderForm.hasOwnProperty(productId)) {
    return trackingFromOrderForm[productId];
  }

  return {}
}
