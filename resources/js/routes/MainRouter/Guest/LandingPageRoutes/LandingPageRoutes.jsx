import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../../../../components/organisms/GuestLayout/GuestLayout";

//Lazy
const LandingPage = lazy(() =>
    import("../../../../pages/Guest/LandingPage/LandingPage")
);
const Hosts = lazy(() => import("../../../../pages/Guest/Hosts/Hosts"));
const DownloadApp = lazy(() =>
    import("../../../../pages/Guest/DownloadApp/DownloadApp")
);
const FormAnfitrion = lazy(() =>
    import("../../../../pages/Guest/Hosts/FormAnfitrion/FormAnfitrion")
);
const ShowBlog = lazy(() =>
    import("../../../../pages/Guest/Blog/ShowBlog/ShowBlog")
);

import Blog from "../../../../pages/Guest/Blog/Blog";

import ShowBlogSkeleton from "../../../../pages/Guest/Blog/ShowBlog/ShowBlogSkeleton";
import Contact from "../../../../pages/Guest/Contact/Contact";

import DownloadAppSkeleton from "../../../../pages/Guest/DownloadApp/DownloadAppSkeleton";

import FormAnfitrionSkeleton from "../../../../pages/Guest/Hosts/FormAnfitrion/FormAnfitrionSkeleton";

import HostSkeleton from "../../../../pages/Guest/Hosts/HostSkeleton";

import LandingSkeleton from "../../../../pages/Guest/LandingPage/LandingSkeleton";
import Privacy from "../../../../pages/Guest/Privacy/Privacy";
import Start from "../../../../pages/Guest/Start/Start";
import TmsCds from "../../../../pages/Guest/Terminos/TmsCds";

const LandingPageRoutes = () => {
    return (
        // <GuestLayout>
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<LandingSkeleton />}>
                        <LandingPage />
                    </Suspense>
                }
            />
            <Route
                path="/downloadApp"
                element={
                    <Suspense fallback={<DownloadAppSkeleton />}>
                        <DownloadApp />
                    </Suspense>
                }
            />
            <Route
                path="/hosts"
                element={
                    <Suspense fallback={<HostSkeleton />}>
                        <Hosts />
                    </Suspense>
                }
            />
            <Route
                path="/hosts/register"
                element={
                    <Suspense fallback={<FormAnfitrionSkeleton />}>
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
                    <Suspense fallback={<ShowBlogSkeleton />}>
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
            <Route
                path="/politics-privacy"
                element={
                    <Suspense fallback={<></>}>
                        <Privacy />
                    </Suspense>
                }
            />
            <Route
                path="/start"
                element={
                    <Suspense fallback={<></>}>
                        <Start />
                    </Suspense>
                }
            />
        </Routes>
        // </GuestLayout>
    );
};

export default LandingPageRoutes;
