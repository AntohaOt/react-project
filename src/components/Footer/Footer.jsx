import React from "react";
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

const Footer = () => {
    const currentUserID = localStorage.getItem('id');
    const currentYear = new Date().getFullYear();

    return (
        <>
        {!currentUserID ?
            <footer className="footer">
                <div className="footer__left">
                    <NavLink style={{marginRight: "1rem"}} to="/" className="footer__nav-button" activeclassname="active">
                        <Button size="m" label="Главная" form="round" />
                    </NavLink>
                </div>
                <div className="footer__right">
                    <Text size='m' lineHeight="m" view="primary" className="footer__title">
                        © {currentYear} Techocreative
                    </Text>
                </div>
            </footer>
          : <footer className="footer">
            <div className="footer__left">
                <NavLink style={{marginRight: "1rem"}} to="/" className="footer__nav-button" activeclassname="active">
                    <Button size="m" label="Главная"  form="round" />
                </NavLink>
                <NavLink to="/services" className="footer__nav-button" activeclassname="active">
                    <Button size="m" label="Услуги" form="round" />
                </NavLink>
            </div>
            <div className="footer__right">
                <Text size='m' lineHeight="m" view="primary" className="footer__title">
                    © {currentYear} TechnoCreative
                </Text>
            </div>
        </footer>
        }
        </> 
    );
};

export default Footer;
