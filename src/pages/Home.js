import React, {useState, useEffect} from 'react';
import Movies from '../components/Movies';
import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    margin-bottom: 40px;
`
const Div = styled.div`
    width: 1440px;
    margin: 0 auto; 
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
`

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
        <div>
            <Header>Movies</Header>
            <Div>
            {
                movies && movies.map( movie => {
                    return <Movies key={movie['_id']} movie={movie} />
                    })
            }
            </Div>
        </div>
    )
}

export default Home
