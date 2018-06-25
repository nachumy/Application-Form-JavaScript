import React, { Component } from "react";
import "./SectionTwo.css";

class SectionTwo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            discipline: null,
            experience: {
                visualDesign: false,
                uxDesign: false,
                frontEndDevelopment: false
            },
            location: {
                austin: false,
                newYork: false,
                toronto: false,
                shanghai: false,
                dublin: false,
                hursley: false,
                boeblingen: false,
                somewhereElse: false
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        alert('Submitting');
    }

    isSubmitDisabled = errors => {
        return Object.values(errors).some(errMsg => {
            return errMsg;
        });
    }

    handleClickExperience = (experience) => {
        const experienceButtons = this.state.experience;
        switch(experience) {
            case "visualDesign":
                experienceButtons.visualDesign = !experienceButtons.visualDesign;
                break;
            case "uxDesign":
                experienceButtons.uxDesign = !experienceButtons.uxDesign;
                break;
            case "frontEndDevelopment":
                experienceButtons.frontEndDevelopment = !experienceButtons.frontEndDevelopment;
                break;
            default:
               console.log("error");
        }
        this.setState({experience: experienceButtons});
    }

    handleClickLocation = (location) => {
        const locationButtons = this.state.location;
        switch(location) {
            case "austin":
                locationButtons.austin = !locationButtons.austin;
                break;
            case "newYork":
                locationButtons.newYork = !locationButtons.newYork;
                break;
            case "toronto":
                locationButtons.toronto = !locationButtons.toronto;
                break;
            case "shanghai":
                locationButtons.shanghai = !locationButtons.shanghai;
                break;
            case "dublin":
                locationButtons.dublin = !locationButtons.dublin;
                break;
            case "hursley":
                locationButtons.hursley = !locationButtons.hursley;
                break;
            case "boeblingen":
                locationButtons.boeblingen = !locationButtons.boeblingen;
                break;
            case "somewhereElse":
                locationButtons.somewhereElse = !locationButtons.somewhereElse;
                break;
            default:
               console.log("error");
        }
        this.setState({location: locationButtons});
    }

    isLocationEntered = () => {
        const location = this.state.location;
        const locationValues = Object.values(location);
        return locationValues.some(entry => {
            return entry;
        });
    }

    isDisciplineEntered = () => {
        const discipline = this.state.discipline;
        return discipline === null;
    }

    validate = (discipline, location) => {
        const errors = {
            discipline: this.isDisciplineEntered()
                ? "Please select a discipline."
                : "",
            location: this.isLocationEntered()
                ? ""
                : "Please select a location."
        };
        return errors;
    }

    render() {
        const { discipline, experience, location } = this.state;
        const errors = this.validate(discipline, location);

        return (
            <form className="sectionTwo" onSubmit={this.handleSubmit}>
                <div id="skilltitle" className="sectiontitle fulline">
                    2. Skills and location
                </div>
                <p className="highline fulline">Which is your primary design discipline?*</p>

                <input 
                    type="radio" 
                    name="discipline" 
                    id="radiodesignResearch" 
                    checked={discipline === "radiodesignResearch"}
                    onClick={e => this.setState({discipline: "radiodesignResearch"})}
                    />
                <label id="labelone" className="sizefour" htmlFor="radiodesignResearch">Design Research</label>
                <input 
                    type="radio" 
                    name="discipline" 
                    id="radiovisualDesign" 
                    checked={discipline === "radiovisualDesign"}
                    onClick={e => this.setState({discipline: "radiovisualDesign"})}
                    />
                <label id="labeltwo" htmlFor="radiovisualDesign">Visual Design</label> 
                <input 
                    type="radio" 
                    name="discipline" 
                    id="radiouxDesign" 
                    checked={discipline === "radiouxDesign"}
                    onClick={e => this.setState({discipline: "radiouxDesign"})} 
                    />
                <label id="labelthree" htmlFor="radiouxDesign">UX Design</label> 
                <input 
                    type="radio" 
                    name="discipline" 
                    id="radiofrontEndDev" 
                    checked={discipline === "radiofrontEndDev"}
                    onClick={e => this.setState({discipline: "radiofrontEndDev"})} 
                    />
                <label id="labelfour" htmlFor="radiofrontEndDev">Front-end Dev</label> 
                <span className="err-msg">{errors.discipline}</span>
                
                <div className="box fulline">
                    <div className="smallbox">
                        <p>Do you have experience with any other disciplines?</p>

                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            name="experience" 
                            id="visualDesign" 
                            value="visualDesign"
                            checked={experience.visualDesign}
                            onClick={e => this.handleClickExperience("visualDesign")} />
                        <label htmlFor="visualDesign"> Visual Design</label>

                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            name="experience" 
                            id="uxDesign" 
                            value="uxDesign"
                            checked={experience.uxDesign}
                            onClick={e => this.handleClickExperience("uxDesign")} />
                        <label htmlFor="uxDesign"> UX Design</label>

                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            name="experience" 
                            id="frontEndDevelopment" 
                            value="frontEndDevelopment"
                            checked={experience.frontEndDevelopment}
                            onClick={e => this.handleClickExperience("frontEndDevelopment")} />
                        <label htmlFor="frontEndDevelopment"> Front-end Development</label>
                    </div>
                    <div className="smallbox">
                        <p>Where are you interested in working?*</p>
                        <p className="subtext">You must be legally authorized to work without visa sponsorship in the location(s) you choose.</p>              

                        <input 
                            className="checkbox sizetwo" 
                            type="checkbox" 
                            name="location" 
                            id="austin" 
                            value="austin"
                            checked={location.austin}
                            onClick={e => this.handleClickLocation("austin")} />
                        <label htmlFor="austin">Austin, Texas</label>

                        <input 
                            className="checkbox sizetwo" 
                            type="checkbox" 
                            name="location" 
                            id="newYork" 
                            value="newYork"
                            checked={location.newYork}
                            onClick={e => this.handleClickLocation("newYork")} />
                        <label htmlFor="newYork">New York, New York</label>

                        <input 
                            className="checkbox sizetwo" 
                            type="checkbox" 
                            name="location" 
                            id="toronto" 
                            value="toronto"
                            checked={location.toronto}
                            onClick={e => this.handleClickLocation("toronto")} />
                        <label htmlFor="toronto">Toronto, Ontario</label>

                        <input 
                            className="checkbox sizetwo" 
                            type="checkbox" 
                            name="location" 
                            id="shanghai" 
                            value="shanghai"
                            checked={location.shanghai}
                            onClick={e => this.handleClickLocation("shanghai")} />
                        <label htmlFor="shanghai">Shanghai, China</label>

                        <input 
                            className="checkbox sizetwo" 
                            type="checkbox" 
                            name="location" 
                            id="dublin" 
                            value="dublin"
                            checked={location.dublin}
                            onClick={e => this.handleClickLocation("dublin")} />
                        <label htmlFor="dublin">Dublin, Ireland</label>

                        <input 
                            className="checkbox sizetwo" 
                            type="checkbox" 
                            name="location" 
                            id="hursley" 
                            value="hursley"
                            checked={location.hursley}
                            onClick={e => this.handleClickLocation("hursley")} />
                        <label htmlFor="hursley">Hursley, United Kingdom</label>

                        <input 
                            className="checkbox sizetwo" 
                            type="checkbox" 
                            name="location" 
                            id="boeblingen" 
                            value="boeblingen"
                            checked={location.boeblingen}
                            onClick={e => this.handleClickLocation("boeblingen")} />
                        <label htmlFor="boeblingen">Boeblingen, Germany</label>

                        <input 
                            className="checkbox sizetwo" 
                            type="checkbox" 
                            name="location" 
                            id="somewhereElse" 
                            value="somewhereElse"
                            checked={location.somewhereElse}
                            onClick={e => this.handleClickLocation("somewhereElse")} />
                        <label htmlFor="somewhereElse">Somewhere else</label>
                        <span className="err-msg">{errors.location}</span>
                    </div>
                </div>
                <button 
                    id="submitButton"
                    type="submit" 
                    className="pointer submit"
                    disabled={this.isSubmitDisabled(errors)} >Submit</button>
            </form>
        );
    }
}

export default SectionTwo;