const axios = require('axios');

test('GET /people - should return a list of people', async () => {
    const response = await axios.get('https://swapi.dev/api/people');
    expect(response.status).toBe(200);
    expect(response.data.results.length).toBeGreaterThan(0);
});
