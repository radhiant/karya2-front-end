export default class Footer {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
        <footer class="bg-footer d-block" id="footerC">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-12 text-center my-5">
                        <h4 class="fw-bold mb-3">Do you have any Project? <a href="#">Let's Talk</a></h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi laudantium est
                            earum
                            reprehenderit laboriosam nisi, iusto inventore reiciendis.</p>
                    </div>
                    <div class="col-12">
                        <div class="d-flex justify-content-around">
                            <div class="d-flex text-sosmed">
                                <h4 class="fw-bold me-3 mt-md-3 mt-lg-2">Dribble</h4>
                                <div class="card socialmedia">
                                    <div class="card-body p-2 border-0 text-center">
                                        <img src="assets/socialmedia/dribbble-logo.svg" width="80%" class="mt-1">
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex text-sosmed">
                                <h4 class="fw-bold me-3 mt-md-3 mt-lg-2">Behance</h4>
                                <div class="card socialmedia">
                                    <div class="card-body p-2 border-0 text-center">
                                        <img src="assets/socialmedia/behance.svg" width="80%" class="mt-1">
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex text-sosmed">
                                <h4 class="fw-bold me-3 mt-md-3 mt-lg-2">Facebook</h4>
                                <div class="card socialmedia">
                                    <div class="card-body p-2 border-0 text-center">
                                        <img src="assets/socialmedia/facebook.svg" width="80%" class="mt-1">
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex text-sosmed">
                                <h4 class="fw-bold me-3 mt-md-3 mt-lg-2">Linkedin</h4>
                                <div class="card socialmedia">
                                    <div class="card-body p-2 border-0 text-center">
                                        <img src="assets/socialmedia/linkedin-big-logo.svg" width="80%" class="mt-1">
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex text-sosmed">
                                <h4 class="fw-bold me-3 mt-md-3 mt-lg-2">Instagram</h4>
                                <div class="card socialmedia">
                                    <div class="card-body p-2 border-0 text-center">
                                        <img src="assets/socialmedia/instagram.svg" width="80%" class="mt-1">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br><br><br>
                    </div>
                </div>
            </div>

            <div class="bg-copyright" id="footerCopy">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center p-3">
                            <h6 class="mt-2">&copy; Copyright Radhian Sobarna. All Right Reserved | Design By KD Partho</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;

        return html;
    }


    display(bool) {
        const content = document.querySelector("footer");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
        } else {
            content.classList.replace("d-none", "d-block");
        }
    }
}