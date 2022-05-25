---
id: tp-public-api-best-practices
title: Threat Vault Public API Best Practices
sidebar_label: Threat Vault Public API Best Practices
---

Palo Alto Networks recommends adhering to the following best practices to keep your API key secure:

1. Periodically reset the API key by regenerating them in the support portal. This revokes the previously circulated API key at `23:59:00 UTC` of the action issuance date.
2. Do not distribute or share the API key to users that do not require access to the public API.
3. Do not embed API keys in code or application source tree files. This can inadvertently expose the API key. Instead, consider storing the API key in environmental variables or files that are excluded from your application source tree files.


