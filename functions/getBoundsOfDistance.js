import getBoundsOfDistance from 'geolib/es/getBoundsOfDistance';

exports.handler = async (event) => {
  const { point, distance } = JSON.parse(event.body);

  const res = getBoundsOfDistance(point, distance);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
