import getLatitude from 'geolib/es/getLatitude';

exports.handler = async (event) => {
  const { point } = JSON.parse(event.body);
  const raw = JSON.parse(event.body).raw || false;

  const res = getLatitude(point, raw);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
