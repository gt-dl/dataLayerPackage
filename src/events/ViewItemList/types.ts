import { Item } from '../Common/types'

/**
 * @param ecommerce Objeto com dados do evento
 * @param ecommerce.item_list_name Nome da lista onde o usuário clicou antes de adicionar esse produto ao carrinho. Por lista entendemos: carrossel de produtos da home, recomendações de produto da PDP, recomendações de produto do minicart, outras recomendações de produto.
 * @param ecommerce.item_list_id ID da lista onde o usuário clicou antes de adicionar esse produto ao carrinho. Por lista entendemos: carrossel de produtos da home, recomendações de produto da PDP, recomendações de produto do minicart, outras recomendações de produto. Ainda não temos definido o que é esse ID.
 * @param category_name Não está presente na doc, por enquanto não precisa enviar esse dado
 */
export type ViewItemListProps = {
  ecommerce: {
    item_list_name: string
    item_list_id: string
    category_name?: string
    items: Item[]
  }
}