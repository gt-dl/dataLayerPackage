import { sendEventToDataLayer } from "../Common";
import type { ViewSearchResultsProps } from "./types";
import { PREFIX_ } from "../../constants";

/**
 * @param searchProps Objeto com informações da página
 * @param searchProps.search_term Termo de busca
 * @param searchProps.search_found Se a busca retornou resultados
 */
export function sendViewSearchResultsEventToDataLayer(searchProps: ViewSearchResultsProps) {
  sendEventToDataLayer<ViewSearchResultsProps>({
    event: `${PREFIX_}view_search_results`,
    ...searchProps
  })
}