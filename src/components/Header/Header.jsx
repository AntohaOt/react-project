import React from "react";
import "./Header.css";

import { AppRoute } from "../../path";

import { NavLink } from "react-router";

import { Layout } from '@consta/uikit/Layout';
import { Button } from '@consta/uikit/Button';


const Header = () => {
    return (
        <Layout className="header">
            <Layout className="header__nav">
                <Layout className="header__nav-buttons">
                    <NavLink to={AppRoute.main}>
                        <Button size='m' label="Главная" form="round" />
                    </NavLink>
                    <NavLink to={AppRoute.service}>
                        <Button size='m' label="Услуги" form="round" />
                    </NavLink>
                </Layout>
                <Layout className="header__registration">
                    <NavLink to={AppRoute.login}>
                        <Button size='m' label="Войти" form="round" />
                    </NavLink>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Header;