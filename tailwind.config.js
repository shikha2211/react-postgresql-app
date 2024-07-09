module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width:{
        'custom-width': '650px', // Custom width
      },
      height: {
        'custom-height': '400px', // Custom height
      },
    },
  },
  plugins: [],
}