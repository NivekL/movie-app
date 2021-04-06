import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {titleVariant, containerVariant} from '../../animation'

const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const PageTitle = styled(motion.h1) `
    text-align: center;
`
const Form = styled(motion.form) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin: 0 auto;
`
const InputTitle = styled(motion.input)`
    margin-bottom: 20px;
    padding: 8px;
`
const InputYear = styled(motion.input)`
    margin-bottom: 20px;
    padding: 8px;
`
const Select = styled(motion.select)`
    margin-bottom: 20px;
    padding: 8px;
`
const Textarea = styled(motion.textarea)`
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
            <PageTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible"
            >Create Movie
            </PageTitle>
        
            <Form onSubmit={handleSubmit}
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                <InputTitle drag type="text" name="title" onChange={handleChange} value={movie.title} placeholder='Title' autoComplete='off'/>
                <InputYear drag type="text" name="year" onChange={handleChange} value={movie.year} placeholder='Year' autoComplete='off'/>
                <Select drag type="text" name="genre" onChange={handleChange} value={movie.genre}>
                    <option>Choose genre</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </Select>
                <Textarea drag type="text" name="description" onChange={handleChange} cols="30" rows="10" value={movie.description} placeholder='Description'></Textarea>
                <Button>Create</Button>
                <StyledLink to="/admin">&larr; Back</StyledLink>
            </Form>
        </Div>
    )
}

export default CreateMovie
