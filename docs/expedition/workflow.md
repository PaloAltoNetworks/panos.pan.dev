---
id: workflow
title: Expedition Automation Workflows
sidebar_label: Automation Workflows
hide_title: false
description: Expedition Automation Workflows
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

In this section we present some workflow examples to show you how to consume the Expedition-APIs. The example scripts presented here can be found under:    

https://conversionupdates.paloaltonetworks.com/expedition2/examples/workflows.zip   

## Convert 3rd party vendor firewall configuration



### 1. Generating Expedition API Keys  
Nearly all the API calls to Expedition will require authentication. This is done through the use of API keys. The first step is to log into Expedition and retrieve an API key that would offer us access to later API calls.  

As shown in Snippet 1, defines the Expedition IP to connect ($ip), credentials to be used for authentication ($credentials) and the URL to access the login route ($url).  

Once those variables have been provided, creates and establishes an SSL connection ($curl) to Expedition to make a request to the login URL with the specified credentials, and collects the response from the server into the $response variable.  

Expedition API responses are in JSON format In the case of a login API call, in the content section we will obtain an API key  and a csrfToken. The first can be used for API consumption in scripts, while the second is intended for HTTPS Web UI requests. While the API key has an expiration time of 1 month and extends its validity time on every login (it may change in the future), a csrfToken has a shorter validity and gets regenerated for each login call.    

We collect the api_key by accessing the corresponding JSON element and remove the surrounding quotes to access the API key string and format it for future authenticated API calls.  
This authentication credentials are later prepared in a $hed variable that we will attach into the headers of the API calls we send in the future.  

**PHP Snippet 1:**  
```javascript  

echo  "LOGIN \n";

$ip="127.0.0.1"; //Enter here your Expedition IP reachable from the Script execution machine
$url = 'https://'.$ip.'/api/v1/login';
$credentials =  array(
    "username" => "admin",
    "password" => "paloalto"
);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl,CURLOPT_POST, TRUE);
curl_setopt($curl,CURLOPT_POSTFIELDS, $credentials);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);

$jsonResponse = json_decode($response);
print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);
$apiKey = $jsonResponse->Contents->response->data->content->api_key;
$auth_token = trim($apiKey,"'");

echo "\n";
$hed = array(
    'Authorization: Bearer ' . $auth_token,
);  
```  

### 2. Creating an Expedition project    
In the large amount of automation cases, we will require having an Expedition project. Making a POST call to the projects route, we can create a project with a desired name.
By default, the creator of a project is as well one of the project administrators.
Notice that this time we attach the credentials $hed in the curl headers to demonstrate we have permission to create a project.  


**PHP Snippet 2:**  
```javascript

echo "\n";
echo "CREATE NEW PROJECT\n";
$data = ["project"=> $projectName];
$url = 'https://'.$ip.'/api/v1/projects';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl,CURLOPT_POST, TRUE);
curl_setopt($curl,CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
$success = $jsonResponse->Contents->success;
if ($success=='true'){
    print_r($response);
    $projectId = $jsonResponse->Contents->response->data->content->id;
    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);
}
echo "\n";
```  
### 3. Upload the 3rd party vendor (source) configuration into Expedition  
The migration process would require to upload one of more configuration files to be migrated. A minimum one would be the original vendor configuration file, and we plan to support bringing also routing table files to support dynamic routing tables which values are not specified in the firewall configuration.

For example, you can upload the cisco configration "cisco.asa.txt" within the folder:  
```console
/var/www/html/expedition-api/contents/configSamples/CiscoCase/ 
``` 

This folder should be reachable by the `www-data` user and its content should be readable by the user as well.

### 4. Converting the source configuration to a PAN-OS configuration  
The migration process takes an original configuration folder (**$originalConfigFolderPath**) contains one or more files required for the conversion, a path for the resulting PANOS XML config (**$panosConfigPath**) and the vendor selection (**$vendor**) to determine the conversion logic to be applied.    
In the case we have already imported a PAN-OS device into Expedition, it is also possible to provide that device’s identification to use the devices configuration as a base config on which to make the conversion.  

