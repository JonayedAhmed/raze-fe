const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
    const newUtilities = {
        '.required::after': {
            content: '" *"',
            color: 'red',
            display: 'inline',
            fontSize: 'large',
        },
    }

    addUtilities(newUtilities, ['before', 'after']);
});
