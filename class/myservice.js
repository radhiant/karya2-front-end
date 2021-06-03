export default class Myservice {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
        <section id="services" class="d-block">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 mb-5 text-center">
                        <h2 class="fw-bold text-black">My Services</h2>
                        <div class="hr-title mx-auto mb-4 mt-3"></div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 mb-4 shadow card-service">
                            <div class="card-body text-center">
                                <img src="assets/service/services1.png" width="50%" class="img mb-3">
                                <h4 class="text-center fw-bold mb-4">Web Design</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 mb-4 shadow card-service">
                            <div class="card-body text-center">
                                <img src="assets/service/services2.png" width="50%" class="img mb-3">
                                <h4 class="text-center fw-bold mb-4">Mobile App Design</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 mb-4 shadow card-service">
                            <div class="card-body text-center">
                                <img src="assets/service/services3.png" width="50%" class="img mb-3">
                                <h4 class="text-center fw-bold mb-4">Digital Marketing</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 mb-4 shadow card-service">
                            <div class="card-body text-center">
                                <img src="assets/service/services4.png" width="50%" class="img mb-3">
                                <h4 class="text-center fw-bold mb-4">Logo Design</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 mb-4 shadow card-service">
                            <div class="card-body text-center">
                                <img src="assets/service/services5.png" width="50%" class="img mb-3">
                                <h4 class="text-center fw-bold mb-4">UI & UX Design</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 mb-4 shadow card-service">
                            <div class="card-body text-center">
                                <img src="assets/service/services6.png" width="50%" class="img mb-3">
                                <h4 class="text-center fw-bold mb-4">Business card Design</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        `;

        return html;
    }

    display(bool) {
        const content = document.querySelector("section#services");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
        } else {
            content.classList.replace("d-none", "d-block");
        }
    }
}