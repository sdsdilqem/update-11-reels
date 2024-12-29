import { BrandModels } from './types';

export const BRANDS = [
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Toyota',
  'Lexus',
  'Porsche',
  'Volkswagen',
  'Honda'
] as const;

export const MODELS: BrandModels = {
  'Mercedes-Benz': ['S-Class', 'E-Class', 'C-Class', 'GLE', 'GLC'],
  'BMW': ['7 Series', '5 Series', '3 Series', 'X5', 'X3'],
  'Audi': ['A8', 'A6', 'A4', 'Q7', 'Q5'],
  'Toyota': ['Camry', 'RAV4', 'Land Cruiser', 'Corolla', 'Highlander'],
  'Lexus': ['LS', 'ES', 'RX', 'NX', 'LX'],
  'Porsche': ['Cayenne', 'Macan', 'Panamera', '911', 'Taycan'],
  'Volkswagen': ['Touareg', 'Tiguan', 'Passat', 'Golf', 'Arteon'],
  'Honda': ['CR-V', 'Pilot', 'Accord', 'Civic', 'HR-V']
};