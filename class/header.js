import EffectAnimation from '../effect/effectAnimation.js';
let animation = new EffectAnimation();
export default class Header {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
            <section id="header" class="section-header d-block animate__animated animate__zoomIn">
                <div class="container">
                    <div class="card card-bg border-0 mb-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-md-6 p-5 style-theme">
                                    <div class="d-none d-md-block">
                                        <br><br><br>
                                    </div>
                                    <img src="assets/man1.png" width="100%" class="d-block d-md-none mb-5">
                                    <h5 class="mb-3 mt-lg-5">Hello!</h5>
                                    <h1 class="mb-3">I'm <b class="extra-bold">Web Programming</b></h1>
                                    <h2 class="mb-3">A Freelance Fullstack Website</h2>
                                    <div class="my-4">
                                        <a href="#" class="btn btn-theme me-3 rounded-pill px-3">Hire me</a>
                                        <a href="#" class="btn btn-outline-theme rounded-pill px-3">My work</a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <img src="assets/man1.png" width="100%" class="d-none d-md-block">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `

        return html;


    }

    display(bool) {
        const content = document.querySelector("section#header");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
            void content.offsetWidth
            animation.addAnimation("section#header", 'animate__zoomIn');

        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
            animation.addAnimation("section#header", 'animate__zoomIn');
        } else {
            content.classList.replace("d-none", "d-block");
            void content.offsetWidth
            animation.addAnimation("section#header", 'animate__zoomIn');

        }
    }
}