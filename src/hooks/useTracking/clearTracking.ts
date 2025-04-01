import { setCookie } from "./utils";

export function clearTracking() {
  setCookie('tracking', '{}');
}