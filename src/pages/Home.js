import React, {useState, useEffect} from 'react';
import Movie from './Movie'

function Home() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async() => {
        try {
            const response = await fetch('http://localhost:5000/movies');
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            setMovies(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <h1>Movies</h1>
            {
                movies.map( movie => (
                    <Movie key={movie['_id']} movie={movie} pageId="home" />
                ))
            }
        </div>
    )
}

export default Home
