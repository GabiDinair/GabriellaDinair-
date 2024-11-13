const axios = require('axios');

test('GET /films/1 - should return details of a specific film', async () => {
    const response = await axios.get('https://swapi.dev/api/films/1');
    expect(response.status).toBe(200);
    expect(response.data.title).toBeDefined();
});
