import getGreatCircleBearing from 'geolib/es/getGreatCircleBearing';

exports.handler = async (event) => {
  const { origin, destination } = JSON.parse(event.body);

  const res = getGreatCircleBearing(origin, destination);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
