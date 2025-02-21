import { sendEventToDataLayer } from "../Common";
import { AddToCartProps } from "./types";

export function sendAddToCartEventToDataLayer(ecommerce: AddToCartProps) {
  sendEventToDataLayer({
    event: 'add_to_cart',
    ...ecommerce
  })
}