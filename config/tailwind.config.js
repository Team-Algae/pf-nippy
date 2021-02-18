module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'sans': ['Open Sans'],
        'serif': ['Playfair Display']
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',

      white: '#fff',
      black: '#000',

      background: 'var(--bg)',
      accent: 'var(--accent)',
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',

      gray: {
        100: '#F4F4F4',
        200: '#B6C5CB',
        300: '#939393',
        400: '#95989A',
        500: '#666666',
        600: '#707a83',
        700: '#545b62',
        800: '#383d42',
        900: '#1c1e21',
      },
      primary: {
        100: '#B6C5CB',
        200: '#afcbff',
        300: '#87b1ff',
        400: '#5f97ff',
        500: '#377dff',
        600: '#2c64cc',
        700: '#214b99',
        800: '#163266',
        900: '#1005FF',
      },
      success: {
        100: '#ccf4ed',
        200: '#99e9dc',
        300: '#66dfca',
        400: '#33d4b9',
        500: '#00c9a7',
        600: '#00a186',
        700: '#007964',
        800: '#005043',
        900: '#002821',
      },
      warning: {
        100: '#fdf4eb',
        200: '#fbead6',
        300: '#f9dfc2',
        400: '#f7d5ad',
        500: '#f5ca99',
        600: '#c4a27a',
        700: '#93795c',
        800: '#62513d',
        900: '#31281f',
      },
      danger: {
        100: '#fcd8e2',
        200: '#f9b1c5',
        300: '#f58ba7',
        400: '#f2648a',
        500: '#ef3d6d',
        600: '#bf3157',
        700: '#8f2541',
        800: '#60182c',
        900: '#300c16',
      },
    },
  },
  variants: {},
  plugins: [],
};
