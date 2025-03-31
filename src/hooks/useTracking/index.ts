import { getTrackingByProductId } from './getTrackingById';
import { removeTracking } from './removeTracking';
import { setTracking } from './setTracking';

export function useTracking() {
  return {
    get: getTrackingByProductId,
    set: setTracking,
    remove: removeTracking,
  };
}
