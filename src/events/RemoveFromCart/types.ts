import { CurrencyName, Item } from "../Common/types"

export type RemoveFromCartProps = {
  ecommerce: {
    currency: CurrencyName
    value: number
    available_grid: string
    items: Item[]
  }
}