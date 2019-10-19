// imports
import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/a_MovieActions"

// const 
const initialState = {
    movies: [],
    isFetching: false, 
    error: ''
}


export const fetchMovies = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: true,
                error: '',
                movies: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state
    }

}

export default fetchMovies