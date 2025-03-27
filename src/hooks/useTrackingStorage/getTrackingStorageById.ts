import { ProductId } from './types';
import { getAllTrackingFromSessionStorage } from './utils';

/**
 * Usado para pegar dados de tracking de algum produto, ou os dados temporários
 * 
 * @param productId ID do produto que se quer pegar os dados ou 'temp'. Se não for passado, retorna os dados temporários
 * @returns Dados de tracking do produto ou temporários
 */
export function getTrackingStorageByProductId(
  productId: ProductId = 'temp'
) {
  const tracking = getAllTrackingFromSessionStorage();

  if (tracking.hasOwnProperty(productId)) {
    return tracking[productId];
  }

  return {};
}
