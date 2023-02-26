

  class Header extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
          this.innerHTML = `

          <link href="styles.css" rel="stylesheet">
          <nav class="navbar navbar-expand bg-body-tertiary" style="background-color: #e3f2fd;">
          <div class="container-fluid">
            <a class=" new navbar-brand" href="index.html" target="_top">HOMEPAGE</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class=" new nav-link" href="charity.html">CHARITY</a>
                </li>
                <li class="nav-item">
                  <a class=" new nav-link active" aria-current="page" href="results.html" target="_top">RESULTS</a>
                </li>
               
      </nav>
        </nav>
        <br>
        <p class = new > Click on the above tags to view the other webpages </p>


          `;
        }
      }


      customElements.define('header-component', Header)
