import React, { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Hint } from '../../hint';
import { Steps } from '../../steps';
import { Header } from '../header';
import { StyledMainLayout, StyledMainBody } from './main.style';

export default function MainLayout({ component: Component, ...rest }: RouteProps & { component: ComponentType<any> }) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <StyledMainLayout {...props}>
                    <Header />
                    <StyledMainBody>
                        <Component {...props} />
                        {/* <Steps /> */}
                        <Hint />
                    </StyledMainBody>
                </StyledMainLayout>
            )}
        />
    );
}
