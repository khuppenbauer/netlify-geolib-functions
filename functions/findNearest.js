import findNearest from 'geolib/es/findNearest';

exports.handler = async (event) => {
  const { point, arrayOfPoints } = JSON.parse(event.body);

  const res = findNearest(point, arrayOfPoints);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
