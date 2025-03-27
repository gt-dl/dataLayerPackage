import { getTrackingStorageByProductId } from "./getTrackingStorageById";
import { setTrackingStorage } from "./setTrackingStorage";
import { syncTrackingStorage } from "./syncTrackingStorage";

export function useTrackingStorage() {
  return {
    get: getTrackingStorageByProductId,
    set: setTrackingStorage,
    sync: syncTrackingStorage,
  };
}