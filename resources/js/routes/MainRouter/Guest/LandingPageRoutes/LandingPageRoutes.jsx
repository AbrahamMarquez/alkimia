import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../../../../components/organisms/GuestLayout/GuestLayout";
import Blog from "../../../../pages/Guest/Blog/Blog";
import Hosts from "../../../../pages/Guest/Hosts/Hosts";
import LandingPage from "../../../../pages/Guest/LandingPage/LandingPage";

const LandingPageRoutes = () => {
  return (
     <GuestLayout>
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
                   <Route
                    path="/blog"
                    element={
                        <Suspense fallback={<></>}>
                            <Blog />
                        </Suspense>
                    }
                />

            </Routes>
        </GuestLayout>
  )
}

export default LandingPageRoutes