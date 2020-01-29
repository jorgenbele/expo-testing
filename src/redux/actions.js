import { SHOPPING_LIST } from "./actionTypes";

// ShoppingList
export function addItem(list, item) {
    return { type: SHOPPING_LIST.ADD_ITEM, payload: {list, item} }
}

export function removeItem(list, item) {
    return { type: SHOPPING_LIST.REMOVE_ITEM, payload: {list, item} }
}

export function renameItem(list, item, newTitle) {
    return { type: SHOPPING_LIST.RENAME, payload: {title: newTitle} }
}

export function toggleItemState(list, item) {
    return { type: SHOPPING_LIST.TOGGLE_STATE, payload: {item } }
}

export function createList(list) {
    return { type: SHOPPING_LIST.CREATE, payload: { list } }
}
export function deleteList(list) {
    return { type: SHOPPING_LIST.DELETE, payload: { list } }
}