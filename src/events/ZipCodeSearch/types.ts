import type { CurrencyName, ShippingTierName } from '../Common/types';

export type Shipping = {
  shipping_tier: ShippingTierName;
  shipping: number;
  delivery_time: number;
  flag_pickup: boolean;
  currency: CurrencyName;
};

export type ZipCodeSearchProps = {
  shippings: Shipping[];
};
