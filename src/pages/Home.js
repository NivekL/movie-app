import React, {useState, useEffect} from 'react';
import Movies from '../components/Movies';
import styled from 'styled-components';
import {motion} from 'framer-motion'

/* Style */
const Header = styled(motion.h1)`
    text-align: center;
    margin-bottom: 40px;
`
const Div = styled(motion.div)`
    /*width: 1440px;*/
    min-height: 100vh;
    margin: 0 auto; 
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
`

const StyledDiv = styled(motion.div)`
    width: 80%;
    margin: 0 auto;
`

/* Animation variants*/
const titleVariant = {
    hidden: {
        y: 100, 
        opacity: 0
    },
    visible: {
        y: 0, 
        opacity: 1,

        transition: { 
            duration: 0.5
        }
    }
}

const movieListVariant = {
    hidden: {
        y: 100, 
        opacity: 0
    },
    visible: {
        y: 0, 
        opacity: 1,

        transition: {
            delay: 0.5, 
            duration: 0.3
        }
    }
}

function Home() {
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
            setMovies(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <StyledDiv>   
                <Header
                    variants={titleVariant}
                    initial="hidden"
                    animate="visible"
                >
                    Movies
                </Header>

                <Div
                    variants={movieListVariant}
                    initial="hidden"
                    animate="visible"
                >
                {
                    movies && movies.map( movie => {
                        return <Movies key={movie['_id']} movie={movie} />
                        })
                }
                </Div>
        </StyledDiv>
    )
}

export default Home
