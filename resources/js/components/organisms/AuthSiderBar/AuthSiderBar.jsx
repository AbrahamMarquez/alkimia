import React from "react";
import { NavLink } from "react-router-dom";

//Assets
import Home from "../../../assets/Auth/home.svg";
import Map from "../../../assets/Auth/localizacion.svg";
import Destino from "../../../assets/Auth/destino.svg";
import Experex from "../../../assets/Auth/experec.svg";
import Rute from "../../../assets/Auth/rute.svg";
import Car from "../../../assets/Auth/car.svg";
import Perfil from "../../../assets/Auth/perfil.svg";
import Corazon from "../../../assets/Auth/corazon.svg";
import Money from "../../../assets/Auth/money.svg";
import Cartera from "../../../assets/Auth/cartera.svg";
import Contact from "../../../assets/Auth/comentario.svg";
import Legals from "../../../assets/Auth/legales.svg";
import LogOut from "../../../assets/Auth/logout.svg";

import BackgroundImage from '../../../assets/Auth/bg1.png'

import "./SideBar.scss"


const AuthSiderBar = () => {
    const links = [
        { id: 1, link: "/home", title: "Home", icon: Home },
        { id: 2, link: "/map", title: "Mapa", icon: Map },
        { id: 3, link: "/destiny", title: "Destinos", icon: Destino },
        { id: 4, link: "/experiences", title: "Experiencias", icon: Experex },
        { id: 5, link: "/rute", title: "Arma tu ruta", icon: Rute },
        { id: 6, link: "/products", title: "Productos", icon: Car },
        { id: 7, link: "/profile", title: "Mi perfil", icon: Perfil },
        { id: 8, link: "/favorite", title: "Favoritos", icon: Corazon },
        { id: 9, link: "/purchases", title: "Mis compras", icon: Money },
        { id: 10, link: "/coinPurse", title: "Mi monedero", icon: Cartera },
        { id: 11, link: "/contact", title: "Contacto", icon: Contact },
        { id: 12, link: "/legals", title: "Legales", icon: Legals },
        { id: 13, link: "/logout", title: "Cerrar sesión", icon: LogOut },
    ];

    return (
        <aside className="SideBar">
            <img src={BackgroundImage} alt="Alkimia" className="sideLogo" />

            <div className="links">
                {links.map(({ id, link, title, icon }) => (
                    <NavLink to={link} className="xsideBar" >
                        <img src={icon} alt="Icons" className="x-icons" id={id}/>
                        <div>{title}</div>
                    </NavLink>
                ))}
            </div>
        </aside>
    );
};

export default AuthSiderBar;
