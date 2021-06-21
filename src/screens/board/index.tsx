import React, { ReactElement, useEffect, useState } from 'react';
import { Wrapper } from './board.style';

import levelFilePath from '../../assets/txt/Intro.txt';
import { getLevelsFileData } from '../../utils/getLevelsFileData';
import { getLevelsFromText } from '../../utils/getLevelsFromText';

export default function Board(): ReactElement {
    const [tiles, setTiles] = useState('');

    useEffect(() => {
        (async () => {
            console.log('hi');
            const res = await getLevelsFileData(levelFilePath);
            if (res) {
                getLevelsFromText(res);
            }
        })();
    }, []);

    return <Wrapper>Hello</Wrapper>;
}
