export default class Navbar {
    constructor(name) {
        this.name = name;
    }

    model() {
        let html =
            `
            <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white" id="navbar">
                <div class="container p-3">
                    <a class="navbar-brand" href=""><img src="assets/logo-nav.png" width="200" draggable="false"></a>
                    <div class="d-flex">
                        <button type="button" class="btn btn-dark rounded-pill me-2 theme1 d-lg-none" id="change" value="Dark">
                                    <i class="bi bi-moon-fill"></i>
                                </button>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="navToggle">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link me-3 active" aria-current="page" href="#" id="navhome">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-3" href="#" id="navabout">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-3" href="#" id="navskills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-3" href="#" id="navportfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-3" href="#" id="navservice">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-3" href="#" id="navexperience">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-3" href="#" id="navcontact">Contact</a>
                            </li>
                            <li class="nav-item d-none d-lg-block">
                                <button type="button" class="btn btn-dark rounded-pill me-2 theme2" id="change2" value="Dark">
                                    <i class="bi bi-moon-fill"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            `;

        return html;
    }

    setActiveNav(active) {
        const navHome = document.querySelector("#navhome");
        const navAbout = document.querySelector("#navabout");
        const navSkills = document.querySelector("#navskills");
        const navPortfolio = document.querySelector("#navportfolio");
        const navServices = document.querySelector("#navservice");
        const navExp = document.querySelector("#navexperience");
        const navContact = document.querySelector("#navcontact");

        clearAll();

        function clearAll() {
            navHome.className = "nav-link me-3";
            navAbout.className = "nav-link me-3";
            navSkills.className = "nav-link me-3";
            navPortfolio.className = "nav-link me-3";
            navServices.className = "nav-link me-3";
            navExp.className = "nav-link me-3";
            navContact.className = "nav-link me-3";
        }

        if (active == "home") {
            navHome.className = "nav-link me-3 active";
        } else if (active == "about") {
            navAbout.className = "nav-link me-3 active";
        } else if (active == "skill") {
            navSkills.className = "nav-link me-3 active";
        } else if (active == "portfolio") {
            navPortfolio.className = "nav-link me-3 active";
        } else if (active == "service") {
            navServices.className = "nav-link me-3 active";
        } else if (active == "exp") {
            navExp.className = "nav-link me-3 active";
        } else if (active == "contact") {
            navContact.className = "nav-link me-3 active";
        }

    }

}