const axios = require('axios');

test('GET /starships/9 - should return details of a specific starship', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/9');
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();
});
