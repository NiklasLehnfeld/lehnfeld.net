module.exports = {
  siteMetadata: {
    description: "Personal website of Niklas Lehnfeld",
    locale: "de",
    title: "Niklas Lehnfeld",
    formspreeEndpoint: "https://formspree.io/f/xayvygkz",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-blue",
      },
    },
  ],
}