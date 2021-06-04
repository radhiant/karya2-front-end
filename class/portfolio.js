import EffectAnimation from '../effect/effectAnimation.js';
let animation = new EffectAnimation();

export default class Portfolio {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
        <section id="portfolio" class="d-block animate__animated animate__zoomIn">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 text-center">
                        <h2 class="fw-bold text-black">My Portfolio</h2>
                        <div class="hr-title mx-auto mb-5 mt-3"></div>
                        <div class="btn-group btn-portfolio" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-theme px-3" id="all">All</button>
                            <button type="button" class="btn btn-outline-theme px-3" id="web">Web</button>
                            <button type="button" class="btn btn-outline-theme px-3" id="mobile">Mobile App</button>
                            <button type="button" class="btn btn-outline-theme px-3" id="logo">Logo</button>
                            <button type="button" class="btn btn-outline-theme px-3" id="ilustration">Illustration</button>
                        </div>
                    </div>
                </div>

                <div class="row mb-5 justify-content-center" id="gallery">
                    <div class="col-md-6">
                        <img src="assets/portfolio/portofolio1.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-6">
                                <img src="assets/portfolio/portofolio2.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            </div>
                            <div class="col-6">
                                <img src="assets/portfolio/portofolio4.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            </div>
                            <div class="col-6">
                                <img src="assets/portfolio/portofolio5.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            </div>
                            <div class="col-6">
                                <img src="assets/portfolio/portofolio3.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
        return html;
    }

    all() {
        const portfolioGalery = document.querySelector("#portfolio #gallery");
        let html = portfolioGalery.innerHTML =
            `
            <div class="col-md-6">
                <img src="assets/portfolio/portofolio1.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-6">
                        <img src="assets/portfolio/portofolio2.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                    <div class="col-6">
                        <img src="assets/portfolio/portofolio4.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                    <div class="col-6">
                        <img src="assets/portfolio/portofolio5.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                    <div class="col-6">
                        <img src="assets/portfolio/portofolio3.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                </div>
            </div>
        `;

        return html;
    }

    web() {
        const portfolioGalery = document.querySelector("#portfolio #gallery");
        let html = portfolioGalery.innerHTML =
            `
                <div class="col-md-9">
                    <img src="assets/portfolio/portofolio1.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                </div>
            `;

        return html;
    }

    mobile() {
        const portfolioGalery = document.querySelector("#portfolio #gallery");
        let html = portfolioGalery.innerHTML =
            `
            <div class="col-md-9">
                <div class="row">
                    <div class="col-6">
                        <img src="assets/portfolio/portofolio2.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                    <div class="col-6">
                        <img src="assets/portfolio/portofolio3.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                </div>
            </div>
            `;

        return html;
    }

    logo() {
        const portfolioGalery = document.querySelector("#portfolio #gallery");
        let html = portfolioGalery.innerHTML =
            `
                <div class="col-md-9">
                    <div class="card card-bg border-0 animate__animated animate__bounceIn">
                        <div class="card-body text-center">
                            <img src="assets/portfolio/empty.svg" width="60%" class="img-empty mt-4"/>
                            <h2 class="my-5">Don't have experience yet</h2>
                        </div>
                    </div>
                </div>
            `;

        return html;
    }

    ilustration() {
        const portfolioGalery = document.querySelector("#portfolio #gallery");
        let html = portfolioGalery.innerHTML =
            `
            <div class="col-md-9">
                <div class="row">
                    <div class="col-6">
                        <img src="assets/portfolio/portofolio4.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                    <div class="col-6">
                        <img src="assets/portfolio/portofolio5.png" width="100%" class="card-portofolio mb-4 img-folio animate__animated animate__bounceIn" onclick="getImage(this.src)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                </div>
            </div>
            `;

        return html;
    }

    setActiveBtn(active) {
        const btnAll = document.querySelector("#portfolio #all");
        const btnWeb = document.querySelector("#portfolio #web");
        const btnMobile = document.querySelector("#portfolio #mobile");
        const btnLogo = document.querySelector("#portfolio #logo");
        const btnIlustration = document.querySelector("#portfolio #ilustration");

        function clearAll() {
            btnAll.className = "btn btn-outline-theme px-3";
            btnWeb.className = "btn btn-outline-theme px-3";
            btnMobile.className = "btn btn-outline-theme px-3";
            btnLogo.className = "btn btn-outline-theme px-3";
            btnIlustration.className = "btn btn-outline-theme px-3";
        }

        clearAll();

        if (active == "all") {
            btnAll.className = "btn btn-theme px-3";
        } else if (active == "web") {
            btnWeb.className = "btn btn-theme px-3";
        } else if (active == "mobile") {
            btnMobile.className = "btn btn-theme px-3";
        } else if (active == "logo") {
            btnLogo.className = "btn btn-theme px-3";
        } else if (active == "ilustration") {
            btnIlustration.className = "btn btn-theme px-3";
        } else {
            btnAll.className = "btn btn-theme px-3";
        }
    };

    display(bool) {
        const content = document.querySelector("section#portfolio");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
            void content.offsetWidth
            animation.addAnimation("section#portfolio", 'animate__zoomIn');
        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
            animation.removeAnimation("section#portfolio", 'animate__zoomIn');
        } else {
            content.classList.replace("d-none", "d-block");
            void content.offsetWidth
            animation.addAnimation("section#portfolio", 'animate__zoomIn');
        }
    }
}