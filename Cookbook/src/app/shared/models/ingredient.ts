import { IBaseEntity } from "./base-entity";

export interface IIngredient extends IBaseEntity<string> {
    name: string;
    quantity: number;
    unit: string;
}