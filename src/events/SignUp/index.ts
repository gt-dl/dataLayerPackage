import { sendEventToDataLayer } from "../Common";
import { SignUpProps } from "./types";

export function sendSignUpEventToDataLayer(signUpProps: SignUpProps) {
  sendEventToDataLayer<SignUpProps>({
      event: 'sign_up',
      ...signUpProps
  })
}