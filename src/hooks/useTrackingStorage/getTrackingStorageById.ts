import { getAllTrackingStorage } from './utils';

/**
 * @param productId ID do produto que se quer pegar os dados
 */
export function getTrackingStorageByProductId(productId: string) {
  const tracking = getAllTrackingStorage()?.[productId];
  if (!tracking) return null;

  return tracking;
}
