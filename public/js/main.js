// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDpdft_Bam9SHFWSzt2Cfj1ILcf9hi7yDfqBNl-GsnaNWZLnOvci4UsdZWM-7Qlq71OrhPffE3KL3IxoL0B4liS7Two4Y07Kiq-7aP_DRDIDayXzbU';

function getData () {
    const accessToken = token; 
    const query = 'Nirvana'; 
    const searchType = 'artist'; // Could be 'album', 'track', 'playlist', etc.

    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${searchType}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Process search results here
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
getData()
