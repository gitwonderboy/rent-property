import { Link } from 'react-router-dom';

export default function NavBarComponent() {
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link className="logo" to="/">
                  <h1>CORNER</h1>
                </Link>

                <ul className="nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/properties">Properties</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="fa fa-calendar"></i> Schedule a visit
                    </Link>
                  </li>
                </ul>
                <Link to="/" className="menu-trigger"></Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
