/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Next-gen Automation",
  tagline: "with the only next-gen security platform",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/panospeelable.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "pandevice", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "PAN-OS® for Developers",
        src: "img/panospeelable.png"
      },
      links: [
        { to: "docs/panos_api", label: "PAN-OS®", position: "left" },
        { to: "docs/automation", label: "Automation", position: "left" },
        { to: "docs/cloud", label: "Cloud", position: "left" },
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          label: "Blog",
          position: "left"
        },
        {
          href: "https://github.com/PaloAltoNetworks",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "PAN-OS®",
              to: "docs/panos_api"
            },
            {
              label: "Automation",
              to: "docs/automation"
            },
            {
              label: "Cloud",
              to: "docs/cloud"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Automation and API",
              href:
                "https://live.paloaltonetworks.com/t5/Automation-API/ct-p/automation"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://medium.com/palo-alto-networks-developer-blog"
            }
          ]
        }
      ],
      logo: {
        alt: "PAN-OS® for developers",
        src: "img/panosfordevelopers.png"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`
    }
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/PaloAltoNetworks/panos.pan.dev/docs",
          routeBasePath: "docs",
          include: ["**/*.md", "**/*.mdx"], // Extensions to include.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/DocItem",
          remarkPlugins: [],
          rehypePlugins: [],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    "@docusaurus/plugin-sitemap",
    {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: "weekly",
      priority: 0.5
    }
  ]
};
