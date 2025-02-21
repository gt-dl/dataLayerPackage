import { sendEventToDataLayer } from "../Common";
import { RemoveFromCartProps } from "./types";

export function sendRemoveFromCartEventToDataLayer(ecommerce: RemoveFromCartProps) {
  sendEventToDataLayer<RemoveFromCartProps>({
    event: 'remove_from_cart',
    ...ecommerce
  })
}