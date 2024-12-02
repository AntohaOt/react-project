import React from 'react';
import './Footer.css';

import { AppRoute } from "../../path";

import { NavLink } from "react-router";

import { Layout } from '@consta/uikit/Layout';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';


const Footer = () => {
    return (
        <Layout className="footer">
            <Layout className="footer__nav">
                <Layout className="footer__nav-buttons">
                    <NavLink to={AppRoute.main}>
                        <Button size="m" label="Главная" form="round" />
                    </NavLink>
                    <NavLink to={AppRoute.service}>
                        <Button size="m" label="Услуги" form="round" />
                    </NavLink>
                </Layout>
            </Layout>
            <Text size='m' lineHeight="m" view="primary" className="footer__title">
                © Проект на реакте
            </Text>
        </Layout>
    );
};

export default Footer;
