import React, { useEffect, useState } from "react";

//Assets
import Alkimia from "../../../assets/icons/Alkimia.png";
import Menu from "../../../assets/icons/menu.svg";
import Close from "../../../assets/icons/close.svg";

import "./Header.scss";
import Button from "../../atoms/Button/Button";

const Header = ({ className }) => {
    const [openSide, setOpenSide] = useState(false);

    return (
        <>
            <nav className={`Header ${className}`}>
                <div>
                    <img src={Alkimia} alt="Logo" className="Header-logo" />
                </div>

                        <div className="navA">
                            <div onClick={() => setOpenSide(true)}>
                                <img
                                    src={Menu}
                                    alt="menu"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div
                                className={`HeadSide ${openSide && "OpenSide"}`}
                            >
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
                                        <a className="linkA" href="/">
                                            Inicio
                                        </a>
                                        <a className="linkA" href="/hosts">
                                            Anfitriones
                                        </a>
                                        <a className="linkA" href="/blog">
                                            Blog
                                        </a>
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
                        </div>

                        <div className="header-right">
                            <div className="enlaces-header">
                                <a className="linkA" href="/">
                                    Inicio
                                </a>
                                <a className="linkA" href="/hosts">
                                    Anfitriones
                                </a>
                                <a className="linkA" href="blog">
                                    Blog
                                </a>
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
            </nav>
        </>
    );
};

export default Header;
