import type { TrackingStorageProps } from './types';

export function getAllTracking() {
  if (typeof window === 'undefined') return {};

  const cookies = window.document.cookie
    .split('; ')
    .reduce((acc: Record<string, string>, cookie) => {
      const [name, ...rest] = cookie.split('=');
      const value = rest.join('=');
      acc[decodeURIComponent(name)] = decodeURIComponent(value);
      return acc;
    }, {});

  const tracking = cookies['tracking-storage'];

  const trackingObj: TrackingStorageProps = JSON.parse(tracking);
  return trackingObj;
}

export function setCookie(key: string | 'tracking-storage', value: string) {
  if (typeof window === 'undefined') return;

  const expirationDays = 7;
  const expiresDate = new Date();

  expiresDate.setTime(
    expiresDate.getTime() + expirationDays * 24 * 60 * 60 * 1000
  );

  const domain = window.location.hostname
    .replace(/\//g, '')
    .replace('www.', '');

  const cookie = encodeURIComponent(key)
    .concat('=')
    .concat(encodeURIComponent(value))
    .concat(`; expires=${expiresDate.toUTCString()}`)
    .concat(`; path=/`)
    .concat(`; domain=${domain}`)
    .concat(`; secure`)
    .concat(`; samesite=Lax`);

  document.cookie = cookie;
}

export function removeProps<
  ObjType extends Record<any, any>,
  PropsToRemoveType extends keyof ObjType
>(
  obj: ObjType,
  propsToRemove: PropsToRemoveType[]
): Omit<ObjType, PropsToRemoveType> {
  const result = { ...obj };
  
  propsToRemove.forEach(prop => {
    delete result[prop];
  });

  return result;
}