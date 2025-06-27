
/**
 * Displays the energy visual for a given trigram.
 * @param {Object} trigram - The trigram to display.
 * @returns {Object} The visual display of the energy.
 */
function displayEnergyVisual(trigram) {
    const visualLines = trigram.lines.map(line => line === 1 ? '━━━━━' : '━━ ━━');
    return {
        visual: visualLines.join('\n'),
        description: trigram.lines.map(line => line === 1 ? 'Yang' : 'Yin').join(' ')
    };
}

export { displayEnergyVisual };
