import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../../../../components/organisms/GuestLayout/GuestLayout";
import Blog from "../../../../pages/Guest/Blog/Blog";
import DownloadApp from "../../../../pages/Guest/DownloadApp/DownloadApp";
import FormAnfitrion from "../../../../pages/Guest/Hosts/FormAnfitrion/FormAnfitrion";
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
                    path="/downloadApp"
                    element={
                        <Suspense fallback={<></>}>
                            <DownloadApp />
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
                    path="/hosts/register"
                    element={
                        <Suspense fallback={<></>}>
                            <FormAnfitrion />
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