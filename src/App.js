import React, { Component } from 'react';
import Header from "./Components/Header";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import Footer from "./Components//Footer";
import './App.css';

const App = (props) => {
    return (
        <div className="container">
            <Header />

            <SectionOne />

            <SectionTwo />

            <SectionThree />

            <Footer />
            
        </div>
    );
}

export default App;