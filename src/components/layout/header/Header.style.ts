import styled, { css } from 'styled-components/macro';

const InlineBlock = css`
    display: inline-block;
    background-color: #1a7995;
    margin-right: 10px;
    border-radius: 5px;
    width: 8rem;
    text-align: center;
    box-sizing: border-box;
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    padding: 10px 30px;
    color: white;
    margin-bottom: 10px;
`;

export const StyledHeader = styled.div`
    box-sizing: border-box;
    margin-bottom: 10px;
    background: #6a3f2b;
    padding: 5px;
`;

export const StageBar = styled.div`
    ${InlineBlock}
`;

export const NameBar = styled.div`
    ${InlineBlock};
`;
export const TimeBar = styled.div`
    ${InlineBlock}
`;
export const ScoreBar = styled.div`
    ${InlineBlock}
`;

export const EquationsBar = styled.div``;

export const EquationBar = styled.div`
    ${InlineBlock}
    display:flex;
    margin: 0;
    margin-bottom: 10px;
    padding: 5px;
    height: 2.3rem;
`;

export const BarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NameStageBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EquationText = styled.span`
    margin-right: 10px;
`;
