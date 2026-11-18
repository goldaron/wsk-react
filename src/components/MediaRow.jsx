import PropTypes from 'prop-types';

// Yksittäisen taulukkorivin renderöivä komponentti
const MediaRow = (props) => {
  // Puretaan (destructure) Home-komponentilta saadut propsit
  const {item, setSelectedItem} = props;

  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      {/* Muunnetaan ISO-aikaleima suomalaiseen päivämäärä- ja kellonaikamuotoon */}
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        {/* Kun nappia painetaan, asetetaan tämä rivi (item) Home-komponentin selectedItem-tilaan */}
        <button
          onClick={() => {
            setSelectedItem(item);
          }}
        >
          View
        </button>
      </td>
    </tr>
  );
};

// Varmistetaan PropTypesin avulla, että komponentti saa oikeanlaiset ja pakolliset propsit
MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;
