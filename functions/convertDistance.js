import convertDistance from 'geolib/es/convertDistance';

exports.handler = async (event) => {
  const { value, unit } = JSON.parse(event.body);

  const res = convertDistance(value, unit);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
