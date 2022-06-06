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
        'brand-color':'#5d3ebc'
      },
    },
  },
  plugins: [],
}