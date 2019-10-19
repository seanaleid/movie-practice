// general imports 
import React, { useEffect } from "react"
import { connect } from "react-redux"

// action creator
import { fetchMovies } from "../actions/a_MovieActions"

// movie card component
import MovieCard from "./MovieCard"

//material-ui (for later)

const MovieList = props => {
    console.log(props)

    useEffect(() => {
        props.fetchMovies();
    }, [])
    if (props.isFetching) {
        return <h2>Loading movies...</h2>
    }

    return (
        <div>
            <div>
                {props.error && <p>{props.error}</p>}
                {props.movie && props.movies.map(movie => (
                    <MovieCard key={movie._id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { fetchMovies }
)(MovieList)