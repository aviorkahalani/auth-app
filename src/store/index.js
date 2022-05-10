import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authRedcuer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  authModule: authReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
