import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal';
import {reducer as form } from 'redux-form';

import { UPDATE_RESTURANT } from '../actions/resturant.actions';

const initialState = {
    resturants: [],
}

const resturants = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_RESTURANT:
            return {
                ...state,
                resturants: action.resturants,
            }
        default:
            return state;
    }
}


export default combineReducers({ modal, form, resturants});