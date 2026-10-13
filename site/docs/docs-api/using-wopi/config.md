---
sidebar_position: -10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import APITable from '@site/src/components/APITable/APITable';

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

:::note
The default values are available in the `default.json` configuration file, which is available in the folders above (for Linux and Windows). Please do not edit the contents of the `default.json` file directly. The default values will be restored each time you restart Docker container or upgrade ONLYOFFICE Docs to a new version and all your changes will be lost.
:::

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

<APITable>

| Parameter                      | Type             | Example                                                                                                                                             | Description                                                                                                                                                                                                                                      |
| ------------------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wopi.enable                    | boolean          | false                                                                                                                                               | Whether WOPI is enabled or not.                                                                                                                                                                                                               |
| wopi.host                      | string           | ""                                                                                                                                                  | The WOPI host (host name or IP address).                                                                                                                                                                                                 |
| wopi.htmlTemplate              | string           | "../../web-apps/apps/api/wopi"                                                                                                                      | A path to the WOPI HTML template.                                                                                                                                                                                                        |
| wopi.wopiZone                  | string           | "external-http"                                                                                                                                     | The discovery zone advertised by the document server. For SharePoint integrations, this value should match the zone configured with `Set-SPWOPIZone`.                                                                                     |
| wopi.favIconUrlWord            | string           | "/web-apps/apps/<wbr />documenteditor/main/<wbr />resources/img/favicon.ico"                                                                        | A path to the favicon for the document editor.                                                                                                                                                                                           |
| wopi.favIconUrlCell            | string           | "/web-apps/apps/<wbr />spreadsheeteditor/main/<wbr />resources/img/favicon.ico"                                                                     | A path to the favicon for the spreadsheet editor.                                                                                                                                                                                        |
| wopi.favIconUrlSlide           | string           | "/web-apps/apps/<wbr />presentationeditor/main/<wbr />resources/img/favicon.ico"                                                                    | A path to the favicon for the presentation editor.                                                                                                                                                                                       |
| wopi.favIconUrlPdf             | string           | "/web-apps/apps/<wbr />pdfeditor/main/<wbr />resources/img/favicon.ico"                                                                             | A path to the favicon for the pdf editor.                                                                                                                                                                                                |
| wopi.favIconUrlDiagram         | string           | "/web-apps/apps/<wbr />visioeditor/main/<wbr />resources/img/favicon.ico"                                                                           | A path to the favicon for the diagram editor.                                                                                                                                                                                            |
| wopi.fileInfoBlockList         | string[] | \["FileUrl"]                                                                                                                                        | A list of WOPI file information parameters that are blocked when sending this array to the browser. However, these parameters are available on the server.                                                                               |
| wopi.pdfView                   | string[] | \[]                                                                                                                                                 | The file types that can be viewed in the pdf editor.                                                                                                                                                                                     |
| wopi.pdfEdit                   | string[] | \[]                                                                                                                                                 | The file types that can be edited in the pdf editor.                                                                                                                                                                                     |
| wopi.forms                     | string[] | \[]                                                                                                                                                 | The form file types.                                                                                                                                                                                                                     |
| wopi.wordView                  | string[] | \[]                                                                                                                                                 | The file types that can be viewed in the document editor.                                                                                                                                                                                |
| wopi.wordEdit                  | string[] | \[]                                                                                                                                                 | The file types that can be edited in the document editor.                                                                                                                                                                                |
| wopi.cellView                  | string[] | \[]                                                                                                                                                 | The file types that can be viewed in the spreadsheet editor.                                                                                                                                                                             |
| wopi.cellEdit                  | string[] | \[]                                                                                                                                                 | The file types that can be edited in the spreadsheet editor.                                                                                                                                                                             |
| wopi.slideView                 | string[] | \[]                                                                                                                                                 | The file types that can be viewed in the presentation editor.                                                                                                                                                                            |
| wopi.slideEdit                 | string[] | \[]                                                                                                                                                 | The file types that can be edited in the presentation editor.                                                                                                                                                                             |
| wopi.diagramView               | string[] | \[]                                                                                                                                                 | The file types that can be viewed in the diagram editor.                                                                                                                                                                                  |
| wopi.diagramEdit               | string[] | \[]                                                                                                                                                 | The file types that can be edited in the diagram editor.                                                                                                                                                                                  |
| wopi.publicKey                 | string           | ""                                                                                                                                                  | The public key that the integrator uses to check the private key.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.                          |
| wopi.modulus                   | string           | ""                                                                                                                                                  | The RSA modulus in the Base64-encoded format that is used to retrieve the public key.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.      |
| wopi.exponent                  | integer          | 65537                                                                                                                                               | The RSA public exponent as an integer. The server Base64-encodes it in discovery.                                                                                                                                                        |
| wopi.privateKey                | string           | ""                                                                                                                                                  | The private key that signs the document server request.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.                                    |
| wopi.publicKeyOld              | string           | ""                                                                                                                                                  | The old public key that the integrator used to check the private key.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.                      |
| wopi.modulusOld                | string           | ""                                                                                                                                                  | The old RSA modulus in the Base64-encoded format that was used to retrieve the public key.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| wopi.exponentOld               | integer          | 65537                                                                                                                                               | The previous RSA public exponent as an integer. The server Base64-encodes it in discovery.                                                                                                                                               |
| wopi.privateKeyOld             | string           | ""                                                                                                                                                  | The old private key that signed the document server request.<br/><br/>Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.                               |
| wopi.requireIpFilterRule       | boolean          | true                                                                                                                                                | Whether every WOPI host must be named by a *services.CoAuthoring.ipfilter.rules* entry before the server will contact it. The catch-all `*` rule does not count. See the [IP filter](overview.md#ip-filter) section for details.         |
| wopi.sendAuthorizationHeader   | boolean          | false                                                                                                                                               | Whether to add the `Authorization: Bearer <token>` header with the WOPI access token to the requests to the WOPI host. The header is optional by the WOPI specification, but may be needed for older SharePoint integrations. |
| wopi.refreshLockInterval       | string           | "10m"                                                                                                                                               | The interval time, as a duration string, for refreshing the lock on a file by resetting its automatic expiration timer to 30 minutes.                                                                                                    |
| wopi.dummy                     | object           |                                                                                                                                                     | The properties of dummy handlers for stress testing.                                                                                                                                                                                     |
| wopi.dummy.enable              | boolean          | false                                                                                                                                               | Whether the dummy handlers are enabled or not.                                                                                                                                                                                                |
| wopi.dummy.sampleFilePath      | string           | ""                                                                                                                                                  | The dummy path to the sample file.                                                                                                                                                                                                       |

</APITable>

:::note
Starting from version 9.4, the `wopi.pdfView`, `wopi.pdfEdit`, `wopi.forms`, `wopi.wordView`, `wopi.wordEdit`, `wopi.cellView`, `wopi.cellEdit`, `wopi.slideView`, `wopi.slideEdit`, `wopi.diagramView`, and `wopi.diagramEdit` lists are empty by default. An empty list means that the file types are taken from the [onlyoffice-docs-formats.json](https://github.com/ONLYOFFICE/document-formats/blob/master/onlyoffice-docs-formats.json) file. Specify a non-empty list to override them. The diagram file types are not available in the open-source version.
:::

## Example

```json
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
    "favIconUrlDiagram": "/web-apps/apps/visioeditor/main/resources/img/favicon.ico",
    "fileInfoBlockList": ["FileUrl"],
    "pdfView": [],
    "pdfEdit": [],
    "forms": [],
    "wordView": [],
    "wordEdit": [],
    "cellView": [],
    "cellEdit": [],
    "slideView": [],
    "slideEdit": [],
    "diagramView": [],
    "diagramEdit": [],
    "publicKey": "",
    "modulus": "",
    "exponent": 65537,
    "privateKey": "",
    "publicKeyOld": "",
    "modulusOld": "",
    "exponentOld": 65537,
    "privateKeyOld": "",
    "requireIpFilterRule": true,
    "sendAuthorizationHeader": false,
    "refreshLockInterval": "10m",
    "dummy": {
      "enable": false,
      "sampleFilePath": ""
    }
  }
}
```
