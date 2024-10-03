export const generateRandomCoordinate = () => {
  const latitude = (Math.random() * 180 - 90).toFixed(6);
  const longitude = (Math.random() * 360 - 180).toFixed(6);
  return { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };
};
