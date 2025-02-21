import { sendEventToDataLayer } from "../Common";
import type { ErrorEventProps, ErrorParamsProps } from "./types";

export function sendErrorEventToDataLayer(errorProps: ErrorParamsProps) {
  sendEventToDataLayer<ErrorEventProps>({
    event: `error_${errorProps.error_name}`,
    error_message: errorProps.error_message
  })
}