import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../../../pages/Guest/SessionLogin/Login/Login";
import RecoverAccount from "../../../../pages/Guest/SessionLogin/RecoverAccount/RecoverAccount";
import RecoverCode from "../../../../pages/Guest/SessionLogin/RecoverCode/RecoverCode";
import Register from "../../../../pages/Guest/SessionLogin/Register/Register";
import RegisterInfo from "../../../../pages/Guest/SessionLogin/RegisterInfo/RegisterInfo";
import RegistrationCode from "../../../../pages/Guest/SessionLogin/RegistrationCode/RegistrationCode";
import TemnsAndCods from "../../../../pages/Guest/SessionLogin/TemnsAndCods/TemnsAndCods";
import UpdateAccesses from "../../../../pages/Guest/SessionLogin/UpdateAccesses/UpdateAccesses";
import WelcomeRegistration from "../../../../pages/Guest/SessionLogin/WelcomeRegistration/WelcomeRegistration";

const UsersRoutes = () => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <Suspense fallback={<></>}>
                        <Login />
                    </Suspense>
                }
            />
            <Route
                path="/recover-account"
                element={
                    <Suspense fallback={<></>}>
                        <RecoverAccount />
                    </Suspense>
                }
            />
            <Route
                path="/recover-code"
                element={
                    <Suspense fallback={<></>}>
                        <RecoverCode />
                    </Suspense>
                }
            />
             <Route
                path="/update-access"
                element={
                    <Suspense fallback={<></>}>
                        <UpdateAccesses />
                    </Suspense>
                }
            />
             <Route
                path="/register"
                element={
                    <Suspense fallback={<></>}>
                        <Register />
                    </Suspense>
                }
            />
             <Route
                path="/register-code"
                element={
                    <Suspense fallback={<></>}>
                        <RegistrationCode />
                    </Suspense>
                }
            />
             <Route
                path="/register-info"
                element={
                    <Suspense fallback={<></>}>
                        <RegisterInfo />
                    </Suspense>
                }
            />
            <Route
                path="/termin-and-conditions"
                element={
                    <Suspense fallback={<></>}>
                        <TemnsAndCods />
                    </Suspense>
                }
            />
             <Route
                path="/welcome-user"
                element={
                    <Suspense fallback={<></>}>
                        <WelcomeRegistration />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default UsersRoutes;
