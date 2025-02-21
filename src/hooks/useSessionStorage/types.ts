import { CreativeName } from "../../events/Common/types";

export type ProductProps = {
    index?: number;
    creative_name?: CreativeName;
    creative_slot?: string;
    item_list_id?: string;
    item_list_name?: string;
    promotion_id?: string;
    promotion_name?: string;
}

export type ProductId = string

export type SessionStorageProps = Record<ProductId, ProductProps>

/**
 * Product data session storage example:
 * 
 * {
 *   123: {
 *     index: 0,
 *     creative_name: '',
 *     creative_slot: '',
 *     item_list_id: '',
 *     item_list_name: '',
 *     promotion_id: '',
 *     promotion_name:  '',
 *   },
 *   456: {
 *     index: 0,
 *     creative_name: '',
 *     creative_slot: '',
 *     item_list_id: '',
 *     item_list_name: '',
 *     promotion_id: '',
 *     promotion_name:  '',
 *   },
 * }
 */