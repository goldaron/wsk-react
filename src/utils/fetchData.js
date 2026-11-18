/**
 * Apufunktio datan hakemiseen annetusta URL-osoitteesta Fetch API:n avulla.
 *
 * @async
 * @param {string} url - osoite, josta data haetaan
 * @param {object} options - fetch-asetukset
 * @return {Promise<object>} - haettu JSON-data JavaScript-objektina
 */
const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    if (json.message) {
      throw new Error(json.message);
    }
    throw new Error(`Error ${response.status} occured`);
  }
  return json;
};

export {fetchData};
