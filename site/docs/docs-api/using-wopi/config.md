---
sidebar_position: -10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Config

For the WOPI protocol setup, it is necessary to edit the WOPI parameters in the configuration file, which can be found (or created) at the following path:

<Tabs>
  <TabItem value="windows" label="Windows">
      ``` bash
      %ProgramFiles%\ONLYOFFICE\DocumentServer\config\local.json
      ```
  </TabItem>
  <TabItem value="linux" label="Linux">
      ``` bash
      /etc/onlyoffice/documentserver/local.json
      ```
  </TabItem>
</Tabs>

> The default values are available in the `default.json` configuration file, which is available in the folders above (for Linux and Windows). Please do not edit the contents of the `default.json` file directly. The default values will be restored each time you restart Docker container or upgrade ONLYOFFICE Docs to a new version and all your changes will be lost.

Restart the services for the config changes to take effect:

<Tabs>
  <TabItem value="rpm-deb" label="RPM/DEB packages">
      ``` bash
      systemctl restart ds-*
      ```
  </TabItem>
  <TabItem value="docker" label="Docker">
      ``` bash
      supervisorctl restart all
      ```
  </TabItem>
</Tabs>

## Parameters

| Parameter                      | Type             | Example                                                                                                                                                      | Description                                                                                                                                                                                                                                      |
| ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wopi.enable                    | boolean          | false                                                                                                                                                        | Defines if WOPI is enabled or not.                                                                                                                                                                                                               |
| wopi.host                      | string           | ""                                                                                                                                                           | Defines the WOPI host (host name or IP address).                                                                                                                                                                                                 |
| wopi.htmlTemplate              | string           | "../../web-apps/apps/api/wopi"                                                                                                                               | Defines a path to the WOPI HTML template.                                                                                                                                                                                                        |
| wopi.wopiZone                  | string           | "external-http"                                                                                                                                              | Defines a zone that the document server uses to navigate the browser to the WOPI application.                                                                                                                                                    |
| wopi.favIconUrlWord            | string           | "/web-apps/apps/<br/>documenteditor/main/<br/>resources/img/favicon.ico"                                                                                     | Defines a path to the favicon for the document editor.                                                                                                                                                                                           |
| wopi.favIconUrlCell            | string           | "/web-apps/apps/<br/>spreadsheeteditor/main/<br/>resources/img/favicon.ico"                                                                                  | Defines a path to the favicon for the spreadsheet editor.                                                                                                                                                                                        |
| wopi.favIconUrlSlide           | string           | "/web-apps/apps/<br/>presentationeditor/main/<br/>resources/img/favicon.ico"                                                                                 | Defines a path to the favicon for the presentation editor.                                                                                                                                                                                       |
| wopi.favIconUrlPdf             | string           | "/web-apps/apps/<br/>pdfeditor/main/<br/>resources/img/favicon.ico"                                                                                          | Defines a path to the favicon for the pdf editor.                                                                                                                                                                                                |
| wopi.fileInfoBlockList         | array of strings | \["FileUrl"]                                                                                                                                                 | Defines a list of WOPI file information parameters that are blocked when sending this array to the browser. However, these parameters are available on the server.                                                                               |
| wopi.pdfView                   | array of strings | \["djvu", "xps", "oxps"]                                                                                                                                     | Defines the file types that can be viewed in the pdf editor.                                                                                                                                                                                     |
| wopi.pdfEdit                   | array of strings | \["pdf"]                                                                                                                                                     | Defines the file types that can be edited in the pdf editor.                                                                                                                                                                                     |
| wopi.forms                     | array of strings | \["pdf"]                                                                                                                                                     | Defines the form file types.                                                                                                                                                                                                                     |
| wopi.wordView                  | array of strings | \["doc", "dotm", "dot", "fodt", "ott", "rtf", "mht", "mhtml",<br/>"html", "htm", "xml", "epub",<br/>"fb2", "sxw", "stw", "wps",<br/>"wpt", "pages", "oform"] | Defines the file types that can be viewed in the document editor.                                                                                                                                                                                |
| wopi.wordEdit                  | array of strings | \["docx", "dotx", "docm", "odt",<br/>"txt"]                                                                                                                  | Defines the file types that can be edited in the document editor.                                                                                                                                                                                |
| wopi.cellView                  | array of strings | \["xls", "xlsb", "xltm", "xlt",<br/>"fods", "ots", "sxc", "xml",<br/>"et", "ett", "numbers"]                                                                 | Defines the file types that can be viewed in the spreadsheet editor.                                                                                                                                                                             |
| wopi.cellEdit                  | array of strings | \["xlsx", "xltx", "xlsm", "ods",<br/>"csv"]                                                                                                                  | Defines the file types that can be edited in the spreadsheet <br/>editor.                                                                                                                                                                        |
| wopi.slideView                 | array of strings | \["ppt", "ppsx", "ppsm", "pps",<br/>"potm", "pot", "fodp", "otp",<br/>"sxi", "dps", "dpt", "key"]                                                            | Defines the file types that can be edited in the presentation editor.                                                                                                                                                                            |
| wopi.slideEdit                 | array of strings | \["pptx", "potx", "pptm", "odp"]                                                                                                                             | Defines the file types that can be viewed in the spreadsheet editor.                                                                                                                                                                             |
| wopi.publicKey                 | string           | ""                                                                                                                                                           | Defines the public key that the integrator uses to check the private key.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.                          |
| wopi.modulus                   | string           | ""                                                                                                                                                           | Defines the RSA modulus in the Base64-encoded format that is used to retrieve the public key.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.      |
| wopi.exponent                  | string           | "65537"                                                                                                                                                      | Defines the RSA exponent in the Base64-encoded format that is used to retrieve the public key.                                                                                                                                                   |
| wopi.privateKey                | string           | ""                                                                                                                                                           | Defines the private key that signs the document server request.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.                                    |
| wopi.publicKeyOld              | string           | ""                                                                                                                                                           | Defines the old public key that the integrator used to check the private key.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.                      |
| wopi.modulusOld                | string           | ""                                                                                                                                                           | Defines the old RSA modulus in the Base64-encoded format that was used to retrieve the public key.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| wopi.exponentOld               | string           | "65537"                                                                                                                                                      | Defines the old RSA exponent in the Base64-encoded format that was used to retrieve the public key.                                                                                                                                              |
| wopi.privateKeyOld             | string           | ""                                                                                                                                                           | Defines the old private key that signed the document server request.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.                               |
| wopi.refreshLockInterval       | string           | "10m"                                                                                                                                                        | Defines the interval time in minutes for refreshing the lock on a file by resetting its automatic expiration timer to 30 minutes.                                                                                                                |
| wopi.dummy                     | object           |                                                                                                                                                              | Defines the properties of dummy handlers for stress testing.                                                                                                                                                                                     |
| wopi.dummy.enable              | boolean          | false                                                                                                                                                        | Defines if the dummy handlers are enabled or not.                                                                                                                                                                                                |
| wopi.dummy.<br/>sampleFilePath | string           | ""                                                                                                                                                           | Defines the dummy path to the sample file.                                                                                                                                                                                                       |

