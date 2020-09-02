export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: { desc: string }[];
  qty: number;
}
