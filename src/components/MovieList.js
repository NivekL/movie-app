import React from 'react';
import MovieTable from '../components/MovieTable';
import styled from 'styled-components';

const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    width: 70%;
    margin: 0 auto;
`
const Th = styled.th`
    border: 1px solid black;
    width:20%;
    padding: 6px;
    
`

const Th2 = styled.th `
    width:8%;
`

function MovieList({movies, deleteMovie}) {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>Title</Th>
                    <Th>Year</Th>
                    <Th>Genre</Th>
                    <Th2></Th2>
                </tr>
            </thead>
            {
                movies.map( movie => (
                    <MovieTable key={movie['_id']} movie={movie} deleteMovie={deleteMovie}/>
                ))
            }
        </Table>
    )
}

export default MovieList
