export interface IFruit {
  items: IItem[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface IItem {
  id: number;
  name: string;
  image: string;
  nutrients: string[];
  quantity: number;
}
