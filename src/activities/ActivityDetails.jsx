import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchActivity() {
      const response = await fetch(
        `https://fitnesstrac-kr.herokuapp.com/api/activities/${id}`,
      );
      const result = await response.json();
      console.log("Fetched activity:", result);
      setActivity(result);
    }

    fetchActivity();
  }, [id]);

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, id);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>Activity Details</h1>
      <p>Activity ID: {id}</p>

      {activity ? (
        <>
          <h2>{activity.name}</h2>
          <p>{activity.description}</p>
          <p>Created by: {activity.creatorName}</p>
          {token && <button onClick={tryDelete}>Delete</button>}
          {error && <p role="alert">{error}</p>}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
