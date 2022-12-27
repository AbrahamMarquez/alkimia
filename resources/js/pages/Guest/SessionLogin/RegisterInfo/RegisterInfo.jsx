import React, { useEffect, useState } from "react";
import BackgroundImage from "../../../../components/molecules/BackgroundImage/BackgroundImage";

//Assets ✔
import CuentaUser from "../../../../assets/icons/cuentaUser.svg";

import "./RegisterInfo.scss";
import Input from "../../../../components/atoms/Input/Input";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import Select from "../../../../components/atoms/Select/Select";
import { ColorValidation } from "../../../../utilities/Validations";
import Button from "../../../../components/atoms/Button/Button";

const RegisterInfo = () => {
    const optionsGender = [
        {
            label: "Femenino",
            value: "femenno",
        },
        {
            label: "Masculino",
            value: "masculino",
        },
        {
            label: "Prefiero no contestar",
            value: null,
        },
    ];

    const [inputList, setInputList] = useState({
        alias: { value: null, validationType: "email" },
        name: { value: null, validationType: "empty" },
        age: { value: null, validationType: "empty" },
        gender: { value: null, validationType: "empty" },
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
        if (inputList.gender.value?.length == 0) {
            const newInputList = { ...inputList };
            newInputList.gender.value = "";
            setInputList(newInputList);
        }
    }, [inputList]);

    return (
        <div className="RegisterInfo">
            <div className="line-change"></div>
            <div className="infobody">
                <div className="yscect1">
                    <p className="ysecct-1-title">Registro</p>
                    <p className="ysecct-1-sub">
                        Completa los siguientes campos
                    </p>
                    <div className="ysecct-1-container-bg">
                        <BackgroundImage
                            defaultImg={CuentaUser}
                            classNameBgPencil={"ysecct-1-back"}
                            className={"ysecct-1-circle"}
                            classNameWidthPencil={"ysecct-width-pencil"}
                        />
                    </div>
                </div>
                <div className="ysecct2">
                    <Input
                        title={"Alias de alkimista"}
                        placeholder={"Alias de alkimista"}
                        type="text"
                    />
                    <Input
                        title={"Nombre"}
                        placeholder={"Nombre completo"}
                        type="text"
                    />
                    <div className="ysecct-2-gender">
                        <InputNumber
                            title={"Edad"}
                            placeholder={"Edad"}
                            maxLength={2}
                        />
                        <Select
                        className={""}
                            placeholder={"Género"}
                            options={optionsGender}
                            value={inputList.gender.value}
                            title={"Género"}
                            id={"gender"}
                            onChange={(e) =>
                                UpdateValue(
                                    e,
                                    "gender",
                                    inputList,
                                    setInputList
                                )
                            }
                        />
                    </div>
                    <InputNumber
                        title={"Teléfono"}
                        placeholder={"Número de teléfono"}
                    />
                </div>
                <div className="ysecct3">
                    <Button btnTitle={"Cancelar"} className={"white"} />
                    <Button btnTitle={"Continuar"} className={"degradado"} />
                </div>
            </div>
        </div>
    );
};

export default RegisterInfo;
