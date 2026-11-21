export interface ICustomButton {
  children: React.ReactNode;
  CustomClass?: string;
}

export interface IProduct {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  wid: number;
  hit: number;
}
