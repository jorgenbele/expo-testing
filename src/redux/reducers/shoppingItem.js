import { SHOPPING_LIST } from "../actionTypes";

const initialState = {
  lists: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOPPING_LIST.ADD_ITEM: {
      const { list, item } = action.payload;
      return {
        ...state,
        lists: {
          ...state.lists,
          [list]: {
            item,
          }
        }
      };
    }
    default:
      return state;
  }
}
