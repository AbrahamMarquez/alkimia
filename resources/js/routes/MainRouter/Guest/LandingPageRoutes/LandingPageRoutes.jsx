import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Hosts from "../../../../pages/Guest/Hosts/Hosts";
import LandingPage from "../../../../pages/Guest/LandingPage/LandingPage";

const LandingPageRoutes = () => {
  return (
     <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<></>}>
                            <LandingPage />
                            
                        </Suspense>
                    }
                />
               <Route
                    path="/hosts"
                    element={
                        <Suspense fallback={<></>}>
                            <Hosts />
                        </Suspense>
                    }
                />

            </Routes>
        </>
  )
}

export default LandingPageRoutes