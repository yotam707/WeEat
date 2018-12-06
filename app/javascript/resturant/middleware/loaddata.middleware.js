import { fetchResturants } from '../actions/resturant.actions';

const loadDataMiddleware = store => next => action => {
  next(action);

  if(action.type === '@@redux-form/CHANGE') {
    store.dispatch(fetchResturants());
  }
}

export default loadDataMiddleware;
