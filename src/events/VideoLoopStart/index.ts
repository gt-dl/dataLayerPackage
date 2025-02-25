import { sendEventToDataLayer } from "../Common";
import { VideoLoopStartProps } from "./types";

/**
 * @param videoLoopStartProps Objeto com informações da página
 * @param videoLoopStartProps.video_title Nome do produto
 */
export function sendVideoLoopStartEventToDataLayer(
  videoLoopStartProps: VideoLoopStartProps
) {
  sendEventToDataLayer<VideoLoopStartProps>({
    event: 'video_loop_start',
    ...videoLoopStartProps
  })
}