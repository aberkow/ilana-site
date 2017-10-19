import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '400',
        '400i',
        '700',
        '700i'
      ]
    }
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif']
});

export default typography;