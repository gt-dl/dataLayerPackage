import { sendEventToDataLayer } from "../Common";
import { FilterProps } from "./types";

export function sendFilterEventToDataLayer(filterProps: FilterProps) {
    sendEventToDataLayer<FilterProps>({
        event: 'filtro',
        ...filterProps
    })
}