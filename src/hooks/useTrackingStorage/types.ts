import { CreativeName } from "../../events/Common/types";

export type TrackingProps = {
  index?: number
  creative_name?: CreativeName
  creative_slot?: string
  item_list_id?: string
  item_list_name?: string
  promotion_id?: string
  promotion_name?: string
};

export type TrackingStorageProps = Record<string, TrackingProps>;

/**
 * Tracking data storage example:
 * 
 * O objeto temp salva os dados conforme o usuário navega.
 * Serve para quando ainda não sabemos de qual produto são aqueles dados.
 * Os outros objetos (id 123, 456...) são os dados de produtos específicos.
 * 
 * {
 *   temp: {
 *     index: 0,
 *     creative_name: '',
 *     creative_slot: '',
 *     item_list_id: '',
 *     item_list_name: '',
 *     promotion_id: '',
 *     promotion_name:  '',
 *   },
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
 *   }
 * }
 */
