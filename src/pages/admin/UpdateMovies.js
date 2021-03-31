// VG del
import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";

function UpdateMovie({ match }) {
    const [movie, setMovie] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetchMovie();
    }, []);

    const fetchMovie = async () => {
        try {
            const response = await fetch('http://localhost:5000/movies/' + match.params.id);
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/movies/' + movie['_id'], {
                method: 'PATCH', // GET, POST, PATCH, DELETE
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie) // body data type must match "Content-Type" header
            });
    
            history.push('/admin')
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMovie({  
            ...movie,
            [name]: value            
        })
    }


    return (
        <div>
            <h1>Update movie</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="title" onChange={handleChange} value={movie.title}/>
                <input type="text" name="year" onChange={handleChange} value={movie.year}/>
                <input type="text" name="genre" onChange={handleChange} value={movie.genre}/>
                <textarea type="text" name="description" onChange={handleChange} cols="30" rows="10" value={movie.description}></textarea>
                <button>Update</button>
                <Link to="/admin">&larr; Back</Link>
            </form>
        </div>
    )
}

export default UpdateMovie
