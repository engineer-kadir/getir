module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html',
    './src/**/*.{html,js}',
    './src/components/**/*.{html,js}',
    './src/layouts/**/*.{html,js}',
    './src/index.html',
    ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  ],
  theme: {
    extend: {
      colors:{
        'brand-color':'#4c3398',
        'brand-yellow':'#ffd300',
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7',
        'facebook-color':'#1877f2',
      },
      backgroundImage:{
        'mobile-app':"url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      },
      spacing: {
        '0.1': '0.063rem'
      },

      gradientColorStops:{
        'brand-color':'#4c3398',
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7'
      },
    },
  },
  plugins: [],
}