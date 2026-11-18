import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router';
import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Upload from './views/Upload';

// Sovelluksen juurikomponentti, joka määrittelee asiakaspuolen reitityksen (React Router)
const App = () => {
  return (
    // basename lukee Viten konfiguraatiosta julkisen polun (oletuksena '/', tuotannossa esim. '/~tunnus/wsk-routing/')
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Layout toimii kehyksenä (sisältää navigaation), jonka <Outlet />-kohtaan lapsireitit renderöidään */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
