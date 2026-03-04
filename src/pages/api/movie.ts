const API_URL = 'https://onebite-cinema-server-jjui858kb-haeoris-projects.vercel.app';

export const fetchMovieList = async () => {
  const url = `${API_URL}/movie`

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch movie list: ${res.status}`);
    }

    return res.json();
  } catch (e) {
    console.error(`Error fetching movie list:`, e);
    return [];
  }
}

export const fetchMovieDetail = async (id: string)  => {
  const url = `${API_URL}/movie/${id}`

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch movie detail: ${res.status}`);
    }

    return res.json();
  } catch (e) {
    console.error(`Error fetching movie ${id}:`, e);
    return null;
  }
}

export const fetchSearchMovies = async (query: string) => {
  const url = `${API_URL}/movie/search?q=${query}`

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to search movies: ${res.status}`);
    }

    return res.json();
  } catch (e) {
    console.error(`Error searching movies with query "${query}":`, e);
    return [];
  }
}

export const fetchRandomMovies = async () => {
  const url = `${API_URL}/movie/random`

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch random movies: ${res.status}`);
    }

    return res.json();
  } catch (e) {
    console.error(`Error fetching movies ":`, e);
    return [];
  }
}