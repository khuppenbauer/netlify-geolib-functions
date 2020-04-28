import getBounds from 'geolib/es/getBounds';

exports.handler = async (event) => {
  const { points } = JSON.parse(event.body);

  const res = getBounds(points);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
