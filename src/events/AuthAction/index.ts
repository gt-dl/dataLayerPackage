import { sendEventToDataLayer } from '../Common';
import { AuthActionProps } from './types';
import { PREFIX_ } from "../../constants";

export function sendAuthActionEventToDatalayer(type: AuthActionProps) {
  sendEventToDataLayer<AuthActionProps>({
    event: `${PREFIX_}auth_action`,
    ...type,
  });
}
