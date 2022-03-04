import access from '../secret/access.json';

export const fetchFunction = async (URL, method, body) => {
  try {
    const response = await fetch(URL, {
      method: method,
      mode: 'no-cors',
      headers: {
        Authorization: `Basic ${access.secret}`,
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};

export default fetchFunction;
