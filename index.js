module.exports = function (variants) {
    return function({ addUtilities }) {
        const containerBreak = {
            '.container-break': {
                margin-left: 50% !important;
                margin-right: 0 !important;
                transform: translateX(-50%);
                width: 100vw;
            },
        }

        addUtilities(containerBreak, variants)
    }
}
