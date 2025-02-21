import { sendEventToDataLayer } from "../Common";
import { ShareProps } from "./types";

/**
 * O evento de share possui um parâmetro chamado "local". Ele representa a página onde o usuário está ao compartilhar o produto. No momento isso só dispara na PDP, então o parâmetro é opcional com valor default "PDP"
 * @param shareProps Objeto com as propriedades do evento
 * @param shareProps.local Página ou componente de onde o usuário compartilhou
 * @param shareProps.content_type Nome do produto
 * @param shareProps.item_item ID do produto
 */
export function sendShareEventToDataLayer(shareProps: ShareProps) {
    sendEventToDataLayer<ShareProps>({
        event: 'share',
        ...shareProps
    })
}