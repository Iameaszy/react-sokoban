import React, { ReactElement, useEffect, useState } from 'react';
import { Wrapper } from './board.style';

import levelFilePath from '../../assets/txt/Intro.txt';
import { getLevelString } from '../../utils/getLevelString';
import { getLevels } from '../../utils/getLevels';

export default function Board(): ReactElement {
    const [tiles, setTiles] = useState('');

    useEffect(() => {
        (async () => {
            console.log('hi');
            const res = await getLevelString(levelFilePath);
            if (res) {
                getLevels(res);
            }
        })();
    }, []);

    return <Wrapper>Hello</Wrapper>;
}
