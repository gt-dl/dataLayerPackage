import { sendEventToDataLayer } from "../Common";
import { BeginCheckoutProps } from "./types";

export function sendBeginCheckoutEventToDataLayer(ecommerce: BeginCheckoutProps) {
  sendEventToDataLayer<BeginCheckoutProps>({
    event: 'begin_checkout',
    ...ecommerce
  })
}