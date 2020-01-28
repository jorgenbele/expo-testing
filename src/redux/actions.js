import { SHOPPING_LIST } from "../actionTypes";

export function addItem(list, item) {
    return { type: SHOPPING_LIST.ADD_ITEM, list, item }
}

export function removeItem(list, item) {
    return { type: SHOPPING_LIST.REMOVE_ITEM, list, item }
}
