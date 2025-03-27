import { AccountUrl, StoreId, TrackingStorageProps } from "./types";
import { getAllTrackingFromSessionStorage } from "./utils";

function mergeObjects({
  sessionStorageObject,
  orderFormObject,
}: {
  sessionStorageObject: TrackingStorageProps;
  orderFormObject: TrackingStorageProps;
}) {
  const merged: TrackingStorageProps = {};

  const keys = [ ...new Set([
    ...Object.keys(sessionStorageObject),
    ...Object.keys(orderFormObject),
  ])];

  keys.forEach(key => {
    merged[key] = Object.assign(
      orderFormObject[key] || {},
      sessionStorageObject[key] || {}
    );
  });

  return merged;
}

async function getAllTrackingFromOrderForm(
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

/**
 * Deve disparar no load de cada página. Pega tracking de ambas fontes, faz merge, e envia apenas ao order form. O session storage já é atualizado durante a interação do usuário
 * 
 * @param storeId ID da loja. Ex.: "{storeId}.vtexcommercestable.com.br"
 * @param accountUrl URL do checkout da loja. Ex.: "https://secure.animale.com.br"
 * @param orderFormId ID do orderForm. Se não for passado, será salvo apenas nos dados temporários e não no orderForm 
 */
export async function syncTrackingStorage(
  storeId: StoreId,
  accountUrl: AccountUrl,
  orderFormId: string
) {
  const trackingFromSessionStorage = getAllTrackingFromSessionStorage();
  const trackingFromOrderForm = await getAllTrackingFromOrderForm(orderFormId, accountUrl);

  const trackingMerged: TrackingStorageProps = mergeObjects({
    sessionStorageObject: trackingFromSessionStorage,
    orderFormObject: trackingFromOrderForm
  })

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
    body: JSON.stringify({ value: JSON.stringify(trackingMerged) })
  })
    .catch((error) => {
      console.error("Erro ao atualizar tracking:", error)
    });
}