// VG del
import React, {useState, useEffect} from 'react';
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
        <Div>
            <PageTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible"
            >Update Movie
            </PageTitle>
        
            <Form onSubmit={handleSubmit}
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                <InputTitle type="text" name="title" onChange={handleChange} value={movie.title}/>
                <InputYear type="text" name="year" onChange={handleChange} value={movie.year}/>
                <Select type="text" name="genre" onChange={handleChange} value={movie.genre}>
                    <option>Choose genre</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </Select>
                <Textarea type="text" name="description" onChange={handleChange} cols="30" rows="10" value={movie.description}></Textarea>
                <Button>Update</Button>
                <StyledLink to="/admin">&larr; Back</StyledLink>
            </Form>
        </Div>
    )
}

export default UpdateMovie
