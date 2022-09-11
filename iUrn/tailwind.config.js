module.exports = {
  content: ["./screens/*.tsx","./components/*.tsx"],
  theme: {
    extend: {
      colors:{
        "dark-primary": "#00066d",
        "dark-secondary": "#000000",
        "dark-text": "#000ab5",
        "light-primary": "#949aff",
        "light-secondary": "#000cf5",
        "light-text": "#000000"
      },},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
