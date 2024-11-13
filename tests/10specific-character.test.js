const axios = require('axios');

test('GET /planets?page=2 - should return second page of planets', async () => {
    const response = await axios.get('https://swapi.dev/api/planets?page=2');
    expect(response.status).toBe(200);
    expect(response.data.results.length).toBeGreaterThan(0);
});
