export interface StaticProduct {
  id: string;
  title: string;
  image: string;
  specs: {
    display: string;
    chip: string;
    camera: string;
    battery: string;
  };
  colors: string[];
  storage: string[];
  description: string;
}