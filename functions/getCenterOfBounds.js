import getCenterOfBounds from 'geolib/es/getCenterOfBounds';

exports.handler = async (event) => {
  const { coords } = JSON.parse(event.body);

  const res = getCenterOfBounds(coords);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
