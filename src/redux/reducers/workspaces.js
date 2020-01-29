//import { lensPath, lensProp, view, set, over } from 'rambda';

import { SHOPPING_LIST } from "../actionTypes";

//const listsLens = lensProp('lists');
//const listLens = lensPath(['lists']);

const initialState = [
    { name: "Kollektivet",  isOwner:  true, members: ['jbr'], lists: ['Kollektivfest'], index: 0, },
    { name: "Hjemme",       isOwner: false, members: ['jbr'], lists: ['Hjemmefest'],    index: 1, },
    { name: "Jobb",         isOwner: false, members: ['jbr'], lists: ['Jobbfest'],      index: 2, },
];

//const append = item => array => [...(array || []), item];
//const findById = id => array => array.find(item => item.id === id);

const immutableReplaceAtIndex = (array, index, element) => {
  const newArray = array.slice();
  newArray[index] = element;
  return newArray;
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOPPING_LIST.ADD_ITEM: {
      const { list, item } = action.payload;

      const newList = immutableReplaceAtIndex(state.lists[list], item.index, item)

      return {
        ...state,
        lists: {
          ...state.lists,
          [list]: newList,       
        }
      };
    }
    //case SHOPPING_LIST.RENAME: {
    //  const { list, item, title } = action.payload;
    //  return {
    //    ...state,
    //    lists: {
    //      ...state.lists,
    //      [list]: {
    //        ...state.lists[list],
    //        [item.id]: {
    //          ...item,
    //          title
    //        }
    //      }
    //    }
    //  };
    //}
    //case SHOPPING_LIST.TOGGLE_STATE: {
    //  const { list, item } = action.payload;
    //  return {
    //    ...state,
    //    lists: {
    //      ...state.lists,
    //      [list]: {
    //        ...state.lists[list],
    //        [item.id]: {
    //          ...item,
    //          completed: !item.completed,
    //        }
    //      }
    //    }
    //  };
    //}
    default:
      return state;
  }
}
