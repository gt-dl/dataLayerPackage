import type { TrackingStorageProps } from "./types";

export function getAllTrackingStorage() {
  if (typeof window === 'undefined') return null;

  const trackingStorage = window.sessionStorage.getItem("tracking-storage");
  if (trackingStorage === null) return null;

  const trackingStorageObj: TrackingStorageProps = JSON.parse(trackingStorage);
  return trackingStorageObj;
}
