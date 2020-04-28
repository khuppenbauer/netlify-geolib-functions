import computeDestinationPoint from 'geolib/es/computeDestinationPoint';

exports.handler = async (event) => {
  const { point, distance, bearing } = JSON.parse(event.body);

  const res = computeDestinationPoint(point, distance, bearing);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
