import PropTypes from 'prop-types';

// Yksittäisen mediatiedoston esikatseluikkuna (modal/dialog)
const SingleView = (props) => {
  // item = valittu mediaobjekti (tai null, jos mitään ei ole valittu)
  // setSelectedItem = funktio, jolla valinta voidaan tyhjentää (asettaa takaisin null-tilaan)
  const {item, setSelectedItem} = props;

  return (
    <>
      {/* Ehdollinen renderöinti: dialog-elementti piirretään vain, jos item on olemassa (ei null) */}
      {item && (
        <dialog open={Boolean(item)}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          {/* Tarkistetaan mediatyyppi: jos kyseessä on video, käytetään <video>-elementtiä, muuten <img>-kuvaa */}
          {item.media_type.includes('video') ? (
            <video src={item.filename} controls />
          ) : (
            <img src={item.filename} alt={item.title} />
          )}

          <div>
            {/* Sulkupainike asettaa selectedItem-tilan takaisin arvoon null, jolloin dialogi katoaa */}
            <button
              onClick={() => {
                setSelectedItem(null);
              }}
            >
              Close
            </button>
          </div>
        </dialog>
      )}
    </>
  );
};

// item ei ole pakollinen (isRequired), koska se on aluksi null kun mitään ei ole valittu
SingleView.propTypes = {
  item: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
