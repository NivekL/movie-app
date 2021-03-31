import React from 'react';
import {Link} from "react-router-dom";

function Movie({movie, deleteMovie, pageId}) {

    const handleDelete = () => {
        deleteMovie(movie['_id']);
    }

    return (
        <div>
            <li>
               <h2>{movie.title}</h2>
               <p>{movie.description}</p>
               <p>{movie.year}</p>
               <p>{movie.genre}</p>
            </li>
            {
                pageId === "home" 
                ? ''
                : <div>
                    <button onClick={handleDelete}>Delete</button>  
                    <Link to={`/update-movies/${movie['_id']}`}><button>Update</button></Link>
                  </div>
            } 
        </div>
    )
}

export default Movie
