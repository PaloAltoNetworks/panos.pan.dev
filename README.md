[![Deploy Live](https://github.com/PaloAltoNetworks/panos.pan.dev/actions/workflows/deploy-live.yml/badge.svg)](https://github.com/PaloAltoNetworks/panos.pan.dev/actions/workflows/deploy-live.yml) [![CodeQL](https://github.com/PaloAltoNetworks/panos.pan.dev/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/PaloAltoNetworks/panos.pan.dev/actions/workflows/codeql-analysis.yml)

# PAN-OS® for Developers

This website is built using Docusaurus 2, a modern static website generator.

> URL: https://panos.pan.dev

### Installation

You might need to disable Global Protect inorder to install docusaurus.

```shell-session
yarn
```

### Local Development

```shell-session
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

The `upstream/master` branch is linked to a Netlify site and will auto-deploy when changes are merged into `master`.

Build previews will be automatically generated for pull requests. Build previews can be used to review changes to determine if they are ready to be merged into `upstream/master`.

### Contributing

Contributing guidelines can be found [here](https://panos.pan.dev/docs/contributing).
