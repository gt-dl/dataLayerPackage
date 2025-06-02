import { sendEventToDataLayer } from "../Common";
import { AddCouponProps } from "./types";
import { PREFIX_ } from "../../constants";
import { DataLayerEventObject } from "../Common/types";

export function sendAddCouponEventToDataLayer(ecommerce: AddCouponProps) {
    sendEventToDataLayer<AddCouponProps>({
        event: `${PREFIX_}add_coupon`,
        ...ecommerce
    })
}

export const addCoupon = (): DataLayerEventObject => ({
    event: `${PREFIX_}add_coupon`,
});