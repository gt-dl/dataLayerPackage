import { sendEventToDataLayer } from "../Common";
import { PageInfoProps } from "./types";

/**
 * @param pageInfo Objeto com informações da página
 * @param pageInfo.region Página atual
 * @param pageInfo.page_category Igual à propriedade "region", mas quando for PDC informar o nome dela em vez de "PDC"
 * @param pageInfo.page_departament
 * @param pageInfo.vtex_version "fast" ou "legado"
 */
export function sendPageInfoEventToDataLayer(pageInfo: PageInfoProps) {
  sendEventToDataLayer<PageInfoProps>({
    event: 'page_info',
    ...pageInfo
  })
}
