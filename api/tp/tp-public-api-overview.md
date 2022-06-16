---
id: tp-public-api-overview
title: Threat Vault Public API Overview
sidebar_label: Threat Vault Public API Overview
---

The Advanced Threat Prevention and Threat Prevention Public APIs provide Palo Alto Networks customers operating SIEM tools, custom security applications, and other threat assessment software with the ability to access threat signature metadata and published release note contents that's only available in the Threat Vault, through a programmatic RESTful API. Advanced Threat Prevention subscription holders can additionally access cloud reports and related PCAP data using the malicious session data analyzed by the inline deep learning and machine learning models. This allows you to leverage Palo Alto Networks threat analytics data and threat intelligence to improve your incident response processes by providing additional threat context. To access the public API, you must have an active Advanced Threat Prevention or Threat Prevention subscription. For more information about the Threat Prevention subscription, refer to: Advanced Threat Prevention.

:::note 
The Threat Vault Public API is currently in BETA.
:::  

Things to consider:
   - To make Advanced | Threat Prevention public API GET/POST requests, you must retrieve your API key, which is used to authenticate API calls. Each license provides one API key, regardless of the number of users tied to the account.
   - The number of API requests that can be submitted is throttled on a per API key basis. To control the number of requests you can make, you need to observe Advanced | Threat Prevention Public API Rate Limits.

