import { clearTracking } from './clearTracking';
import { getTrackingByProductId } from './getTrackingById';
import { removeTracking } from './removeTracking';
import { setTracking } from './setTracking';
import { UseTrackingProps } from './types';

export function useTracking(): UseTrackingProps {
  return {
    get: getTrackingByProductId,
    set: setTracking,
    remove: removeTracking,
    clear: clearTracking
  };
}
