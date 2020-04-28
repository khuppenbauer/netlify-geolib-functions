import getLongitude from 'geolib/es/getLongitude';

exports.handler = async (event) => {
  const { point } = JSON.parse(event.body);
  const raw = JSON.parse(event.body).raw || false;

  const res = getLongitude(point, raw);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
