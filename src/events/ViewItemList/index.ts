import { sendEventToDataLayer } from "../Common";
import { ViewItemListProps } from "./types"

export function sendViewItemListEventToDataLayer(ecommerce: ViewItemListProps) {
  sendEventToDataLayer<ViewItemListProps>({
      event: 'view_item_list',
      ...ecommerce
  })
}