import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../../../../components/organisms/GuestLayout/GuestLayout";
import Blog from "../../../../pages/Guest/Blog/Blog";
import ShowBlog from "../../../../pages/Guest/Blog/ShowBlog/ShowBlog";
import Contact from "../../../../pages/Guest/Contact/Contact";
import DownloadApp from "../../../../pages/Guest/DownloadApp/DownloadApp";
import FormAnfitrion from "../../../../pages/Guest/Hosts/FormAnfitrion/FormAnfitrion";
import Hosts from "../../../../pages/Guest/Hosts/Hosts";
import LandingPage from "../../../../pages/Guest/LandingPage/LandingPage";
import TmsCds from "../../../../pages/Guest/Terminos/TmsCds";

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
                <Route
                    path="/blog/:id/show"
                    element={
                        <Suspense fallback={<></>}>
                            <ShowBlog />
                        </Suspense>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Suspense fallback={<></>}>
                            <Contact />
                        </Suspense>
                    }
                />
                <Route
                    path="/terms-conditions"
                    element={
                        <Suspense fallback={<></>}>
                            <TmsCds />
                        </Suspense>
                    }
                />
            </Routes>
        </GuestLayout>
    );
};

export default LandingPageRoutes;
