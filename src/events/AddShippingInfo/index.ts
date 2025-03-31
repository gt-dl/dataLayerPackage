import { sendEventToDataLayer } from '../Common';
import type { AddShippingInfoProps } from './types';

/**
 * Colocar explicação dos params
 * @param ecommerce Objeto com dados do evento
 * @param ecommerce.currency Moedas dos produtos no checkout
 * @param ecommerce.pre_filled Se a etapa de endereço de entrega do checkout foi preenchida automaticamente ou não. A princípio será sempre false, porque esse evento só dispara após preencher manualmente os dados e clicar no botão avançar, logo a etapa de endereço nunca estará pré preenchida. Se estiver pré preenchida, os campos e o botão não aparecem e o evento não dispara
 * @param ecommerce.shipping Valor total do frete
 * @param ecommerce.subtotal Soma de todos os prices
 * @param ecommerce.total_discount Total de desconto aplicado nos itens
 * @param ecommerce.value Valor total do carrinho (subtotal + frete)
 * @param ecommerce.sale_coupon_name Nome do cupom de desconto
 * @param ecommerce.seller_coupon_name Nome do código de vendedor
 * @param ecommerce.items[] Array de produtos no checkout
 * @param ecommerce.items[] Array com produtos comprados
 * @param ecommerce.items[].item_id ID do produto na VTEX
 * @param ecommerce.items[].item_sku SKU do produto
 * @param ecommerce.items[].item_ref Referência do produto
 * @param ecommerce.items[].item_name Nome do produto
 * @param ecommerce.items[].item_brand Marca do produto
 * @param ecommerce.items[].item_category "Coleção" ou "Sale"
 * @param ecommerce.items[].item_category2 Segunda categoria do produto, ex.: "vestido", "calça", "camisa"
 * @param ecommerce.items[].item_list_name Nome da lista onde o usuário clicou antes de adicionar esse produto ao carrinho. Por lista entendemos: carrossel de produtos da home, recomendações de produto da PDP, recomendações de produto do minicart, outras recomendações de produto.
 * @param ecommerce.items[].item_list_id ID da lista onde o usuário clicou antes de adicionar esse produto ao carrinho. Por lista entendemos: carrossel de produtos da home, recomendações de produto da PDP, recomendações de produto do minicart, outras recomendações de produto. Ainda não temos definido o que é esse ID.
 * @param ecommerce.items[].item_variant Cor do produto
 * @param ecommerce.items[].item_variant2 Tamanho do produto
 * @param ecommerce.items[].item_currency Moeda do preço do produto
 * @param ecommerce.items[].item_shipping_tier Tipo de envio do produto (o dado está tipado)
 * @param ecommerce.items[].creative_name Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ("banner", "carrossel", "stories", "reloginho")
 * @param ecommerce.items[].creative_slot Identificador do criativo que trouxe o usuário para esse produto, e o índice do banner clicado separados por dois pontos. Ex.: "carrossel-home:2" É um carrossel da home, onde o segundo slide dele foi clicado
 * @param ecommerce.items[].promotion_id URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param ecommerce.items[].promotion_name Texto principal (CTA) presente dentro do componente (o mesmo componente de creative_name)
 * @param ecommerce.items[].index Posição do produto na lista em que ele estava quando foi clicado ou adicionado ao carrinho
 * @param ecommerce.items[].price Preço cheio do produto sem desconto aplicado
 * @param ecommerce.items[].discount Desconto do produto. Exemplo, de R$ 1298 por R$ 1198, o discount é 100. Sem desconto, informar 0
 * @param ecommerce.items[].quantity Quantidade desse produto no carrinho
 */
export function sendAddShippingInfoToDataLayer(
  ecommerce: AddShippingInfoProps
) {
  sendEventToDataLayer<AddShippingInfoProps>({
    event: 'add_shipping_info',
    ...ecommerce,
  });
}
