const getData = async () => {
  const response = await fetch(`https://swapi.dev/api/starships/`);
  const data = await response.json();
  if (response.ok) {
    return data.results;
  } else {
    throw new Error("Error Fetching Data from API");
  }
};

export default getData;
