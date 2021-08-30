import styled from 'styled-components/macro';
import { boardBackground } from '../../../assets/images';
import { Header } from '../header';

export const StyledMainLayout = styled.div`
    background-color: black;
    background-image: url(${boardBackground});
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const StyledMainBody = styled.main`
    display: flex;
    height: 100%;
`;
