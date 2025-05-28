import { sendEventToDataLayer } from "../Common";
import type { ViewItemProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendViewItemEventToDataLayer(ecommerce: ViewItemProps) {
  sendEventToDataLayer<ViewItemProps>({
    event: `${PREFIX_}view_item`,
    ...ecommerce
  })
}