import { sendEventToDataLayer } from "../Common";
import { PaymentMethodAddedProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendPaymentMethodAddedEventToDataLayer(paymentMethodAddedProps: PaymentMethodAddedProps) {
  sendEventToDataLayer<PaymentMethodAddedProps>({
    event: `${PREFIX_}payment_method_added`,
    ...paymentMethodAddedProps
  })
}