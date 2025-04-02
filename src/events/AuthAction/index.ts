import { sendEventToDataLayer } from '../Common';
import { AuthActionProps } from './types';

export function sendAuthActionEventToDatalayer(type: AuthActionProps) {
  sendEventToDataLayer<AuthActionProps>({
    event: 'auth_action',
    ...type,
  });
}
