import React, { useEffect, useState } from "react";
import InputSearch from "../../../components/atoms/InputSearch/InputSearch";
import Header from "../../../components/organisms/Header/Header";
import Button from "../../../components/atoms/Button/Button";
import CarouselSlick from "../../../components/organisms/CarouselSlick/CarouselSlick";
import Footer from "../../../components/organisms/Footer/Footer";

//assets
import Arrow from "../../../assets/icons/arrow.svg";
import Apoyo from "../../../assets/icons/apoyo.svg";
import Grape from "../../../assets/icons/grape.svg";
import Shape from "../../../assets/icons/Shape.svg";
import Pago from "../../../assets/icons/pago.svg";
import Phone from "../../../assets/icons/phoneA.png";
import Vino from "../../../assets//icons/vino.png";

import Bed from "../../../assets//icons/test/034-bed.svg";
import Vela from "../../../assets//icons/test/Combined Shape.svg";
import House from "../../../assets//icons/test/Combined Shape (1).svg";
import Botella from "../../../assets//icons/test/Combined Shape (2).svg";
import Granja from "../../../assets//icons/test/Combined Shape (3).svg";
import Food from "../../../assets//icons/test/Combined Shape (4).svg";
import Autencilios from "../../../assets//icons/test/Combined Shape (5).svg";
import Sol from "../../../assets//icons/test/Combined Shape (6).svg";
import Globo from "../../../assets//icons/test/globo-aerostatico.svg";

import Cheese from "../../../assets/icons/cheese.png";
import Campeche from "../../../assets/icons/campeche.png";
import Breanch_grape from "../../../assets/icons/breanch_grape.png";
import Olive from "../../../assets/icons/olive.png";

import AlkimiaB from "../../../assets/icons/alkimiaB.png";
import GoogleStore from "../../../assets/icons/googleStore.png";
import AppleStore from "../../../assets/icons/appleStore.png";
import PhoneB from "../../../assets/icons/phoneB.png";

import Experiencias from "../../../assets/icons/Experiencias.svg";

import "./LandingPage.scss";
import PostCardViewx from "../../../components/molecules/PostCardView/PostCardViewx";

