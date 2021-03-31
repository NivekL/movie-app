import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Td = styled.td`
    border: 1px solid black;
    padding: 6px;
`

const Button = styled.button `
    border: none;
    background-color: #fff;
    color: blue;
    &:hover {
        cursor: pointer;
    }
`

function MovieTable({movie, deleteMovie}) {

    const handleDelete = () => {
        deleteMovie(movie['_id']);
    }

    return (
        <>
            <tbody>
                <tr>
                    <Td>{movie.title}</Td>
                    <Td>{movie.year}</Td>
                    <Td>{movie.genre}</Td>
                    <Td>
                        <Button onClick={handleDelete}>Delete</Button>|
                        <Link to={`/update-movies/${movie['_id']}`}><Button>Update</Button></Link>
                    </Td>
                </tr>
            </tbody>
        </>
    )
}

export default MovieTable