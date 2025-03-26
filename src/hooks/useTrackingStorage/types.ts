import { TrackingProps } from "../../events/Common/types";

export type ProductId = string | 'temp'
export type TrackingStorageProps = Record<ProductId, TrackingProps>;

export type StoreId =
  | 'lojaanimale';

export type AccountUrl =
  | 'https://secure.animale.com.br';