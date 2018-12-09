import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal';
import {reducer as form } from 'redux-form';

import { UPDATE_RESTURANT, OPEN_DRAWER, CLOSE_DRAWER,
     FILTER_TEN_BIS, FILTER_RATING, FILTER_CUISINE,
     FILTER_DELIVERY, CLEAR_ALL_FILTERS } from '../actions/resturant.actions';

const initialState = {
    resturants: [],
    open: false,
    tenbis: false,
    cuisine: '',
    minStarRating: 0,
    maxDeliveryInHours: 6
}

const resturants = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_RESTURANT:
            return {
                ...state,
                resturants: action.resturants,
            }
        case OPEN_DRAWER:
            return {
                ...state,
                open: !state.open,
            }
        case CLOSE_DRAWER:
            return {
                ...state,
                open: !state.open,
            }
         case FILTER_TEN_BIS:
            return {
                ...state,
                tenbis: !state.tenbis,
            }
        case FILTER_RATING:
        return {
            ...state,
            minStarRating: action.rating,
        }
        case FILTER_CUISINE:
        return {
            ...state,
            cuisine: action.cuisine,
        }
        case FILTER_DELIVERY:
            return {
                ...state,
                maxDeliveryInHours: action.maxDeliveryInHours,   
            }
        case CLEAR_ALL_FILTERS:
            return {
                ...state,
                tenbis: false,
                cuisine: '',
                minStarRating: 0,
                maxDeliveryInHours: 6
            }
        default:
            return state;
    }
}

export default combineReducers({ modal, form, resturants});