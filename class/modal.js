export default class Modal {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                    <div class="modal-header bg-modal-custom text-white">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="btn bg-transparent text-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="modal-body bg-transparent p-0">
                        <img src="assets/portfolio/portofolio1.png" alt="img" width="100%" class="img-modal" />
                    </div>
                </div>
            </div>
            </div>
        `;

        return html;
    }
}