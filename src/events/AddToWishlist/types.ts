import type { CurrencyName, Item } from "../Common/types"

export type AddToWishlistProps = {
  ecommerce: {
    currency: CurrencyName
    value: number
    available_grid?: string
    items: Item[]
  }
}