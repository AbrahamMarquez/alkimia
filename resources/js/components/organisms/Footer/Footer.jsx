import React from "react";

//styles 🤞
import "./Footer.scss";

//Assets
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Whatsapp from "../../../assets/icons/whatsapp.svg";
import Youtube from "../../../assets/icons/youtube.svg";

const Footer = () => {
    const socialNetwork = [
        {
            id: 1,
            img: Instagram,
            alt: "Instagram",
        },
        {
            id: 2,
            img: Whatsapp,
            alt: "Whatsapp",
        },
        {
            id: 3,
            img: Facebook,
            alt: "Facebook",
        },
        {
            id: 4,
            img: Youtube,
            alt: "Youtube",
        },
    ];

    return (
        <div className="footer">
            <div className="subFooter">
                <div className="footer-network">
                    <h1 className="footer-title">Siguenos en nuestras redes</h1>
                    <div className="footer-socalNetwork">
                        {socialNetwork.map((network) => (
                            <div className="card-network" key={network.id}>
                                <img
                                    src={network.img}
                                    alt={network.alt}
                                    className="networks"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-secct2">
                    <h3 className="footer-comunity">
                        Únete a la comunidad alkimista
                    </h3>

                    <div className="input-btn">
                        <form action="" className="footer-form">
                            <input
                                type="email"
                                className="input-default"
                                placeholder="Correo electrónico"
                            />
                            <button className="footer-btn">Unirme</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-line"></div>

            <div className="footer-finish">
                <div className="footer-ter-Con">
                    <p>Términos y condiciones</p>
                    <p>Políticas de privacidad</p>
                    <p>Preguntas frecuentes</p>
                </div>
                <div className="footer-derechos-reservdos">
                    © 2021 Alkimia Experiencias Mágicas S.A. de C.V. Todos los
                    derechos reservados.
                </div>
            </div>
        </div>
    );
};

export default Footer;
