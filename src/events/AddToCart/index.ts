import { sendEventToDataLayer } from "../Common";
import { AddToCartProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendAddToCartEventToDataLayer(ecommerce: AddToCartProps) {
  sendEventToDataLayer({
    event: `${PREFIX_}add_to_cart`,
    ...ecommerce
  })
}