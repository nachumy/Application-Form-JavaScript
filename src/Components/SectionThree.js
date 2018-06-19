import React from 'react';
import './SectionThree.css';

const SectionThree = (props) => {
    return (
        <div classNameName="sectionThree">
        	<div id="sectionthree" class="fulline">
                <div class="sectiontitle">
                    3. Portfolio
                </div>
                <div class="fulline">
                    <p class="highline">Prove you're IBM next great designer by showing us who you are. What you've done. How you think. Tell us your story.</p>
                </div>
                <div class="fulline">
                    <input id="portfolio" class="sizefour highline" type="text" name="portfolio" placeholder="Portfolio link*" required pattern="https?:\/\/(www\.)?[-\w@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-\w@:%\+.~#?&=\/]*)"/>
                </div>
                <textarea class="fulline" rows="6" placeholder="Anything else (another link, availability, etc.)?"></textarea>
            </div>
            <div id="buttondiv">
                <button id="submitButton" type="submit" value="submit" class="pointer submit">Submit</button>
            </div>
        </div>
    );
}

export default SectionThree;