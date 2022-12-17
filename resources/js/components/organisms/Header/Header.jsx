import React, { useEffect, useState } from "react";

//Assets
import Alkimia from "../../../assets/icons/Alkimia.png";
import Menu from "../../../assets/icons/menu.svg";
import Close from "../../../assets/icons/close.svg";

import "./Header.scss";
import Button from "../../atoms/Button/Button";

const Header = ({className}) => {
    const [openSide, setOpenSide] = useState(false);
    const [screen, setScreen] = useState(null);

    useEffect(() => {
        setScreen(window.screen.width);
    }, [screen]);

    return (
        <>
            <nav className={`Header ${className}`}>
                <div>
                    <img src={Alkimia} alt="Logo" className="Header-logo" />
                </div>

                {screen <= 1024 ? (
                    <>
                        <div onClick={() => setOpenSide(true)}>
                            <img src={Menu} alt="menu" width={30} height={30} />
                        </div>
                        <div className={`HeadSide ${openSide && "OpenSide"}`}>
                            <div className="side-black"></div>
                            <div className="side-color">
                                <div
                                    className="Side-close"
                                    onClick={() => setOpenSide(false)}
                                >
                                    <img
                                        src={Close}
                                        alt="Close"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <div className="Side-links">
                                    <p>Inicio</p>
                                    <p>Anfitriones</p>
                                    <p>Blog</p>
                                </div>
                                <div className="side-btns">
                                    <Button
                                        btnTitle={"¡Comenzar ahora!"}
                                        className={"border"}
                                    />
                                    <Button
                                        btnTitle={"Descargar la app"}
                                        className={"border"}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="header-right">
                            <div className="enlaces-header">
                                <p>Inicio</p>
                                <p>Anfitriones</p>
                                <p>Blog</p>
                            </div>

                            <Button
                                btnTitle={"¡Comenzar ahora!"}
                                height={"40px"}
                                className={"border"}
                            />
                            <Button
                                btnTitle={"Descargar la app"}
                                height={"40px"}
                                className={"border"}
                            />
                        </div>
                    </>
                )}
            </nav>
        </>
    );
};

export default Header;
