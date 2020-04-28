import getPreciseDistance from 'geolib/es/getPreciseDistance';

exports.handler = async (event) => {
  const { start, end } = JSON.parse(event.body);
  const accuracy = JSON.parse(event.body).accuracy || 1;

  const res = getPreciseDistance(start, end, accuracy);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};