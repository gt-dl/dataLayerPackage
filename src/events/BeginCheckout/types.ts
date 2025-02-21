import { CurrencyName, Item } from "../Common/types"

export type BeginCheckoutProps = {
  ecommerce: {
    currency: CurrencyName
    value: number
    total_discount: number
    subtotal: number
    seller_cupom_name?: string
    sale_cupom_name?: string
    items: Item[]
  }
}