import { CreativeName } from '../Common/types';

export type ViewPromotionProps = {
  ecommerce: {
    creative_name: CreativeName;
    creative_slot: string;
    promotion_id: string;
    promotion_name: string;
  };
};
