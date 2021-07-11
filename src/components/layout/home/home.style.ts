import styled from 'styled-components/macro';
import { boardBackground } from '../../../assets/images';

export const StyledHomeLayout = styled.div`
    background-color: black;
    background-image: url(${boardBackground});
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
