import React, { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Header } from '../header';
import { StyledMainLayout } from './main.style';

export default function MainLayout({ component: Component, ...rest }: RouteProps & { component: ComponentType<any> }) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <StyledMainLayout {...props}>
                    <Header />
                    <Component {...props} />
                </StyledMainLayout>
            )}
        />
    );
}
