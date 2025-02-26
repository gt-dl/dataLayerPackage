export type EventTypes =
    'filter'
    | 'pageview'
    | 'click'
    | 'purchase'
    | 'sign_up'
    | 'login'
    | 'buscar_cep'
    | 'notify_me'
    | 'generate_lead'
    | 'share'
    | 'select_content'
    | 'view_item'
    | 'view_cart'
    | 'page_info'
    | 'view_item_list'
    | 'user_info'
    | 'view_promotion'
    | 'view_search_results'
    | `error_${string}`
    | 'select_item'
    | 'select_promotion'
    | 'adicionar_cupom'
    | 'add_to_cart'
    | 'add_to_wishlist'
    | 'begin_checkout'
    | 'cancel_order'
    | 'add_shipping_info'
    | 'remove_cupom'
    | 'remove_from_cart'
    | 'payment_method_added'
    | 'video_loop_start'
    | 'add_payment_info'

export type DataLayerEventObject = {
    event: EventTypes
}

export type CurrencyName = 'BRL'
export type ItemCategoryName = 'Coleção' | 'Sale'
export type CreativeName =
    'carrossel'
    | 'reloginho'
    | 'stories'
    | 'banner'
    | 'lista'

export type ShippingTierName = 
    "Receba em casa: normal" 
    | "Receba em casa: rápida" 
    | "Retire na loja: normal" 
    | "Retire na loja: rápida"

export type Item = {
    item_id: string
    item_sku: string
    item_ref: string
    item_name: string
    item_brand: string
    item_category: ItemCategoryName
    item_category2: string
    item_variant: string
    item_variant2: string
    item_currency: CurrencyName
    item_shipping_tier?: ShippingTierName
    item_list_name?: string
    item_list_id?: string
    creative_name?: CreativeName
    creative_slot?: string
    promotion_id?: string
    promotion_name?: string
    index?: number
    price: number
    discount: number
    quantity: number
}

export type PaymentType = 'Pix' | 'Cartão de crédito' | 'Boleto'

export type CouponTypeName = 'Cupom' | 'Código de vendedor'