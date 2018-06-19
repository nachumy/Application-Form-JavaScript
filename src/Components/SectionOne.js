import React from 'react';
import './SectionOne.css';

const SectionOne = (props) => {
    return (
        <div className="sectionOne">
        	<div className="sectiontitle fulline">
			    1. Personal Information
			</div>
			<div id="inputone">
			    <input id="fullName" className="sizefour" type="text" name="fullName" placeholder="Full name*" required pattern="[a-zA-Z]{2,10}[\s][a-zA-Z]{2,}" />
			    <input id="email1" className="sizefour" type="email" name="email" placeholder="Email*" required pattern="^\w+@\w+?\.[a-zA-Z]{2,3}$" />
			    <input id="email2" className="sizefour" type="email" name="re-enterEmail" placeholder="Re-enter email*" required pattern="^\w+@\w+?\.[a-zA-Z]{2,3}$"/>
			</div>
			<div>
			    <input id="phone" className="sizefour" type="text" name="phone" placeholder="Phone*" required pattern="^[0-9\s\+\-]{8,}$" />
			</div>

			<div className="fulline">
			    <input id="address1" className="sizefour highline" type="text" name="address" placeholder="Address*" required pattern="^[\w\s#&-'.*]{8,}$" />
			    <input id="address2" className="sizefour" type="text" name="address2"/>
			</div>
			<div id="smallone">
			    <input id="city" className="sizefour" type="text" name="city" placeholder="City*" required pattern="^[\w\s'-.]{3,}$"/>
			</div>
			<div id="smalltwo">
			    <input className="sizefour" type="text" name="state" placeholder="State" pattern="^[\w\s'-.]{3,}$"/>
			</div>
			<div id="smallthree">
			    <input id="country" className="sizefour" type="text" name="country" placeholder="Country/Region*" required pattern="^[\w\s'-.]{4,}$"/>
			</div>
			<div id="smallfour">
			    <input id="zip" className="sizefour" type="text" name="zip" placeholder="Zip/Postal code" pattern="[\w-]{5,}"/>
			</div>
			<div id="howdidyou" className="fulline">
			    <input className="sizefour highline" type="text" name="hearAboutUs" placeholder="How did you hear about us"/>
			</div>
        </div>
    );
}

export default SectionOne;