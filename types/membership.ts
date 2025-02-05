import { Translation } from "@/types/global";
import { Shop } from "./shop";

interface MembershipTranslation extends Translation {
  term: string;
  description: string;
}

export interface Membership {
  id: number;
  shop_id: number;
  time: string;
  translation: MembershipTranslation | null;
  services_count: number;
  sessions: number;
  sessions_count: number;
  price: number;
  color: string;
}

export interface MembershipDetail extends Membership {
  shop?: Shop;
}

export interface UserMembership {
  id: number;
  member_ship: Membership;
  remainder: number;
  expired_at: string;
  sessions: number;
}
