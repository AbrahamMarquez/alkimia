import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-verification-code-input";
import Button from "../../../../components/atoms/Button/Button";

import "./RecoverCode.scss";

const RecoverCode = () => {
    // const [code, setCode] = useState();
    const navigate = useNavigate();

    const [inputList, setInputList] = useState({
        code: { value: null, validationType: "empty" },
    });

    const backPage = () => {
        navigate("/recover-account");
    };

    return (
        <div className="RecoverCode">
            <div className="Codereco">
                <div className="rsecct1">
                    <p className="rsecct-1-title">Código de recuperación</p>
                    <p className="rsecct-1-sub">Ingresa el código enviado</p>
                </div>
                <div className="rsecct2">
                    <ReactCodeInput
                        fields={5}
                        fieldWidth={50}
                        fieldHeight={80}
                        className="input-code"
                        // onComplete={(e) => setCode(e)}

                        onChange={(e) =>
                            UpdateValue(e, "code", inputList, setInputList)
                        }
                    ></ReactCodeInput>
                </div>
                <div className="rsecct3">
                    <Button
                        btnTitle={"Cancelar"}
                        className={"white"}
                        onClick={() => backPage()}
                    />
                    <Button
                        btnTitle={"Validar código"}
                        className={"degradado"}
                    />
                </div>
                <div className="rsecct4">
                    <p className="rsecct-4-title">Reenviar código</p>
                </div>
            </div>
        </div>
    );
};

export default RecoverCode;
