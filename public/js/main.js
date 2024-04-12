const spotifyAuthUrl = 'https://musicfy-auth.netlify.app/.netlify/functions/spotify-auth';

async function updateSpotifyToken() {
    try {
        const response = await axios.get(spotifyAuthUrl);
        const token = JSON.stringify(response.data); // This might be a simple string
        localStorage.setItem('spotify_access_token', token); // Save the string directly
        console.log('Token updated and saved:', token);
    } catch (error) {
        console.error('Failed to fetch Spotify token:', error);
    }
}

function getSpotifyData() {
    let obj = JSON.parse(localStorage.getItem('spotify_access_token'));

    const query = $('#searchBar')[0].value || 'sugar'; 
    const searchType = 'track'; // Could be 'album', 'track', 'playlist', etc.

    axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${searchType}`, {
        headers: {
            'Authorization': `Bearer ${obj.access_token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        const data = response.data;
        // updating token if it's expired
        if(data.error?.message.includes('expired')) {
            updateSpotifyToken();
        }

        console.log('Spotify data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}