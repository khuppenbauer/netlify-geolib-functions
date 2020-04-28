import wktToPolygon from 'geolib/es/wktToPolygon';

exports.handler = async (event) => {
  const { wkt } = JSON.parse(event.body);

  const res = wktToPolygon(wkt);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
