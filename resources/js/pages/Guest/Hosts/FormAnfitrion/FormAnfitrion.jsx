import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";
import Select from "../../../../components/atoms/Select/Select";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../../utilities/Validations";

import "./FormAnfitrion.scss";

const FormAnfitrion = () => {
    const navigate = useNavigate();
    const [inputList, setInputList] = useState({
        email: { value: null, validationType: "empty" },
        password: { value: null, validationType: "empty" },
        ComfirmPassword: { value: null, validationType: "empty" },
        name: { value: null, validationType: "empty" },
        bussine: { value: null, validationType: "empty" },
        state: { value: null, validationType: "empty" },
        clave: { value: null, validationType: "empty" },
        phone: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
            if (propertyName === "email") {
                ColorValidation(propertyName, inputList, "email");
            }
        }
    }, [inputList]);

    const states = [
        {
            label: "Baja Califormia",
            value: "Baja Califormia",
        },
        {
            label: "Chihuahua",
            value: "Chihuahua",
        },
        {
            label: "Guanajuato",
            value: "Guanajuato",
        },
        {
            label: "Queretaro",
            value: "Queretaro",
        },
        {
            label: "Coahuila",
            value: "Coahuila",
        },
        {
            label: "Aguascalientes",
            value: "Aguascalientes",
        },
        {
            label: "Zacatecas",
            value: "Zacatecas",
        },
        {
            label: "Sonora",
            value: "Sonora",
        },
        {
            label: "San Luis Potosi Puebla",
            value: "San Luis Potosi Puebla",
        },
        {
            label: "Nuevo León",
            value: "Nuevo León",
        },
        {
            label: "Durango",
            value: "Durango",
        },
        {
            label: "Jalisco",
            value: "Jalisco",
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (SubmitValidation(inputList, setInputList)) {
            navigate("/");
        }
    };

    return (
        <div className="FormAnfitrion">
            <form className="form">
                <div className="secct1">
                    <p className="form-title">Regístrate como anfitrión</p>
                    <p className="form-descrip">
                        Únete a la comunidad de la primera aplicación de
                        enoturismo en México sin costo por inscripción.
                    </p>
                </div>

                <div className="secct2">
                    <Input
                        title={"Correo electrónico"}
                        type={"email"}
                        placeholder={"Email"}
                        id={"email"}
                        onChange={(e) =>
                            UpdateValue(e, "email", inputList, setInputList)
                        }
                    />
                    <InputPassword
                        placeholder={"Contraseña"}
                        title={"Contraseña"}
                        id={"password"}
                        onChange={(e) =>
                            UpdateValue(e, "password", inputList, setInputList)
                        }
                    />
                    <InputPassword
                        placeholder={"Comfirmar contraseña"}
                        title={"Comfirmar contraseña"}
                        id={"ComfirmPassword"}
                        onChange={(e) =>
                            UpdateValue(
                                e,
                                "ComfirmPassword",
                                inputList,
                                setInputList
                            )
                        }
                    />
                    <Input
                        title={"Nombre Completo"}
                        type={"text"}
                        placeholder={"Nombre"}
                        id={"name"}
                        onChange={(e) =>
                            UpdateValue(e, "name", inputList, setInputList)
                        }
                    />
                    <Input
                        title={"Empresa"}
                        type={"text"}
                        placeholder={"Empresa"}
                        id={"bussine"}
                        onChange={(e) =>
                            UpdateValue(e, "bussine", inputList, setInputList)
                        }
                    />

                    <Select
                        placeholder={"-Seleccione un estado-"}
                        options={states}
                        value={inputList.state.value}
                        title={"Estado"}
                        id={"state"}
                        onChange={(e) =>
                            UpdateValue(e, "state", inputList, setInputList)
                        }
                    />
                    <div className="form-container-phone">
                        <div>
                            <Select
                                options={[
                                    { label: "MX+52", value: "MX+52" },
                                    { label: "US+1", value: "US+1" },
                                    { label: "CL+56", value: "CL+56" },
                                    { label: "AR+54", value: "AR+54" },
                                    { label: "ES+34", value: "ES+34" },
                                ]}
                                value={inputList.clave.value}
                                title={"Teléfono"}
                                id={"clave"}
                                onChange={(e) =>
                                    UpdateValue(
                                        e,
                                        "clave",
                                        inputList,
                                        setInputList
                                    )
                                }
                            />
                        </div>
                        <div className="form-container-number">
                            <InputNumber
                                title={"Teléfono"}
                                placeholder={"Teléfono"}
                                id={"phone"}
                                onChange={(e) =>
                                    UpdateValue(
                                        e,
                                        "phone",
                                        inputList,
                                        setInputList
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="form-check-point">
                        <div>
                            <input
                                type="checkbox"
                                className="check-point-box"
                            />
                        </div>
                        <p className="check-point-dec">
                            Al registrarme acepto los{" "}
                            <span className="term-cond">
                                términos y condiciones
                            </span>{" "}
                            de Alkimia Experiencias Mágicas S.A. de C.V. y
                            acepto el uso de mi información.
                        </p>
                    </div>

                    <div className="container-btn">
                        <div className="btn-sub">
                            <Button
                                btnTitle={"Registrarme"}
                                className={"solid"}
                                onClick={ handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormAnfitrion;
