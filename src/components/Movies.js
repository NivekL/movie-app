import React from 'react';
import poster from '../img/movie-poster.jpg';
import {Link} from "react-router-dom";
import styled from 'styled-components'


const Container = styled.div `
    margin: 0 20px 30px 20px;
    display: flex;
    flex-direction: column;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  border: 1px solid black;
  width: 90px;
  border-radius: 3px;
  padding-bottom: 3px;
  text-align: center;
`

const List = styled.li `
    list-style-type: none;
    width: 250px;
`
const Text = styled.div `
    width: 250px;
    
`

function Movies({movie}) {
    return (
        <Container>
            <List>
               <img src={poster} alt="poster" width="250" height="350"/>
               <Text>
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>{movie.year} | <span>{movie.genre}</span></p>
                <p></p>
               </Text>
            </List>
            <StyledLink to={`/movie/${movie['_id']}`}>Read more</StyledLink>
        </Container>
    )
}

export default Movies
