import { CurrencyName, Item } from "../Common/types"

export type ViewCartProps = {
    ecommerce: {
        seller_coupon_name?: string
        sale_coupon_name?: string
        zipcode_filled: boolean
        currency: CurrencyName
        subtotal: number
        total_discount: number
        value: number
        items: Item[]
    }
}
