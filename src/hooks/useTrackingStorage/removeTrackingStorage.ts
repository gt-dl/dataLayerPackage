import { ProductId } from './types';
import { getAllTracking, setCookie } from './utils';

/**
 * Remove dados de tracking de algum produto
 *
 * @param productId ID do produto que se quer remover os dados. Se não for passado, removerá os dados temporários
 */
export function removeTrackingStorage(productId: ProductId = 'temp') {
  const currentTracking = getAllTracking();
  const { [productId]: _, ...newTracking } = currentTracking;

  setCookie('tracking-storage', JSON.stringify(newTracking));
}
