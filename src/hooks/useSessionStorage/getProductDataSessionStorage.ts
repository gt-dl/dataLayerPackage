import type { ProductId } from "./types"
import { getAllProductDataFromSessionStorage } from "./utils"

/**
 * @param productId ID do produto que se quer pegar os dados
 */
export function getProductDataSessionStorage(productId: ProductId) {
    const allProductData = getAllProductDataFromSessionStorage()
    if (allProductData === null) return null

    const productData = allProductData[productId]
    if (!productData) return null

    return productData
}