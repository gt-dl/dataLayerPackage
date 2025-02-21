import { sendEventToDataLayer } from "../Common";
import { VideoLoopStartProps } from "./types";

export function sendVideoLoopStartEventToDataLayer(
  videoLoopStartProps: VideoLoopStartProps
) {
  sendEventToDataLayer<VideoLoopStartProps>({
    event: 'video_loop_start',
    ...videoLoopStartProps
  })
}