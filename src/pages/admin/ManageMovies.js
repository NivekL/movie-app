import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import MovieList from '../../components/MovieList';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {titleVariant, containerVariant} from '../../animation'

const PageTitle = styled(motion.h1)`
    text-align: center;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: blue;
`

const Div = styled.div`
    position: relative;
    margin-left: 77.5%;
    margin-bottom: 20px;
    width:100px;
`

function ManageMovies() {
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
            setMovies(data.reverse());
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteMovie = async (movieID) => {
        try {
            await fetch('http://localhost:5000/movies/' + movieID, {
                method: 'DELETE', // GET, POST, PATCH, DELETE
            });
        } catch (message) {
            throw new Error(message);
        }

        fetchMovies();
    }
    
    return (
        <div>
            <PageTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible"
            >
                Manage Movies
            </PageTitle>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                <Div>
                    <StyledLink to="/create-movie">Create movie</StyledLink>
                </Div>
                <MovieList movies={movies} deleteMovie={deleteMovie} />
            </motion.div>
        </div>
    )
}

export default ManageMovies
