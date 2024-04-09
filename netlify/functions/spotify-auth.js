exports.handler = async (event) => {
    const { default: fetch } = await import('node-fetch');
    const client_id = '7b6dae4e33e743209ec6f7bd06d236f3';
    const client_secret = 'ae09d37ace6d4ce885a97bfe909aff22';

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};