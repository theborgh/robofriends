import * as reduxConst from './redux_constants';

const initialStateSearch = {
   searchField: '',
   isPending: false
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
   switch (action.type) {
      case reduxConst.CHANGE_SEARCH_FIELD:
         return { ...state, searchField: action.payload } // or: Object.assign({}, state, searchField: action.payload)
      default:
         return state;
   }
}

const initialStateRobots = {
   isPending: false,
   robots: [],
   error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
   switch (action.type) {
      case reduxConst.REQUEST_ROBOTS_PENDING:
         return { ...state, isPending: true }
      case reduxConst.REQUEST_ROBOTS_SUCCESS:
         return { ...state, robots: action.payload, isPending: false }
      case reduxConst.REQUEST_ROBOTS_FAILED:
         return { ...state, error: action.payload, isPending: false }
      default:
         return state;
   }
}