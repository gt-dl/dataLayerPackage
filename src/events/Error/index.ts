import { sendEventToDataLayer } from "../Common";
import type { ErrorEventProps, ErrorParamsProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendErrorEventToDataLayer(errorProps: ErrorParamsProps) {
  sendEventToDataLayer<ErrorEventProps>({
    event: `${PREFIX_}error_${errorProps.error_name}`,
    error_message: errorProps.error_message
  })
}