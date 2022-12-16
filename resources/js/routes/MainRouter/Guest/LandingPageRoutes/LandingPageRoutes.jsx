import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../../../pages/Guest/LandingPage/LandingPage";

const LandingPageRoutes = () => {
  return (
     <>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Suspense fallback={<></>}>
                            <LandingPage />
                        </Suspense>
                    }
                ></Route>
            </Routes>
        </>
  )
}

export default LandingPageRoutes