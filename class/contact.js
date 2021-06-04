export default class Contact {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
        <section id="contact" class="d-block">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 mb-5 text-center">
                        <h2 class="fw-bold text-black">Get in tuch</h2>
                        <div class="hr-title mx-auto mt-3"></div>
                    </div>
                    <div class="col-lg-6 mb-5 style-theme text-black">
                        <div class="d-flex mb-4">
                            <div class="card border-0 card-contact me-4">
                                <div class="card-body text-center">
                                    <img src="assets/contact/pin.svg" width="100%">
                                </div>
                            </div>
                            <h6 class="mt-4 address">Sumedang, Jawa Barat</h6>
                        </div>

                        <div class="d-flex mb-4">
                            <div class="card border-0 card-contact me-4">
                                <div class="card-body text-center">
                                    <img src="assets/contact/phone-call.svg" width="100%">
                                </div>
                            </div>
                            <h6 class="mt-4">+62 8781 7379 229</h6>
                        </div>

                        <div class="d-flex mb-4">
                            <div class="card border-0 card-contact me-4">
                                <div class="card-body text-center">
                                    <img src="assets/contact/send.svg" width="100%">
                                </div>
                            </div>
                            <h6 class="mt-4">radhiantsobarna@gmail.com</h6>
                        </div>

                        <div class="d-flex mb-4">
                            <div class="card border-0 card-contact me-4">
                                <div class="card-body text-center">
                                    <img src="assets/contact/world.svg" width="100%">
                                </div>
                            </div>
                            <h6 class="mt-4"> <a href="https://radhiant.github.io" target="_blank">www.radhiant.github.io</a></h6>
                        </div>

                    </div>

                    <div class="col-lg-6 mb-5">
                        <form action="#" method="POST">
                            <div class="mb-4">
                                <input type="text" class="form-control input-custom" placeholder="Name" required>
                            </div>
                            <div class="mb-4">
                                <input type="email" class="form-control input-custom" placeholder="Email" required>
                            </div>
                            <div class="mb-4">
                                <input type="text" class="form-control input-custom" placeholder="Subject" required>
                            </div>
                            <div class="mb-4">
                                <textarea class="form-control input-custom" rows="5" placeholder="Message"
                                    required></textarea>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-theme text-center p-3">Send Message</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
        `;

        return html;
    }

    display(bool) {
        const content = document.querySelector("section#contact");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
        } else {
            content.classList.replace("d-none", "d-block");
        }
    }

}