import { sendEventToDataLayer } from "../Common";
import type { SelectPromotionProps } from "./types";

/**
 * @param ecommerce Objecto com informações da promoção
 * @param ecommerce.creative_name Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ("banner", "carrossel", "stories")
 * @param ecommerce.creative_slot Identificador do criativo que trouxe o usuário para esse produto, e o índice do banner clicado separados por dois pontos. Ex.: "carrossel-home:2" É um carrossel da home, onde o segundo slide dele foi clicado
 * @param ecommerce.promotion_id URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param ecommerce.promotion_name Texto principal (CTA) presente dentro do componente (o mesmo componente de creative_name)
 */
export function sendSelectPromotionEventToDataLayer(ecommerce: SelectPromotionProps) {
  sendEventToDataLayer<SelectPromotionProps>({
    event: 'select_promotion',
    ...ecommerce
  })
}