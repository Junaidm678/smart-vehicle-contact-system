import { useParams, useNavigate } from "react-router-dom";

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Vehicle Contact</h2>

      <button onClick={() => navigate(`/contact/${id}`)}>
        Contact Owner 🔐
      </button>

      <br /><br />

      <button onClick={() => navigate(`/emergency/${id}`)}>
        Call Emergency 🚑
      </button>
    </div>
  );
}

export default Home;