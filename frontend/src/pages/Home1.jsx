import { useNavigate } from "react-router-dom";


function Home1() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <div className="container">
          <h3 className="text-white fw-bold m-0">
            🚗 Contact.me
          </h3>

          <div>
            <button
              className="btn btn-outline-light me-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <span className="badge bg-primary mb-3">
              Smart Vehicle Contact System
            </span>

            <h1 className="display-4 fw-bold">
              Contact Vehicle Owners
              <span className="text-primary"> Instantly</span>
            </h1>

            <p className="lead text-muted mt-3">
              Facing a parking issue, emergency, or vehicle-related problem?
              Scan the QR code and notify the owner instantly without exposing
              personal phone numbers.
            </p>

            <div className="mt-4">
              <button
                className="btn btn-primary btn-lg me-3"
                onClick={() => navigate("/signup")}
              >
                Create My QR
              </button>

              <button
                className="btn btn-outline-dark btn-lg"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>

            <div className="mt-4">
              <small className="text-muted">
                ✓ Privacy First &nbsp;&nbsp;
                ✓ Instant Alerts &nbsp;&nbsp;
                ✓ Secure Communication
              </small>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
              alt="Vehicle QR"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>

        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-light py-5">
        <div className="container text-center">

          <h2 className="fw-bold mb-4">
            Ever Faced These Situations?
          </h2>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h3>🚗</h3>
                  <h5>Vehicle Blocking Exit</h5>
                  <p className="text-muted">
                    Someone's vehicle is blocking yours and you can't find the owner.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h3>🚨</h3>
                  <h5>Emergency Situation</h5>
                  <p className="text-muted">
                    Immediate contact is needed during accidents or urgent incidents.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h3>🔋</h3>
                  <h5>Vehicle Issue</h5>
                  <p className="text-muted">
                    Headlights left on, flat tyre, or suspicious activity.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">
          How It Works
        </h2>

        <div className="row text-center">

          <div className="col-md-4">
            <h1>1️⃣</h1>
            <h5>Register Vehicle</h5>
            <p className="text-muted">
              Create an account and add your vehicle details.
            </p>
          </div>

          <div className="col-md-4">
            <h1>2️⃣</h1>
            <h5>Generate QR</h5>
            <p className="text-muted">
              Get a unique QR code linked to your vehicle.
            </p>
          </div>

          <div className="col-md-4">
            <h1>3️⃣</h1>
            <h5>Receive Alerts</h5>
            <p className="text-muted">
              Anyone can notify you instantly by scanning the QR.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-dark text-white py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Why Choose Sampark.me?
          </h2>

          <div className="row text-center">

            <div className="col-md-3 mb-4">
              <h1>🔒</h1>
              <h5>Privacy First</h5>
              <p>Your personal number remains protected.</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1>⚡</h1>
              <h5>Instant Contact</h5>
              <p>Notify owners within seconds.</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1>🚨</h1>
              <h5>Emergency Ready</h5>
              <p>Designed for urgent situations.</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1>🌍</h1>
              <h5>Works Anywhere</h5>
              <p>Use on cars, bikes, fleets, and more.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container text-center py-5">
        <h2 className="fw-bold">
          Ready to Secure Your Vehicle?
        </h2>

        <p className="text-muted mt-3">
          Create your vehicle QR code in less than a minute.
        </p>

        <button
          className="btn btn-primary btn-lg mt-3"
          onClick={() => navigate("/signup")}
        >
          Get Started Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="m-0">
          © 2026 Contact.me | Smart Vehicle Contact System
        </p>
      </footer>
    </>
  );
}

export default Home1;