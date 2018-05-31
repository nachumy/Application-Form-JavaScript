function validateFullNamePattern() {
    // validate full name pattern
    const fullName = document.getElementById("fullName").value;
    const fullNamePattern = /^[a-zA-Z]{2,10}[\s][a-zA-Z]{2,}$/;
    return fullNamePattern.test(fullName);
}

function validateEmailPattern() {
    // validate e-mail pattern
    const email1 = document.getElementById("email1").value;
    const email2 = document.getElementById("email2").value;
    const emailPattern = /^\w+@\w+?\.[a-zA-Z]{2,3}$/;
    const result1 = emailPattern.test(email1);
    const result2 = emailPattern.test(email2);
    return (result1 && result2);
}

function validateEmails() {
    // validate e-mails' similarity
    const email1 = document.getElementById("email1").value;
    const email2 = document.getElementById("email2").value;
    return email1 === email2;
}

function validatePhonePattern() {
    // validate phone pattern
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9\s\+\-]{8,}$/;
    return phonePattern.test(phone);
}

function validateAddressPattern() {
    // validate address pattern
    const address = document.getElementById("address1").value;
    const addressPattern = /^[\w\s#&-'.*]{8,}$/;
    return addressPattern.test(address);
}

function validateCityPattern() {
    // validate city pattern
    const city = document.getElementById("city").value;
    const cityPattern = /^[\w\s'.-]{3,}$/;
    return cityPattern.test(city);
}

function validateCountryPattern() {
    // validate country pattern
    const country = document.getElementById("country").value;
    const countryPattern = /^[\w\s'-.]{4,}$/;
    return countryPattern.test(country);
}

function validateZipPattern() {
    // validate country pattern
    const zip = document.getElementById("zip").value;
    const zipPattern = /[\w-]{5,}/;
    return zipPattern.test(zip);
}

function validateRadio() {
    // validate radio buttons
    const inputList = document.getElementsByTagName("input");
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].type === "radio"  && inputList[i].checked) {
            return true
        }
    }
    return false;
}

function validateCheckbox() {
    // validate checkboxes
    const inputList = document.getElementsByTagName("input");
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].type === "checkbox" && inputList[i].name === "location" && inputList[i].checked) {
            return true;
        }
    }
    return false;
}

function validatePortfolioPattern() {
    // validate portfolio pattern
    const portfolio = document.getElementById("portfolio").value;
    const portfolioPattern = /https?:\/\/(www\.)?[-\w@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-\w@:%\+.~#?&=\/]*)/;
    return portfolioPattern.test(portfolio);
}



// check validation before submitting
function setUpEventListeners() {
    document.addEventListener("click", function(event) {
        const elementClicked = event.target;
            switch(elementClicked.id) {
                case "submitButton":
                    // validate everything
                    isValidForm;
                    if (!validateFullNamePattern()) {
                        alert("Please enter a valid name.");
                        event.preventDefault();
                    } else if (!validateEmailPattern()) {
                        alert("Please enter a valid email.");
                        event.preventDefault();
                    } else if (!validateEmails()) {
                        alert("Emails do not match.");
                        event.preventDefault();
                    } else if (!validatePhonePattern()) {
                        alert("Please enter a valid phone.");
                        event.preventDefault();
                    } else if (!validateAddressPattern()) {
                        alert("Please enter a valid address.");
                        event.preventDefault();                        
                    } else if (!validateCityPattern()) {
                        alert("Please enter a valid city.");
                        event.preventDefault();
                    } else if (!validateCountryPattern()) {
                        alert("Please enter a valid country.");
                        event.preventDefault(); 
                    } else if (!validateZipPattern()) {
                        alert("Please enter a valid Zip code.");
                        event.preventDefault();                                              
                    } else if (!validateRadio()) {
                        alert("Please select at least one design discipline.");
                        event.preventDefault();                      
                    } else if (!validateCheckbox()) {
                        alert("Please select at least one location.");
                        event.preventDefault();                      
                    } else if (!validatePortfolioPattern()) {
                        alert("Please enter a valid url.");
                        event.preventDefault();
                    }
                    break;
            }
    });
}


setUpEventListeners();