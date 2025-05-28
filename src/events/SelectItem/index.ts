import { sendEventToDataLayer } from "../Common";
import { SelectItemProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendSelectItemEventToDataLayer(ecommerce: SelectItemProps) {
  sendEventToDataLayer<SelectItemProps>({
    event: `${PREFIX_}select_item`,
    ...ecommerce
  })
}