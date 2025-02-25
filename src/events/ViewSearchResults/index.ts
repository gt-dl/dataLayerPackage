import { sendEventToDataLayer } from "../Common";
import type { ViewSearchResultsProps } from "./types";

/**
 * @param searchProps Objeto com informações da página
 * @param searchProps.search_term Termo de busca
 * @param searchProps.search_found Se a busca retornou resultados
 */
export function sendViewSearchResultsEventToDataLayer(searchProps: ViewSearchResultsProps) {
  sendEventToDataLayer<ViewSearchResultsProps>({
    event: 'view_search_results',
    ...searchProps
  })
}