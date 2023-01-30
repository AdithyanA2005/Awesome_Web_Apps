const input_field = document.getElementsByClassName("input")[0];
const positive_button = document.getElementsByClassName("submit")[0];
positive_button.innerHTML = "START";
input_field.innerHTML = "CLICK THE START BUTTON TO GET STARTED";

function take_year() {
    let age = prompt("ENTER YOUR AGE IN YEARS HERE");
    let text = get_age_in_days(age);
    input_field.innerHTML = text;
}

function clear_all() {
    input_field.innerHTML = "CLICK THE START BUTTON TO GET STARTED";
    positive_button.innerHTML = "START";
}

function get_age_in_days(age) {
    if (isNaN(age)){
        let text = "Wrong Iput"
        return text 

    } else {
        if (age < 1) {
            let text = "You Have Not Yet Born"
            return text 
    
        } else {
            let age_in_days = age * 365;
            let text = "You are " + age_in_days + " days old";
            return text
        }
    }
}
