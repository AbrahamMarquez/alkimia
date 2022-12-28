import React from "react";
import AuthLayout from "../../../components/organisms/AuthLayout/AuthLayout";
import HomeRoutes from "./HomeRoutes/HomeRoutes";

const Auth = () => {
    return (
        <>
            <AuthLayout>
                <HomeRoutes />
            </AuthLayout>
        </>
    );
};

export default Auth;
