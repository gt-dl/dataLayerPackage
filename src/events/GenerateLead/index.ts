import { sendEventToDataLayer } from "../Common";
import { PREFIX_ } from "../../constants";

/**
 * Essa função não exige parâmetros
 */
export function sendGenerateLeadEventToDataLayer() {
    sendEventToDataLayer({
        event: `${PREFIX_}generate_lead`
    })
}