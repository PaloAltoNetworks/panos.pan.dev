---
id: expedition_install
title: Expedition 2.0
sidebar_label: Install
hide_title: true
description: Expedition 2.0 Installation
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
## Install Expedition

Expedition 2.0 is in constant development to cover new functionalities available in the market and to correct implementation issues that are identified in the code. To keep the Expedition instance up to date, the tool is initially provided as a Debian package. In the future we will also offer containerized flavors of the tool to allow installing it on other platforms rather than Debian based ones.
Note: The installation process does not support migrating Expedition 1 instances into Expedition 2.0

## System Requirement

As mentioned before, Expedition 2.0 is provided as a Debian package (that may have additional dependencies to be satisfied). Specifically, the package has been prepared to be installed in an Ubuntu 18.04 64-bit server.
The following link offers an official download image for the supported machine, Ubuntu 18.04.x LTS (AMD 64) Server
https://releases.ubuntu.com/18.04/
The Ubuntu server will need to be provisioned by the end-user. Options include downloading and installing the Ubuntu 18.04 ISO (link above) onto a customer managed server or to provision an Ubuntu 18.04 LTS virtual server available from Google Cloud, AWS or Azure.
When preparing your VM to host Expedition, consider the following recommended specifications depending on the type of project (migration) that you will cover with it. 

| Primary usage | Description | Recommended Compute Resources  |
| :---          |  :---       |  :---                          |
| Migration     | Involving configruation conversions, but it will not invole traffic log analysis      | 4 CPU/Core 8 GB RAM 40 GB SSD Storage 1nic with 100MBPs/1Gbps   |
| Machine Learning(Samll Environemnts)  | Involving traffic log analsis convering periods of 30 days and 300MBs/day      | 8 CPU/Cores 16GB RAM 1x10GB(OS related data) 1x 150 GB SSD (project settings and parquet files) 1x1 TB(Traffic and other log files) 1nic with 100Mbps/1Gbps  |

Table1: Expedition VM recommended system requirements 

## Installing the Expedition Packages

Expedition2 should be installed in a clean VM Ubuntu 18.04 AMD64 Server using an installation script that can be downloaded from

https://conversionupdates.paloaltonetworks.com/initSetup2beta.sh

The script will perform some initial verifications, including the existence of a user with username “expedition”, and that the Expedition package has not been installed in advance, so it would not modify the settings of an already installed Expedition VM.

This script will prepare the VM to host the different packages necessary for using Expedition 2, including the web service -based API, the converter, the JS Web UI, rsyslog for future syslog service support, Java and Spark for future traffic log analysis and additional required services such as rabbitmq, zip, and SSH.

NOTE: This script requires communication to a certain number of apt-get repositories, including conversionupdates.paloaltonetworks.com . It is therefore necessary to allow APT-GET communications to be established from the VM that will host Expedition 2.0. In case of installation failure, make sure that these communications are successful.	

The installation of all those modules would require internet connectivity, mainly to:
Ubuntu source repositories (http://archive.ubuntu.com )
Expedition packages (https://conversionupdates.paloaltonetworks.com )
RabbitMQ for internal messaging (http://www.rabbitmq.com )
Once a VM has been created with the required specifications (CPU, RAM and Network interfaces), retrieve the installer and execute it with the following commands
cd ~
wget https://conversionupdates.paloaltonetworks.com/initSetup2beta.sh
chmod +x initSetup2beta.sh
sudo ./initSetup2beta.sh | tee output.log
Notice that we are downloading the installation script, making it executable (+x), launching it with sudo privileges and storing the installation output messages into a file called output.log.
The process is no human intervention required.
After the installation, the following changes will have been applied:
Users
www-data will belong to the expedition group
root password set to “paloalto”

SSHD with enabled remote access for:
User: root 		Password: paloalto
User: expedition	Password: \<untouched\>

Installation of MySQL server 5.7
User: root		Password: paloalto

Apache + PHP 7.2
User: admin		Password: paloalto

Rsyslog 

Firewalld service initiated allowing connections to
tcp/22 (ssh remote access)
tcp/80   (initial unsafe web interface)
tcp/443 (SSL web API)
tcp/4050-4070 (future Spark connections)
tcp/5050-5070 (future Spark connections)

Filesystem
/home/userSpace will be created owned by www-data
/data will be created owned by www-data
/var/expedition-converter will be created with converter module
/var/www/html/expedition-api will be created with API module

## Accessing the Expediiton GUI

After the installation is complete, reach your web browser to navigate to the front-end.
An initial Expedition web interface is provided through the following route (you may have to substitute the ExpeditionIP by the IP assigned to your VM.)

https://<ExpeditionIP>

For instance:
https://192.168.64.138
