import { sendEventToDataLayer } from "../Common";
import { LoginProps } from "./types";

export function sendLoginEventToDataLayer(method: LoginProps) {
    sendEventToDataLayer<LoginProps>({
        event: 'login',
        ...method
    })
}