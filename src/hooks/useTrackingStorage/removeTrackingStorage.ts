import { ProductId } from './types';
import { getAllTracking, removeProps, setCookie } from './utils';

/**
 * Remove dados de tracking de algum produto
 *
 * @param productIds Lista de ID dos produtos que se quer remover os dados separados por vírgula. Não informar em formato de array
 */
export function removeTrackingStorage(...productIds: ProductId[]) {
  const currentTracking = getAllTracking();

  const newTracking = removeProps(
    currentTracking,
    productIds
  )

  setCookie('tracking-storage', JSON.stringify(newTracking));
}
