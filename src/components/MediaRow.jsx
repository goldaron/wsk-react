import PropTypes from 'prop-types';
import {Link} from 'react-router';

// Yksittäisen taulukkorivin renderöivä komponentti
const MediaRow = (props) => {
  const {item} = props;

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
        {/* React Routerin Link-komponentti ohjaa /single-reitille ilman sivun uudelleenlatausta.
            Valittu mediaobjekti (item) välitetään reitille state-ominaisuuden avulla. */}
        <Link to="/single" state={item}>
          Show
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;
