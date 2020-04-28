import getDistance from 'geolib/es/getDistance';

exports.handler = async (event) => {
  const { start, end } = JSON.parse(event.body);
  const accuracy = JSON.parse(event.body).accuracy || 1;

  const res = getDistance(start, end, accuracy);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};