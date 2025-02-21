import { DataLayerEventObject } from "./types";

declare global {
    interface Window {
        dataLayer: any[];
    }
}

export function sendEventToDataLayer<EventTypeProps extends object>(
    event: DataLayerEventObject & EventTypeProps
) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
}