**PHP Snippet 3:** 
```javascript
echo "\n";
echo "CONVERT CISCO CONFIGURATION TO PALO ALTO\n";

$originalConfigFolderPath="/var/www/html/expedition-api/contents/configSamples/CiscoCase/";
$panosConfigPath="/tmp/cisco.xml";
$vendor="ciscoasa";

$data = ["folder"=>$originalConfigFolderPath, "out"=>$panosConfigPath, "vendor"=>$vendor];
$url = 'https://'.$ip.'/api/v1/external-tools/convert';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl,CURLOPT_POST, TRUE);
curl_setopt($curl,CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);

$jsonResponse = json_decode($response);
$success = $jsonResponse->Contents->success;

if ($success=='true'){
    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);
}
```  
### 5. Importing the configuration into the Project  
Once the conversion has done, we can import the resulting XML config file into an existing project for later configuration manipulations, such as delete unused objects, rename zones, etc.  Snipt below shows imporitng the converted configuration into the project. 

**PHP Snippet 4:**  
```javascript

echo "\n";
echo "IMPORT CONFIGURATION\n";
$data = ["config" => $panosConfigPath];
$url = 'https://'.$ip.'/api/v1/projects/'.$projectId.'/importConfig';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl,CURLOPT_POST, TRUE);
curl_setopt($curl,CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);

$jsonResponse = json_decode($response);
$success = $jsonResponse->Contents->success;

if ($success=='true'){
    echo 'Config imported successfully';
}
```
## Assign PAN-OS Device to the Expdition project  
If we want to interact with a device for being able to retrieve it’s configuration, push a new configuration or learn from the traffic logs that the device has generated (this feature will come in future releases), we need to declare a Panos Device in Expedition.  

### 1. Add a PAN-OS device (Firewall or Panorama)  
The first action is to generate an API call to Expedition to declare the new device. Some initial information regarding the device is necessary, including the serial number, device name, IP address or hostname to be able to reach the device and the device model.  

The API response will provide us an internal Expedition identificator for the newly generated device.  

**PHP Snippet 5:**  
```javascript
echo "CREATE NEW DEVICE\n";
$data = array(
	"device_name"   => $device_name,
	"serial"        => $serial,
	"hostname"      => $hostname,
	"type"          => $type
);
$url = 'https://'.$ip.'/api/v1/devices';
print_r($data);
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_RETURNTRANSFER,TRUE);
curl_setopt($curl, CURLOPT_POST,TRUE);
curl_setopt($curl,CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER,FALSE);

$response = curl_exec($curl);
$info = curl_getinfo($curl);
//print_r($info);
curl_close($curl);
//echo $response;
$jsonResponse = json_decode($response);
//print_r($jsonResponse);
$success = $jsonResponse->Contents->success;
if ($success=='true'){
    $deviceId = $jsonResponse->Contents->response->data->content->id;
    print('New device created successfully');
    #print_r($jsonResponse->Contents->response->{'response-messages'} ->messages[0]->details->causes 
            ->description);
}
```  
### 2. Retrieve Device API Keys  
Once the device is created, if we need to retrieve its content or make future configuration pushes to the device, it will be necessary to have a device API Key.  

The following **PHP Snippet 6** shows how to consume the Expedition API to retrieve Panos Device API keys and register these API keys into the defined device.  

Notice that to be able to retrieve the API keys, we need to provide the login and password that we use to connect with the PANOS device.  

When creating and registering the API key, we should provide the role that can make use of it.  

There are 4 different options: **Admin, User, Viewer, Personal**.  
:::note
**.admin** (project related): all admin users in a given project will use this API key to interact with the device. In the device audit logs, there will be no unique identification of the user that has submitted the API calls to the device, as it could have been done by any of the project administrators.  

**.user** (project related): all users users in a given project will use this API key to interact with the device. In the device audit logs, there will be no unique identification of the user that has submitted the API calls to the device, as it could have been done by any of the project users.  

**.viewer** (project related): all viewer users in a given project will use this API key to interact with the device. In the device audit logs, there will be no unique identification of the user that has submitted the API calls to the device, as it could have been done by any of the project viewers.  

**.personal** (user related): this API key is private to the user that has requested it, and it will be used when this user requires interactions with the Panos Device. A benefit of this key is that in the device audit logs, the user will be identified as having sent the API calls to the device.  
:::
**PHP Snippet 6:**  

```javascript
echo "\n";
echo "ADD DEVICE KEYS\n";

$device_roles = 'personal';

$data = [
	"id" => $deviceId,
	"role" => $device_roles,
	"auth_type" => $device_auth,
	"username" => $device_username,
	"password" => $device_pwd
];
$url = 'https://'.$ip.'/api/v1/device/keys';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl,CURLOPT_POST, TRUE);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl,CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);
print_r($response);
$jsonResponse = json_decode($response);
$success = $jsonResponse->Contents->success;
if ($success=='true'){
    #print('Device keys added')
    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);
}
```

