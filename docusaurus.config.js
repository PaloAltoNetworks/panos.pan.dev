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
  favicon: "img/favicon.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "pandevice", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "PAN-OS® for Developers",
        src: "img/favicon.png"
      },
      links: [
        { to: "docs/panos_api", label: "PAN-OS® API", position: "left" },
        { to: "docs/doc1", label: "Placeholder", position: "left" },
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
              label: "Docs",
              to: "docs/doc1"
            }
          ]
        },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
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
        alt: "Facebook Open Source Logo",
        src: "https://docusaurus.io/img/oss_logo.png"
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
          sidebarPath: require.resolve("./sidebars.js")
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
