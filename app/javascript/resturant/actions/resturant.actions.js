import { SubmissionError } from 'redux-form';
import axios from 'axios';
import queryString from 'query-string';

const RESTURANT_URL = `${window.location.origin}/api/resturants`;
const csrfToken = document.querySelector('[name="csrf-token"]').getAttribute('content');
export const UPDATE_RESTURANT = 'UPDATE_RESTURANT';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const FILTER_TEN_BIS = 'FILTER_TEN_BIS';
export const FILTER_RATING = 'FILTER_RATING';
export const FILTER_CUISINE = 'FILTER_CUISINE';
export const FILTER_DELIVERY = 'FILTER_DELIVERY';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';

export const updateResturants = (resturants) => ({type: UPDATE_RESTURANT, resturants});

export const openDrawer = () => ({ type: OPEN_DRAWER });
export const closeDrawer = () => ({ type: CLOSE_DRAWER });
export const filterTenBis = () => (dispatch) =>  {
    dispatch({ type: FILTER_TEN_BIS });
    dispatch(fetchResturants());
}
export const filterRating = (rating) => (dispatch) => {
    dispatch({ type:FILTER_RATING, rating });
    dispatch(fetchResturants());
}
export const filterCuisine = (cuisine) => (dispatch) => {
    dispatch( {type: FILTER_CUISINE, cuisine});
    dispatch(fetchResturants());
}

export const filterMaxDeliveryTime = (maxDeliveryInHours) => (dispatch) => {
    dispatch( {type: FILTER_DELIVERY, maxDeliveryInHours});
    dispatch(fetchResturants());
}

export const clearAll = () => (dispatch) => {
    dispatch({type : CLEAR_ALL_FILTERS});
    dispatch(fetchResturants());
}

export const fetchResturants = () => { return (dispatch, getState) => { 
    const { form , resturants} = getState();
    const { search } = form;
    const { tenbis, cuisine, maxDeliveryInHours, minStarRating } = resturants; 
    let searchQuery;

    if (search) {
        if(search.values) {
            searchQuery = search.values.searchQuery;
        }
    }

    const urlFilters = {
        'search': searchQuery || '',
        'tenbis': tenbis ? true : undefined,
        'cuisine': cuisine,
        'max_delivery_time': maxDeliveryInHours,
        'rating_avg': minStarRating,

      };
    const queryParams = queryString.stringify(urlFilters);


axios.get(`${RESTURANT_URL}/?${queryParams}`)
.then(response => {
    console.log("the response is: ", response)
    return response.data
})
.then(resturants => dispatch(updateResturants(resturants)));
}
}
export const addResturant = (resturant) => (dispatch, getState) => axios({
    method:'POST', 
    url: RESTURANT_URL,
    data: JSON.stringify(resturant), 
    headers: {
        'content-type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        'X-CSRF-Token': csrfToken,
    },
    mode: 'cors',
}).then(response => response.data)
.then(() => dispatch(fetchResturants()));


export const addReview = (review) => (dispatch) => axios(
    {
        method: 'POST',
        url: `${RESTURANT_URL}/${review.resturant_id}/reviews`,
        data: JSON.stringify(review), 
        headers: {
            'content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            'X-CSRF-Token': csrfToken,
        },
    }
).then(response => response.data)
.then(()=>dispatch(fetchResturants()))

