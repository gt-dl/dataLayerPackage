import type { CurrencyName, Item, PaymentType } from "../Common/types"

export type PurchaseProps = {
  ecommerce: {
    transaction_id: string
    seller_coupon_name?: string
    sale_coupon_name?: string
    coupon_name?: string
    total_discount: number
    subtotal: number
    shipping: number
    currency: CurrencyName
    value: number
    payment_type: PaymentType
    items: Item[]
  }
}