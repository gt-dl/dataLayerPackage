import { sendEventToDataLayer } from "../Common";

/**
 * Essa função não exige parâmetros
 */
export function sendGenerateLeadEventToDataLayer() {
    sendEventToDataLayer({
        event: 'generate_lead'
    })
}