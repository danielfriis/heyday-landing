const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/**/*.html',
    './_posts/*.md',
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
        'serif': ["'IvarDisplay'", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        'brand': {
          'green': '#45C30C',
          'blue': '#4855E0',
          'yellow': '#FFD600',
          'orange': '#F85A29'
        }
      }
    } 
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

