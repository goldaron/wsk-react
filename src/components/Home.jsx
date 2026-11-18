import {useState} from 'react';
import MediaRow from './MediaRow';
import SingleView from './SingleView';

// Kovakoodattu esimerkkidata mediatiedostoista
const mediaArray = [
  {
    media_id: 8,
    user_id: 5,
    filename: 'https://placehold.co/800?text=Pic1&font=roboto.jpg',
    thumbnail: 'https://placehold.co/200?text=Thumb1&font=roboto.jpg',
    filesize: 170469,
    media_type: 'image/jpeg',
    title: 'Picture 1',
    description: 'This is a placeholder picture.',
    created_at: '2024-01-07T20:49:34.000Z',
  },
  {
    media_id: 9,
    user_id: 7,
    filename: 'https://placehold.co/800?text=Pic2&font=oswald.png',
    thumbnail: 'https://placehold.co/200?text=Thumb2&font=oswald.png',
    filesize: 1002912,
    media_type: 'image/png',
    title: 'Pic 2',
    description: '',
    created_at: '2024-01-07T21:32:27.000Z',
  },
  {
    media_id: 17,
    user_id: 2,
    filename: 'https://placeholdervideo.dev/1920x1080',
    thumbnail: 'https://placehold.co/200?text=Video&font=oswald.png',
    filesize: 1236616,
    media_type: 'video/mp4',
    title: 'Video 1',
    description: 'Placeholder video.',
    created_at: '2024-01-07T20:48:13.000Z',
  },
];

const Home = () => {
  // Tila (state) valitulle media-alkiolle.
  // Aluksi null (mitään ei ole valittu). Kun käyttäjä klikkaa riviä, tähän tallennetaan kyseinen item-objekti.
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {/* Käydään mediaArray läpi map()-funktiolla ja luodaan jokaisesta alkiosta MediaRow-komponentti.
              Välitetään propsina yksittäinen item sekä setSelectedItem-funktio tilan päivittämistä varten. */}
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>

      {/* Modaalinäkymä yksittäiselle medialle.
          Saa propsina valitun median (selectedItem) ja funktion sen sulkemiseen (setSelectedItem). */}
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

export default Home;