## Example

``` json
{
  "wopi": {
    "enable": false,
    "host": "",
    "htmlTemplate": "../../web-apps/apps/api/wopi",
    "wopiZone": "external-http",
    "favIconUrlWord": "/web-apps/apps/documenteditor/main/resources/img/favicon.ico",
    "favIconUrlCell": "/web-apps/apps/spreadsheeteditor/main/resources/img/favicon.ico",
    "favIconUrlSlide": "/web-apps/apps/presentationeditor/main/resources/img/favicon.ico",
    "favIconUrlPdf": "/web-apps/apps/pdfeditor/main/resources/img/favicon.ico",
    "fileInfoBlockList": ["FileUrl"],
    "pdfView": ["djvu", "xps", "oxps"],
    "pdfEdit": ["pdf"],
    "forms": ["pdf"],
    "wordView": ["doc", "dotm", "dot", "fodt", "ott", "rtf", "mht", "mhtml", "html", "htm", "xml", "epub", "fb2", "sxw", "stw", "wps", "wpt", "pages", "oform"],
    "wordEdit": ["docx", "dotx", "docm", "odt", "txt"],
    "cellView": ["xls", "xlsb", "xltm", "xlt", "fods", "ots", "sxc", "xml", "et", "ett", "numbers"],
    "cellEdit": ["xlsx", "xltx", "xlsm", "ods", "csv"],
    "slideView": ["ppt", "ppsx", "ppsm", "pps", "potm", "pot", "fodp", "otp", "sxi", "dps", "dpt", "key"],
    "slideEdit": ["pptx", "potx", "pptm", "odp"],
    "publicKey": "",
    "modulus": "",
    "exponent": 65537,
    "privateKey": "",
    "publicKeyOld": "",
    "modulusOld": "",
    "exponentOld": 65537,
    "privateKeyOld": "",
    "refreshLockInterval": "10m",
    "dummy": {
      "enable": false,
      "sampleFilePath": ""
    }
  }
}
```
