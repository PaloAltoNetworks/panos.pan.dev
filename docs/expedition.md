---
id: expedition
title: Expedition 2.0
sidebar_label: Overview
hide_title: true
description: Overview of Expedition 2.0
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

## What is Expedition?

**Expedition** is the fifth evolution of the Palo Alto Networks Migration Tool. The original main purpose of this tool was to help reduce the time and effort to migrate a configuration from one of the supported vendors to Palo Alto Networks.

By using the Migration Tool, everyone can convert a configuration from Checkpoint or Cisco or any other vendor to a PAN-OS and give you more time to improve the results. Migration Tool 3 added some functionalities to allow our customers to enforce security policies based on App-ID and User-ID as well.

With Expedition 1.X, we went one step further, not only because we want to continue helping to facilitate the transition of a security policy from others vendors to PAN-OS but we want to ensure the outcome makes use of the most advanced features of the platform to get you closer to the best of the possible configurations. For this reason, we added a Machine Learning module, which can help you to generate new security policies based on real log traffic, and we have introduced the Best Practices Assessment Tool, which checks whether the configuration complies with the Best Practices recommended by our security experts.

With Expedition 2.0, we had two main goals on mind:

- Improve the tool performance and reliability
- Provide automation features

With all these huge improvements, we expect the next time you use Expedition the journey to excellence will be easier.  

## Expedition 2.0 Modules
The Expedition 2.0 tool aims at facilitating the consumption of PANOS features and assisting on the correct application of good practices in on NGFW devices.  

For instance, the tool can assist on the implementation of security policies using Applications, Users and Regions, 
the reduction of number of address and service objects to increase policy administration
and advising on potential configuration inconsistencies and deficiencies to help placing the focus on those relevant points, among other features.  

To achieve the above-mentioned features and more, the Expedition 2.0 has been designed to be divided in four main process modules  (represented in green in below image) to provide web access to the tool, API feature accessibility, configuration conversions and data analytics. Additionally, two relaying modules (in white) are required for data storage and access control.

An extra module (in blue) can be constructed by the community, making use if the API to generate scripts for automation (script processing), using the language of preference. Ultimately, a library of scripts with different workflows can be constructed by sharing those scripts in public/private repositories.  
This separation of concerns, allows each module to evolve and improve the overall functionality, increase reusability and reliability.  
The modules are:
- **Expedition Web API**: Exposes all the Expedition functionalities via an Application Program Interface that offers high level of scripting and automation 
- **Expedition Web UI**: Provides a web interface that offers access to all Expedition functionalities with a low learning curve_
- **Expedition Converter**: In charge of parsing and translating third party vendors' configurations into PANOS firewalls and Panoramas
- **Expedition Analytics**: Offers functionalities for traffic log analytics, rule improvement suggestions, and other "data analytics"-related tasks  


![Architecture](/img/expedition/expedition2_arc.svg "Architecture")  

## Supported Vendor Matrix 
The below table listed the supported Vendor in current beta release, there will be more supported vendors in future releases.

For more specific inquiries, please contact fwmigrate@paloaltonetworks.com  

| <small>Vendor</small>     | <small>Supported Vendor OS</small>           | <small>Global Addr. Obj.</small> | <small>Addr. Group Obj.</small> | <small>Serv. Obj</small> | <small>Serv. Group Obj.</small> | <small>Sec. Pol</small> | <small>NAT Pol.</small> | <small>Net. Int. (L3)</small> | <small>Static routes</small> | <small>VPN</small> |
|------------|-------------------------------|-------------------|------------------|-----------|------------------|----------|----------|----------------|---------------|-----|
| <small>Checkpoint</small> | R75, R77                      |       ✔           |       ✔          |    ✔      |        ✔         |    ✔     |    ✔     |      ✔         |      ✔        |     |
|            | >R80                          |       ✔           |       ✔          |    ✔      |        ✔         |    ✔     |    ✔     |      ✔         |      ✔        |     |
| <small>Cisco</small>      | ASA 9.0,9.1,9.2, 9.6,8.2,8.4   |       ✔           |       ✔          |    ✔      |        ✔         |    ✔     |    ✔     |      ✔         |      ✔        |  ✔  |
|            | FirePower(only in ASA syntax) |       ✔           |       ✔          |    ✔      |        ✔         |    ✔     |    ✔     |      ✔         |      ✔        |     |
| <small>Fortinet</small>   | Fortigate 4.0,5.0             |       ✔           |       ✔          |    ✔      |        ✔         |    ✔     |    ✔     |      ✔         |      ✔        |     |
| <small>Juniper</small>      | All Netscreen Firewalls(ScreenOS)   |       ✔           |       ✔          |    ✔      |        ✔         |    ✔     |    ✔     |      ✔         |      ✔        |  ✔  |
|            | Junos 11.4,12.1,12.3 |       ✔           |       ✔          |    ✔      |        ✔         |    ✔     |    ✔     |      ✔         |      ✔        |   ✔   |
| <small>Sonicwall</small>   | <6.5             |                  |       ✔          |    ✔      |        ✔         |    ✔     |    ✔     |      ✔         |      ✔        |     |
