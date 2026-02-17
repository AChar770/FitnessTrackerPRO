import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ActivityDetails() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    async function fetchActivity(){
      const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities/${id}`);
      const result = await response.json();
      console.log("Fetched activity:", result);
      setActivity(result);
    }

    fetchActivity();
}, [id]);

  return (
    <div>
      <h1>Activity Details</h1>
      <p>Activity ID: {id}</p>

     {activity ? (
      <>
        <h2>{activity.name}</h2>
        <p>{activity.description}</p>
        <p>Created by: {activity.creatorName}</p>
      </>
     ) : (
      <p>Loading...</p>
     )}
    </div>
  );
}