import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import poster from '../img/movie-poster.jpg';
import styled from 'styled-components';

const MovieContainer = styled.div `
    width: 960px;
    margin: 0 auto;
    margin-top: 60px; 
    display: flex; 
    justify-content: center; 
`

const MovieInnerWrap = styled.div `
    display: flex; 
`

const InfoWrap = styled.div `
    width: 40%;
    margin: 40px 0 0 30px;
`

const StyledLink = styled(Link)`
  color: black;
  display: block;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  font-size: 23px;
`;

function Movie({match}) {

    const [movie, setMovie] = useState({});

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
    
    return (
        <div>  
            <StyledLink to={'/'}>&larr; Back</StyledLink>
            <MovieContainer>
                <MovieInnerWrap>
                <img src={poster} alt="poster" width="400" height="570"/>
                    <InfoWrap>
                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                        <p>{movie.year} | <span>{movie.genre}</span></p>
                    </InfoWrap>
                </MovieInnerWrap>
            </MovieContainer>
        </div>
    )
}

export default Movie
