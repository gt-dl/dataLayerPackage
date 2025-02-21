import { sendEventToDataLayer } from "../Common";
import { CancelOrderProps } from "./types";

export function sendCancelOrderEventToDataLayer(cancelOrder: CancelOrderProps) {
  sendEventToDataLayer<CancelOrderProps>({
    event: 'cancel_order',
    ...cancelOrder
  })
}