import { sendEventToDataLayer } from "../Common";
import { PaymentMethodAddedProps } from "./types";

export function sendPaymentMethodAddedEventToDataLayer(paymentMethodAddedProps: PaymentMethodAddedProps) {
  sendEventToDataLayer<PaymentMethodAddedProps>({
    event: 'payment_method_added',
    ...paymentMethodAddedProps
  })
}