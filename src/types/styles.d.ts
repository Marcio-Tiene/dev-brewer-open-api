declare type TStyle = {
  category: TBjcp2015Categories;
  'carb-min': number;
  'fg-max': number;
  'og-min': number;
  name: string;
  type: string;
  'style-letter': string;
  'abv-min': number;
  'fg-min': number;
  'category-number': string;
  'carb-max': number;
  'ibu-max': number;
  ingredients: string;
  examples: string;
  notes: string;
  'og-max': number;
  'color-min': number;
  'abv-max': number;
  'color-max': number;
  profile: string;
  'ibu-min': number;
};

declare interface StylesQuery extends IPaginateQuery {
  name?: string;
  type?: string;
  category?: TBjcp2015Categories;
  potential?: string;
}
