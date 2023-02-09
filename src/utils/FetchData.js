export const exerciseOptions = {
  method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'f545e6328cmsh3fb8a5e02c51ca5p13034ajsn1d32a23abd39',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f545e6328cmsh3fb8a5e02c51ca5p13034ajsn1d32a23abd39',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
}