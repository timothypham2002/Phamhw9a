function circumference(circleRadius) {
  const circumferenceRadius = 2 * Math.PI * circleRadius;
  return circumferenceRadius;
}

function area(circleRadius) {
  const areaRadius = Math.PI * circleRadius * circleRadius;

  return areaRadius;
}

module.exports = {
  circumference,
  area,
};