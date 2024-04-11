
async function getSpotifyToken () {
    const spotifyAuthUrl = 'https://musicfy-auth.netlify.app/.netlify/functions/spotify-auth' 
    const response = await axios.get(spotifyAuthUrl)
    const token = response.data.access_token
    console.log(token)
}