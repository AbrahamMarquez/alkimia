import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPageRoutes from "./LandingPageRoutes/LandingPageRoutes";

const Guest = (props) => {
    return (
        <>
            <LandingPageRoutes />
        </>
    );
};

export default Guest;
