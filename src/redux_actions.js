import * as reduxConst from './redux_constants';

export const setSearchField = (text) => ({
   type: reduxConst.CHANGE_SEARCH_FIELD,
   payload: text
})

// returns a function, therefore gets handled by redux-thunk
export const requestRobots = () => (dispatch) => {
   console.log("test")
   dispatch({ type: reduxConst.REQUEST_ROBOTS_PENDING });
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ 
         type: reduxConst.REQUEST_ROBOTS_SUCCESS,
         payload: data }))
      .catch(error => dispatch({
         type: reduxConst.REQUEST_ROBOTS_FAILED,
         payload: error
      }))
}