import { TrackingProps } from "../../types";
import type { AccountUrl, StoreId, TrackingStorageProps } from "./types";

export function getTrackingFromSessionStorage() {
  if (typeof window === 'undefined') return {};

  const trackingStorage = window.sessionStorage.getItem("tracking-storage");
  if (trackingStorage === null) return {};

  const trackingStorageObj: TrackingStorageProps = JSON.parse(trackingStorage);
  return trackingStorageObj;
}

export async function getTrackingFromOrderForm(
  orderFormId: string,
  accountUrl: AccountUrl
): Promise<TrackingStorageProps> {
  // pegar order form
  const endpoint = `${accountUrl}/api/checkout/pub/orderForm/${orderFormId}`;
  const orderForm = await fetch(endpoint)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Erro ao pegar orderForm:", error);
      return {};
    });

  const trackingFromOrderForm = orderForm?.customData?.customApps
    ?.find((app: { id: string }) => app.id === 'datalayer')
    ?.fields.tracking || {};

  return trackingFromOrderForm;
}

export function updateOrderFormTracking(
  storeId: StoreId,
  orderFormId: string,
  trackingData: string
) {
  const environment = 'vtexcommercestable';
  const appId = 'datalayer';
  const appFieldName = 'tracking';
  const baseUrl = `https://${storeId}.${environment}.com.br`;
  const path = `/api/checkout/pub/orderForm/${orderFormId}/customData/${appId}/${appFieldName}`;

  fetch(baseUrl + path, {
    method: 'PUT',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: trackingData })
  })
    .catch((error) => {
      console.error("Erro ao atualizar tracking:", error)
    });
}

export async function getMergedTrackingStorage(
  orderFormId: string,
  accountUrl: AccountUrl
) {
  const trackingFromSessionStorage = getTrackingFromSessionStorage();
  const trackingFromOrderForm = await getTrackingFromOrderForm(
    orderFormId,
    accountUrl
  );

  const trackingMerged: TrackingStorageProps = mergeObjects(
    trackingFromSessionStorage,
    trackingFromOrderForm
  )

  return trackingMerged;
}