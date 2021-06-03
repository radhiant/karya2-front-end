import Body from './class/body.js';
import Navbar from './class/navbar.js';
import Header from './class/header.js';
import About from './class/about.js';
import Myskill from './class/myskills.js';
import Portfolio from './class/portfolio.js';
import Myservice from './class/myservice.js';
import Experience from './class/experience.js';
import Contact from './class/contact.js';
import Footer from './class/footer.js';
import Modal from './class/modal.js';
import Loading from './class/loading.js';

let body = new Body();
let navbar = new Navbar();
let header = new Header();
let about = new About();
let myskill = new Myskill();
let portfolio = new Portfolio();
let myservice = new Myservice();
let experience = new Experience();
let contact = new Contact();
let footer = new Footer();
let modal = new Modal();
let loading = new Loading();

const main = document.getElementById("main");

main.innerHTML =
    navbar.model() +
    header.model() +
    about.model() +
    myskill.model() +
    portfolio.model() +
    myservice.model() +
    experience.model() +
    contact.model() +
    loading.model() +
    footer.model() +
    modal.model();

window.onscroll = function () { body.scrollFunction() };

AOS.init({
    duration: 600,
});

const btnChange = document.getElementById("change");
const btnChange2 = document.getElementById("change2");
const btnAll = document.querySelector("#portfolio #all");
const btnWeb = document.querySelector("#portfolio #web");
const btnMobile = document.querySelector("#portfolio #mobile");
const btnLogo = document.querySelector("#portfolio #logo");
const btnIlustration = document.querySelector("#portfolio #ilustration");
const navHome = document.querySelector("#navhome");
const navAbout = document.querySelector("#navabout");
const navSkills = document.querySelector("#navskills");
const navPortfolio = document.querySelector("#navportfolio");
const navServices = document.querySelector("#navservice");
const navExp = document.querySelector("#navexperience");
const navContact = document.querySelector("#navcontact");
const menuToggle = document.getElementById('navbarNav');


btnAll.onclick = function () {
    portfolio.all();
    portfolio.setActiveBtn('all');
};

btnWeb.onclick = function () {
    portfolio.web();
    portfolio.setActiveBtn('web');
};

btnMobile.onclick = function () {
    portfolio.mobile();
    portfolio.setActiveBtn('mobile');
};

btnLogo.onclick = function () {
    portfolio.logo();
    portfolio.setActiveBtn('logo');
};

btnIlustration.onclick = function () {
    portfolio.ilustration();
    portfolio.setActiveBtn('ilustration');
};

navHome.onclick = function () {
    navbar.setActiveNav('home');
    closeNav();
    let delayInMilliseconds = 600;
    contentLoding();
    setTimeout(function () {
        header.display("true");
        about.display("true");
        myskill.display("true");
        portfolio.display("true");
        myservice.display("true");
        experience.display("true");
        contact.display("true");
        footer.display("true");
        loading.display("false");

    }, delayInMilliseconds);


};

navAbout.onclick = function () {
    navbar.setActiveNav('about');
    closeNav();
    let delayInMilliseconds = 600;

    contentLoding();

    setTimeout(function () {
        about.display("true");
        loading.display("false");
        footer.display("true");

    }, delayInMilliseconds);

};

navSkills.onclick = function () {
    navbar.setActiveNav('skill');
    closeNav();
    let delayInMilliseconds = 600;

    contentLoding();

    setTimeout(function () {
        myskill.display("true");
        loading.display("false");
        footer.display("true");

    }, delayInMilliseconds);
};

navPortfolio.onclick = function () {
    navbar.setActiveNav('portfolio');
    closeNav();
    let delayInMilliseconds = 600;

    contentLoding();

    setTimeout(function () {
        portfolio.display("true");
        loading.display("false");
        footer.display("true");

    }, delayInMilliseconds);
};

navServices.onclick = function () {
    navbar.setActiveNav('service');
    closeNav();
    let delayInMilliseconds = 600;

    contentLoding();

    setTimeout(function () {
        myservice.display("true");
        loading.display("false");
        footer.display("true");

    }, delayInMilliseconds);
};

navExp.onclick = function () {
    navbar.setActiveNav('exp');
    closeNav();
    let delayInMilliseconds = 600;

    contentLoding();

    setTimeout(function () {
        experience.display("true");
        loading.display("false");
        footer.display("true");

    }, delayInMilliseconds);
};

navContact.onclick = function () {
    navbar.setActiveNav('contact');
    closeNav();
    let delayInMilliseconds = 600;

    contentLoding();

    setTimeout(function () {
        contact.display("true");
        loading.display("false");
        footer.display("true");

    }, delayInMilliseconds);
};

btnChange.onclick = function () {
    const textChange = btnChange.value;

    if (textChange == 'Dark') {
        body.changeTheme("dark");
        btnChange.value = "Light";
        btnChange2.value = "Light";
    } else if (textChange == 'Light') {
        body.changeTheme("light");
        btnChange.value = "Dark";
        btnChange2.value = "Dark";
    } else {
        body.changeTheme("light");
        btnChange.value = "Light";
        btnChange2.value = "Light";
    }

}

btnChange2.onclick = function () {
    const textChange2 = btnChange2.value;

    if (textChange2 == 'Dark') {
        body.changeTheme("dark");
        btnChange.value = "Light";
        btnChange2.value = "Light";
    } else if (textChange2 == 'Light') {
        body.changeTheme("light");
        btnChange.value = "Dark";
        btnChange2.value = "Dark";
    } else {
        body.changeTheme("light");
        btnChange.value = "Light";
        btnChange2.value = "Light";
    }

}

function contentLoding() {
    loading.display("true");
    header.display("false");
    about.display("false");
    myskill.display("false");
    portfolio.display("false");
    myservice.display("false");
    experience.display("false");
    contact.display("false");
    footer.display("false");
}

function closeNav() {
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 992) {
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        bsCollapse.toggle();
    }
}



