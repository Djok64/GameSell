import { Link, NavLink, useNavigate } from "react-router-dom";
import GameApi from "../services/GameApi";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const handleDisconnect = () => {
    GameApi.get("/api/auth/logout").then(() => {
      navigate("/");
    });
  };
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>

      <ul className="">
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign&apos;up</NavLink>
        </li>
        <li>
          <button className="headLogoutBtn" onClick={handleDisconnect}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
