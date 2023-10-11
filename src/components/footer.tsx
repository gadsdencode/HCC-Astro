export default function Footer() {
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;Heaters & Controls 
              <a
                href="https://www.overture-systems.com"
                className="text-dark ms-1"
                target="_blank"
                rel="noopener"
              >
                @Gadsdencode
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                  rel="noopener"
                >
                  OSS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.overture-systems.com"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                  rel="noopener"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://overture-systems.com/about-us-2/"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                  rel="noopener"
                >
                  TBD
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link text-sm pe-0 text-muted"
                  target="_blank"
                >
                  TBD
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


