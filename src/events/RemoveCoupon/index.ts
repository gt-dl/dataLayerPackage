import { sendEventToDataLayer } from "../Common";
import { RemoveCouponProps } from "./types";

export function sendRemoveCouponEventToDataLayer(couponProps: RemoveCouponProps) {
    sendEventToDataLayer<RemoveCouponProps>({
        event: 'remove_cupom',
        ...couponProps
    })
}