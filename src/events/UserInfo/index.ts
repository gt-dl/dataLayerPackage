import { sendEventToDataLayer } from "../Common";
import { UserInfoProps } from "./types";

export function sendUserInfoEventToDataLayer(userInfo: UserInfoProps) {
  sendEventToDataLayer<UserInfoProps>({
      event: 'user_info',
      ...userInfo
  })
}