### 3. Retrieve Device’s content  

We can retrieve the config from a device by specify the value either **`candidate`** or **`running`** in the **($configType)** parameter.  

This is a task that, depending on the configuration size and the connection speed with the Panos Device, may take a reasonable amount of time.  

Therefore, this task (as several other tasks that require long processing time) is executed as a background task so it does not block the whole script execution.  

So, the API call will respond with a job identified **$jobId** that can be checked to identify when the assigned task is completed.  

In the second part of the code, we present one approach to monitor the execution state of the download config process, which is informed in the status element within the JSON content response. 

**PHP Snippet 7:**  
```javascript
echo "RETRIEVE DEVICE CONTENT\n";

$configType = "candidate";

$url = 'https://'.$ip.'/api/v1/device/'.$deviceId.'/retrieveContent/'.$configType;
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
$jobId = $jsonResponse->Contents->response->data->content->jobId;
echo ('Job id: '.$jobId);
#print(json.dumps(response['Contents']['response']['response-messages']['messages']))

// ------
// Other tasks can be performed here while the configuration is being downloaded
// ------

echo "\n";
echo "CHECK IF DEVICE CONTENT IS DOWNLOADED\n";
$url = 'https://'.$ip.'/api/v1/job/status/'.$jobId;
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
$jobState = $jsonResponse->Contents->response->data->content->msg->state;
$percentage = (float)$jobState * 100;
echo ('Retrieving content from device: '. (string)$percentage. '%');
echo "\n";

#Wait until all content is retrieved from device
while($jobState != '1'){
    sleep(5);
    $response = curl_exec($curl);
    $jsonResponse = json_decode($response);
    $jobState = $jsonResponse->Contents->response->data->content->msg->state;
    $percentage = (float)$jobState * 100;
    echo ('Retrieving content from device: '. (string)round($percentage). '%');
    echo "\n";
}
```
### 4. Attach device to the Expedition Project

While a configuration is being downloaded, for instance, it would be possible to attach the device to an existing project, so we have the chance to import the device configuration into the project or so we can send the resulting project configuration back to the device.  

In the snippet below, we show how the device created above which id we prior stored in the **$deviceId** variable, is attached to the newly created project.
This call is making a modification on the project settings, therefore we are sending a PUT request to the project route.  

**PHP Snippet 8:**  
```javascript
echo "ASSIGN DEVICE TO PROJECT\n";
$data = ["devices"=>[$deviceId],
        "id"=>$projectId];

$url = 'https://'.$ip.'/api/v1/projects';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($curl,CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);

$jsonResponse = json_decode($response);
$success = $jsonResponse->Contents->success;

if ($success=='true'){
    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);
}
```  
## Push configuration to a PAN-OS device  
Pushing a project configuration to a device requires having a project created, a device declared and having credentials (Device API keys) to interact with such device.  
Once we have those, what would remain is the generation of the different API calls to a PANOS device that will receive the configuration, and executing those calls to apply the changes on the device’s candidate configuration. 

### 1. Generating PAN-OS API calls  
Once we have a project completed and we desire to submit all or part of the configuration to a PANOS device, we will have to generate the API calls.
We can create **mega, atomic, subatomic and clear** API calls.  
:::note  
**mega**: generates one single API call containing the complete XML configuration.  

**atomic**: would generate one API call for each section in the configuration, such as address objects section, service object section, etc. In case of multiple DGs, we may obtain one API call for each section in the DG.  

**subatomic**: would generate an API call for every element in a configuration. For instance, one API call for each address object in a configuration. This may be required when only certain objects should be submitted to the device.  

**clear**: would generate API calls to delete the content of the desired section  
:::

The response will provide us a list of the generated API calls with their corresponding ids and types and order of execution.  

**PHP Snippet 9:**  
```javascript
echo "\n";
echo "PUSH CONFIG TO DEVICE\n";
$data = [
    "sourceId"=>$source
  ];
$url = 'https://'.$ip.'/api/v1/projects/'.$projectId.'/apiCalls/atomic';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl,CURLOPT_POST, TRUE);
curl_setopt($curl,CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
$success = $jsonResponse->Contents->success;

if ($success=='true'){
    print_r($jsonResponse->Contents->response->{'response-messages'}->messages[0]->message);
}
```

