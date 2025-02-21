import { sendEventToDataLayer } from "../Common";
import { AddToWishlistProps } from "./types";

export function sendAddToWishlistEventToDataLayer(ecommerce: AddToWishlistProps) {
  sendEventToDataLayer<AddToWishlistProps>({
    event: 'add_to_wishlist',
    ...ecommerce
  })
}