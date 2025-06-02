import { sendEventToDataLayer } from "../Common";
import { CancelOrderProps } from "./types";
import { PREFIX_ } from "../../constants";

/**
 * @param cancelOrder Objeto com informações do evento
 * @param cancelOrder.transaction_id ID do pedido que está sendo cancelado
 */
export function sendCancelOrderEventToDataLayer(cancelOrder: CancelOrderProps) {
  sendEventToDataLayer<CancelOrderProps>({
    event: `${PREFIX_}cancel_order`,
    ...cancelOrder
  })
}