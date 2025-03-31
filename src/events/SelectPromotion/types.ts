import { CreativeName } from "../Common/types";

export type SelectPromotionProps = {
  ecommerce: {
    promotion_name: CreativeName;
    promotion_id: string;
    creative_slot: string;
    creative_name: string;
  };
};
