import { SubmissionError } from 'redux-form';
import axios from 'axios';


const RESTURANT_URL = `${window.location.origin}/api/resturants`;
const csrfToken = document.querySelector('[name="csrf-token"]').getAttribute('content');

export const UPDATE_RESTURANT = 'UPDATE_RESTURANT';

export const updateResturants = (resturants) => ({type: UPDATE_RESTURANT, resturants});


export const fetchResturants = () => (dispatch) => axios.get(RESTURANT_URL)
.then(response => {
    console.log("the response is: ", response)
    return response.data
})
.then(resturants => dispatch(updateResturants(resturants)));

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
        url: `${RESTURANT_URL}/${review.resturantId}/reviews`,
        data: JSON.stringify(review), 
        headers: {
            'content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            'X-CSRF-Token': csrfToken,
        },
    }
).then(response => response.data)
.then(()=>dispatch(fetchResturants()))

