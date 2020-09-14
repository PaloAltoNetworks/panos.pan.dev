---
id: expedition_apiint
title: Expedition-API Introductions
sidebar_label: Expedition-API Introductions
hide_title: true
description: Expedition-API
keywords:
  - pan-os
  - panos
  - xml
  - api
  - expedition
  - migration
  - firewall
  - configuration
  - expedition
image: /img/expedition.png
---
:::note
The following guide will walk you through sending API requests to the Expedition-API using <a href="https://curl.haxx.se/docs/httpscripting.html" target="_blank">cURL</a>, although you may optionally use another API tool such as <a href="https://www.getpostman.com/" target="_blank">Postman</a>, <a href="https://insomnia.rest/" target="_blank">Insomnia</a> or <a href="http://restclient.net/" target="_blank">RESTClient</a>.
:::


## Access Expedition-API Documentation Page

1. Access Expediiton-API Documentation Page

   Go to https://`<Expedition>`/api/v1/documentation

   Be sure to replace `<Expedition>` with your actual Expediiton IP address

## Login to Expedition 

1. Make a `POST` request to the Expedition’s hostname or IP address using the administrative credentials.

   _Be sure to replace `<Expedition>` `<username>` and `<password>` with actual values._

```shell-session
curl -X POST "https://<Expedition>/api/v1/login" -H "accept: application/json" -H "Content-Type: application/json" -H "X-CSRF-TOKEN: " -d "{\"username\":\"<username>",\"password\":\"<password>"}"
```

A successful API call returns `status="success"` along with the API key within the `api_key` element:

```Json
{"Type":"success","success":true,"Contents-Format":"json","Contents":{"code":0,"success":true,"cacheable":false,"metadata":{"execution-info":{"execution-time":0,"execution-memory":0,"execution-disk-consumption":0},"request-info":{"request-method":"","request-query":"","request-time":"","request-client-user":"","request-client-ip":"","request-client-agent":""}},"response":{"total":3,"current-page":1,"per-page":10,"total-pages":1,"state":0,"job-id":0,"response-messages":{"total":1,"code":0,"messages":[{"message":"Authentication successful","details":{"type":"success","causes":{"module":"expedition-api","code":0,"description":""}}}]},"data":{"fields":null,"columns":null,"content":{"api_key":"lyEg5P87DMjLm8dAUm2PZbpYtxLBp9aW7VDldkVjOzcYuE5QscqlUAspchkOIVQQCAYSbbGK3NKKhJFpEj80X44nAZzVO1zA8p87Fs1PfluN8Gg8p20q57fSI43v9H1Z","csrfToken":"MTU5OTg1Nzk2ODE4V3p4WDdtV3BSSldSMFVjSmM0Ykd2YkFqc1cydlJR","id":1}}}}}
```

