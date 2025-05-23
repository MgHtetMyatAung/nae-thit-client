export const formattedDate = (time: string) => {
  const date = new Date(time);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
};
