// Button.stories.js

import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import Board from './index';

export default {
    title: 'Screens/Board',
    component: Board,
} as Meta;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
export const Primary = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState('Secondary');
    const [isPrimary, setIsPrimary] = useState(false);

    // Sets a click handler to change the label's value
    const handleOnChange = () => {
        if (!isPrimary) {
            setIsPrimary(true);
            setValue('Primary');
        }
    };
    return <Board />;
};
