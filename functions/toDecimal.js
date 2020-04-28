import toDecimal from 'geolib/es/toDecimal';

exports.handler = async (event) => {
  const { point } = JSON.parse(event.body);

  const res = toDecimal(point);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
