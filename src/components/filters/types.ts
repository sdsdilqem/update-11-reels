export type Brand = typeof BRANDS[number];
export type BrandModels = Record<Brand, string[]>;

export interface FilterState {
  brand: string | null;
  condition: string | null;
  hasDelivery: boolean;
}