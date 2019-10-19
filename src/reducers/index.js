// combineReducers
import { combineReducers } from "redux"

// imports 
import counterReducer from "./counter"
import loggedReducer from "./isLogged"
import r_fetchMovies from "./r_fetchMovies"

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    fetchMovies: r_fetchMovies
})

export default rootReducer

// on line 9 an alternative to write "counter: counterReducer" is --> "counterReducer" which is the same as "counterReducer: counterReducer"