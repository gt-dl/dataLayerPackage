import { Item } from '../Common/types'

export type ViewItemListProps = {
  ecommerce: {
    item_list_name: string
    item_list_id: string
    category_name?: string
    items: Item[]
  }
}