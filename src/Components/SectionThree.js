import React, { Component } from "react";
import "./SectionThree.css";

class SectionThree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            portfolio: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        alert('Submitting');
    };

    isSubmitDisabled = errors => {
        return Object.values(errors).some(errMsg => {
            return errMsg;
        });
    };

    validate = (portfolio) => {
        const errors = {
            portfolio: /https?:\/\/(www\.)?[-\w@:%.+~#=]{2,256}\.[a-z]{2,6}\b([-\w@:%+.~#?&=/]*)/.test(portfolio)
                ? ""
                : "Please enter a valid url."
        };
        return errors;
    };

    render() {
        const { portfolio } = this.state;
        const errors = this.validate(portfolio);

        return (
            <form onSubmit={this.handleSubmit}>
            	<div id="sectionthree" className="fulline sectionThree">
                    <p className="sectiontitle">3. Portfolio</p>
                    <p className="fulline highline">Prove you're IBM next great designer by showing us who you are. What you've done. How you think. Tell us your story.</p>
                    <input 
                        id="portfolio" 
                        className="fulline sizefour highline {errors.portfolio ? 'invalid' : ''}" 
                        placeholder="Portfolio link*"
                        onChange={e => this.setState({ portfolio: e.target.value })}
                        value={portfolio} />
                    <span className="err-msg">{errors.portfolio}</span>
                    <textarea className="fulline" rows="6" placeholder="Anything else (another link, availability, etc.)?"></textarea>
                    <button id="submitButton" type="submit" className="pointer submit" disabled={this.isSubmitDisabled(errors)} >Submit</button>
                </div>
            </form>
        );
    }
}

export default SectionThree;