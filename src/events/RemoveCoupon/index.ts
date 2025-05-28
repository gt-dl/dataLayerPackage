import { sendEventToDataLayer } from "../Common";
import { RemoveCouponProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendRemoveCouponEventToDataLayer(couponProps: RemoveCouponProps) {
    sendEventToDataLayer<RemoveCouponProps>({
        event: `${PREFIX_}remove_cupom`,
        ...couponProps
    })
}