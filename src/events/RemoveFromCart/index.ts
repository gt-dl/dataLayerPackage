import { sendEventToDataLayer } from "../Common";
import { RemoveFromCartProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendRemoveFromCartEventToDataLayer(ecommerce: RemoveFromCartProps) {
  sendEventToDataLayer<RemoveFromCartProps>({
    event: `${PREFIX_}remove_from_cart`,
    ...ecommerce
  })
}