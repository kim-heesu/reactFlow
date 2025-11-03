import styled from '@emotion/styled';
import {NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
    position: relative;
    z-index: 9999;
    background: #fff;
    padding: 1rem; 
    box-shadow: 0 0 0.5rem 0.4rem rgba(0,0,0,0.1);
    nav ul {
        display:flex;
        gap: 50px;
    }
`

function Header(){
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li><NavLink to='/'>Main</NavLink></li>
                    <li><NavLink to='/tabSample'>tabSample</NavLink></li>
                    <li><NavLink to='/flowPage'>flowPage</NavLink></li>
                    <li><NavLink to='/flowSample'>flowSample</NavLink></li>
                </ul>
            </nav>
        </StyledHeader>
    )

}

export default Header;