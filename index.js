module.exports = function (variants) {
    return function({ addUtilities }) {
        const containerBreak = {
            '.container-break': {
                'margin-left': '50%',
                'margin-right': '0',
                'transform': 'translateX(-50%)',
                'width': '100vw',
            },
            '.container-break-reset': {
                'margin-left': '0',
                'margin-right': '0',
                'transform': 'none',
                'width': 'auto',
            },
        }

        addUtilities(containerBreak, variants)
    }
}
