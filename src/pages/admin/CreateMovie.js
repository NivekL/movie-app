import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const PageTitle = styled.h1 `
    text-align: center;
`
const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin: 0 auto;
`
const InputTitle = styled.input`
    margin-bottom: 20px;
    padding: 8px;
`
const InputYear = styled.input`
    margin-bottom: 20px;
    padding: 8px;
`
const Select = styled.select`
    margin-bottom: 20px;
    padding: 8px;
`
const Textarea = styled.textarea`
    margin-bottom: 20px;
    padding: 8px;
`
const Button = styled.button`
    margin-bottom: 20px;
    padding: 8px;
    background-color: cadetblue;
    border: none;
    border-radius: 5px;
`
const StyledLink = styled(Link)`
    display: block;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
`

function CreateMovie() {
    const [movie, setMovie] = useState({});
    const history = useHistory();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMovie({  
            ...movie,
            [name]: value            
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/movies', {
                method: 'POST', // GET, POST, PATCH, DELETE
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

    return (
        <Div>
            <PageTitle>Create Movie</PageTitle>
        
            <Form onSubmit={handleSubmit}>
                <InputTitle type="text" name="title" onChange={handleChange} value={movie.title}/>
                <InputYear type="text" name="year" onChange={handleChange} value={movie.year}/>
                <Select type="text" name="genre" onChange={handleChange} value={movie.genre}>
                    <option>Choose genre</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </Select>
                <Textarea type="text" name="description" onChange={handleChange} cols="30" rows="10" value={movie.description}></Textarea>
                <Button>Create</Button>
                <StyledLink to="/admin">&larr; Back</StyledLink>
            </Form>
        </Div>
    )
}

export default CreateMovie
