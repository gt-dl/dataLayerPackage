import { TrackingProductProps } from '../../hooks/useTracking/types';
import { PREFIX_ } from '../../constants'

export type EventTypes =
  | `${typeof PREFIX_}filter`
  | `${typeof PREFIX_}pageview`
  | `${typeof PREFIX_}click`
  | `${typeof PREFIX_}purchase`
  | `${typeof PREFIX_}sign_up`
  | `${typeof PREFIX_}login`
  | `${typeof PREFIX_}search_zipcode`
  | `${typeof PREFIX_}notify_me`
  | `${typeof PREFIX_}generate_lead`
  | `${typeof PREFIX_}share`
  | `${typeof PREFIX_}select_content`
  | `${typeof PREFIX_}view_item`
  | `${typeof PREFIX_}view_cart`
  | `${typeof PREFIX_}page_info`
  | `${typeof PREFIX_}view_item_list`
  | `${typeof PREFIX_}user_info`
  | `${typeof PREFIX_}view_promotion`
  | `${typeof PREFIX_}view_search_results`
  | `${typeof PREFIX_}error_${string}`
  | `${typeof PREFIX_}select_item`
  | `${typeof PREFIX_}select_promotion`
  | `${typeof PREFIX_}add_coupon`
  | `${typeof PREFIX_}add_to_cart`
  | `${typeof PREFIX_}add_to_wishlist`
  | `${typeof PREFIX_}begin_checkout`
  | `${typeof PREFIX_}cancel_order`
  | `${typeof PREFIX_}add_shipping_info`
  | `${typeof PREFIX_}remove_cupom`
  | `${typeof PREFIX_}remove_from_cart`
  | `${typeof PREFIX_}payment_method_added`
  | `${typeof PREFIX_}video_loop_start`
  | `${typeof PREFIX_}add_payment_info`
  | `${typeof PREFIX_}auth_action`

export type DataLayerEventObject = {
  event: EventTypes;
};

export type CurrencyName = 'BRL';
export type ItemCategoryName = 'Coleção' | 'Sale';
export type CreativeName = 'banner' | 'carrossel' | 'stories' | 'reloginho';

export type ShippingTierName =
  | 'Receba em casa: normal'
  | 'Receba em casa: rápida'
  | 'Retire na loja: normal'
  | 'Retire na loja: rápida';

export type Item = {
  item_id: string;
  item_sku: string;
  item_ref: string;
  item_name: string;
  item_brand: string;
  item_category: ItemCategoryName;
  item_category2: string;
  item_variant: string;
  item_variant2: string;
  item_currency: CurrencyName;
  item_shipping_tier?: ShippingTierName;
  price: number;
  discount: number;
  quantity: number;
} & TrackingProductProps;

export type PaymentType =
  | 'Pix à vista'
  | 'Pix parcelado'
  | 'Cartão de crédito'
  | 'Boleto'
  | 'Google Pay'
  | 'Gift card'
  | '';

export type CouponTypeName = 'Cupom' | 'Código de vendedor';
