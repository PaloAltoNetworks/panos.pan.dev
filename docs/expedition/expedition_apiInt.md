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

image: /img/expedition.png
---
## Introduction  
The Expedition API (Application Program Interface) has been designed using different routes (URL paths) that represent different objects and features that a user can use with the tool and uses the HTTP verbs (GET, POST, PUT, DELETE) to define the actions that can be done on those objects.  

Even we are in the first version of the API, we have already started applying versioning strategies to support future modifications of the API and allow the coexistence of more than one version on the same Expedition.  

For example,  the following request  
```console
GET https://10.0.0.1/api/v1/projects 
```
is a request to a feature in the v1 of the API that lists (GET) the different projects defined in Expedition.  

The different verbs that we can use translate to  

GET: 		List  
POST: 	Create a new entry  
PUT:		Modify  
DELETE: 	Delete    

Depending on the user’s permissions and the requested routes, the responses may differ, as some users may have more or less privileges to list/create/modify/delete existing objects in Expedition.

## Expedition-API Documentation & Testing

Expedition offers a web resource for learning about the Expedition API and being able to test it as well. This documentation is based on the Swagger framework, and is provided in each Expedition VM under the following URL:  

```Console
   https://<YourExpeditionIP>/api/v1/documentation
```
   Be sure to replace `<YourExpeditionIP>` with your actual Expediiton IP address  

In order to be able to consume the different API methods, it is necessary to have a valid session (for authentication and authorization). This can be performed in Swagger by making a first request to the /api/v1/login route.
A request is made by clicking on the selected route to call, activate the interactive mode via the button **“Try it out”**, entering the required parameters and clicking on **Execute**. The default login **(admin)** and password **(paloalto)** are already presented in Swagger.  

![Auth](/img/expedition/auth.png "Auth")

In this case, we will get a response containing an api_key that can be attached to future requests to validate the user’s session and permissions.

![Authresponse](/img/expedition/authresponse.png "Authresponse")  

Copy the “api_key” and paste it in Swagger under the **Authorize** button that you will find on the top of the site. After this login activity, all future requests will be authenticated using the provided api_key.  

![Authorize](/img/expedition/authorize.png "Authorize")  


![APIpaste](/img/expedition/APIpaste.png "APIpaste")  

Alternatively , you could also do it via your script: 

Make a `POST` request to the Expedition’s hostname or IP address using the administrative credentials.  

_Be sure to replace `<YourExpeditionIP>` `<username>` and `<password>` with actual values._

```shell-session
curl -X POST "https://<YourExpeditionIP>/api/v1/login" -H "accept: application/json" -H "Content-Type: application/json" -H "X-CSRF-TOKEN: " -d "{\"username\":\"<username>",\"password\":\"<password>"}"
```

A successful API call returns `status="success"` along with the API key within the `api_key` element:

```Json
{"Type":"success","success":true,"Contents-Format":"json","Contents":{"code":0,"success":true,"cacheable":false,"metadata":{"execution-info":{"execution-time":0,"execution-memory":0,"execution-disk-consumption":0},"request-info":{"request-method":"","request-query":"","request-time":"","request-client-user":"","request-client-ip":"","request-client-agent":""}},"response":{"total":3,"current-page":1,"per-page":10,"total-pages":1,"state":0,"job-id":0,"response-messages":{"total":1,"code":0,"messages":[{"message":"Authentication successful","details":{"type":"success","causes":{"module":"expedition-api","code":0,"description":""}}}]},"data":{"fields":null,"columns":null,"content":{"api_key":"lyEg5P87DMjLm8dAUm2PZbpYtxLBp9aW7VDldkVjOzcYuE5QscqlUAspchkOIVQQCAYSbbGK3NKKhJFpEj80X44nAZzVO1zA8p87Fs1PfluN8Gg8p20q57fSI43v9H1Z","csrfToken":"MTU5OTg1Nzk2ODE4V3p4WDdtV3BSSldSMFVjSmM0Ykd2YkFqc1cydlJR","id":1}}}}}
```  
Below is a sample python script to show you how to login to Expedition-API endpoint and save the API key in variable, `hed`, so you can reference it in your subsequent API calls.  
```javascript
import json
import requests
import urllib3

data = {"username":"admin", "password":"paloalto"}
r = requests.post('https://'+ip+'/api/v1/login', data=data, verify=False)
response=r.json()
apiKey = json.dumps(response['Contents']['response']['data']['content']['api_key'])
auth_token = apiKey[1:-1]
print(auth_token)
print('')

hed = {'Authorization': 'Bearer ' + auth_token}  
```
     
    


