import { sendEventToDataLayer } from "../Common";
import type { SelectPromotionProps } from "./types";

export function sendSelectPromotionEventToDataLayer(ecommerce: SelectPromotionProps) {
  sendEventToDataLayer<SelectPromotionProps>({
    event: 'select_promotion',
    ...ecommerce
  })
}