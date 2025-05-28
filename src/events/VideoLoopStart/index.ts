import { sendEventToDataLayer } from "../Common";
import { VideoLoopStartProps } from "./types";
import { PREFIX_ } from "../../constants";

/**
 * @param videoLoopStartProps Objeto com informações da página
 * @param videoLoopStartProps.video_title Nome do produto
 */
export function sendVideoLoopStartEventToDataLayer(
  videoLoopStartProps: VideoLoopStartProps
) {
  sendEventToDataLayer<VideoLoopStartProps>({
    event: `${PREFIX_}video_loop_start`,
    ...videoLoopStartProps
  })
}