
const { displayEnergyVisual } = require('../src/visual/visualDisplay');

test('displayEnergyVisual should display the energy visual correctly', () => {
    const trigram = { lines: [1, 0, 1, 0, 1, 0] };
    const result = displayEnergyVisual(trigram);
    expect(result).toBeDefined();
    expect(result.visual).toBe('Yang Yin Yang Yin Yang Yin');
});
