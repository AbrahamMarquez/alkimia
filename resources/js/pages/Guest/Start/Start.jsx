import React from "react";
import Button from "../../../components/atoms/Button/Button";

//Styles
import "./Start.scss";

const Start = () => {
    return (
        <div className="Start">
            <div className="sform1">
                <p className="s-title">¡Bienvenido alkimista!</p>
                <p className="s-text">Ingresa ahora</p>
                <div className="sform-1-container">
                    <Button
                        btnTitle={"Iniciar sesión"}
                        className={"degradado"}
                    />
                    <Button
                        btnTitle={"Registrarme"}
                        className={"border-color"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Start;
