import React, {Component} from "react";
import "./SectionOne.css";

class SectionOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email1: "",
            email2: "",
            phone: "",
            address1: "",
            city: "",
            state: "",
            country: "",
            zip: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        alert("Submitting");
    }

    isSubmitDisabled = errors => {
        return Object.values(errors).some(errMsg => {
            return errMsg;
        });
    }

    areEmailsTheSame = () => {
        const {
            email1,
            email2
        } = this.state;
        return email1 === email2;
    }

    validate = (fullName, email1, email2, phone, address1, city, state, country, zip) => {
        const errors = {
            fullName: /[a-zA-Z]{2,10}[\s][a-zA-Z]{2,}/.test(fullName)
                ? ""
                : "Please enter a valid name.",
            email1: /^\w+@\w+?\.[a-zA-Z]{2,3}$/.test(email1)
                ? ""
                : "Please enter a valid email address.",
            email2: !/^\w+@\w+?\.[a-zA-Z]{2,3}$/.test(email2)
                ? "Please enter a valid email address." :
                this.areEmailsTheSame() ? "" : "Email addresses do not match.",
            phone: /^[0-9\s+-]{8,}$/.test(phone)
                ? ""
                : "Please enter a valid phone number.",
            address1: /^[\w\s#&".*-]{8,}$/.test(address1)
                ? ""
                : "Please enter a valid address.",
            city: /^[\w\s"-.]{3,}$/.test(city)
                ? ""
                : "Please enter a valid city.",
            state: /^[\w\s"-.]{3,}$/.test(state)
                ? ""
                : "Please enter a valid state.",
            country: /^[\w\s"-.]{4,}$/.test(country)
                ? ""
                : "Please enter a valid country.",
            zip: /[\w-]{5,}/.test(zip)
                ? ""
                : "Please enter a valid ZIP.",
        };

        return errors;
    };

    render() {
        const { fullName, email1, email2, phone, address1, city, state, country, zip } = this.state;
        const errors = this.validate(fullName, email1, email2, phone, address1, city, state, country, zip);

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="sectionOne">
                	<p className="sectiontitle">1. Personal Information</p>
                    <div id="inputone">
                        <input 
                            id="fullName" 
                            className="sizefour inputone {errors.fullName ? 'invalid' : ''}" 
                            placeholder="Full name*" 
                            onChange={e => this.setState({ fullName: e.target.value })}
                            value={fullName} />
                        <span className="err-msg">{errors.fullName}</span>
                        <input 
                            id="email1" 
                            className="sizefour inputone {errors.email1 ? 'invalid' : ''}" 
                            placeholder="Email*"
                            onChange={e => this.setState({ email1: e.target.value })}
                            value={email1} />
                        <span className="err-msg">{errors.email1}</span>
                        <input 
                            id="email2" 
                            className="sizefour inputone {errors.email2 ? 'invalid' : ''}" 
                            placeholder="Re-enter email*"
                            onChange={e => this.setState({ email2: e.target.value })}
                            value={email2} />
                        <span className="err-msg">{errors.email2}</span>
                    </div>
                    <div>
                    <input 
                        id="phone" 
                        className="sizefour {errors.email2 ? 'invalid' : ''}"
                        placeholder="Phone*"
                        onChange={e => this.setState({ phone: e.target.value })}
                        value={phone} />
                    <span className="err-msg">{errors.phone}</span>
                    </div>
                    <div>
                    <input 
                        id="address1" 
                        className="sizefour highline fulline" 
                        placeholder="Address*"
                        onChange={e => this.setState({ address1: e.target.value })}
                        value={address1} />
                    <span className="err-msg">{errors.address1}</span>
                    </div>
                    <input 
                        id="address2" 
                        className="sizefour fulline" />
                    <div>
                    <input 
                        id="city" 
                        className="sizefour" 
                        placeholder="City*"
                        onChange={e => this.setState({ city: e.target.value })}
                        value={city} />
                    <span className="err-msg">{errors.city}</span>
                    </div>
                    <div>
                    <input 
                        className="sizefour" 
                        placeholder="State*"
                        onChange={e => this.setState({ state: e.target.value })}
                        value={state} />
                    <span className="err-msg">{errors.state}</span>
                    </div>
                    <div>
                    <input 
                        id="country" 
                        className="sizefour" 
                        placeholder="Country/Region*"
                        onChange={e => this.setState({ country: e.target.value })}
                        value={country} />
                    <span className="err-msg">{errors.country}</span>
                    </div>
                    <div>
                    <input 
                        id="zip" 
                        className="sizefour" 
                        placeholder="Zip/Postal code*"
                        onChange={e => this.setState({ zip: e.target.value })}
                        value={zip} />
                    <span className="err-msg">{errors.zip}</span>
                    </div>
                    <input className="sizefour highline fulline" placeholder="How did you hear about us?"/>
                    <button 
                        id="submitButton" 
                        type="submit" 
                        className="pointer submit" 
                        disabled={this.isSubmitDisabled(errors)} >Submit</button>
                </div>
            </form>
        );
    }
}

export default SectionOne;