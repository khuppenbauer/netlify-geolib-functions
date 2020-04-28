import getAreaOfPolygon from 'geolib/es/getAreaOfPolygon';

exports.handler = async (event) => {
  const { points } = JSON.parse(event.body);

  const res = getAreaOfPolygon(points);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
