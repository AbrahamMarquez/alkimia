import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";

import "./Register.scss";

const Register = () => {
    return (
        <div className="Register">
            <div className="registroBody">
                <div className="xsecct1">
                    <p className="xsecct-1-title">Código de recuperación</p>
                    <p className="xsecct-1-sub">Ingresa el código enviado</p>
                </div>
                <div className="xsecct2">
                    <Input
                        title={"Correo electrónico"}
                        placeholder={"Correo electrónico"}
                        type="email"
                    />
                    <InputPassword
                        title={"Contraseña"}
                        placeholder={"Contraseña"}
                    />
                    <InputPassword
                        title={"Confirmar contraseña"}
                        placeholder={"Confirmar contraseña"}
                    />
                </div>
                <div className="xsecct3">

                <NavLink className="xsecct-link">Ya tengo cuenta</NavLink>
                </div>
                <div className="xsecct4">
                    <Button btnTitle={"Cancelar"} className={"white"} />
                    <Button
                        btnTitle={"Verificar correo"}
                        className={"degradado"}
                    />
                </div>
                <div className="xsecct5">

                <NavLink className="xsecct-link">Omitir registro</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;
