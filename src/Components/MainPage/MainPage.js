import React from 'react';
import './mainPage.css';
import Header from "./header/header";
import FirstDisplay from "./first-display/first-display";
import SecondDisplay from "./second-display/second-display";
import ThirdDisplay from "./trird-display/third-display";
import FourthDisplay from "./fourth-display/fourth-display";
import FifthDisplay from "./fifth-display/fifth-display";
import SixthDisplay from "./sixth-display/sixth-display";
import Form from "./form-display/form";

const MainPage = () => {
    return (
        <div className={'mainP-div'}>
            <div className={'first-block'}>
                <Header/>
                <FirstDisplay/>
            </div>
            <SecondDisplay/>
            <ThirdDisplay/>
            <FourthDisplay/>
            <FifthDisplay/>
            <SixthDisplay/>
            <Form/>
        </div>
    );
}

export default MainPage;
