const API_URL = 'https://api.djaem.dk';
// const API_URL = 'http://localhost:8000';

export const getAllMusic = async () => {
  const url = `${API_URL}/v1/music`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch tracks: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching tracks from ${url}:`, error.message);
    throw error;
  }
};
