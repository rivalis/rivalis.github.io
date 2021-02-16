module.exports = {
  title: 'Rivalis',
  tagline: 'Multiplayer game server for NodeJS',
  url: 'https://rivalis.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rivalis',
  projectName: 'rivalis.github.io',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: 'Rivalis',
      logo: {
        alt: 'rivalis',
        src: 'img/logo.png',
      },
      items: [
        { to: 'blog', label: 'News', position: 'right' },
        { to: 'docs', activeBasePath: 'docs', label: 'Learn', position: 'right' },
        
        { href: 'https://github.com/rivalis', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'News',
              to: 'blog',
            },
            {
              label: 'Learn',
              to: 'docs',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '#',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rivalis',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rivalis`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/rivalis/rivalis.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/rivalis/rivalis.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/theme.css'),
        },
      },
    ],
  ],
};
