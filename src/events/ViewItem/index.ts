import { sendEventToDataLayer } from "../Common";
import type { ViewItemProps } from "./types";

export function sendViewItemEventToDataLayer(ecommerce: ViewItemProps) {
  sendEventToDataLayer<ViewItemProps>({
    event: 'view_item',
    ...ecommerce
  })
}