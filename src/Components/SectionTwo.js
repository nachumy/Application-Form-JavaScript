import React from 'react';
import './SectionTwo.css';

const SectionTwo = (props) => {
    return (
        <div classNameName="sectionTwo">
        	<div id="skilltitle" className="sectiontitle fulline">
                2. Skills and location
            </div>
            <div className="fulline">
                <p className="highline fulline">Which is your primary design discipline?*</p>
            </div>
            <input type="radio" name="discipline" id="radiodesignResearch" value="designResearch"/>
            <label id="labelone" className="sizefour" for="radiodesignResearch">Design Research</label>
            <input type="radio" name="discipline" id="radiovisualDesign" value="visualDesign"/>
            <label id="labeltwo" for="radiovisualDesign">Visual Design</label> 
            <input type="radio" name="discipline" id="radiouxDesign" value="uxDesign"/>
            <label id="labelthree" for="radiouxDesign">UX Design</label> 
            <input type="radio" name="discipline" id="radiofrontEndDev" value="frontEndDev"/>
            <label id="labelfour" for="radiofrontEndDev">Front-end Dev</label> 
            <div className="box fulline">
                <div className="smallbox">
                    <p>Do you have experience with any other disciplines?</p>
                    <div className="checkboxholder">
                        <input className="checkbox" type="checkbox" name="experience" id="visualDesign" value="visualDesign"/>
                        <label for="visualDesign"> Visual Design</label>
                    </div>
                    <div className="checkboxholder">
                        <input className="checkbox" type="checkbox" name="experience" id="uxDesign" value="uxDesign"/>
                        <label for="uxDesign"> UX Design</label>
                    </div>
                    <div className="checkboxholder">
                        <input className="checkbox" type="checkbox" name="experience" id="frontEndDevelopment" value="frontEndDevelopment"/>
                        <label for="frontEndDevelopment"> Front-end Development</label>
                    </div>
                </div>
                <div className="smallbox">
                    <p>Where are you interested in working?*</p>
                    <p className="subtext">You must be legally authorized to work without visa sponsorship in the location(s) you choose.</p>              
                    <div className="checkboxholder">
                        <input className="checkbox sizetwo" type="checkbox" name="location" id="austin" value="austin"/>
                        <label for="austin">Austin, Texas</label>
                    </div>
                    <div className="checkboxholder">
                        <input className="checkbox sizetwo" type="checkbox" name="location" id="newYork" value="newYork"/>
                        <label for="newYork">New York, New York</label>
                    </div>
                    <div className="checkboxholder">
                        <input className="checkbox sizetwo" type="checkbox" name="location" id="toronto" value="toronto"/>
                        <label for="toronto">Toronto, Ontario</label>
                    </div> 
                    <div className="checkboxholder">
                        <input className="checkbox sizetwo" type="checkbox" name="location" id="shanghai" value="shanghai"/>
                        <label for="shanghai">Shanghai, China</label>
                    </div>
                    <div className="checkboxholder">
                        <input className="checkbox sizetwo" type="checkbox" name="location" id="dublin" value="dublin"/>
                        <label for="dublin">Dublin, Ireland</label>
                    </div>
                    <div className="checkboxholder">
                        <input className="checkbox sizetwo" type="checkbox" name="location" id="hursley" value="hursley"/>
                        <label for="hursley">Hursley, United Kingdom</label>
                    </div>
                    <div className="checkboxholder">
                        <input className="checkbox sizetwo" type="checkbox" name="location" id="boeblingen" value="boeblingen"/>
                        <label for="boeblingen">Boeblingen, Germany</label>
                    </div>
                    <div className="checkboxholder">
                        <input className="checkbox sizetwo" type="checkbox" name="location" id="somewhereElse" value="somewhereElse"/>
                        <label for="somewhereElse">Somewhere else</label>
                    </div>                     
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;