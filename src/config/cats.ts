import React from "react";
import { SpotCat } from "../components/svgs/SpotCat";
import { StandingCat } from "../components/svgs/StandingCat";
import { BrownCat } from "../components/svgs/BrownCat";
import { GingerCat } from "../components/svgs/GingerCat";
import { Croissant } from "../components/svgs/Croissant";

export interface CatPosition {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface CatConfig {
  id: number;
  name: string;
  component: React.ComponentType<any>;
  food: React.ComponentType<any>;
  unlocked: boolean;
  price: number;
  health: number; // 0-100
  catPosition: CatPosition;
  shadowPosition?: CatPosition;
}

export const CATS: CatConfig[] = [
  {
    id: 1,
    name: "Spotted Cat",
    component: SpotCat,
    food: Croissant,
    unlocked: true,
    price: 0,
    health: 100,
    catPosition: { left: 70, top: 40, width: 182, height: 251 },
    shadowPosition: { left: 91, top: 267, width: 139, height: 18 },
  },
  {
    id: 2,
    name: "Standing Cat",
    component: StandingCat,
    food: Croissant,
    unlocked: false,
    price: 500,
    health: 0,
    catPosition: { left: 68, top: 41, width: 186, height: 239 },
    shadowPosition: { left: 91, top: 267, width: 139, height: 18 },
  },
  {
    id: 3,
    name: "Brown Cat",
    component: BrownCat,
    food: Croissant,
    unlocked: false,
    price: 1000,
    health: 0,
    catPosition: { left: 38, top: 63, width: 244, height: 221 },
    shadowPosition: { left: 54, top: 255, width: 198, height: 29 },
  },
  {
    id: 4,
    name: "Ginger Cat",
    component: GingerCat,
    food: Croissant,
    unlocked: false,
    price: 1500,
    health: 0,
    catPosition: { left: 63, top: 36, width: 195, height: 246 },
    shadowPosition: { left: 91, top: 267, width: 139, height: 18 },
  },
  {
    id: 5,
    name: "Standing Cat 2",
    component: StandingCat,
    food: Croissant,
    unlocked: false,
    price: 2000,
    health: 0,
    catPosition: { left: 68, top: 41, width: 186, height: 239 },
    shadowPosition: { left: 91, top: 267, width: 139, height: 18 },
  },
  {
    id: 6,
    name: "Standing Cat 3",
    component: StandingCat,
    food: Croissant,
    unlocked: false,
    price: 2500,
    health: 0,
    catPosition: { left: 68, top: 41, width: 186, height: 239 },
    shadowPosition: { left: 91, top: 267, width: 139, height: 18 },
  },
];

