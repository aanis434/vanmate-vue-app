module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './*html',
    './*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: [{'min': '100px', 'max': '767px'}],
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    container: {
      center: true,
      padding: '0.75rem'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        inter: "'Inter', sans-serif"
      },
      colors: {
        'primary': '#4893F9',
        'secondary': '#FF5E53',
        'ternary': '#2AC063',
        'hero-bg-color': '#10376E'
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.png')",
        'hero-pattern2': "url('/assets/images/hero-bg-2.png')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
