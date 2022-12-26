import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../../../pages/Guest/SessionLogin/Login/Login";
import RecoverAccount from "../../../../pages/Guest/SessionLogin/RecoverAccount/RecoverAccount";
import RecoverCode from "../../../../pages/Guest/SessionLogin/RecoverCode/RecoverCode";
import UpdateAccesses from "../../../../pages/Guest/SessionLogin/UpdateAccesses/UpdateAccesses";

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
        </Routes>
    );
};

export default UsersRoutes;
