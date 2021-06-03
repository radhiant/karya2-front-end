export default class About {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
            <section id="about" class="d-block">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <div class="card card-bg border-0 mb-5">
                                <div class="card-body p-0">
                                    <img src="assets/man2.png" width="100%">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 style-theme text-black">
                            <h2 class="fw-bold ms-md-3 ms-lg-4 text-center text-md-start">About Me</h2>
                            <div class="row my-4 ms-md-2 ms-4">
                                <div class="col-4">
                                    <h6 class="my-5 bold">Name:</h6>
                                    <h6 class="mb-5 bold">Date of Birth:</h6>
                                    <h6 class="mb-5 bold">Address:</h6>
                                    <h6 class="mb-5 bold">Zip code:</h6>
                                    <h6 class="mb-5 bold">Email:</h6>
                                    <h6 class="mb-4 bold">Phone:</h6>
                                </div>
                                <div class="col-8">
                                    <h6 class="my-5 light">Radhian Sobarna</h6>
                                    <h6 class="mb-5 light">23 April 2000</h6>
                                    <h6 class="mb-5 light">Sumedang</h6>
                                    <h6 class="mb-5 light">45371</h6>
                                    <h6 class="mb-5 light">radhiantsobarna@gmail.com</h6>
                                    <h6 class="mb-4 light">+6287817379228</h6>
                                </div>
                            </div>
                            <div class="text-center text-md-start">
                                <a href="#" class="btn btn-theme rounded-pill ms-md-4 px-3">Download CV</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        `;
        return html;
    }

    display(bool) {
        const content = document.querySelector("section#about");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
        } else {
            content.classList.replace("d-none", "d-block");
        }
    }
}