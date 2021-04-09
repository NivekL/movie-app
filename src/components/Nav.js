import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;

`
const Title = styled.h1 `
    text-align: center;
`

const StyledLink = styled(Link)`
    margin: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
`
function Nav() {
    return (
        <div>
        <Title>FilmTime</Title>
            <Ul>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/admin">Admin</StyledLink>
            </Ul>
        </div>
    )
}

export default Nav
