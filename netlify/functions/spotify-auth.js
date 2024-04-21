exports.handler = async (event) => {
    const { default: fetch } = await import('node-fetch');
    const client_id = 'c9906c9a5b2f4960a86fe1d8b05fcbf2'; 
    const client_secret = 'c082046eca7b4e17b41b1cec23515b78'; 
    // const client_id = '7b6dae4e33e743209ec6f7bd06d236f3'; 
    // const client_secret = 'ae09d37ace6d4ce885a97bfe909aff22'; 

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
        headers: {
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Methods": "GET, POST",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };
};
