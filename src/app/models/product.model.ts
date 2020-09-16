export interface Product {
  _id: string;
  type: string;
  imageURL: string;
  description: { desc: string }[];
  client_price: number;
  qty: number;
}
