/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'landing1': "url('/landing1.jpg')",
        'landing2': "url('/landing2.jpg')",
        'lab1': "url('/gallery/lab1.jpg')",
        'lab2': "url('/gallery/lab2.jpg')",
        'lab3': "url('/gallery/lab3.jpg')",
        'person1': "url('/gallery/person1.jpg')",
        'person2': "url('/gallery/person2.jpg')",
        'person3': "url('/gallery/person3.jpg')",
        'carehealth': "url('/hmo/carehealth.png')",
        'getwell': "url('/hmo/getwell.png')",
        'inlife': "url('/hmo/inlife.webp')",
        'wellcare': "url('/hmo/wellcare.png')",        
      },
      colors: {
        'primarybg': '#e2dfd8',
        'darkerbg':'#CCC3AA',
        'primarytext': '#1d3532',
        'light': '#C4FCF0',
        'dark': '#4C4637' ,
        'accent': '#A79017'


      }
    },
  },
  plugins: [],
}
