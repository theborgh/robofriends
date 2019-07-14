import * as reduxConst from './redux_constants';

export const setSearchField = (text) => ({
   type: reduxConst.CHANGE_SEARCH_FIELD,
   payload: text
})