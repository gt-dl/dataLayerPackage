import { sendEventToDataLayer } from "../Common";
import type { ZipCodeSearchProps } from "./types";

/**
 * @param shippings Array de objeto contendo informação de cada shipping
 * @param shippings[].shipping_tier Tipo de envio: "Express", etc
 * @param shippings[].shipping Valor do frete
 * @param shippings[].delivery_time Dias até a entrega do produto
 * @param shippings[].flag_pickup Se o produto pode ou não ser retirado  nas lojas próximas ao CEP
 * @param shippings[].currency Moeda dos produtos
 */
export function sendZipCodeSearchEventToDataLayer(
    shippings: ZipCodeSearchProps
) {
    sendEventToDataLayer<ZipCodeSearchProps>({
        event: 'search_zipcode',
        ...shippings
    })
}