import { CreativeName } from "../../events/Common/types";

export type ProductId = string | 'temp';
export type TrackingType = 'banner' | 'list';

export type BannerTrackingProps = {
  promotion_name?: string;
  promotion_id?: string;
  creative_name?: CreativeName;
  creative_slot?: string;
};

export type ListTrackingProps = {
  index?: number;
  item_list_id?: string;
  item_list_name?: string;
};

export type TrackingProductProps = BannerTrackingProps & ListTrackingProps;
export type TrackingProps = Record<ProductId, TrackingProductProps>;

export type UseTrackingProps = {
  get: (productId?: ProductId) => TrackingProductProps;
  set: <T extends TrackingType>(
    type: T,
    trackingData: T extends 'banner' ? BannerTrackingProps : ListTrackingProps,
    productId?: ProductId
  ) => void;
  remove: (...productIds: ProductId[]) => void;
  clear: () => void;
}