export function formatTimestampToReadableDate(timestamp: string) {
  const date = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const readableDate = date.toLocaleDateString("en-US", options);
  return readableDate;
}
