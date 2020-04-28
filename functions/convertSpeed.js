import convertSpeed from 'geolib/es/convertSpeed';

exports.handler = async (event) => {
  const { value, unit } = JSON.parse(event.body);

  const res = convertSpeed(value, unit);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
