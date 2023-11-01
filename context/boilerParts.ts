import { IBoilerParts } from "@/types/boilerparts";
import { createDomain } from "effector-next";

const boilerParts = createDomain()

export const setBoilerParts = boilerParts.createEvent<IBoilerParts>()

export const $boilerParts = boilerParts
.createStore<IBoilerParts>({} as IBoilerParts)
.on(setBoilerParts, (_, parts) => parts)