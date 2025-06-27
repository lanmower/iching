
const { provideExplanation } = require('../src/explanation/explanationProvider');

test('provideExplanation should provide a valid explanation', () => {
    const trigram = { lines: [1, 0, 1, 0, 1, 0] };
    const explanation = provideExplanation(trigram);
    expect(explanation).toBeDefined();
    expect(explanation).toBe('Mixed lines indicate balance and harmony.');
});

test('provideExplanation should handle unknown trigrams', () => {
    const trigram = { lines: [1, 1, 1, 1, 1, 1] };
    const explanation = provideExplanation(trigram);
    expect(explanation).toBeDefined();
    expect(explanation).toBe('All Yang lines indicate strength and power.');
});
