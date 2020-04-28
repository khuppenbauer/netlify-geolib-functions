import getCoordinateKey from 'geolib/es/getCoordinateKey';

exports.handler = async (event) => {
  const { point, keysToLookup } = JSON.parse(event.body);

  const res = getCoordinateKey(point, keysToLookup);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
