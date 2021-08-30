import React, { ReactElement } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Hero } from '../../components/hero';
import { StyledMission } from './Mission.style';
import { missions } from './data';
import { Cast } from '../../utils/cast';

export default function MissionScreen(): ReactElement {
    const { stage } = useParams<{ stage?: string }>();

    const history = useHistory();

    const heroHandler = () => history.push('/playground');

    return (
        <StyledMission>
            <Hero {...missions[Cast<number>(stage) - 1 || 0]} heroHandler={heroHandler} />
        </StyledMission>
    );
}
