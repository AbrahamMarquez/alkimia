import React, { useEffect, useState } from "react";

//Assets
import Alkimia from "../../../assets/icons/Alkimia.png";
import AlkimiaColor from "../../../assets/icons/alkimiaColor.png";
import Menu from "../../../assets/icons/menu.svg";
import Close from "../../../assets/icons/close.svg";

import "./Header.scss";
import Button from "../../atoms/Button/Button";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

const Header = ({ className }) => {
    const [openSide, setOpenSide] = useState(false);
    const navigate = useNavigate();

    const url = useLocation();

    useEffect(() => {
        var header = document.getElementById("HeaderColor");
        var side = document.getElementById("sideColor");

        if (url.pathname === "/") {
            header.style.background =
                "linear-gradient(120deg, #3a8dde 3%, #8331a7 47%, #df1683 100%)";
            side.style.background =
                "linear-gradient(-120deg, #3a8dde 3%, #8331a7 47%, #df1683 100%)";
        } else {
            header.style.background = "#faf7f7";
            side.style.background = "#faf7f7";
            header.style.boxShadow = "0 1px 25px rgba(0,0,0,0.2)";
            header.style.zIndex = "1";
        }
    }, [url]);

    const navLinks = ({ isActive }) => {
        return {
            color: isActive ? "#df1683" : null,
        };
    };

    return (
        <>
            <nav className="Header" id="HeaderColor">
                <div>
                    <img
                        src={url.pathname === "/" ? Alkimia : AlkimiaColor}
                        alt="Logo"
                        className="Header-logo"
                    />
                </div>

                <div className="navA">
                    <div onClick={() => setOpenSide(true)}>
                        <img src={Menu} alt="menu" width={30} height={30} />
                    </div>
                    <div className={`HeadSide ${openSide && "OpenSide"}`}>
                        <div className="side-black"></div>
                        <div className="side-color" id="sideColor">
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
                                <NavLink
                                    className="linkA"
                                    to="/"
                                    style={navLinks}
                                >
                                    Inicio
                                </NavLink>
                                <NavLink
                                    className="linkA"
                                    to="/hosts"
                                    style={navLinks}
                                >
                                    Anfitriones
                                </NavLink>
                                <NavLink
                                    className="linkA"
                                    to="/blog"
                                    style={navLinks}
                                >
                                    Blog
                                </NavLink>
                            </div>
                            <div className="side-btns">
                                <Button
                                    btnTitle={"¡Comenzar ahora!"}
                                    className={"border"}
                                />
                                <Button
                                    btnTitle={"Descargar la app"}
                                    className={"border"}
                                    onClick={() => navigate("downloadApp")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-right">
                    <div
                        className={
                            url.pathname === "/"
                                ? "enlaces-header"
                                : "newEnlaces-header"
                        }
                    >
                        <NavLink className="linkA" to="/" style={navLinks}>
                            Inicio
                        </NavLink>
                        <NavLink className="linkA" to="/hosts" style={navLinks}>
                            Anfitriones
                        </NavLink>
                        <NavLink className="linkA" to="blog" style={navLinks}>
                            Blog
                        </NavLink>
                    </div>
                    <div className="h-return">
                        <Button
                            btnTitle={"¡Comenzar ahora!"}
                            height={"40px"}
                            className={
                                url.pathname === "/" ? "border" : "border-color"
                            }
                            onClick={() => navigate("/start")}
                        />
                    </div>
                    <div className="h-return">
                        <Button
                            btnTitle={"Descargar la app"}
                            height={"40px"}
                            className={
                                url.pathname === "/" ? "border" : "border-color"
                            }
                            onClick={() => navigate("downloadApp")}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
