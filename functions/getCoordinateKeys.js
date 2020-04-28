import getCoordinateKeys from 'geolib/es/getCoordinateKeys';

exports.handler = async (event) => {
  const { point } = JSON.parse(event.body);

  const res = getCoordinateKeys(point);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
