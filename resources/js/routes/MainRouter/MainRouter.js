import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./Auth/Auth";
import Guest from "./Guest/Guest";

import "./MainRouter.scss"

// prime react
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

export default function MainRoute() {
    const [auth, setAuth] = useState(false);

    return (
        <main>
            <Router>
                {auth ? (
                    <>
                        <Auth />
                    </>
                ) : (
                    <>
                        <Guest />
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
