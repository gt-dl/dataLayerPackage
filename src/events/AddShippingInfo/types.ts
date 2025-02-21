import type { CurrencyName, Item } from "../Common/types"

export type AddShippingInfoProps = {
  ecommerce: {
    shipping: number
    currency: CurrencyName
    total_discount: number
    subtotal: number
    seller_coupon_name?: string
    sale_coupon_name?: string
    value: number
    pre_filled: boolean
    items: Item[]
  }
}
