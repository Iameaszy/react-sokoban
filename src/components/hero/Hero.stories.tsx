import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Hero as HeroComponent } from './index';
import { Props } from './types';

export default {
    title: 'Components/Hero',
    component: HeroComponent,
} as Meta;

const Template: Story<Props> = (args) => <HeroComponent {...args}>X</HeroComponent>;

export const Hero = Template.bind({});
Hero.args = {
    title: 'Stage 1',
    body: 'Nonsense hauiyui pauupiuasdy ayynaidsy uiaspyuiyiua suyasuyiuyp uaishpui uyausyd uy padysu ysdyy adyausydpuiyi dasyyds y yadpadiu iyadiyudaysiuyp idusa   sa yyuiyasiu  y yiuasy ouyiuyasdiu yuisadyuyiu',
    stage: 1,
    mission: 'Push the box to the desired location to generate algebraic equations',
};
