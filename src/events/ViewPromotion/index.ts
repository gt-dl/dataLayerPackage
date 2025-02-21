import { sendEventToDataLayer } from "../Common";
import type { ViewPromotionProps } from "./types";

/**
 * @param ecommerce Objecto com informações da promoção
 * @param ecommerce.creative_name Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ("banner", "carrossel", "stories")
 * @param ecommerce.creative_slot Identificador do criativo que trouxe o usuário para esse produto. Ex.: "carrossel-home:3:2" É um carrossel da home, o terceiro da página, o segundo slide dele
 * @param ecommerce.promotion_id URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param ecommerce.promotion_name Texto principal presente dentro do componente (o mesmo componente de creative_name)
 */
export function sendViewPromotionEventToDataLayer(ecommerce: ViewPromotionProps) {
  sendEventToDataLayer<ViewPromotionProps>({
    event: 'view_promotion',
    ...ecommerce
  })
}