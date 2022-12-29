import React, { useEffect, useState } from "react";
import InputSearch from "../../../components/atoms/InputSearch/InputSearch";
import Button from "../../../components/atoms/Button/Button";

//assets
import Arrow from "../../../assets/icons/arrow.svg";
import Apoyo from "../../../assets/icons/apoyo.svg";
import Grape from "../../../assets/icons/grape.svg";
import Shape from "../../../assets/icons/Shape.svg";
import Pago from "../../../assets/icons/pago.svg";
import Phone from "../../../assets/icons/phoneA.png";
import Vino from "../../../assets//icons/vino.png";
import LogoColor from "../../../assets/icons/logob.png";

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
import Campeche from "../../../assets/icons/campechex.png";
import Breanch_grape from "../../../assets/icons/breanch_grape.png";
import Olive from "../../../assets/icons/olive.png";

import ExpA from "../../../assets/icons/expA.svg";
import ExpB from "../../../assets/icons/expB.svg";
import ExpC from "../../../assets/icons/expC.svg";
import ExpD from "../../../assets/icons/expD.svg";
import ExpE from "../../../assets/icons/expE.svg";
import ExpF from "../../../assets/icons/expF.svg";

import PaseoA from "../../../assets/icons/Paseo.svg";
import PaseoB from "../../../assets/icons/PaseoB.svg";
import PaseoC from "../../../assets/icons/PaseoC.svg";
import PaseoD from "../../../assets/icons/PaseoD.svg";
import PaseoE from "../../../assets/icons/PaseoE.svg";
import PaseoF from "../../../assets/icons/PaseoF.svg";

import GasA from "../../../assets/icons/gasA.svg";
import GasB from "../../../assets/icons/gasB.svg";
import GasC from "../../../assets/icons/gasC.svg";
import GasD from "../../../assets/icons/gasD.svg";
import GasE from "../../../assets/icons/gasE.svg";
import GasF from "../../../assets/icons/gasF.svg";

import AlkimiaB from "../../../assets/icons/alkimiaB.png";
import GoogleStore from "../../../assets/icons/googleStore.png";
import AppleStore from "../../../assets/icons/appleStore.png";
import PhoneB from "../../../assets/icons/phoneB.png";

import Experiencias from "../../../assets/icons/Experiencias.svg";

import "./LandingPage.scss";
import PostCardViewx from "../../../components/molecules/PostCardView/PostCardViewx";
import Carousel from "../../../components/molecules/Carousel/Carousel";
import Map from "../../../components/molecules/Maps/Maps";
import { useNavigate } from "react-router-dom";
import Carrusel from "../../../components/organisms/Carrusel/Carrusel";
import { Skeleton } from "primereact/skeleton";

const LandingSkeleton = () => {
    const [openPlace, setOpenPlace] = useState(false);
    const [openCategory, setOpenCategory] = useState(false); //-250

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 400) {
                    document.getElementById("secct-3-device").style.left =
                        "20px";
                    document.getElementById("secct-3-device").style.transition =
                        "all 0.5s";
                }
            });
        }
    }, []);

    const navigate = useNavigate();

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


    return (
        <>
            <div className="LandingPage">
                <div className="subLandingPage">
                    <img
                        src={Vino}
                        alt="background"
                        className="sub-background"
                    />
                    <div className="sub-filter-img">
                        <InputSearch skeleton />
                        <Skeleton width="1325px" height="111px" />
                    </div>
                </div>
                <div className="page-secct2">
                    {helpTravel.map((item) => (
                        <div key={item.id} className="secct2-card">
                            <Skeleton className="secct-2-card-img" />
                            <Skeleton className="secct2-title" />
                            <Skeleton className="secct2-desc" />
                        </div>
                    ))}
                </div>
                <div className="secct-3">
                    <div className="secct-3-device" id="secct-3-device">
                        <Skeleton width="500px" height="550px" />
                    </div>
                    <div className="secct-3-container">
                        <div
                            style={{
                                marginLeft: 100,
                                display: "flex",
                                flexDirection: "column",
                                gap: 20,
                                alignItems: "center",
                            }}
                        >
                            <Skeleton
                                className="secct3-title"
                                width="250px"
                                height="25px"
                            />
                            <Skeleton
                                className="secct3-subTitle"
                                width="400px"
                                height="20px"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                            <Skeleton
                                width="800px"
                                height="20px"
                                className="secct3-subTitle"
                            />
                        </div>
                    </div>
                </div>
                <div className="secct4">
                    <div className="secct-4-body">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Skeleton width="600px" height="30px" />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 15,
                                alignItems: "center",
                                marginTop: 20,
                            }}
                        >
                            <Skeleton width="800px" height="30px" />
                            <Skeleton width="800px" height="30px" />
                            <Skeleton width="800px" height="30px" />
                            <Skeleton width="800px" height="30px" />
                        </div>
                    </div>

                    {/* Aqui es donde va el mapa */}
                    <div className="secct4-map">
                        <Skeleton width="100%" height="100%" />
                    </div>
                    {/* Aqui termina el mapa */}

                    <div className="secct404"></div>
                </div>
            </div>
        </>
    );
};

export default LandingSkeleton;
