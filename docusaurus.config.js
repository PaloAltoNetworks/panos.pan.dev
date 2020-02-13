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
  favicon: "img/panospeelable.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "panos.pan.dev", // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "81ceae0c1242ce2659cacb30678ba9d7",
      appId: "QAP3NZH9FJ",
      indexName: "panos.pan.dev",
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    sidebarCollapsible: true,
    navbar: {
      title: "",
      logo: {
        alt: "PAN-OS® for Developers",
        src: "img/panospeelable.png"
      },
      menus: [
        {
          label: "Quickstart",
          items: [
            { to: "docs/apis/xmlapi_qs", label: "XML API" },
            { to: "docs/apis/restapi_qs", label: "REST API" },
            { to: "docs/apis/pandevice_qs", label: "PAN Device Framework" },
            { to: "docs/apis/panpython_qs", label: "PAN Python SDK" },
            { to: "docs/apis/pango_qs", label: "PAN Go SDK" },
            { to: "docs/automation/terraform_qs", label: "Terraform Provider" },
            { to: "docs/automation/ansible_qs", label: "Ansible" },
            { to: "docs/cloud/cloudtemplates_qs", label: "Cloud Templates" }
          ],
          position: "left"
        },
        {
          label: "Docs",
          items: [
            {
              to: "docs/apis/panos_api",
              label: "APIs and SDKs"
            },
            { to: "docs/automation/automation", label: "Automation" },
            { to: "docs/cloud/cloud", label: "Cloud Templates" }
          ],
          position: "left"
        }
      ],
      links: [
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          label: "Blog",
          position: "left"
        },
        {
          href: "https://github.com/PaloAltoNetworks",
          label: "GitHub",
          position: "left"
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
              label: "APIs and SDKs",
              to: "docs/apis/panos_api"
            },
            {
              label: "Automation",
              to: "docs/automation/automation"
            },
            {
              label: "Cloud Templates",
              to: "docs/cloud/cloud"
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
        alt: "PAN-OS® for Developers",
        src: "img/pandev.png",
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
          // editUrl:
          //   "https://github.com/PaloAltoNetworks/panos.pan.dev/tree/master/docs",
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
          to: "docs/apis/panos_api",
          label: "APIs and SDKs"
        },
        {
          label: "Automation",
          to: "docs/automation/automation"
        },
        {
          label: "Cloud Templates",
          to: "docs/cloud/cloud"
        }
      ]
    }
  }
};
