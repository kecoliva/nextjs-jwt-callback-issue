module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        14: 'repeat(14, minmax(0, 1fr))',
        18: 'repeat(18, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-9': 'span 9 / span 9',
        'span-11': 'span 11 / span 11',
      },
      padding: {
        2.5: '.625rem',
        3.5: '.875rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
        15: '3.75rem',
        22: '5.5rem',
      },
      margin: {
        2.5: '.625rem',
        4.5: '1.125rem',
        7: '1.75rem',
      },
      fontSize: {
        xxs: ['.625rem', '.75rem'],
        '2.5xl': ['1.75rem', '2.125rem'],
      },
      width: {
        78: '19.5rem',
        140: '35rem',
        142.5: '35.625rem',
        147: '36.75rem',
        163: '40.75rem',
        275: '68.75rem',
      },
      height: {
        1.5: '.375rem',
        8.5: '2.125rem',
        11.5: '2.875rem',
        18.5: '4.625rem',
        35: '8.75rem',
        300: '75rem',
      },
      inset: {
        0.5: '.125rem',
      },
      minWidth: {
        4: '1rem',
        10: '2.5rem',
        75: '18.75rem',
      },
      minHeight: {
        4: '1rem',
        10: '2.5rem',
      },
      maxHeight: {
        75: '18.75rem',
      },
      spacing: {
        1.5: '.375rem',
      },
    },
    boxShadow: {
      'react-select': '0 0 0 1px #0000001a, 0 4px 11px #0000001a',
    },
    fontFamily: {
      inter: ['Inter'],
    },
    colors: {
      white: '#FFFFFF',
      shark: '#1F2024',
      nevada: '#6B6E75',
      emperor: '#545454',
      mineshaft: '#1F1F1F',
      ebonyclay: '#1D212B',
      transparent: 'transparent',
      gallery: '#ECECEC',
      red: '#E40808',
      schoolbusyellow: '#FFD800',
      lapalma: '#2CB117',
      woodsmoke: '#0F0F11',
      santasgray: '#A0A2AD',
      abbey: '#484A54',
      stormgray: '#717583',
      frenchgray: '#B8BAC2',
      manatee: '#888B99',
      wildsand: '#F5F5F5',
      black: '#000000',
      iron: '#CFD1D6',
      athensgray: '#E7E8EB',
      tuna: '#33353C',
      pattensblue: '#DEEBFF',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
