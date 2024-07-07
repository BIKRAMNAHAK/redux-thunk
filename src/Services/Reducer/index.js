
import { combineReducers } from 'redux';
import bookReducer from './BooksReducer'

 const rootreducer = combineReducers({bookReducer});

export default rootreducer;