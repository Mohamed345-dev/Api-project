$(".fa-align-justify").click(function () {
    $(this).css("display", "none")
    $(".fa-times").css("display", "inline");
    $(".sidebar").animate({ left: 0 }, 1000);
    $(".two li").animate({ top: 0 }, 1000)
})

$(".fa-times").click(function () {
    $(this).css("display", "none")
    $(".times").css("display", "inline");
    $(".sidebar").animate({ left: -200 }, 1000);
    $(".two  li").animate({ top: 500 }, 1000)
})


var links = document.querySelectorAll(".link");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
        let info = e.target.id;
        fetchData(info);
    });
}


async function fetchData(api) {
    let allmove = [];
    let movie = await fetch(` https://api.themoviedb.org/3/${api}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let response = await movie.json();
    allmove = response.results;
    dispalyMoveis(allmove)
}
fetchData('movie/now_playing');
function dispalyMoveis(allmove) {
    let cartona = ``;
    for (let i = 0; i < allmove.length; i++) {
        cartona += ` 
    <div class="col-md-4 my-3">
        <div class="position-relative overflow-hidden content">
            <img class="w-100" src="https://image.tmdb.org/t/p/w500${allmove[i].poster_path}">
            <div class="overlay text-center position-absolute d-flex justify-content-center flex-column">
               <h1>${allmove[i].title}</h1>
               <p>
               ${allmove[i].overview}
               </p>
               <span>rate: ${allmove[i].vote_average}</span>
               <span>${allmove[i].release_date}</span>
           </div>
        </div>
     </div>`
    }
    document.getElementById("moves").innerHTML = cartona
}


// https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`


var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var ageInput = document.getElementById("age");
var phoneInput = document.getElementById("phone");
var passInput = document.getElementById("pass");
var repassInput = document.getElementById("repass");
var submitBtn = document.getElementById("btns");


nameInput.onkeyup = () => { validsName(); validBtn(); }
emailInput.onkeyup = () => { validsEmail(); validBtn(); }
ageInput.onkeyup = () => { validsAge(); validBtn(); }
phoneInput.onkeyup = () => { validsPhone(); validBtn(); }
passInput.onkeyup = () => { validsPass(); validBtn(); }
repassInput.onkeyup = () => { validsRepass(); validBtn(); }



function validsName() {
    var nameRejex = /^[A-Z][a-z]{3,10}$/
    if (nameRejex.test(nameInput.value)) {
        $(".name").slideUp(500);
        return true
    } else {
        $(".name").slideDown(500);
        return false
    }
}

function validsEmail() {
    var emailRejex = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRejex.test(emailInput.value)) {
        $(".email").slideUp(500);
        return true;
    }
    else {
        $(".email").slideDown(500);
        return false;
    }
}




function validsAge() {
    var ageRejex = /^[2-7][0-9]|80$/

    if (ageRejex.test(ageInput.value)) {
        $(".age").slideUp(500);
        return true;
    }
    else {
        $(".age").slideDown(500);
        return false;
    }
}


function validsPhone() {
    var phoneRejex = /^01[0125][0-9]{8}$/

    if (phoneRejex.test(phoneInput.value)) {
        $(".phone").slideUp(500);
        return true;
    }
    else {
        $(".phone").slideDown(500);
        return false;
    }
}

function validsPass() {
    var paasRejex = /^[A-Za-z]{3,}[0-9]{2,}$/
    if (paasRejex.test(passInput.value)) {
        $(".password").slideUp(500);
        return true;
    }
    else {
        $(".password").slideDown(500);
        return false;
    }
}




function validsRepass() {
    if (passInput.value == repassInput.value) {
        $(".repassword").slideUp(500);
        return true;
    }
    else {
        $(".repassword").slideDown(500);
        return false;
    }
}


function validBtn() {
    if (validsName() == true && validsEmail() == true && validsAge() == true && validsPhone() == true && validsPass() == true && validsRepass() == true) {
        console.log("yes")
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.disabled = "true";
    }
}