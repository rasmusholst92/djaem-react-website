const API_URL = 'http://api.djaem.dk';

export async function getAllMusic() {
  const url = `${API_URL}/v1/music`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch tracks: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching tracks:', error);
  }
}
