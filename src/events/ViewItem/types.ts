import type { CurrencyName, Item } from "../Common/types"

export type ViewItemProps = {
  ecommerce: {
    currency: CurrencyName
    value: number
    available_grid: string
    items: Item[]
  }
}