import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import {  BrowserRouter as Router } from "react-router-dom";
import Auth from "./Auth/Auth";
import Guest from "./Guest/Guest";

export default function  MainRoute(){

    const [auth, setAuth] = useState(false)

    return(
      <main>

        <Router>
            {auth ? (
                <>
                    <Auth />
                </>
            ):(
                <>
                    <Guest />
                </>
            )}

        </Router>

      </main>
    )

}


if (document.getElementById('reactRoute')) {
    const Index = ReactDOM.createRoot(document.getElementById("reactRoute"));

    Index.render(
        <React.StrictMode>
            <MainRoute/>
        </React.StrictMode>
    )
}