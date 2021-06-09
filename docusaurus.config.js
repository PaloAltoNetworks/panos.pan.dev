/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Palo Alto Networks for Developers',
  url: 'https://panos.pan.dev',
  baseUrl: '/',
  favicon: 'img/strata_favicon.png',
  organizationName: 'PaloAltoNetworks', // Usually your GitHub org/user name.
  projectName: 'panos.pan.dev', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    },
    algolia: {
      apiKey: 'cc0f2da5c80d2fb8dedb7ef9b56b52f2',
      indexName: 'pan',
      searchParameters: {
        typoTolerance: false,
        facetFilters: ['tags:strata'],
      }, // Optional, if provided by Algolia
    },
    sidebarCollapsible: true,
    navbar: {
      title: '',
      logo: {
        alt: 'PAN-OS® for Developers',
        src: 'img/Strata_Tagline_Logo_RGB.svg',
        srcDark: 'img/Strata_Tagline_Logo_RGB_Nameplate_Reversed.svg',
      },
      items: [
        {
          label: 'Docs',
          to: 'docs',
          position: 'left',
        },
        {
          label: 'API Reference',
          items: [
            {
              to: '/api/iot/iot-api',
              label: 'IoT API',
            },
          ],
          position: 'left',
        },
        {
          href: 'https://medium.com/palo-alto-networks-developer-blog',
          position: 'right',
          className: 'header-medium-link',
          'aria-label': 'Palo Alto Networks Developer Blog',
        },
        {
          href: 'https://github.com/PaloAltoNetworks',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'Palo Alto Networks GitHub Org',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Guides and SDKs',
              to: 'docs/apis',
            },
            {
              label: 'IoT API',
              to: 'api/iot/iot-api',
            },
            {
              label: 'Automation',
              to: 'docs/automation',
            },
            {
              label: 'Cloud Templates',
              to: 'docs/cloud',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Automation and API',
              href: 'https://live.paloaltonetworks.com/t5/Automation-API/ct-p/automation',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              html: `
                <a href="https://medium.com/palo-alto-networks-developer-blog" target="_blank" rel="noreferrer noopener" aria-label="Palo Alto Networks Developer Blog">
                  <i class="fab fa-medium fa-2x"></i>
                </a>
              `,
            },
          ],
        },
      ],
      logo: {
        alt: 'Palo Alto Networks for Developers',
        src: 'img/PANW_Parent_Brand_Primary_Logo_KO.png',
        href: 'https://pan.dev',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/PaloAltoNetworks/panos.pan.dev/tree/master',
          path: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'panos-site-map',
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        sidebarPath: require.resolve('./api.sidebars.js'),
        editUrl: 'https://github.com/PaloAltoNetworks/panos.pan.dev/tree/master/',
        routeBasePath: 'api',
        include: ['**/*.md', '**/*.mdx'], // Extensions to include.
        docLayoutComponent: '@theme/DocPage',
        docItemComponent: '@theme/APIDocItem',
        remarkPlugins: [],
        rehypePlugins: [],
        path: 'api',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
  customFields: {
    sites: [
      {
        label: 'Products',
        items: [
          {
            href: 'https://cortex.pan.dev',
            label: 'Cortex',
            logo: '/img/cortexfavicon.png',
          },
          {
            href: 'https://xsoar.pan.dev',
            label: 'Cortex XSOAR',
            logo: '/img/Cortex-XSOAR-product-green.svg',
          },
          {
            href: 'https://panos.pan.dev',
            label: 'PAN-OS',
            logo: '/img/strata_favicon.png',
          },
          {
            href: 'https://prisma.pan.dev',
            label: 'Prisma Cloud',
            logo: '/img/prismafavicon.png',
          },
        ],
        position: 'products',
      },
    ],
  },
  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'warn',
  stylesheets: [
    {
      href: 'https://use.fontawesome.com/releases/v5.15.0/css/all.css',
      type: 'text/css',
      rel: 'stylesheet',
    },
  ],
};
