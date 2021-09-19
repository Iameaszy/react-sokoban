import styled from 'styled-components/macro';
import { StyledButton } from '../ui/button/Button.style';

export const StyledHero = styled.div`
    background: #326332;
    padding: 0 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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
    //color: aqua;
    color: yellow;
    font-weight: bold;
    line-height: 1.5;
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

export const EquationsWrapper = styled.div`
    font-weight: bold;
    font-size: 25px;
    display: flex;
    position: relative;
`;
export const EquationsTitle = styled.div``;
export const Equation = styled.div`
    margin-bottom: 10px;
`;
export const EquationOneTwoWrapper = styled.div`
    margin-left: 10px;
`;
export const StyledHeroContent = styled.div`
    background: #a73737;
    width: 60%;
    height: 100%;
    padding-top: 5rem;
`;


export const EquationResult = styled(Equation)`
    margin-left: 5.6rem;    
`
export const Plus = styled.div`
    position: absolute;
    bottom: 3.2rem;
    left: 6rem;
    font-size: 35px;
`;