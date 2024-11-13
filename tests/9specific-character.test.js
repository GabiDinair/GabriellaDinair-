const axios = require('axios');

test('GET /people/1 - should return details of a specific character', async () => {
    const response = await axios.get('https://swapi.dev/api/people/1');
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();
});
