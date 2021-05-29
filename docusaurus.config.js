module.exports = {
  title: 'Automated Tech Solutions',
  tagline: 'We solve problems and show you how',
  url: 'https://automatedtechnicalsolutions.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Automated Tech Solutions', // Usually your GitHub org/user name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'ATS',
      logo: {
        alt: 'Automated Tech Solutions',
        src: 'img/favicon.ico',
      },
      links: [
        {
          label: 'About',
          to: 'about/Welcome',
          activeBasePath: 'docs',
          position: 'left',
        },
        {
          label: 'Guides',
          to: 'about/Guides',
          activeBasePath: 'docs',
          position: 'left',
        },
        {
          label: 'Services',
          to: 'about/Implementation',
          activeBasePath: 'docs',
          position: 'left',
        },
        {
          label: 'Team',
          href: 'https://thereynolds.com.au',
          position: 'left',
        },
        {
          label: 'Contact',
          to: 'about/Contact',
          activeBasePath: 'docs',
          position: 'left',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/lreynolds188',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Privacy Policy',
              to: 'about/PrivacyPolicy',
              activeBasePath: 'docs',
            },
            {
              label: 'Disclaimer',
              to: 'about/Disclaimer',
              activeBasePath: 'docs',
            },
            {
              label: 'Donate',
              to: 'about/Donate',
              activeBasePath: 'docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Automated Tech Solutions`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
