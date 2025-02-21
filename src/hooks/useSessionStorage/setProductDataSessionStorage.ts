import type { ProductId, ProductProps, SessionStorageProps } from "./types"
import { getAllProductDataFromSessionStorage } from "./utils"

/**
 * @param productId ID do produto que quer salvar os dados
 * @param productData Objeto com os dados desse produto
 * @param productData.key Chave do dado ("index", "creative_name", "creative_slot", "item_list_id", "item_list_name", "promotion_id" ou "promotion_name")
 * @param productData.value Valor do dado a ser salvo (cada chave exige um tipo de dado diferente, confirmar no autocomplete do Typescript ou importar o type ProductProps)
 * @param productData.value.index Posição do produto na lista em que ele estava quando foi clicado ou adicionado ao carrinho
 * @param productData.value.creative_name Tipo de componente em que o usuário clicou antes de adicionar esse produto ao carrinho ("banner", "carrossel", "stories")
 * @param productData.value.creative_slot Identificador do criativo que trouxe o usuário para esse produto. Ex.: "carrossel-home:3:2" É um carrossel da home, o terceiro da página, o segundo slide dele
 * @param productData.value.item_list_id ID da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param productData.value.item_list_name Nome da PDC onde o usuário clicou antes de adicionar esse produto ao carrinho
 * @param productData.value.promotion_id URL para onde o componente clicado aponta (o mesmo componente de creative_name)
 * @param productData.value.promotion_name Texto principal presente dentro do componente (o mesmo componente de creative_name)
 */
export function setProductDataSessionStorage(
  productId: ProductId,
  productData: ProductProps
) {
  const currentProductDataSessionStorage = getAllProductDataFromSessionStorage() || {}

  const currentProduct = currentProductDataSessionStorage.hasOwnProperty(productId)
    ? currentProductDataSessionStorage[productId]
    : {}

  const newProductDataSessionStorage: SessionStorageProps = {
      ...currentProductDataSessionStorage,
      [productId]: {
          ...currentProduct,
          ...productData,
      }
  }

  window.sessionStorage.setItem('datalayerpackage', JSON.stringify(newProductDataSessionStorage))
}