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

const ButtonField = styled.td`
    width: calc(100% - 900px);
    border: 1px solid black;
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
                    <ButtonField>
                        <Link to={`/update-movies/${movie['_id']}`}><Button>Update</Button></Link>|
                        <Button onClick={handleDelete}>Delete</Button>
                    </ButtonField>
                </tr>
            </tbody>
        </>
    )
}

export default MovieTable