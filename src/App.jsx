import "./App.css";
import Welcome from './components/greeting.jsx'


const App = () => {
  const sitename = "H1 Sivuston otsikko"
  return (
    <>
      <h1>{sitename}</h1>
      <h2>H2 Alaotsikko</h2>
      <h3>H3 ala-alaotsikko</h3>
      <p>Tekstikappale ilman varsinaista sisältöä.</p>
      <Welcome name="Kalle" />
    </>
  );
};

export default App;