import { CreativeName } from '../../types';

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

export type TrackingProps = BannerTrackingProps & ListTrackingProps;
export type TrackingStorageProps = Record<ProductId, TrackingProps>;
