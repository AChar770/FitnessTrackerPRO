import { useState } from "react";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

export default function ActivityList({ activities, syncActivities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
          syncActivities={syncActivities}
        />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity, syncActivities }) {
  const { token } = useAuth();

  return (
    <li>
      <p>
        <Link to={`/activites/${activity.id}`}> {activity.name}</Link>
      </p>
    </li>
  );
}
