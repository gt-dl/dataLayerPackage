import { getTrackingStorageByProductId } from './getTrackingStorageById';
import { setTrackingStorage } from './setTrackingStorage';
import { removeTrackingStorage } from './removeTrackingStorage';

export function useTrackingStorage() {
  return {
    get: getTrackingStorageByProductId,
    set: setTrackingStorage,
    remove: removeTrackingStorage,
  };
}
