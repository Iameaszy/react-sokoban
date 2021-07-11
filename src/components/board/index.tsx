import React, { ReactElement } from 'react';
import { GameCharacters } from '../../providers/game-provider/types';
import { CharacterContainer, StyledBoard, StyledRow } from './Board.style';
import { Props } from './types';
import { getCharacter } from './utils/getCharacter';

export const Board = ({ board }: Props): ReactElement => (
    <StyledBoard>
        {board.map((row, index) => (
            <StyledRow key={index}>
                {row.map((col: GameCharacters, index) => (
                    <CharacterContainer key={index}>{getCharacter(col)}</CharacterContainer>
                ))}
            </StyledRow>
        ))}
    </StyledBoard>
);
