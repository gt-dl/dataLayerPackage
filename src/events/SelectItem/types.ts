import { Item } from "../Common/types"

export type SelectItemProps = {
  ecommerce: {
    item_list_id?: string
    item_list_name: string
    items: Item[]
  }
}