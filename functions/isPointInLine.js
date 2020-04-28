import isPointInLine from 'geolib/es/isPointInLine';

exports.handler = async (event) => {
  const { point, lineStart, lineEnd } = JSON.parse(event.body);

  const res = isPointInLine(point, lineStart, lineEnd);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  }
};
