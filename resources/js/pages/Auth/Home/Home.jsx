import React from "react";
import AuthHeader from "../../../components/organisms/AuthHeader/AuthHeader";
import AuthSiderBar from "../../../components/organisms/AuthSiderBar/AuthSiderBar";
import Background from '../../../assets/Auth/bgAuth.png'

//styles
import "./Home.scss";

const Home = () => {
    return (
        <>
            <AuthHeader />

            <div className="Home">
                <div className="color"></div>
            </div>
        </>
    );
};

export default Home;
