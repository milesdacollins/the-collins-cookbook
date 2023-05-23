import { IBaseEntity } from "./base-entity";
import { ICost } from "./cost";
import { IIngredient } from "./ingredient";

export interface IRecipe extends IBaseEntity<string> {
    name: string;
    description: string;
    instructions: string[];
    ingredients: IIngredient[];
    cost: ICost;
    servings: number;
    prepTime: number;
    cookTime: number;
    uses: number;
    imageUrl: string;
}
