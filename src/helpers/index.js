export const generateID = () => {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2);

  return random + date;
};
