import isPointInPolygon from 'geolib/es/isPointInPolygon';

exports.handler = async (event) => {
  const { point, polygon } = JSON.parse(event.body);

  const res = isPointInPolygon(point, polygon);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
