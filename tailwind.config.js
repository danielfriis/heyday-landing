const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html'
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
      'serif': ['Lora var', ...defaultTheme.fontFamily.serif]
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

