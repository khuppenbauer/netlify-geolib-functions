import getCompassDirection from 'geolib/es/getCompassDirection';

exports.handler = async (event) => {
  const { origin, destination } = JSON.parse(event.body);

  const res = getCompassDirection(origin, destination);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
