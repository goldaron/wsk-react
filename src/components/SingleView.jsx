import PropTypes from 'prop-types';

// Yksittäisen mediatiedoston esikatseluikkuna (modal/dialog)
const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  return (
    <>
      {item && (
        <dialog open={Boolean(item)}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Owner: {item.username}</p>

          {item.media_type.includes('video') ? (
            <video src={item.filename} controls />
          ) : (
            <img src={item.filename} alt={item.title} />
          )}

          <div>
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

SingleView.propTypes = {
  item: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
