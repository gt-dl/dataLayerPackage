import { ProductId } from './types';
import { getAllTracking } from './utils';

/**
 * Usado para pegar dados de tracking de algum produto, ou os dados temporários
 *
 * @param productId ID do produto que se quer pegar os dados ou 'temp'. Se não for passado, usa 'temp' como default e retorna os dados temporários
 * @returns Dados de tracking do produto ou temporários ou objeto vazio
 */
export function getTrackingStorageByProductId(productId: ProductId = 'temp') {
  const tracking = getAllTracking();

  if (tracking.hasOwnProperty(productId)) {
    return tracking[productId];
  }

  return {};
}
