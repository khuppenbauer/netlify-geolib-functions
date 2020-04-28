import isPointWithinRadius from 'geolib/es/isPointWithinRadius';

exports.handler = async (event) => {
  const { point, centerPoint, radius } = JSON.parse(event.body);

  const res = isPointWithinRadius(point, centerPoint, radius);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
