import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const [requests, setRequests] = useState([]);
  const [vehicle, setVehicle] = useState(null);

  // Fetch requests
  const navigate = useNavigate();
  const fetchVehicle = async () => {
    try {
      const res = await API.get("/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setVehicle(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchRequests = async () => {
    try {
      const res = await API.get("/requests", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setRequests(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Auto load on page open
  useEffect(() => {
    fetchVehicle();
    fetchRequests();

    const interval = setInterval(() => {
      fetchRequests();
    }, 3000); // every 3 sec

    return () => clearInterval(interval);
  }, []);

  //  Approve
  const approve = async (id) => {
    await API.put(
      `/requests/approve/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    fetchRequests();
  };

  //  Reject
  const reject = async (id) => {
    await API.put(
      `/requests/reject/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    fetchRequests();
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand">🚗 Vehicle QR System</span>

        <button
          className="btn btn-outline-light"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </nav>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Dashboard</h2>

        {/* CASE: NO VEHICLE */}
        {!vehicle ? (
          <div className="text-center">
            <p>You have not registered your vehicle</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/register")}
            >
              Register Vehicle
            </button>
          </div>
        ) : (
          <>
            {/* QR CARD */}
            <div className="card shadow p-4 text-center mb-4">
              <h4>Your QR Code</h4>

              <img src={vehicle.qrImage} alt="QR" style={{ width: "200px" }} />

              <p className="mt-2">{vehicle.qrCode}</p>

              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  navigator.clipboard.writeText(vehicle.qrCode);
                  alert("Copied!");
                }}
              >
                Copy Link
              </button>
            </div>

            {/* REQUESTS CARD */}
            <div className="card shadow p-4">
              <h4 className="mb-3">Requests</h4>

              {requests.length === 0 ? (
                <p>No requests yet</p>
              ) : (
                requests.map((req) => (
                  <div
                    key={req._id}
                    className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <p className="mb-1">
                        <b>Phone:</b> {req.requesterPhone}
                      </p>
                      <p className="mb-1">
                        <b>Message:</b> {req.message || "No message"}
                      </p>
                      <p className="mb-0">
                        <b>Status:</b> {req.status}
                      </p>
                    </div>

                    <div>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => approve(req._id)}
                      >
                        Approve
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => reject(req._id)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
