---
sidebar_position: 18
---

# WOPI

These parameters define the WOPI protocol configuration.

## wopi.enable

`Type: boolean`   `Default: false`

Defines if WOPI is enabled or not.

## wopi.host

`Type: string`   `Default: ""`

Defines the WOPI host (host name or IP address).

## wopi.htmlTemplate

`Type: string`   `Default: "../../web-apps/apps/api/wopi"`

Defines a path to the WOPI HTML template.

## wopi.wopiZone

`Type: string`   `Default: "external-http"`

Defines a zone that the Document Server uses to navigate the browser to the WOPI application.

## wopi.favIconUrlWord

`Type: string`   `Default: "/web-apps/apps/documenteditor/main/resources/img/favicon.ico"`

Defines a path to the favicon for the document editor.

## wopi.favIconUrlCell

`Type: string`

Defines a path to the favicon for the spreadsheet editor.

## wopi.favIconUrlSlide

`Type: string`

Defines a path to the favicon for the presentation editor.

## wopi.favIconUrlPdf

`Type: string`   `Default: "/web-apps/apps/pdfeditor/main/resources/img/favicon.ico"`

Defines a path to the favicon for the PDF editor.

## wopi.favIconUrlDiagram

`Type: string`   `Default: "/web-apps/apps/visioeditor/main/resources/img/favicon.ico"`

Defines a path to the favicon for the diagram editor.

## wopi.fileInfoBlockList

`Type: array of strings`   `Default: ["FileUrl"]`

Defines a list of WOPI file information parameters that are blocked when sending this array to the browser. However, these parameters are available on the server.

## wopi.pdfView

`Type: array of strings`   `Default: []`

Defines the file types that can be viewed in the PDF editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.pdfEdit

`Type: array of strings`   `Default: []`

Defines the file types that can be edited in the PDF editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.forms

`Type: array of strings`   `Default: []`

Defines the form file types.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.wordView

`Type: array of strings`   `Default: []`

Defines the file types that can be viewed in the document editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.wordEdit

`Type: array of strings`   `Default: []`

Defines the file types that can be edited in the document editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.cellView

`Type: array of strings`   `Default: []`

Defines the file types that can be viewed in the spreadsheet editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.cellEdit

`Type: array of strings`   `Default: []`

Defines the file types that can be edited in the spreadsheet editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.slideView

`Type: array of strings`   `Default: []`

Defines the file types that can be viewed in the presentation editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.slideEdit

`Type: array of strings`   `Default: []`

Defines the file types that can be edited in the presentation editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.diagramView

`Type: array of strings`   `Default: []`

Defines the file types that can be viewed in the diagram editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.diagramEdit

`Type: array of strings`   `Default: []`

Defines the file types that can be edited in the diagram editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.publicKey

`Type: string`   `Default: ""`

Defines the public key that the integrator uses to check the private key.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.modulus

`Type: string`   `Default: ""`

Defines the RSA modulus in the Base64-encoded format that is used to retrieve the public key.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.exponent

`Type: integer`   `Default: 65537`

Defines the RSA exponent in the Base64-encoded format that is used to retrieve the public key.

## wopi.privateKey

`Type: string`   `Default: ""`

Defines the private key that signs the Document Server request.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.publicKeyOld

`Type: string`   `Default: ""`

Defines the old public key that the integrator used to check the private key.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.modulusOld

`Type: string`   `Default: ""`

Defines the old RSA modulus in the Base64-encoded format that was used to retrieve the public key.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.exponentOld

`Type: integer`   `Default: 65537`

Defines the old RSA exponent in the Base64-encoded format that was used to retrieve the public key.

## wopi.privateKeyOld

`Type: string`   `Default: ""`

Defines the old private key that signed the Document Server request.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.refreshLockInterval

`Type: string`   `Default: "10m"`

Defines the interval time in minutes for refreshing the lock on a file by resetting its automatic expiration timer to 30 minutes.

## wopi.dummy

`Type: object`

Defines the properties of dummy handlers for stress testing.

### wopi.dummy.enable

`Type: boolean`   `Default: false`

Defines if the dummy handlers are enabled or not.

### wopi.dummy.sampleFilePath

`Type: string`   `Default: ""`

Defines the dummy path to the sample file.

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
    "fileInfoBlockList": [
      "FileUrl"
    ],
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
    "refreshLockInterval": "10m",
    "dummy": {
      "enable": false,
      "sampleFilePath": ""
    }
  }
}
```