const LandingPage = () => {
    const [openPlace, setOpenPlace] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const helpTravel = [
        {
            id: 1,
            img: Grape,
            title: "Viñedos Mexicanos",
            descriptions:
                "Encuentra cientos de experiencias de enoturismo en todo México",
        },
        {
            id: 2,
            img: Shape,
            title: "Arma tu ruta",
            descriptions:
                "Comienza a crear tus propias rutas con nuestras sugerencias de experiencias cercanas a tu destino",
        },
        {
            id: 3,
            img: Pago,
            title: "Pago seguro",
            descriptions:
                "Reserva y paga desde la app con un proceso fácil y confiable",
        },
        {
            id: 4,
            img: Apoyo,
            title: "Soporte",
            descriptions:
                "Si necesitas ayuda nuestros expertos estarán disponibles todo el tiempo para guiarte a los mejores destinos",
        },
    ];

    const destPlace = [
        {
            place: "Aguascalientes",
        },
        {
            place: "Baja california",
        },
        {
            place: "Chihuahua",
        },
        {
            place: "Durango",
        },
        {
            place: "Guanajato",
        },
        {
            place: "Jalisco",
        },
        {
            place: "Puebla",
        },
        {
            place: "Queretaro",
        },
        {
            place: "Zacatecas",
        },
        {
            place: "Sonora",
        },
        {
            place: "Coahuila",
        },
        {
            place: "Nurvo León",
        },
        {
            place: "San Luis Potosi",
        },
    ];

    const category = [
        {
            category: "Viñedos",
        },
        {
            category: "Naturaleza",
        },
        {
            category: "Welness",
        },
        {
            category: "Hospedaje",
        },
        {
            category: "Cartas de vinos",
        },
        {
            category: "Productos",
        },
        {
            category: "Experiencias",
        },
        {
            category: "Eno-Tours",
        },
        {
            category: "Gastronomía",
        },
    ];

    const anfintriones = [
        {
            img: House,
            title: "Viñedos",
        },
        {
            img: Sol,
            title: "Naturaleza",
        },
        {
            img: Vela,
            title: "Welness",
        },
        {
            img: Bed,
            title: "Hospedaje",
        },
        {
            img: Food,
            title: "Cartas de vino",
        },
        {
            img: Botella,
            title: "Prodductos",
        },
        {
            img: Globo,
            title: "Experiencias",
        },
        {
            img: Granja,
            title: "Eno-Tours",
        },
        {
            img: Autencilios,
            title: "Gastronomia",
        },
    ];

    const blog = [
        {
            id: 1,
            img: Cheese,
            title: "Conoce México a través de sus Quesos",
            descriptions: "México es un país lleno de sabores y hoy toca.....",
        },
        {
            id: 2,
            img: Campeche,
            title: "Guía de viaje por Campeche",
            descriptions: "Desde zonas arqueológicas milenarias....",
        },
        {
            id: 3,
            img: Breanch_grape,
            title: "Las uvas y sus grandes aportaciones a la salud de tu piel",
            descriptions: "Desde la antigüedad....",
        },
        {
            id: 4,
            img: Olive,
            title: "El olivo en México",
            descriptions: "Primero que nada, debemos tener claro...",
        },
    ];

    const products = [
        {
            note: true,
            colab: true,
            image: Experiencias,
        },
        {
            note: false,
            colab: false,
            image: Experiencias,
        },
        {
            note: true,
            colab: true,
            image: Experiencias,
        },
        {
            note: false,
            colab: false,
            image: Experiencias,
        },
        {
            note: true,
            colab: true,
            image: Experiencias,
        },
        {
            note: false,
            colab: false,
            image: Experiencias,
        },
    ];

    return (
        <>
            <Header />
            <div className="LandingPage">
                <div className="subLandingPage">
                    <img
                        src={Vino}
                        alt="background"
                        className="sub-background"
                    />
                    <div className="sub-filter-img">
                        <InputSearch
                            className={"inputsearch"}
                            sizeLup={"tamanio"}
                            sizeSi={"12px"}
                            placeholder={"¿Cual es tu siguiente destino?"}
                        />
                        <div className="landing-btn-search">
                            <div
                                className="btn-select"
                                onClick={() => {
                                    setOpenPlace(!openPlace);
                                    setOpenCategory(false);
                                }}
                            >
                                <p className="select-pick">Destino</p>
                                <img
                                    src={Arrow}
                                    alt="arrow"
                                    className="arrow"
                                />
                            </div>
                            <div
                                className="btn-select"
                                onClick={() => {
                                    setOpenCategory(!openCategory);
                                    setOpenPlace(false);
                                }}
                            >
                                <p className="select-pick">Categoría</p>
                                <img
                                    src={Arrow}
                                    alt="arrow"
                                    className="arrow"
                                />
                            </div>
                            <div className="btn-select btns">
                                <Button
                                    btnTitle={"Buscar"}
                                    className={"solid"}
                                />
                            </div>
                            <div
                                className={`place-selct-pick ${
                                    openPlace && "place-hidden"
                                }`}
                            >
                                {destPlace.map((place) => (
                                    <div
                                        key={place.place}
                                        className="place-pick"
                                    >
                                        <input
                                            type="checkbox"
                                            className="checkBox"
                                        />
                                        <p className="p-placePick">
                                            {place.place}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`category-selct-pick ${
                                    openCategory && "category-hidden"
                                }`}
                            >
                                {category.map((item) => (
                                    <div
                                        key={item.category}
                                        className="category-pick"
                                    >
                                        <input
                                            type="checkbox"
                                            className="checkBoxCat"
                                        />
                                        <p className="p-categoryPick">
                                            {item.category}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-secct2">
                    {helpTravel.map((item) => (
                        <div key={item.id} className="secct2-card">
                            <img
                                src={item.img}
                                alt="imge"
                                width={40}
                                height={40}
                            />
                            <p className="secct2-title">{item.title}</p>
                            <p className="secct2-desc">{item.descriptions}</p>
                        </div>
                    ))}
                </div>
                <div className="secct-3">
                    <img src={Phone} alt="phone" width={225} height={250} />
                    <h3 className="secct3-title">¿Qué es ALKIMIA?</h3>
                    <p className="secct3-subTitle">
                        Ofrecemos las mejores experiencias de enoturismo en
                        México para los amantes del vino.
                    </p>
                    <p className="secct3-subTitle">
                        ALKMIA TRAVEL es la primera plataforma digital de
                        enoturismo en México, que combina todos los elementos
                        que hacen de una actividad en torno al vino, una
                        experiencia mágica y memorable. A través de nuestra
                        plataforma digital, podrás reservar tu hospedaje y
                        recorridos a las mejores vinícolas del país, hoteles
                        boutique, haciendas, museos, restaurantes y un sinfín de
                        actividades más. Además, somos creadores de
                        experiencias, tenemos tours privados y semiprivados que
                        no encontrarás en ningún otro lugar.
                    </p>
                </div>
                <div className="secct4">
                    <div className="secct-4-body">
                        <h1 className="secct4-title">
                            Visita los mejores viñedos mexicanos
                        </h1>
                        <p className="secct-4-description">
                            El mundo del vino mexicano es mucho más grande de lo
                            que piensan. Nuevos viñedos abren sus puestas
                            constantemente, ofreciendo nuevas y emocionantes
                            experiencias por descubrir. Empieza a planear tu
                            próxima visita a los viñedos mexicanos que tenemos
                            en nuestra app.
                        </p>
                    </div>

                    {/* Aqui es donde va el mapa */}
                    <div className="secct4-map"></div>
                    {/* Aqui termina el mapa */}
                    <div className="secct5">
                        <h1 className="secct-5-title">
                            Descubre todo tipo de anfintriones
                        </h1>
                        <div className="secct-5-anfin">
                            {anfintriones.map((item) => (
                                <div
                                    className="secct5-descovery"
                                    key={item.title}
                                >
                                    <div className="descovey-img">
                                        <img
                                            src={item.img}
                                            alt="Descovery"
                                            width={30.36}
                                            height={30.36}
                                        />
                                    </div>
                                    <p className="secct5-descrip">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="secct6">
                        <div className="secct-6-A">
                            <h2 className="secct-6-A-title">
                                Descubre experiencias mágicas
                            </h2>
                            <span className="secct-6-A-des">
                                Comienza a vivir el apasionante mundo del vino
                            </span>
                            <br />
                            <span className="secct-6-A-des">
                                Visita los mejores destinos del enoturismo en
                                México
                            </span>
                        </div>
                        <CarouselSlick
                            mappedItems={products.map(
                                ({ colab, note, image }) => (
                                    <PostCardViewx
                                        colab={colab}
                                        note={note}
                                        image={image}
                                    />
                                )
                            )}
                        />
                    </div>
                    <div className="secct7">
                        <h1 className="secct7-title">¿Quieres ser anfitrión</h1>
                        <div className="secct7-bodyA">
                            Conviértete en anfitrión y deja que miles de
                            alkimistas visiten tu vinícola, hotel, restaurante,
                            o cualquier negocio que ofrezca experiencias y
                            servicios enoturísticos. Si quieres saber más a
                            cerca de volverte anfitrión, da click
                        </div>
                        <p className="secct7-bodyA marg">
                            Si quieres saber más a cerca de volverte anfitrión,
                            da click
                        </p>
                        <div className="secct7-btn">
                            <div style={{ width: 160 }}>
                                <Button
                                    btnTitle={"Saber más"}
                                    className={"border"}
                                    height={"40px"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="secct8">
                        <h1 className="secct8-title">Blog</h1>
                        <div className="secct-8-body">
                            {blog.map((blog) => (
                                <div className="card-blog" key={blog.id}>
                                    <div className="card-container">
                                        <img
                                            src={blog.img}
                                            alt="Card"
                                            className="card-img"
                                        />
                                    </div>
                                    <p className="card-title">{blog.title}</p>
                                    <p className="card-descrip">
                                        {blog.descriptions}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="secct9">
                        <div className="secct-9-texto">
                            <div className="secct-9-container-logo">
                                <img
                                    src={AlkimiaB}
                                    alt="Alkimia"
                                    className="secct-9-logo"
                                />
                            </div>
                            <div className="secct-body">
                                <h3 className="secct-body-title">
                                    Descarga la app
                                </h3>
                                <p className="secct-body-span">
                                    {" "}
                                    y comienza a catar México
                                </p>
                                <p className="secct-body-descr">
                                    Alkimia es la primer app de enoturismo en
                                    México. Descarga la app y reserva tus
                                    visitas a vinícolas, descubre viñedos,
                                    gastronomía de autor, hoteles únicos,
                                    experiencias y mucho más.
                                </p>
                                <div className="secct-9-btn">
                                    <div className="secct-9-cont">
                                        <Button
                                            btnTitle={"Saber más"}
                                            className={"border"}
                                            height={"40px"}
                                        />
                                    </div>
                                </div>
                                <div className="secct-9-Store">
                                    <div className="containStore">
                                        <img
                                            src={GoogleStore}
                                            alt="GoogleStore"
                                            className="appStore"
                                        />
                                    </div>
                                    <div className="containStore">
                                        <img
                                            src={AppleStore}
                                            alt="AppleStore"
                                            className="appStore"
                                        />
                                    </div>
                                </div>
                                <div className="div-hiiden"></div>
                            </div>
                        </div>

                        <div className="secct-phone-container">
                            <div className="secct-9-sub">
                                <img
                                    src={PhoneB}
                                    alt="phone"
                                    className="phone-secc"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="secct404"></div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