### 2. Submitting API calls to the PAN-OS Device 
Once generated the API calls, we can submit them to a device, either a Firewall or a Panorama. We can provide the device identification via its serial number. In the case a device is managed by a Panorama, this will be used as a proxy to submit the API calls.
The Device API key that we have assigned will be used for the submission of the calls. If a personal API key has been registered in Expedition, this will take precedence over an admin/user/viewer API key.  

When submitting the API calls, we can enumerate those ones that we want to submit or, if none is specified, all the generated API calls will be submitted to the device in the order of execution.  

Submitting the API calls is executed as a set of tasks in a job. We can monitor the status of the tasks by checking the job status. Once the process is complete, we can request the result of the execution by checking the complete information of the job.  

For instance, in the below snippet 10, we request information regarding possible errors faced during the submission of the API calls.  

**PHP Snippet 10:**  
```javascript
$data = [
     "serial"=>$serial, 
     "source"=>$source
   ];
$url = 'https://'.$ip.'/api/v1/projects/'.$projectId.'/device/push';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl,CURLOPT_POST, TRUE);
curl_setopt($curl,CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
$success = $jsonResponse->Contents->success;
if ($success=='true'){
    echo 'Sending api calls';
}
$jobId = $jsonResponse->Contents->response->data->content->jobId;

echo "\n";
echo "API CALLS STATUS\n";
$url = 'https://'.$ip.'/api/v1/job/status/'.$jobId;
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
$jobState = $jsonResponse->Contents->response->data->content->msg->state;
$percentage = (float)$jobState * 100;
echo "\n";
echo ('Pushing config to device: '. (string)round($percentage) . '%');

#Wait until all content is retrieved from device
while($jobState != '1'){
    sleep(5);
    $response = curl_exec($curl);
    $jsonResponse = json_decode($response);
    $jobState = $jsonResponse->Contents->response->data->content->msg->state;
    $percentage = (float)$jobState * 100;
    echo "\n";
    echo ('Pushing config to device: '. (string)round($percentage) . '%');
}


if($percentage == ‘100’)
   echo 'Config pushed successfully';
else
   echo 'There have been errors submitting the API calls';

$url = "https://'.$ip.'/api/v1/job/status/'.$jobId.'/complete\n";
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl, CURLOPT_HEADER, 0);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
print_r($jsonResponse);

$callResultErrors = $jsonResponse->Contents->response->data->content->msg->errors;
echo "The following API errors have been encountered:";
print_r($callResultErrors);
```
## Export PAN-OS configuration from Expedition  

Instead of making API calls from Expedition as stated in previous section, you can export the PAN-OS configuration from Expedition and manually loaded the configuraiton back to PAN-OS device. 

The output file path needs to be writable by the www-data user, therefore we recommend to place those files in the project directory. 

**PHP Snippet 11:**  

```javascript
$data = [
     "sourceId"=>$source, 
     "out"=>"/home/userSpace/projects/$projectId/panos.xml"
   ];
$url = 'https://'.$ip.'/api/v1/projects/'.$projectId.'/export';
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl,CURLOPT_POST, TRUE);
curl_setopt($curl,CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
$success = $jsonResponse->Contents->success;
if ($success=='true'){
    echo 'Configuration export process initiated;
}
$jobId = $jsonResponse->Contents->response->data->content->jobId;

echo "\n";
echo "Export Status\n";
$url = 'https://'.$ip.'/api/v1/job/status/'.$jobId;
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
$jobState = $jsonResponse->Contents->response->data->content->msg->state;
$percentage = (float)$jobState * 100;
echo "\n";
echo ('Configuration exported to '. (string)round($percentage) . '%');

#Wait until all content is retrieved from device
while($jobState != '1'){
    sleep(5);
    $response = curl_exec($curl);
    $jsonResponse = json_decode($response);
    $jobState = $jsonResponse->Contents->response->data->content->msg->state;
    $percentage = (float)$jobState * 100;
    echo "\n";
    echo ('Configuration exported to '. (string)round($percentage) . '%');
}


if($percentage == '100')
   echo 'Config exported successfully to path '.$out.'/n';
else
   echo 'There have been errors generating the XML output file';

$url = "https://'.$ip.'/api/v1/job/status/'.$jobId.'/complete\n";
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER,$hed);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($curl, CURLOPT_HEADER, 0);
$response = curl_exec($curl);
$jsonResponse = json_decode($response);
print_r($jsonResponse);

$callResultErrors = $jsonResponse->Contents->response->data->content->msg->errors;
echo "The following errors have been encountered during Config generation:";
print_r($callResultErrors);
```




















