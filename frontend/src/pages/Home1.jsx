import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <h4 className="text-white">Vehicle QR System</h4>

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
            Sign Up
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="container text-center mt-5">
        <h1 className="fw-bold">
          Contact Vehicle Owners Instantly 🚗
        </h1>

        <p className="mt-3 text-muted">
          Facing parking issues or emergencies?  
          Just scan the QR code and connect with the owner instantly.
        </p>

        <div className="mt-4">
          <button
            className="btn btn-primary me-3 px-4"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>

          <button
            className="btn btn-outline-dark px-4"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="container mt-5">
        <div className="row text-center">

          <div className="col-md-3">
            <h5>📱 QR Scan</h5>
            <p>Scan and contact owner instantly</p>
          </div>

          <div className="col-md-3">
            <h5>🔒 Privacy</h5>
            <p>Masked calling keeps data safe</p>
          </div>

          <div className="col-md-3">
            <h5>⚡ Fast</h5>
            <p>Instant communication system</p>
          </div>

          <div className="col-md-3">
            <h5>🚨 Emergency</h5>
            <p>Quick help in urgent situations</p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-dark text-white text-center p-3 mt-5">
        <p className="mb-0">© 2026 Vehicle QR System</p>
      </div>
    </div>
  );
}

export default Home;