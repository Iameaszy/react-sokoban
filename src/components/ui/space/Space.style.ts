import styled from 'styled-components/macro';

export const StyledSpace = styled.div`
    border: ${(boxColor) => boxColor ? `solid ${boxColor}` : "none"};
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    box-sizing: border-box;
`;
