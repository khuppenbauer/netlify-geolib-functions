import decimalToSexagesimal from 'geolib/es/decimalToSexagesimal';

exports.handler = async (event) => {
  const { value } = JSON.parse(event.body);

  const res = decimalToSexagesimal(value);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
