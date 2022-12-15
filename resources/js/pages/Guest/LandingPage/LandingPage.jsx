import React from "react";
import InputSearch from "../../../components/atoms/InputSearch/InputSearch";
import Header from "../../../components/organisms/Header";

//assets
import Arrow from "../../../assets/icons/arrow.svg";
import Apoyo from "../../../assets/icons/apoyo.svg";
import Grape from "../../../assets/icons/grape.svg";
import Shape from "../../../assets/icons/Shape.svg";
import Pago from "../../../assets/icons/pago.svg";

import "./LandingPage.scss";
import Button from "../../../components/atoms/Button/Button";

const LandingPage = () => {
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
            <Header />
            <div className="LandingPage">
              <div className="subLandingPage">
                <InputSearch
                    className={"inputsearch"}
                    sizeLup={"tamanio"}
                    sizeSi={"12px"}
                />
                <div className="landing-btn-search">
                    <div className="btn-select">
                        <p>Destino</p>
                        <img src={Arrow} alt="arrow" className="arrow" />
                    </div>
                    <div className="btn-select">
                        <p>Destino</p>
                        <img src={Arrow} alt="arrow" className="arrow" />
                    </div>
                    <div className="btn-select btns">
                        <Button btnTitle={"Buscar"} className={"solid"} />
                    </div>
                </div>
                <div className="page-secct2">
                  {helpTravel.map((item) => (
                      <div key={item.id} className="secct2-card">
                        <img src={item.img} alt="imge" width={40} height={40}/>
                        <p>{item.title}</p>
                        <p>{item.descriptions}</p>
                      </div>
                  ))}
                </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
