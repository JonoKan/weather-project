// Function to fetch data from webAPI urls
export async function fetchData(url) {
  const response = await fetch(url);
  var data = await response.json();
  return data;
}
