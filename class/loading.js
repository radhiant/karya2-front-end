export default class About {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
        <section id="loding" class="d-none">
            <div class="container-fluid">
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="card border-0">
                            <div class="card-body">
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
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
        const content = document.querySelector("section#loding");
        if (bool == "true") {
            content.classList.replace("d-none", "d-block");
        } else if (bool == "false") {
            content.classList.replace("d-block", "d-none");
        } else {
            content.classList.replace("d-block", "d-none");
        }
    }
}