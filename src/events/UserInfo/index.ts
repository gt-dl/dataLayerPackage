import { sendEventToDataLayer } from "../Common";
import { UserInfoProps } from "./types";
import { PREFIX_ } from "../../constants";

export function sendUserInfoEventToDataLayer(userInfo: UserInfoProps) {
  sendEventToDataLayer<UserInfoProps>({
      event: `${PREFIX_}user_info`,
      ...userInfo
  })
}