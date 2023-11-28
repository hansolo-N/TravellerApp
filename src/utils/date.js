export function getDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const withSlashes = [year, month, day].join("/");

  const withHyphens = [year, month, day].join("-");

  return withHyphens;
}

export function formattedDate() {
  const timestamp = Date.now();
  const formattedTimestamp = new Date(timestamp);

  console.log(formattedTimestamp);
  return formattedTimestamp;
}
