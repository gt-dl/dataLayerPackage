import { sendEventToDataLayer } from "../Common";
import { AddToWishlistProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendAddToWishlistEventToDataLayer(ecommerce: AddToWishlistProps) {
  sendEventToDataLayer<AddToWishlistProps>({
    event: `${PREFIX_}add_to_wishlist`,
    ...ecommerce
  })
}