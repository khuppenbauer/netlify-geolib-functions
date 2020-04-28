import getPathLength from 'geolib/es/getPathLength';

exports.handler = async (event) => {
  const { points } = JSON.parse(event.body);

  const res = getPathLength(points);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
