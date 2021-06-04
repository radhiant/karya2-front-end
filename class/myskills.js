export default class Myskills {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
        <section id="myskills" class="d-block">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 mb-5 text-center">
                        <h2 class="fw-bold text-black">My Skills</h2>
                        <div class="hr-title mx-auto mb-5 mt-3"></div>
                    </div>

                    <div class="col-md-6 col-lg-3 style-theme">
                        <div class="card border-0 shadow mb-4 card-skills bg-white text-dark">
                            <div class="card-body">
                                <div id="progress1" class="p-3 fw-bold"></div>
                            </div>
                            <h4 class="text-center fw-bold">Figma</h4>
                            <center>
                                <div class="hr-card mb-5 mt-3"></div>
                            </center>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 style-theme">
                        <div class="card border-0 shadow mb-4 card-skills bg-white text-dark">
                            <div class="card-body">
                                <div id="progress2" class="p-3 fw-bold"></div>
                            </div>
                            <h4 class="text-center fw-bold">Adobe XD</h4>
                            <center>
                                <div class="hr-card mb-5 mt-3"></div>
                            </center>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 style-theme">
                        <div class="card border-0 shadow mb-4 card-skills bg-white text-dark">
                            <div class="card-body">
                                <div id="progress3" class="p-3 fw-bold"></div>
                            </div>
                            <h4 class="text-center fw-bold">HTML 5</h4>
                            <center>
                                <div class="hr-card mb-5 mt-3"></div>
                            </center>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 style-theme">
                        <div class="card border-0 shadow mb-4 card-skills bg-white text-dark">
                            <div class="card-body">
                                <div id="progress4" class="p-3 fw-bold"></div>
                            </div>
                            <h4 class="text-center fw-bold">CSS 3</h4>
                            <center>
                                <div class="hr-card mb-5 mt-3"></div>
                            </center>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        `;

        return html;
    }

    display(bool) {
        const content = document.querySelector("section#myskills");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
        } else {
            content.classList.replace("d-none", "d-block");
        }
    }
}