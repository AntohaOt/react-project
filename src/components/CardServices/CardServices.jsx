import React, { useEffect, useState } from "react";
import { AppRoute } from "../../path";
import { Loader } from "@consta/uikit/Loader";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { NavLink } from "react-router-dom";
import "./CardServices.css";
import { fakeServices } from "../../__mocks__/FakeDate";
import { fetchServices } from "../../store/Api";


const CardServices = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchServices()()
            .then((data) => {
                setServices(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="card-list">
            {isLoading ? (
                <Loader size="m" />
            ) : (
                services.map((item) => (
                    <NavLink
                        to={`${AppRoute.service}/${item.id}`}
                        key={item.id}
                        className="card-link"
                    >
                        <Card
                            verticalSpace="m"
                            horizontalSpace="l"
                            shadow
                            border
                            className="card-item"
                        >
                            <img
                                src={fakeServices[item.id - 1]?.image || ""}
                                alt={item.name}
                                className="card-image"
                            />
                            <div className="card-content">
                                <p size="l" weight="bold" className="card-title">
                                    {item.name}
                                </p>
                                <Text size="s" view="secondary" className="card-description">
                                    {item.description}
                                </Text>
                            </div>
                        </Card>
                    </NavLink>
                ))
            )}
        </div>
    );
};

export default CardServices;
