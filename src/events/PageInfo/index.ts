import { sendEventToDataLayer } from "../Common";
import { PageInfoProps } from "./types";
import { PREFIX_ } from "../../constants";

/**
 * @param pageInfo Objeto com informações da página
 * @param pageInfo.region Página atual
 * @param pageInfo.page_category Se for PDC, é o nome das categorias dessa PDC separados por vírgula. Se for página institucional, é o nome dessa página, Caso contrário, e igual à propriedade "region"
 * @param pageInfo.page_departament Igual à propriedade "region"
 * @param pageInfo.vtex_version "fast" ou "legado"
 */
export function sendPageInfoEventToDataLayer(pageInfo: PageInfoProps) {
  sendEventToDataLayer<PageInfoProps>({
    event: `${PREFIX_}page_info`,
    ...pageInfo
  })
}
