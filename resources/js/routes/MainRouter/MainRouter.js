import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Auth from "./Auth/Auth";
import Guest from "./Guest/Guest";

import "./MainRouter.scss";

// prime react
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export default function MainRoute() {

    const [fakeAuth, setFakeAuth] = useState("false");

    const logIn = () => {
        setFakeAuth("true");
        localStorage.setItem("auth", "true");
    };
    const logOut = () => {
        setFakeAuth("false");
        localStorage.setItem("auth", "false");
        window.location.href = "/";
    };
    const AuthFunctions = {
        logIn: logIn,
        logOut: logOut,
    };

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            if (localStorage.getItem("auth") == "true") {
                setFakeAuth("true");
                localStorage.setItem("auth", "true");
            } else {
                setFakeAuth("false");
                localStorage.setItem("auth", "false");
            }
        } else {
            localStorage.setItem("auth", "false");
        }
    }, [fakeAuth]);

    return (
        <main>
            <Router>
                {fakeAuth == "true" ? (
                    <>
                        <Auth AuthFunctions={AuthFunctions} />
                    </>
                ) : (
                    <>
                        <Guest AuthFunctions={AuthFunctions} />
                    </>
                )}
            </Router>
        </main>
    );
}

// if (document.getElementById('reactRoute')) {
//     const Index = ReactDOM.createRoot(document.getElementById("reactRoute"));

//     Index.render(
//         <React.StrictMode>
//             <MainRoute/>
//         </React.StrictMode>
//     )
// }
if (document.getElementById("reactRoute")) {
    ReactDOM.render(
        // <React.StrictMode>
        <MainRoute />,
        document.getElementById("reactRoute")
        // </React.StrictMode>,
    );
}
