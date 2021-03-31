import React from 'react'
import Movie from '../pages/Movie'

function MovieList({movies, deleteMovie}) {
    return (
        <div>
            <h1>Movies and things</h1>
            {
                movies && movies.map( movie => (
                    <Movie key={movie['_id']} movie={movie} deleteMovie={deleteMovie}/>
                ))
            }
        </div>
    )
}

export default MovieList
