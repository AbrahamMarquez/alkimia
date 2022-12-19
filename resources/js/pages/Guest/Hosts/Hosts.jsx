import React, { useState } from "react";
import Slider from "react-slick";
import Button from "../../../components/atoms/Button/Button";
import Header from "../../../components/organisms/Header/Header";

//Assets 😁
import FondoA from "../../../assets/icons/fono.jpg";
import ArrowUp from "../../../assets/icons/arrowUp.svg";
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import Plus from "../../../assets/icons/plus.svg";

import "./Hosts.scss";

const Hosts = () => {
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const position = [
        {
            id: 1,
            pos: "-Vinícolas y viñedos",
        },
        {
            id: 2,
            pos: "-Restaurantes o experiencias gastronómicas",
        },
        {
            id: 3,
            pos: "-Hoteles Boutique, haciendas y spa's",
        },
        {
            id: 4,
            pos: "-Tour operadoras o agencias de viajes",
        },
        {
            id: 5,
            pos: "-Guías turísticos y someliers",
        },
        {
            id: 6,
            pos: "-Proveedores de actividades de turismo natural, aventura, etc.",
        },
    ];

    const questions = [
        {
            id: 1,
            question: "¿Cómo registro mi negocio?",
            icon: Plus,
        },
        {
            id: 2,
            question: "¿Debo pagar para estar en ALKIMIA?",
            icon: Plus,
        },
        {
            id: 3,
            question: "¿Cuál es el costo de los servicios o productos?",
            icon: Plus,
        },
        {
            id: 4,
            question: "¿Cómo sé si alguien hizo una reserva?",
            icon: Plus,
        },
        {
            id: 5,
            question: "¿Cómo puedo vender mis productos?",
            icon: Plus,
        },
        {
            id: 6,
            question: "¿Quién administra la página de mi negocio?",
            icon: Plus,
        },
        {
            id: 7,
            question: "¿Puedo elegir las fotos que aparecen en mi página?",
            icon: Plus,
        },
        {
            id: 77,
            question: "¿Puedo elegir las fotos que aparecen en mi página?",
            icon: Plus,
        },
        {
            id: 8,
            question: "¿Cómo añadir servicios o productos a mi página?",
            icon: Plus,
        },
        {
            id: 9,
            question: "¿Qué pasa si necesito cancelar una reserva/venta?",
            icon: Plus,
        },
        {
            id: 10,
            question: "¿Qué pasa si alguien cancela su reserva/compra?",
            icon: Plus,
        },
        {
            id: 11,
            question: "¿Cómo se define el calendario de cada anfitrión?",
            icon: Plus,
        },
        {
            id: 12,
            question: "¿En qué divisa se muestran los precios?",
            icon: Plus,
        },
        {
            id: 13,
            question: "¿ALKIMIA me ayuda a crear mis experiencias?",
            icon: Plus,
        },
        {
            id: 14,
            question: "¿Puedo ser anfitrión si sólo ofrezco catas?",
            icon: Plus,
        },
        {
            id: 15,
            question: "¿Puedo ser anfitrión si doy tours guiados?",
            icon: Plus,
        },
        {
            id: 16,
            question: "¿ALKIMIA hace la gestión de envío de productos?",
            icon: Plus,
        },
        {
            id: 17,
            question: "¿Quién paga el envío de mis ventas online?",
            icon: Plus,
        },
    ];

    return (
        <>
            <Header />
            <div className="hosts">
                <div className="secct1">
                    <div className="secct-1-A">¿Qué es ser anfitrión?</div>
                    <div className="secct-1-B">
                        <p className="secct-B-body">
                            Ser anfitrión es formar parte de una comunidad
                            dedicada a atender la necesidades de nuestr@s
                            alkimistas, y crear siempre "experiencias mágicas".
                        </p>
                        <p className="secct-B-body">
                            Un anfitrión de ALKIMIA es un proveedor de servicios
                            enoturísticos, ya sea desde una vinícola, hasta un
                            proveedor de experiencias entorno al vino.
                        </p>
                    </div>
                    <div className="secct-B-body secct-c">
                        <p>Nuestros anfitriones pueden ser:</p>
                        {position.map((pos) => (
                            <span key={pos.id}>
                                {pos.pos} <br />
                            </span>
                        ))}
                    </div>
                </div>
                <div className="first-div-sep"></div>
                <div className="secct2">
                    <div>
                        <h4 className="secct-2-title">
                            ¿Quieres ser anfitrión?
                        </h4>
                        <p className="secct-2-body">
                            Conviértete en anfitrión y deja que miles de
                            alkimistas visiten tu vinícola, hotel, restaurante,
                            o cualquier negocio que ofrezca experiencias y
                            servicios enoturísticos.
                        </p>
                        <div className="secct-2-btn">
                            <Button className={"border"} btnTitle={"Unirme"} />
                        </div>
                    </div>
                </div>
                <div className="first-div-sep"></div>

                <div className="secct3">
                    <div className="secct-3-photo">
                        <img src={FondoA} alt="fondo" className="secct-3-img" />
                    </div>
                    <div className="secct-3-B">
                        <h3 className="secct-3-title">
                            ¿Preguntas más comunes de Anfitriones?
                        </h3>
                        <div className="secct-3-arrowUp">
                            <img
                                src={ArrowUp}
                                alt="ArrowUp"
                                className="secct-3-arrow"
                            />
                        </div>
                        <div className="secct-3-scroll" id="scrollPlus">
                            {/* <Slider {...setting}>
                                {questions.map((ques) => (
                                    <div className="secct-3-card" key={ques.id}>
                                        <p className="secct-3-question">
                                            {ques.question}
                                        </p>
                                        <div className="secct-3-plus">
                                            <img
                                                src={ques.icon}
                                                alt="Icon"
                                                className="secct-3-Icon"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider> */}
                        </div>
                        <div
                            className="secct-3-arrowUp"
                            onClick={() => HandleScroll()}
                        >
                            <img
                                src={ArrowDown}
                                alt="ArrowDown"
                                className="secct-3-arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hosts;
