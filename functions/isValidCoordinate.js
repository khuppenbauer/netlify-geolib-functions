import isValidCoordinate from 'geolib/es/isValidCoordinate';

exports.handler = async (event) => {
  const { point } = JSON.parse(event.body);

  const res = isValidCoordinate(point);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
