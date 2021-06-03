export default class Body {

    changeTheme(theme) {
        const body = document.querySelector("body");
        const imgBrand = document.querySelector(".navbar-brand img");
        const nav = document.querySelector("nav");
        const btnTheme1 = document.querySelector(".theme1");
        const btnTheme2 = document.querySelector(".theme2");
        const btnIcon1 = document.querySelector("#change i");
        const btnIcon2 = document.querySelector("#change2 i");
        const aboutTheme = document.querySelector("#about .style-theme");
        const skillTheme = document.querySelector("#myskills h2");
        const folioTheme = document.querySelector("#portfolio h2");
        const serviceTheme = document.querySelector("#services h2");
        const extTheme = document.querySelector("#experience h2");
        const contactTheme1 = document.querySelector("#contact h2");
        const contactTheme2 = document.querySelector("#contact .style-theme");
        const lodingTheme = document.querySelector("#loding .card-body");
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        let setTheme;


        if (theme == 'light') {
            setTheme =
                body.className = "bg-white";
            imgBrand.setAttribute("src", "assets/logo-nav.png");
            nav.classList.replace("bg-dark", "bg-white");
            nav.classList.replace("navbar-dark", "navbar-light");
            btnTheme1.classList.replace("btn-light", "btn-dark");
            btnIcon1.classList.replace("bi-sun-fill", "bi-moon-fill");
            btnTheme2.classList.replace("btn-light", "btn-dark");
            btnIcon2.classList.replace("bi-sun-fill", "bi-moon-fill");
            aboutTheme.classList.replace("text-white", "text-black");
            skillTheme.classList.replace("text-white", "text-black");
            folioTheme.classList.replace("text-white", "text-black");
            serviceTheme.classList.replace("text-white", "text-black");
            extTheme.classList.replace("text-white", "text-black");
            contactTheme1.classList.replace("text-white", "text-black");
            contactTheme2.classList.replace("text-white", "text-black");
            lodingTheme.className = "card-body bg-white text-dark";
            metaTheme.setAttribute('content', '#fff');


        } else if (theme == 'dark') {
            setTheme =
                body.className = "bg-dark";
            imgBrand.setAttribute("src", "assets/logo-nav-light.png");
            nav.classList.replace("bg-white", "bg-dark");
            nav.classList.replace("navbar-light", "navbar-dark");
            btnTheme1.classList.replace("btn-dark", "btn-light");
            btnIcon1.classList.replace("bi-moon-fill", "bi-sun-fill");
            aboutTheme.classList.replace("text-black", "text-white");
            btnTheme2.classList.replace("btn-dark", "btn-light");
            btnIcon2.classList.replace("bi-moon-fill", "bi-sun-fill");
            aboutTheme.classList.replace("text-black", "text-white");
            skillTheme.classList.replace("text-black", "text-white");
            folioTheme.classList.replace("text-black", "text-white");
            serviceTheme.classList.replace("text-black", "text-white");
            extTheme.classList.replace("text-black", "text-white");
            contactTheme1.classList.replace("text-black", "text-white");
            contactTheme2.classList.replace("text-black", "text-white");
            lodingTheme.className = "card-body bg-dark text-white";
            metaTheme.setAttribute('content', '#000');

        } else {
            setTheme =
                body.className = "bg-white";
            imgBrand.setAttribute("src", "assets/logo-nav.png");
            nav.classList.replace("bg-dark", "bg-white");
            nav.classList.replace("navbar-dark", "navbar-light");
            btnTheme1.classList.replace("btn-light", "btn-dark");
            btnIcon1.classList.replace("bi-sun-fill", "bi-moon-fill");
            btnTheme2.classList.replace("btn-light", "btn-dark");
            btnIcon2.classList.replace("bi-sun-fill", "bi-moon-fill");
            aboutTheme.classList.replace("text-white", "text-black");
            skillTheme.classList.replace("text-white", "text-black");
            folioTheme.classList.replace("text-white", "text-black");
            serviceTheme.classList.replace("text-white", "text-black");
            extTheme.classList.replace("text-white", "text-black");
            contactTheme1.classList.replace("text-white", "text-black");
            contactTheme2.classList.replace("text-white", "text-black");
            lodingTheme.className = "card-body bg-white text-dark";
            metaTheme.setAttribute('content', '#fff');

        }

        return setTheme;
    }

    scrollFunction() {
        var navbar = document.getElementById("navbar");
        let setScroll;
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setScroll = navbar.classList.add("shadow");
        } else {
            setScroll = navbar.classList.remove("shadow");
        }

        return setScroll;

    }


}