import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Emergency() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/users/emergency/${id}`)
      .then(res => setData(res.data.emergencyContact));
  }, [id]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Emergency Contact</h2>

      {data && (
        <>
          <p>{data.name}</p>
          <a href={`tel:${data.phone}`}>
            <button>Call</button>
          </a>
        </>
      )}
    </div>
  );
}

export default Emergency;