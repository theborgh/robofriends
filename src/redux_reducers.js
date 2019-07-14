import * as reduxConst from './redux_constants';

const initialState = {
   searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
   switch (action.type) {
      case reduxConst.CHANGE_SEARCH_FIELD:
         return {...state, searchField: action.payload} // or: Object.assign({}, state, searchField: action.payload)
      default:
         return state;
   }
}