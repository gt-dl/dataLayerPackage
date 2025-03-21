import { getTrackingStorageByProductId } from "./getTrackingStorageById";
import { setTrackingStorage } from "./setTrackingStorage";

export function useTrackingStorage() {
  return {
    get: getTrackingStorageByProductId,
    set: setTrackingStorage,
  };
}