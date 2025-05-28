import { sendEventToDataLayer } from "../Common";
import { BeginCheckoutProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendBeginCheckoutEventToDataLayer(ecommerce: BeginCheckoutProps) {
  sendEventToDataLayer<BeginCheckoutProps>({
    event: `${PREFIX_}begin_checkout`,
    ...ecommerce
  })
}