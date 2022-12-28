import React from "react";
import AuthLayout from "../../../components/organisms/AuthLayout/AuthLayout";
import HomeRoutes from "./HomeRoutes/HomeRoutes";

const Auth = ({ AuthFunctions }) => {

    return (
        <>
            <AuthLayout AuthFunctions={AuthFunctions}>
                <HomeRoutes />
            </AuthLayout>
        </>
    );
};

export default Auth;
