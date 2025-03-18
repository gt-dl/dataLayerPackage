import { sendEventToDataLayer } from "../Common";
import { AddCouponProps } from "./types";

export function sendAddCouponEventToDataLayer(couponProps: AddCouponProps) {
    sendEventToDataLayer<AddCouponProps>({
        event: 'add_coupon',
        ...couponProps
    })
}