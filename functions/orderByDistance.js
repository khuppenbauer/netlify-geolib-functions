import orderByDistance from 'geolib/es/orderByDistance';

exports.handler = async (event) => {
  const { point, arrayOfPoints } = JSON.parse(event.body);

  const res = orderByDistance(point, arrayOfPoints);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
