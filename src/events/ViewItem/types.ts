import type { CurrencyName, Item } from "../Common/types"

export type ViewItemProps = {
  ecommerce: {
    currency: CurrencyName
    value: number
    grade_disponivel: string
    items: Item[]
  }
}