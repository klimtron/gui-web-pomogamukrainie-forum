/**
 * Documentation for ads portal
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Location } from './location';

export interface MaterialAidOffer {
  id: number;
  userFirstName: string;
  title: string;
  description: string;
  phoneNumber?: string;
  phoneCountryCode?: string;
  modifiedDate?: string;
  category: MaterialAidOffer.CategoryEnum;
  location: Location;
  type: MaterialAidOffer.TypeEnum;
}
export namespace MaterialAidOffer {
  export type CategoryEnum =
    | 'FOOD'
    | 'HOUSEHOLD_GOODS'
    | 'ELECTRONICS'
    | 'FOR_CHILDREN'
    | 'COSMETICS_AND_DOMESTIC_DETERGENTS'
    | 'FURNITURE'
    | 'CLOTHING';
  export const CategoryEnum = {
    Food: 'FOOD' as CategoryEnum,
    HouseholdGoods: 'HOUSEHOLD_GOODS' as CategoryEnum,
    Electronics: 'ELECTRONICS' as CategoryEnum,
    ForChildren: 'FOR_CHILDREN' as CategoryEnum,
    CosmeticsAndDomesticDetergents: 'COSMETICS_AND_DOMESTIC_DETERGENTS' as CategoryEnum,
    Furniture: 'FURNITURE' as CategoryEnum,
    Clothing: 'CLOTHING' as CategoryEnum,
  };
  export type TypeEnum = 'MATERIAL_AID';
  export const TypeEnum = {
    MaterialAid: 'MATERIAL_AID' as TypeEnum,
  };
}
