import React, { useEffect, useState } from "react";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";

//Assets
import Facebook from "../../../../assets/icons/fb.svg";
import Instagram from "../../../../assets/icons/instagram.png";
import Google from "../../../../assets/icons/Google.png";

//Styles
import "./RecoverAccount.scss";
import InputNumber from "../../../../components/atoms/InputNumber/InputNumber";
import { useNavigate } from "react-router-dom";
import {
    ColorValidation,
    SubmitValidation,
    UpdateValue,
} from "../../../../utilities/Validations";
import { Skeleton } from "primereact/skeleton";

const RecoverAccountSkeleton = () => {
    const navigate = useNavigate();
    const networks = [
        {
            id: 1,
            icon: Facebook,
        },
        {
            id: 2,
            icon: Google,
        },
        {
            id: 3,
            icon: Instagram,
        },
    ];

    const isSelectEmail = () => {
        var boxEmail = document.getElementById("divemailId");
        var boxPhone = document.getElementById("divphoneId");
        var textEmail = document.getElementById("text_correo");
        var textPhone = document.getElementById("text_phone");
        textEmail.style.borderBottomWidth = "1px";
        textEmail.style.borderStyle = "solid";
        textEmail.style.borderColor = "#df1683";
        textEmail.style.color = "#df1683";
        textPhone.style.color = "#8a8a8a";
        textPhone.style.borderColor = "transparent";

        boxEmail.style.display = "flex";
        boxEmail.style.flexDirection = "column";
        boxPhone.style.display = "none";
    };
    const isSelectPhone = () => {
        var boxEmail = document.getElementById("divemailId");
        var boxPhone = document.getElementById("divphoneId");
        var textEmail = document.getElementById("text_correo");
        var textPhone = document.getElementById("text_phone");
        textPhone.style.borderBottomWidth = "1px";
        textPhone.style.borderStyle = "solid";
        textPhone.style.borderColor = "#df1683";
        textPhone.style.color = "#df1683";

        textEmail.style.color = "#8a8a8a";
        textEmail.style.borderColor = "transparent";

        boxEmail.style.display = "none";
        boxPhone.style.display = "flex";
        boxPhone.style.flexDirection = "column";
    };

    const [inputList, setInputList] = useState({
        state: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList]);

    const handleSubmit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            navigate("/recover-code");
        }
    };

    return (
        <div className="RecoverAccount">
            <div className="min-form">
                <div className="rsecct1">
                    <div className="rsecct-1-titltles">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                                alignItems: "center",
                                marginBottom: 15,
                            }}
                        >
                            <Skeleton width="150px" height="20px" />
                            <Skeleton width="150px" height="20px" />
                        </div>
                    </div>
                    <div className="rsecct-1-pas">
                        <div className="rsecct-1-options">
                            <div
                                style={{
                                    display: "flex",
                                    gap: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom: 15,
                                    width: "100%",
                                }}
                            >
                                <Skeleton width="50px" height="20px" />
                                <Skeleton width="50px" height="20px" />
                            </div>
                        </div>
                        <div id="divemailId">
                            <Input skeleton />
                        </div>
                        <div id="divphoneId" className="input-number">
                            <InputNumber skeleton />
                        </div>
                    </div>
                </div>
                <div className="rsecct2">
                    <div className="rsecct-2-btns">
                        <Button skelton />
                        <Button skelton />
                    </div>
                </div>
                <div className="rsecct3">
                    <div className="rsecct-3-networks">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                            <Skeleton width="150px" height="10px" />
                        </div>
                        <div className="rsecct-3-net">
                            {[...Array(3)].map((_, i) => (
                                <div className="rsecct-3-card-net">
                                    <Skeleton height="30px" width="30px" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverAccountSkeleton;
