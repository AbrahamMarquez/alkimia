import React from "react";

//Assets 🤣
import Alkimia from "../../../assets/icons/alkimiaB.png";
import AppleStore from "../../../assets/icons/appleStore.png";
import GoogleStore from "../../../assets/icons/googleStore.png";
import PhoneGrape from "../../../assets/icons/phoneGrape.png";
import HappyPeo from "../../../assets/icons/happyPeo.jpeg";

import "./DownloadApp.scss";
import Button from "../../../components/atoms/Button/Button";

const DownloadApp = () => {
    return (
        <div className="DownloadApp">
            <div className="dsecct1">
                <div className="dseect-1-container-a">
                    <div className="dsecct-1-logo">
                        <img
                            src={Alkimia}
                            alt="Logo"
                            className="dsecct-1-alkimia"
                        />
                    </div>
                    <div className="dsecct-1-download">
                        <p className="dsecct-1-title">Descarga la app</p>
                    </div>
                    <div className="dsecct-1-descrip">
                        <p className="dsecct-1-sub">
                            Y comienza a catar México.
                        </p>
                        <p className="dsecct-1-text">
                            Alkimia es la primera app de enoturismo en México.
                            Descarga la app y reserva tus visitas a vinícolas,
                            descubre viñedos, gastronomía de autor, hoteles
                            únicos, experiencias y mucho más.
                        </p>
                    </div>
                    <div className="dsecct-1-container-store">
                        <img
                            src={AppleStore}
                            alt="Store"
                            className="dsecct-1-apple"
                        />
                        <img
                            src={GoogleStore}
                            alt="Store"
                            className="dsecct-1-google"
                        />
                    </div>
                </div>
                <div className="dseect-1-container-b">
                    <div>
                        <div className="dseect-1-phone">
                            <div className="dsecct-1-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/6hW1lU0zSXw?autoplay=1&mute=1&controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dsecct2">
                <img
                    src={HappyPeo}
                    alt="Happy People"
                    className="dsecct-2-happy"
                />
            </div>
            <div className="dsecct3">
                <div className="dsecct-3-container-title">
                    <p className="dsecct-3-container-title">
                        Descubre México a través del vino
                    </p>
                </div>
                <div className="dsecct-3-descrip">
                    <span>
                        Un mundo entero de experiencias mágicas te está
                        esperando.
                    </span>
                    <br />
                    <span>
                        Comienza a vivir y descubrir un sin fin de destinos,
                        donde nuestros anfitriones ofrecen experiencias únicas
                        entorno al vino.
                    </span>
                </div>
                <div className="dsecct-3-descrip span-a">
                    Encontrarás recorridos en vinícolas, experiencias
                    gastronómicas, hospedaje en los mejores y más peculiares
                    hoteles boutique, experiencias y actividades que harán match
                    perfecto con tu pasión por el vino.
                </div>
                <div className="dsecct-3-descrip span-a">
                    Reserva y copra desde la app, ¡y comienza a acumular puntos!
                </div>
            </div>
            <div className="dsecct4">
                {/* <div>
                    <img src={PhoneGrape} alt="phone" className="dsecct-4-img" />
                </div> */}
            </div>
            <div className="dsecct5">
                <div className="dsecct-5-sub">
                    <div className="dsecct-5-conta-title">
                        <p className="dsecct-5-title">
                            ¿Quieres ser anfitrión?
                        </p>
                    </div>
                    <div className="dsecct-5-desc">
                        Conviértete en anfitrión y deja que miles de alkimistas
                        visiten tu vinícola, hotel, restaurante, o cualquier
                        negocio que ofrezca experiencias y servicios
                        enoturísticos.
                    </div>
                    <p className="dsecct-5-desc marg">
                        Si quieres saber más a cerca de volverte anfitrión, da
                        click
                    </p>

                    <div className="dsecct-5-cont-btn">
                        <div className="dsecct-5-sub-btn">
                            <Button
                                btnTitle={"Saber mas"}
                                className={"solid"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
