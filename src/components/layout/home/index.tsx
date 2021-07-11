import React, { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { StyledHomeLayout } from './home.style';

export default function HomeLayout({ component: Component, ...rest }: RouteProps & { component: ComponentType<any> }) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <StyledHomeLayout {...props}>
                    <Component {...props} />
                </StyledHomeLayout>
            )}
        />
    );
}
