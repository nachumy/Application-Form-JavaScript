import React from "react";
import { Route } from "react-router-dom";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import "./Form.css";

const Form = (props) => {

    return (
        <div id="form" className="container">
            <Route exact path ="/personal" component = {SectionOne} />
            <Route exact path ="/skills" component = {SectionTwo} />
            <Route exact path ="/portfolio" component = {SectionThree} />
        </div>
    );
}

export default Form;