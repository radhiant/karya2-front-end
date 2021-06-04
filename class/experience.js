import EffectAnimation from '../effect/effectAnimation.js';
let animation = new EffectAnimation();
export default class Experience {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
        <section id="experience" class="d-block animate__animated animate__zoomIn">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 mb-5 text-center">
                        <h2 class="fw-bold text-black">Work Experience</h2>
                        <div class="hr-title mx-auto mt-3"></div>
                    </div>
                    <div class="col-12">

                        <div class="card border-0 bg-timeline" id="cardTimeline">
                            <div class="card-body">
                                <ul class="timeline timeline-left">

                                    <li class="timeline-inverted timeline-item">
                                        <div class="timeline-badge danger">
                                            <img src="assets/certificate.svg" width="65%" class="text-white">
                                        </div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p class="fw-normal mb-2">24 March 2021</p>
                                            </div>
                                            <div class="timeline-heading">
                                                <h4 class="timeline-title fw-bold">Agency Website Design</h4>
                                            </div>
                                            <div class="timeline-body">
                                                <p class="my-3">New York, USA</p>
                                                <p>
                                                    A small river named Duden flows by their place and supplies it with the
                                                    necessary regelialia. It is a paradisematic
                                                    country. in which roasted parts of sentences fly into your mouth. A
                                                    small river named Duden flows by their place and
                                                    supplies it with the necessary regelialia. It is a paradisematic
                                                    country, In which roasted parts of sentences fly into
                                                    your mouth.
                                                </p>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="timeline-inverted timeline-item">
                                        <div class="timeline-badge primary">
                                            <img src="assets/certificate.svg" width="65%" class="text-white">
                                        </div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p class="fw-normal mb-2">24 February 2021</p>
                                            </div>
                                            <div class="timeline-heading">
                                                <h4 class="timeline-title fw-bold">Phone Mobile App Design</h4>
                                            </div>
                                            <div class="timeline-body">
                                                <p class="my-3">New York, USA</p>
                                                <p>
                                                    A small river named Duden flows by their place and supplies it with the
                                                    necessary regelialia. It is a paradisematic
                                                    country. in which roasted parts of sentences fly into your mouth. A
                                                    small river named Duden flows by their place and
                                                    supplies it with the necessary regelialia. It is a paradisematic
                                                    country, In which roasted parts of sentences fly into
                                                    your mouth.
                                                </p>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="timeline-inverted timeline-item">
                                        <div class="timeline-badge purple">
                                            <img src="assets/certificate.svg" width="65%" class="text-white">
                                        </div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p class="fw-normal mb-2">24 January 2021</p>
                                            </div>
                                            <div class="timeline-heading">
                                                <h4 class="timeline-title fw-bold">Plant Mobile App Design</h4>
                                            </div>
                                            <div class="timeline-body">
                                                <p class="my-3">New York, USA</p>
                                                <p>
                                                    A small river named Duden flows by their place and supplies it with the
                                                    necessary regelialia. It is a paradisematic
                                                    country. in which roasted parts of sentences fly into your mouth. A
                                                    small river named Duden flows by their place and
                                                    supplies it with the necessary regelialia. It is a paradisematic
                                                    country, In which roasted parts of sentences fly into
                                                    your mouth.
                                                </p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section class="bg-work d-block animate__animated animate__zoomIn" id="project">
            <div class="container">
                <div class="row justify-content-center tf-up mb-5">

                    <div class="col-md-6 col-lg-3">
                        <div class="card card-experience mb-4">
                            <div class="card-body text-center">
                                <h2 class="fw-bold my-4">68</h2>
                                <h6 class="mb-3">Total Projects</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card card-experience mb-4">
                            <div class="card-body text-center">
                                <h2 class="fw-bold my-4">34</h2>
                                <h6 class="mb-3">Total Cilents</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card card-experience mb-4">
                            <div class="card-body text-center">
                                <h2 class="fw-bold my-4">41</h2>
                                <h6 class="mb-3">Web Design</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card card-experience mb-4">
                            <div class="card-body text-center">
                                <h2 class="fw-bold my-4">27</h2>
                                <h6 class="mb-3">Mobile App</h6>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row mb-5">
                    <div class="col-12 text-center ">
                        <h1 class="mb-5 fw-bold">I'm Available for freelancing</h1>
                        <a href="#" class="btn btn-theme rounded-pill mb-5 px-3">Let's Talk</a>
                        <br><br><br>
                    </div>
                </div>
            </div>
        </section>
        `;

        return html;
    }

    display(bool) {
        const content = document.querySelector("section#experience");
        const content1 = document.querySelector("section#project");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
            content1.classList.replace("d-none", "d-block");
            void content.offsetWidth
            animation.addAnimation("section#experience", 'animate__zoomIn');
            void content1.offsetWidth
            animation.addAnimation("section#project", 'animate__zoomIn');
        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
            content1.classList.replace("d-block", "d-none");
            animation.removeAnimation("section#experience", 'animate__zoomIn');
            animation.removeAnimation("section#project", 'animate__zoomIn');
        } else {
            content.classList.replace("d-none", "d-block");
            content1.classList.replace("d-none", "d-block");
            void content.offsetWidth
            animation.addAnimation("section#experience", 'animate__zoomIn');
            void content1.offsetWidth
            animation.addAnimation("section#project", 'animate__zoomIn');
        }
    }
}