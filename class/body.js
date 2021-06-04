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
        const cardSkills = document.querySelectorAll("#myskills .card-skills");
        const cardService = document.querySelectorAll("#services .card-service");
        const cardExp = document.querySelectorAll("#project .card");
        const bgProject = document.querySelector("section#project");
        const bgFooter = document.querySelector("footer#footerC");
        const bgCopyright = document.querySelector("footer #footerCopy");
        const bgTimeline = document.querySelector("#experience #cardTimeline");
        const bgTimelineUl = document.querySelector("#experience #cardTimeline ul");
        let setTheme;


        if (theme == 'light') {
            setTheme =
                body.className = "bg-white";
            imgBrand.setAttribute("src", "assets/logo-nav.png");
            nav.classList.replace("bg-darkbody", "bg-white");
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
            bgProject.classList.replace("bg-work-dark", "bg-work");
            bgFooter.classList.replace("bg-footer-dark", "bg-footer");
            bgCopyright.classList.replace("bg-copyright-dark", "bg-copyright");
            bgTimeline.classList.replace("bg-timeline-dark", "bg-timeline");
            bgTimelineUl.classList.replace("timeline-dark", "timeline");
            for (let i = 0; i < cardSkills.length; i++) {
                cardSkills[i].classList.replace("bg-dark", "bg-white");
                cardSkills[i].classList.replace("text-white", "text-dark");

            }

            for (let j = 0; j < cardService.length; j++) {
                cardService[j].classList.replace("bg-dark", "bg-white");
                cardService[j].classList.replace("text-white", "text-dark");

            }

            for (let k = 0; k < cardExp.length; k++) {
                cardExp[k].classList.replace("card-experience-dark", "card-experience");

            }


        } else if (theme == 'dark') {
            setTheme =
                body.className = "bg-darkbody";
            imgBrand.setAttribute("src", "assets/logo-nav-light.png");
            nav.classList.replace("bg-white", "bg-darkbody");
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
            lodingTheme.className = "card-body bg-darkbody text-white";
            metaTheme.setAttribute('content', '#000');
            bgProject.classList.replace("bg-work", "bg-work-dark");
            bgFooter.classList.replace("bg-footer", "bg-footer-dark");
            bgCopyright.classList.replace("bg-copyright", "bg-copyright-dark");
            bgTimeline.classList.replace("bg-timeline", "bg-timeline-dark");
            bgTimelineUl.classList.replace("timeline", "timeline-dark");
            for (let i = 0; i < cardSkills.length; i++) {
                cardSkills[i].classList.replace("bg-white", "bg-dark");
                cardSkills[i].classList.replace("text-dark", "text-white");
            }
            for (let j = 0; j < cardService.length; j++) {
                cardService[j].classList.replace("bg-white", "bg-dark");
                cardService[j].classList.replace("text-dark", "text-white");
            }
            for (let k = 0; k < cardExp.length; k++) {
                cardExp[k].classList.replace("card-experience", "card-experience-dark");


            }

        } else {
            setTheme =
                body.className = "bg-white";
            imgBrand.setAttribute("src", "assets/logo-nav.png");
            nav.classList.replace("bg-darkbody", "bg-white");
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
            bgProject.classList.replace("bg-work-dark", "bg-work");
            bgFooter.classList.replace("bg-footer-dark", "bg-footer");
            bgCopyright.classList.replace("bg-copyright-dark", "bg-copyright");
            bgTimeline.classList.replace("bg-timeline-dark", "bg-timeline");
            bgTimelineUl.classList.replace("timeline-dark", "timeline");
            for (let i = 0; i < cardSkills.length; i++) {
                cardSkills[i].classList.replace("bg-dark", "bg-white");
                cardSkills[i].classList.replace("text-white", "text-dark");
            }
            for (let j = 0; j < cardService.length; j++) {
                cardService[j].classList.replace("bg-dark", "bg-white");
                cardService[j].classList.replace("text-white", "text-dark");
            }
            for (let k = 0; k < cardExp.length; k++) {
                cardExp[k].classList.replace("card-experience-dark", "card-experience");


            }

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