import sexagesimalToDecimal from 'geolib/es/sexagesimalToDecimal';

exports.handler = async (event) => {
  const { value } = JSON.parse(event.body);

  const res = sexagesimalToDecimal(value);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
