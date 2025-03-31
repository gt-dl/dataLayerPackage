import { ProductId } from './types';
import { getAllTracking } from './utils';

/**
 * Usado para pegar dados de tracking de algum produto, ou os dados temporários
 *
 * @param productId ID do produto que se quer pegar os dados. Se não for passado, usa 'temp' como default
 * @returns Dados de tracking do produto ou temporários ou objeto vazio
 */
export function getTrackingByProductId(productId: ProductId = 'temp') {
  const tracking = getAllTracking();

  if (tracking.hasOwnProperty(productId)) {
    return tracking[productId];
  }

  return {};
}
