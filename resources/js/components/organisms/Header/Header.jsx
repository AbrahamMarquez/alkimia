import React, { useEffect, useState } from "react";

//Assets
import Alkimia from "../../../assets/icons/Alkimia.png";
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
        var header = document.getElementById("HeaderColor")

        if(url.pathname === "/"){
            console.log("Aqui es el home")
            
            return header.style.background = "linear-gradient(120deg, #3a8dde 3%, #8331a7 47%, #df1683 100%)";
        }
        else if(url.pathname == "/hosts"){
            header.style.backgroundColor = "red";
        }
        
       
        
        console.log(url)
            
        
    }, [url]);

    return (
        <>
            <nav className={`Header ${className}`} id="HeaderColor">
                <div>
                    <img src={Alkimia} alt="Logo" className="Header-logo" />
                </div>

                <div className="navA">
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
                                <NavLink className="linkA" to="/">
                                    Inicio
                                </NavLink>
                                <NavLink className="linkA" to="/hosts">
                                    Anfitriones
                                </NavLink>
                                <NavLink className="linkA" to="/blog">
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
                    <div className="enlaces-header">
                        <NavLink className="linkA" to="/">
                            Inicio
                        </NavLink>
                        <NavLink className="linkA" to="/hosts">
                            Anfitriones
                        </NavLink>
                        <NavLink className="linkA" to="blog">
                            Blog
                        </NavLink>
                    </div>

                    <Button
                        btnTitle={"¡Comenzar ahora!"}
                        height={"40px"}
                        className={"border"}
                        onClick={() => navigate("/start")}
                    />
                    <Button
                        btnTitle={"Descargar la app"}
                        height={"40px"}
                        className={"border"}
                        onClick={() => navigate("downloadApp")}
                    />
                </div>
            </nav>
        </>
    );
};

export default Header;
