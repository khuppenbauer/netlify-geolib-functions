import getSpeed from 'geolib/es/getSpeed';

exports.handler = async (event) => {
  const { startPointWithTime, endPointWithTime } = JSON.parse(event.body);

  const res = getSpeed(startPointWithTime, endPointWithTime);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
