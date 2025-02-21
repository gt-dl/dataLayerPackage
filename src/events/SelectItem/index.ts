import { sendEventToDataLayer } from "../Common";
import { SelectItemProps } from "./types";

export function sendSelectItemEventToDataLayer(ecommerce: SelectItemProps) {
  sendEventToDataLayer<SelectItemProps>({
    event: 'select_item',
    ...ecommerce
  })
}