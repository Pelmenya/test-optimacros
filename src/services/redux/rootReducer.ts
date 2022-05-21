import { combineReducers } from 'redux';
import { pagesReducer } from './slices/pages';
import { currentPageReducer } from './slices/current-page';
import { errorRequestReducer } from './slices/error-request';

export const rootReducer = combineReducers({
  errorRequest: errorRequestReducer,  
  pages: pagesReducer,
  currentPage: currentPageReducer,
});
