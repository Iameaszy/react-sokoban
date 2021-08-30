import React from 'react';
import { Meta } from '@storybook/react';

import { Hint as HintComponent } from './index';

export default {
    title: 'Components/Hint',
    component: HintComponent,
} as Meta;

export const Hint: React.VFC<Record<string, never>> = () => <HintComponent />;
