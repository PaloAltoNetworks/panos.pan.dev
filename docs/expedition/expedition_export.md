---
id: expedition_export
title: Expedition 2.0 Export
sidebar_label: Export Vendor Configuration
hide_title: true
description: Export 3rd party vendor configuration 
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
## Export Vendor Configuration 

Please refer individual vendor sections for instructions on how to export the configuration. 


## Fortinet

Export Configuration from GUI:

The configuration can be exported directly from the FortiGate firewalls.

**1. Using the Web UI**  

• Go to **Admin** -> **Configuration** -> **Backup**-> Select to backup to your **Local PC** or to a **USB Disk**.  

• If VDOMs are enabled, select **VDOM configuration (VDOM Config)** and then select the VDOM name that you want to migrate from the list. 


![Fortinet](/img/expedition/fortinetexport1.png "Fortinet")

![Fortinet2](/img/expedition/fortinetexport2.png "Fortinet2")

**2. Using the CLI**
```console
execute backup config management-station <comment>
```

Use the same command to backup a VDOM configuration by first entering the commands:

```console
config vdom
  edit <vdom_name>
```
:::note
The configuration is exported as a “.conf” file and is readable using a text file editor like notepad.
:::
## Juniper
### Juniper SRX(Junos)
**1. Export the configuration file**  

Juniper SRX (Junos) configuration files are similar to PAN-OS configuration files in that they can be exported in either Set or XML formats. In order to use Expedition to perform the migration, we need the Juniper configuration file in XML format. We actually need to export the configuration from the Juniper device in the XML format by running the following command from the SRX CLI:  

```console
show config | display xml | no-more
```
**2. Modify the configuration file**

The file has to start with XML tag ```<configuration>``` without attributes and end with the closing
 ```</configuration>``` tag. Failure to remove the unneeded attributes is the leading cause of failure during the import into Expedition. The first line of the XML file should look like the following:  
 
![SRX1](/img/expedition/srx1.png "SRX1")

The last line of the XML file should end with ```</configuration>``` and is shown below:  

![SRX2](/img/expedition/srx2.png "SRX2")  

:::note
The configuration is exported as a **.xml** file and is readable using a xml editor.
:::

### Juniper ScreenOS

To Backup or Save a Config File  

**1. Using the WebUI:**  

Select **Configuration** -> **Update** -> **Config File**  

In the **Download Configuration from Device** section, select **Save to File**
Then in the File Download dialog box, click **Save**.  Navigate to the location where you want to save the configuration file (cfg.txt), then click Save.

**2. Using the CLI:**  

Save the existing configuration to a TFTP server with the command:  

```console
save config to tftp <tftp_server_ip> <config_filename>  
```
## Checkpoint
### Checkpoint R80.X & R77.X 

1. Obtain the newest Checkpoint showpolicy package via <a href="https://github.com/CheckPointSW/ShowPolicyPackage/">**Checkpoint ShowPolicy Package**</a>  
2. Following below commands to create SCP user on Checkpoint Security Management Server , the scp user will be used to transfer the checkpoint configurations from checkpoint management server to your local machine. 

**R77.X**
```console
add user scpuser uid 2600 homedir /home/scpuser
set user scpuser shell /usr/bin/scponly
set user scpuser password
save config‍‍‍‍‍‍‍‍
```
**R80.X**
```console
add user scpuser uid 2600 homedir /home/scpuser
set user scpuser realname Scpuser
add rba role scpRole domain-type System readwrite-features expert
add rba user scpuser roles scpRole
set user scpuser gid 100 shell /usr/bin/scponly
set user scpuser password
save config‍‍‍‍‍‍‍‍‍‍‍‍‍‍
```  
3. Go into expert mode to run **“java -jar web_api_show_package-jar-with-dependencies.jar -option”** command.  Please refer the <a href="https://github.com/CheckPointSW/ShowPolicyPackage/">**Checkpoint ShowPolicy Package**</a>  for the command options

Examples:  

Running the tool on a Checkpoint Security Management server:
```console
java -jar web_api_show_package-jar-with-dependencies.jar
```
• Running the tool on a Checkpoint Security Management server for a specific policy package:  
```console
java -jar web_api_show_package-jar-with-dependencies.jar -k <PACKAGE NAME>
```
• Running the tool on a Checkpoint Multi-Domain Server for specific domain and a specific policy package:  
```console
java -jar web_api_show_package-jar-with-dependencies.jar -k <PACKAGE NAME> -d <DOMAIN NAME>
```
:::note
This tool is already installed on CheckPoint Security Management servers running version R80 with Jumbo-HF and above.

The Check Point Management Server also has a wrapper script so the tool can be run as  
$MDS_FWDIR/scripts/web_api_show_package.sh which in turn executes  
java -jar $MDS_FWDIR/api/samples/lib/web_api_show_package-jar-with-dependencies.jar 
:::

If you already have tool on CheckPoint Security Management Server, you can follow below steps to export the configuration:
```console
$MDS_FWDIR/scripts/web_api_show_package.sh
```
Running the tool on a Security Management server for a specific policy package:
```console
$MDS_FWDIR/scripts/web_api_show_package.sh -k <PACKAGE NAME>
```
Running the tool on a Multi-Domain Server for specific domain and a specific policy package: 
```console
$MDS_FWDIR/scripts/web_api_show_package.sh -k <PACKAGE NAME> -d <DOMAIN NAME>
```
:::note
Use of CMA Name is not supported. Only use the Domain name or the CMA IP.
:::

Finally after doing all this you should be able to transfer the outfile over SCP.
PLEASE NOTE THIS IS ALL ARBITRARY DEPENDING ON WHAT YOU HAVE SET UP AND WHERE YOU WOULD LIKE TO SAVE IT.  

:::note
The configuration is exported as a **.tar.gz** file.
:::

4. Obtain route file using below command: 
```console
netstat -nr
``` 
```console
show route all
```
:::note
The route file is needed for Expedition to do zone calculations
:::
## Cisco
Issue below commands in the CLI:

```console
terminal pager 0
more system:running-config / show running 
```
![cisco](/img/expedition/cisco.png "cisco")  

If it's multi-context , you will need to issue below commands to get into each of the context before you issue above two commands:

```console
changeto context <name>
changeto system
```  
:::note
The configuration is exported as a “.text” file and is readable using any text editor.
:::  

## SonicWall
Issue below commands in CLI:  

```bash
no cli pager session
show current-config
```

## Forcepoint  

### SideWinder  

Add all your Sidewinder rules into a single file and upload it or use the Copy from Clipboard. Depending on the version some of this commands will fail but others will get same information with the new command
```console
cf interface q > config_sidewinder.txt
cf service q >> config_sidewinder.txt
cf servicegroup q >> config_sidewinder.txt
cf policy q >> config_sidewinder.txt
cf route q >> config_sidewinder.txt
cf ipaddr q >> config_sidewinder.txt
cf iprange q >> config_sidewinder.txt
cf subnet q >> config_sidewinder.txt
cf netmap q >> config_sidewinder.txt
cf domain q >> config_sidewinder.txt
cf static q >> config_sidewinder.txt
cf netgroup q >> config_sidewinder.txt
cf application q >> config_sidewinder.txt
cf appgroup q >> config_sidewinder.txt
cf host q >> config_sidewinder.txt  
```
### StoneSoft

Migration of Stonesoft configurations require a Two-Step process. Please, read the following instructions to support the process.  

1. BROWSE for Stonesoft XML configuration files using the Single File or Multiple Files options. Policy names and Domain Names will be presented  

2. Select the policies wishing to migrate and click on IMPORT SELECTED POLICIES  
