import { Link } from "react-router-dom";
import "./HamburguerMenu.css";

interface HamburguerMenuProps {
  setMenuVisible: (visible: boolean) => void;
}

function HamburguerMenu({ setMenuVisible }: HamburguerMenuProps) {
  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  return (
    <div className="main-ham-menu-container">
      <section className="user-information">
        <h2>User name</h2>
        <h3>User Role</h3>
      </section>
      <section className="shortcuts">
        <nav>
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/prospects" onClick={handleLinkClick}>
                <div className="nav-element">
                  <p className="material-symbols-outlined ham-icon">groups</p>
                  <p className="nav-text">Prospects Management</p>
                </div>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/roster" onClick={handleLinkClick}>
                <div className="nav-element">
                  <p className="material-symbols-outlined ham-icon">
                    engineering
                  </p>
                  <p className="nav-text">Roster Management</p>
                </div>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/projects" onClick={handleLinkClick}>
                <div className="nav-element">
                  <p className="material-symbols-outlined ham-icon">
                    library_books
                  </p>
                  <p className="nav-text">Projects</p>
                </div>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/capabilities" onClick={handleLinkClick}>
                <div className="nav-element">
                  <p className="material-symbols-outlined ham-icon">
                    format_list_bulleted
                  </p>
                  <p className="nav-text">Capabilities</p>
                </div>
              </Link>
            </li>
            <li className="nav-link logout">
              <Link to="/logout" onClick={handleLinkClick}>
                <div className="nav-element">
                  <p className="material-symbols-outlined ham-icon">logout</p>
                  <p className="nav-text">Logout</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default HamburguerMenu;
