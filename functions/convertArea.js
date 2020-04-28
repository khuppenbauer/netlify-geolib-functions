import convertArea from 'geolib/es/convertArea';

exports.handler = async (event) => {
  const { value, unit } = JSON.parse(event.body);

  const res = convertArea(value, unit);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
