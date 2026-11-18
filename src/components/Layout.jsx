import {Link, Outlet} from 'react-router';

// Jaettu asettelukomponentti (Layout), joka sisältää navigaatiopalkin.
// Lapsireittien (Home, Profile, Upload, Single) sisältö piirretään <Outlet />-kohtaan.
const Layout = () => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Outlet on paikkamerkki, johon aktiivisen reitin (esim. Home tai Profile) sisältö renderöidään */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
