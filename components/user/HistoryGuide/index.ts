export function returnDate(timestamp: number) {
  let date = new Date(timestamp * 1000);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let minute = date.getMinutes();
  let hour = date.getHours();

  let section = "AM";
  if (hour > 12) {
    hour -= 12;
    section = "PM";
  }

  return `${month + 1}/${day}/${year} at ${hour}:${minute}${section}`;
}
