import getCenter from 'geolib/es/getCenter';

exports.handler = async (event) => {
  const { coords } = JSON.parse(event.body);

  const res = getCenter(coords);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
