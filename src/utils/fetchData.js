export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0db5683861mshba92f930b537df4p1c93a4jsn45e50e8a668b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeVideosOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0db5683861mshba92f930b537df4p1c93a4jsn45e50e8a668b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};




export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}