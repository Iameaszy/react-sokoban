import { StyledBlock } from './Block.style';
import React, { ReactElement } from 'react';
import { BlockProps } from './types';

export const Block = (props: BlockProps): ReactElement => <StyledBlock {...props} />;
