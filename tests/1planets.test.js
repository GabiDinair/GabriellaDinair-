const axios = require('axios');

test('GET /planets - should return a list of planets', async () => {
    const response = await axios.get('https://swapi.dev/api/planets');
    expect(response.status).toBe(200);
    expect(response.data.results.length).toBeGreaterThan(0);
});
