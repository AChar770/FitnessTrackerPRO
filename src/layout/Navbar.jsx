import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/activities">Activities</Link>
          </>
        )}
      </nav>
    </header>
  );
}
