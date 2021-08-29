import styled from 'styled-components/macro';
import { StyledButton } from '../ui/button/Button.style';

export const StyledHero = styled.div`
    background: #326332;
    padding: 10px;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;
export const Title = styled.h1`
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-family: cursive;
    color: navajowhite;
    text-align: center;
`;

export const Body = styled.div`
    color: black;
    padding: 5px 0;
    font-size: 11pt;
    font-family: cursive;
    margin-bottom: 30px;
`;

export const Mission = styled.div`
    font-family: sans-serif;
    color: aqua;
    font-weight: bold;
`;
export const H3 = styled.h3`
    margin: 0;
    margin-bottom: 10px;
`;

export const MissionWrapper = styled.div`
    margin-bottom: 25px;
`;

export const Button = styled(StyledButton)`
    &&& {
        align-self: flex-start;
        border-radius: 5px;
        background-color: #282525;
        font-weight: bold;
        transition: 0.1s all;
        padding: 10px 4rem;

        &:hover {
            background-color: black;
        }
    }
`;
