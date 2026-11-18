import {useLocation, useNavigate} from 'react-router';

// Yksittäisen mediatiedoston näkymä (/single)
const Single = () => {
  // Luetaan Link-komponentin state-ominaisuudessa välitetty mediaobjekti useLocation-hookilla
  const {state} = useLocation();
  // useNavigate-hookilla voidaan siirtyä ohjelmallisesti selaimen historiassa taaksepäin
  const navigate = useNavigate();
  const item = state;

  return (
    <>
      {item ? (
        <article>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          {/* Tarkistetaan mediatyyppi: jos video, käytetään <video>-elementtiä, muuten <img>-kuvaa */}
          {item.media_type.includes('video') ? (
            <video src={item.filename} controls />
          ) : (
            <img src={item.filename} alt={item.title} />
          )}

          <p>Created: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
          <p>Size: {item.filesize}</p>
          <p>Type: {item.media_type}</p>
        </article>
      ) : (
        <p>No media item selected.</p>
      )}

      {/* navigate(-1) palaa edelliselle sivulle selaimen historiassa */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
    </>
  );
};

export default Single;
