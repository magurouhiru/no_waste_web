export type Recipe = {
  name: string;
  tags: string[];
  ingredients: RecipeItem[];
  building: string;
  building_time_sec: number;
  products: RecipeItem[];
  prerequisites: string;
};

export type RecipeItem = {
  name: string;
  amount: number;
  amount_per_min: number;
};
