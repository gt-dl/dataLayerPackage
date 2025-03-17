import type { CurrencyName, ShippingTierName } from "../../types"

export type Shipping = {
    shipping_tier: ShippingTierName
    shipping: number
    delivery_time: number
    flag_pickup: boolean
    currency: CurrencyName
}

export type ZipCodeSearchProps = {
    shippings: Shipping[]
}