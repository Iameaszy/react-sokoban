import { StyledBlock } from './block.style';
import React, { ReactElement } from 'react';
import { BlockProps } from './types';

export const Block = (props: BlockProps): ReactElement => <StyledBlock {...props} />;
