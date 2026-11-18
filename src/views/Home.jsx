import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import {fetchData} from '../utils/fetchData';

// Etusivun näkymä, joka hakee mediatiedostot ja niiden omistajat rajapinnasta
const Home = () => {
  // Tila (state) mediatiedostojen listalle, aluksi tyhjä taulukko []
  const [mediaArray, setMediaArray] = useState([]);

  // useEffect suoritetaan vain kerran komponentin ensirenderöinnin jälkeen (koska riippuvuustaulukko on tyhjä [])
  useEffect(() => {
    const getMedia = async () => {
      try {
        // 1. Vaihe (Lab 1): haku paikallisesta tiedostosta olisi:
        // const mediaData = await fetchData('test.json');

        // 2. Vaihe (Lab 2): haetaan mediatiedostot Media API -rajapinnasta
        const mediaData = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
        );

        // Haetaan jokaiselle mediatiedostolle sen julkaisijan käyttäjänimi Auth API -rajapinnasta
        // Promise.all odottaa, että kaikki rinnakkaiset käyttäjähaut valmistuvat
        const mediaWithUsers = await Promise.all(
          mediaData.map(async (item) => {
            const userData = await fetchData(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
            );
            // Yhdistetään alkuperäisen media-alkion tiedot ja haettu username uuteen objektiin
            return {...item, username: userData.username};
          }),
        );

        // Päivitetään tila, mikä saa Reactin piirtämään taulukon uudelleen haetulla datalla
        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    getMedia();
  }, []);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {/* Käydään mediaArray läpi map()-funktiolla ja luodaan jokaisesta alkiosta MediaRow-komponentti */}
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
