---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Document Builder

**ONLYOFFICE Document Builder** is available for Windows and Linux.

You can download it from our website or compile from source codes and deploy the solution on your local server using the specially designed **build\_tools**.

- [Get ONLYOFFICE Document Builder](https://www.onlyoffice.com/download-builder.aspx?from=api)
- [Compile ONLYOFFICE Document Builder](https://helpcenter.onlyoffice.com/installation/docs-community-compile-document-builder.aspx?from=api)

The Linux OS versions of **ONLYOFFICE Document Builder** require the following dependencies to be installed:

<Tabs>
  <TabItem value="debian-ubuntu" label="Debian/Ubuntu">
    ``` bash
    sudo apt-get install libstdc++6 libcurl3-gnutls libc6 libxml2 libcurl3 fonts-dejavu fonts-opensymbol
    sudo apt-get install fonts-liberation ttf-mscorefonts-installer fonts-crosextra-carlito
    ```
  </TabItem>
  <TabItem value="redhat-centos" label="RedHat/CentOS">
    ``` bash
    sudo yum install glibc libcurl libxml2 dejavu-lgc-sans-fonts dejavu-lgc-sans-mono-fonts dejavu-lgc-serif-fonts dejavu-sans-fonts dejavu-sans-mono-fonts dejavu-serif-fonts libreoffice-opensymbol-fonts
    ```
  </TabItem>
</Tabs>
