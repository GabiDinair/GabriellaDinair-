const axios = require('axios');

test('GET /heroes - should return 404 for invalid route', async () => {
    try {
        await axios.get('https://swapi.dev/api/heroes');
    } catch (error) {
        expect(error.response.status).toBe(404);
    }
});
