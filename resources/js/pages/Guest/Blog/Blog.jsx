import React, { useState } from "react";

//Assets
import Puntos from "../../../assets/icons/puntos.png";
import Heart from "../../../assets/icons/heart.svg";
import Allmexicancheese from "../../../assets/icons/allmexicancheese.jpeg";
import BgCampeche from "../../../assets/icons/bgCampeche.jpg";
import Maridar from "../../../assets/icons/maridar.png";


//Styles 😂
import "./Blog.scss";
import CardViews from "../../../components/organisms/CardViews/CardViews";
import CardViewShort from "../../../components/organisms/CardViewShort/CardViewShort";

const Blog = () => {
    const [openShare, setOpenShare] = useState(false);
    const cards = [
        {
            id: 1,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "Conoce México a través de sus Quesos",
            icon2: Heart,
            bg: Allmexicancheese,
            bgTrap: "rgba(0, 0, 0, 0.2)",
        },
        {
            id: 2,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "Guía de viaje por Campeche",
            icon2: Heart,
            bg: BgCampeche,
            bgTrap: "rgba(0, 0, 0, 0.2)",
        },
        {
            id: 3,
            name: "Alkimia",
            date: "25 mar • 25 mar",
            icon: Puntos,
            title: "5 vinos para maridar con mariscos",
            icon2: Heart,
            bg: Maridar,
            bgTrap: "rgba(0, 0, 0, 0.2)",
        },
    ];

    return (
        <div className="Blog">
            <div className="secct1">
                <h1 className="secct-1-title">La guía del alkimista</h1>
            </div>
            <div>
                <CardViews elements={cards} />
            </div>
            <div style={{marginTop: 35}}>
              <CardViewShort elements={cards}/>
            </div>
           
        </div>
    );
};

export default Blog;
