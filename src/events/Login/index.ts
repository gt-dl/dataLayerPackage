import { sendEventToDataLayer } from "../Common";
import { LoginProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendLoginEventToDataLayer(method: LoginProps) {
    sendEventToDataLayer<LoginProps>({
        event: `${PREFIX_}login`,
        ...method
    })
}