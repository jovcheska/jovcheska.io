module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'system-ui', 'sans-serif']
     },
    container: {
      center: true,
    },
    fontSize: {
      '12': ['0.75rem', '1rem'],
      '14': ['0.875rem', '1rem'],
      '16': ['1rem', '1.5rem'],
      '18': ['1.125rem', '1.75rem'],
      '24': ['1.5rem', '2rem'],
      '28': ['1.75rem', '2.25rem'],
      '48': ['3rem', '1.1'],
      '66': ['4.125rem', '1'],
    },
    extend: {
      lineHeight: {
        '6rem': '6rem',
      },
      backgroundImage: theme => ({
        'hero': "url('../assets/hero-bg.jpg')",
        'curve': "url('../assets/curve-bg.png')",
        'wireframe1': "url('../assets/wireframe-1-lg.jpg')",
        'ecommerce-mockup1': "url('../assets/ecommerce-mockup1-bg.jpg')",
        'real-life': "url('../assets/real-life.jpg')",
        'real-life-sm': "url('../assets/real-life-env-sm.jpg')",
        'real-life-lg': "url('../assets/real-life-env-lg.jpg')",
       }),
       backgroundColor: {
        'blue-sia': '#2000FF',
        'pink-sia': '#C9ADC3',
        'yellow-sia': '#FBD132',
        'orange-sia': '#FF9650',
        'teal-sia': '#00C2FF',
        'red-sia': '#BA0F22',
        'dark': '#111111',
       },
       textColor: {
        'blue-sia': '#2000FF',
        'red-sia': '#FF0B53',
      },
      spacing: {
        '37': '37px',
        '51': '51px',
        '55': '55px',
        '70': '70px',
        '85': '85px',
        '107': '107px',
        '111': '111px',
        '125': '125px',
        '143': '143px',
        '157': '157px',
        '213': '213px',
        '215': '215px',
        '300': '244px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
