import { sendEventToDataLayer } from "../Common";
import { SignUpProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendSignUpEventToDataLayer(signUpProps: SignUpProps) {
  sendEventToDataLayer<SignUpProps>({
      event: `${PREFIX_}sign_up`,
      ...signUpProps
  })
}