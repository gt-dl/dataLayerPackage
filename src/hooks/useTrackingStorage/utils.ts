import type { TrackingStorageProps } from "./types";

export function getAllTrackingFromSessionStorage() {
  if (typeof window === 'undefined') return {};

  const tracking = window.sessionStorage.getItem("tracking-storage");
  if (tracking === null) return {};

  const trackingObj: TrackingStorageProps = JSON.parse(tracking);
  return trackingObj;
}
