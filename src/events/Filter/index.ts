import { sendEventToDataLayer } from "../Common";
import { FilterProps } from "./types";
import { PREFIX_ } from "../../constants";

/**
 * @param filterProps - Objeto com as propriedades do filtro
 * @returns void
 * @description Envia um evento de filtro para o dataLayer
 * @example
 * sendFilterEventToDataLayer({
 *    color: 'red'
 * })
 * // Irá disparar um evento de filtro com os parâmetros { event: 'filter', color: 'red' }
 */

export function sendFilterEventToDataLayer(filterProps: FilterProps) {
    sendEventToDataLayer<FilterProps>({
        event: `${PREFIX_}filter`,
        ...filterProps
    })
}