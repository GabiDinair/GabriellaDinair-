const axios = require('axios');

test('GET /planets/1 - should return details of a specific planet', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/1');
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();
});
