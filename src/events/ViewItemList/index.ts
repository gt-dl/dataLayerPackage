import { sendEventToDataLayer } from "../Common";
import { ViewItemListProps } from "./types"
import { PREFIX_ } from "../../constants";

export function sendViewItemListEventToDataLayer(ecommerce: ViewItemListProps) {
  sendEventToDataLayer<ViewItemListProps>({
      event: `${PREFIX_}view_item_list`,
      ...ecommerce
  })
}