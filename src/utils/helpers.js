export const coinFormatter = (num) => {
  return Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
  }).format(num);
};

export const formatDate = (dateInMillisec) => {
  const dateObj = new Date(dateInMillisec);
  return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
};

export const formatDateFromApi = (dateStr) => {
  // Date comes in the format yyyy/mm/dd
  const dateObj = new Date(dateStr);
  return `${dateObj.toLocaleDateString()}`;
}