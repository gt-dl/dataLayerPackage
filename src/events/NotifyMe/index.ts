import { sendEventToDataLayer } from "../Common";
import { NotifyMeProps } from "./types";

/**
 * @param notifyMeProps Objeto com as propriedade do evento
 * @param notifyMeProps.size Tamanho do produto que o usuário quer ser informado quando chegar
 * @param notifyMeProps.color Cor do produto que o usuário quer ser informado quando chegar
 * @param notifyMeProps.item_id ID do produto
 */
export function sendNotifyMeEventToDataLayer(notifyMeProps: NotifyMeProps) {
    sendEventToDataLayer<NotifyMeProps>({
        event: 'notify_me',
        ...notifyMeProps
    })
}