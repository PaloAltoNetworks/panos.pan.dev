---
id: tp-public-api-access-limits
title: Threat Vault Public API Access Limits
sidebar_label: Threat Vault Public API Access Limits
---

The Threat Vault Public API included with the Threat Prevention and Advanced Threat Prevention security subscriptions use a point system to track and rate limit API calls to 2,000 queries per day. This daily limit resets at 23:59:00 UTC. Additionally, you are also limited to a single API key at any given time per Palo Alto Networks account. If you exceed the usage limits, the API response returns the following code: 429, indicating that too many requests have been made. You can monitor your API usage status by referring to the following header responses:

| Header Response                          |  Description                       |
| ------------------------------------     | ---------------------------------  |
| `X-RateLimit-Limit`                      | Specifies the maximum number of requests that the user is permitted to make per minute. |
| `X-RateLimit-Remaining`                  | Specifies the number of requests remaining in the current daily query allotment. |
| `X-RateLimit-Reset`                      | Indicates the timestamp at which the current rate limit window resets. |