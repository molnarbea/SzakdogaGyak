/**
 * Products
 * id
 * seller_id
 * title
 * description
 * color
 * price
 * condition_status
 * is_sold
 * is_active
 */

export interface productType {
  id: number;
  title: string;
  description: string;
  color: string;
  price: number;
  condition_status: string;
  is_sold: boolean;
  is_active: boolean;
}
