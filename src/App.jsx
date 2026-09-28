
import './App.css';

function App() {

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">

          <a className="navbar-brand fw-bold text-primary" href="#">
            ServiceHub
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <button className="btn btn-primary">
                  Login
                </button>
              </li>

            </ul>

          </div>

        </div>
      </nav>


      {/* HERO */}
      <section id="home" className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="badge bg-primary mb-3">
                Trusted Local Services
              </span>

              <h1 className="display-4 fw-bold">
                Professional Services,
                <span className="text-primary">
                  {" "}At Your Doorstep
                </span>
              </h1>

              <p className="lead text-muted mt-3">
                Find reliable professionals for your home and
                personal service needs. Book trusted experts
                quickly and easily.
              </p>

              <div className="mt-4">

                <button className="btn btn-primary btn-lg me-2">
                  Explore Services
                </button>

                <button className="btn btn-outline-primary btn-lg">
                  Book a Service
                </button>

              </div>

            </div>


            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <div className="hero-card">

                <div className="display-1">
                  🛠️
                </div>

                <h3 className="mt-3">
                  Skilled Professionals
                </h3>

                <p className="text-muted">
                  One platform for all your service needs.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section id="services" className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Our Services
            </h2>

            <p className="text-muted">
              Choose from our range of professional services
            </p>

          </div>


          <div className="row g-4">

            <ServiceCard
              icon="🔧"
              title="Plumbing"
              description="Professional plumbing installation and repair."
            />

            <ServiceCard
              icon="⚡"
              title="Electrical"
              description="Reliable electrical repair and maintenance."
            />

            <ServiceCard
              icon="🧹"
              title="Cleaning"
              description="Home and office cleaning services."
            />

            <ServiceCard
              icon="💻"
              title="Computer Repair"
              description="Laptop, desktop and computer troubleshooting."
            />

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-section py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              How It Works
            </h2>

          </div>

          <div className="row text-center g-4">

            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">1</div>
                <h5>Choose a Service</h5>
                <p className="text-muted">
                  Select the service you need.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">2</div>
                <h5>Book a Professional</h5>
                <p className="text-muted">
                  Select a convenient date and time.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">3</div>
                <h5>Get the Service</h5>
                <p className="text-muted">
                  A professional completes your request.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-5">

        <div className="container">

          <div className="cta-section text-center">

            <h2 className="fw-bold">
              Need a Professional?
            </h2>

            <p>
              Book your service today.
            </p>

            <button className="btn btn-light btn-lg">
              Get Started
            </button>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer py-4">

        <div className="container text-center">

          <h5>ServiceHub</h5>

          <p className="text-muted mb-0">
            Professional services made simple.
          </p>

          <small className="text-muted">
            © 2026 ServiceHub. All rights reserved.
          </small>

        </div>

      </footer>

    </div>
  );
}


function ServiceCard({ icon, title, description }) {

  return (

    <div className="col-md-6 col-lg-3">

      <div className="service-card h-100">

        <div className="service-icon">
          {icon}
        </div>

        <h5 className="mt-3">
          {title}
        </h5>

        <p className="text-muted">
          {description}
        </p>

        <button className="btn btn-outline-primary">
          View Service
        </button>

      </div>

    </div>

  );

}


export default App;

