/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Next-gen Automation",
  tagline: "with the only next-gen security platform",
  url: "https://panos.pan.dev",
  baseUrl: "/",
  favicon: "img/strata_favicon.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "panos.pan.dev", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/oceanicNext")
    },
    algolia: {
      apiKey: process.env.ALGOLIA_APIKEY,
      indexName: process.env.ALGOLIA_INDEX,
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    sidebarCollapsible: true,
    navbar: {
      title: "",
      logo: {
        alt: "PAN-OS® for Developers",
        src: "img/Strata_Tagline_Logo_RGB.png",
        srcDark: "img/Strata_Tagline_Logo_RGB_Nameplate_Reversed.png"
      },
      links: [
        {
          label: "Docs",
          to: "docs",
          position: "left"
        },
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          label: "Blog",
          position: "right"
        },
        {
          href: "https://github.com/PaloAltoNetworks",
          label: "GitHub",
          position: "right"
        }
      ],
      sites: [
        {
          label: "Products",
          items: [
            {
              href: "https://panos.pan.dev",
              label: "PAN-OS",
              logo: "img/strata_favicon.png"
            },
            {
              href: "https://cortex.pan.dev",
              label: "Cortex Data Lake",
              logo: "img/cortexfavicon.png"
            },
            {
              href: "https://xsoar.pan.dev",
              label: "Cortex XSOAR",
              logo: "img/Cortex-XSOAR-product-green.svg"
            }
          ],
          position: "right"
        }
      ]
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "APIs and SDKs",
              to: "docs/apis"
            },
            {
              label: "Automation",
              to: "docs/automation"
            },
            {
              label: "Cloud Templates",
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
        alt: "Palo Alto Networks for Developers",
        src: "img/PANW_Parent_Brand_Primary_Logo_KO.png",
        href: "https://pan.dev"
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
          editUrl:
            "https://github.com/PaloAltoNetworks/panos.pan.dev/tree/master",
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
  ],
  customFields: {
    docbar: {
      options: [
        {
          to: "docs/apis",
          label: "APIs and SDKs"
        },
        {
          label: "Automation",
          to: "docs/automation"
        },
        {
          label: "Cloud Templates",
          to: "docs/cloud"
        }
      ]
    }
  }
};
