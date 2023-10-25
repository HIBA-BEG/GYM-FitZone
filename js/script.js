//FAQ section

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;
            toggleAnswer(answer);
        });
    });
});

function toggleAnswer(answer) {
    if (answer.style.display === "none" || answer.style.display === "") {
        const allAnswers = document.querySelectorAll(".answer");
        allAnswers.forEach(function (answer) {
            answer.style.display = "none";
        });
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}


//fist name and last name validation
function validateName(name, errorSpan) {
    const namePattern = /^[A-Za-z]{,}$/;
    if (namePattern.test(name)) {
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
        return true;
    } else {
        errorSpan.textContent = "Please enter a valid name.";
        errorSpan.style.display = "block";
        return false;
    }
}

// CIN validation
function validateCIN(cin, errorSpan) {
    const cinPattern = /^[a-zA-Z]{2}\d{6}$/;
    if (cinPattern.test(cin)) {
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
        return true;
    } else {
        errorSpan.textContent = "Please enter a valid CIN.";
        errorSpan.style.display = "block";
        return false;
    }
}

//Phone Number validation
function validateTEL(tel, errorSpan) {
    const telPattern = /^\+212\d{9}$/;
    if (telPattern.test(tel)) {
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
        return true;
    } else {
        errorSpan.textContent = "Please enter a valid Phone number.";
        errorSpan.style.display = "block";
        return false;
    }
}

//Email validation
function validateEMAIL(email, errorSpan) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
        return true;
    } else {
        errorSpan.textContent = "Please enter a valid E-mail.";
        errorSpan.style.display = "block";
        return false;
    }
}

// regex
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.regitre-j');

    form.addEventListener('submit', function(event) {
        const firstName = document.getElementById('firstname').value;
        const firstNameError = document.getElementById('firstNameError');
        const lastName = document.getElementById('lastname').value;
        const lastNameError = document.getElementById('lastNameError');
        const cin = document.getElementById('cin').value;
        const cinError = document.getElementById('cinError');
        const tel = document.getElementById('tel').value;
        const telError = document.getElementById('telError');
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        // const plans = document.getElementById('plans').value;



        if(!validateName(firstName, firstNameError) && !validateName(lastName, lastNameError)){
            event.preventDefault();
        }
        if(!validateCIN(cin, cinError)){
            event.preventDefault();
        }
        if(!validateTEL(tel, telError)){
            event.preventDefault();
        }
        if(!validateEMAIL(email, emailError)){
            event.preventDefault();
        }
    });
});

//burger Menu
const hamburger = document.querySelector(".humb");
const navmenu = document.querySelector(".navbar");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})


// document.querySelectorAll(".navbar li").forEach(n=> n.addEventListener("click",()=>{
//      hamburger.classList.remove("active");
//      navmenu.classList.remove("active");
// }))