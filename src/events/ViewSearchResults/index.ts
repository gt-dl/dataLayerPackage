import { sendEventToDataLayer } from "../Common";
import type { ViewSearchResultsProps } from "./types";

export function sendViewSearchResultsEventToDataLayer(searchProps: ViewSearchResultsProps) {
  sendEventToDataLayer<ViewSearchResultsProps>({
    event: 'view_search_results',
    ...searchProps
  })
}