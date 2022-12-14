module.exports = {
  siteMetadata: {
    siteTitle: `NestJs Українською`,
    defaultTitle: `NestJs Українською`,
    siteTitleShort: `NestJs UA`,
    siteDescription: `Документація NestJs українською мовою`,
    siteUrl: `https://nestjs-ua.web.app/`,
    siteAuthor: `@arzek`,
    siteImage: `/banner.png`,
    siteLanguage: `ua`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocket Docs`,
        short_name: `Rocket Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					"G-1RDPSYJJW4",
				],
				pluginConfig: {
					head: false,
					respectDNT: true,
					exclude: ['/preview/**'],
				},
			},
		},
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
