//imports 
import axios from "axios"

// action types 
export const START_FETCHING = "START_FETCHING"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

// action creators
export const fetchMovies = () => dispatch => {
    dispatch({ type: START_FETCHING })

    axios   
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=dd34fa9`)
        .then(res => console.log(res))
        .catch(err => console.log(`There was an error, please fetch again.`, err))

}