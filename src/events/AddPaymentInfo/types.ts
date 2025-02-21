import { CurrencyName, Item, PaymentType } from "../Common/types"

export type AddPaymentInfoProps = {
  ecommerce: {
    currency: CurrencyName
    total_discount: number
    subtotal: number
    seller_coupon_name?: string
    sale_coupon_name?: string
    value: number
    pre_filled: boolean
    payment_type: PaymentType
    items: Item[]
  }
}