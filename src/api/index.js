export const fetchData = async URL => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export default fetchData;
