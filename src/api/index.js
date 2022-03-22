import RNFetchBlob from 'rn-fetch-blob';

export const fetchFunction = async (url, method, body) => {
  return RNFetchBlob.config({
    trusty: true,
  }).fetch(method, url);
};

export default fetchFunction;
