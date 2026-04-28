---
sidebar_position: 18
---

# WOPI

These parameters define the WOPI protocol configuration.

## wopi.enable

**type:** `boolean` | **default:** `false`

Defines if WOPI is enabled or not.

## wopi.host

**type:** `string` | **default:** `""`

Defines the WOPI host (host name or IP address).

## wopi.htmlTemplate

**type:** `string` | **default:** `"../../web-apps/apps/api/wopi"`

Defines a path to the WOPI HTML template.

## wopi.wopiZone

**type:** `string` | **default:** `"external-http"`

Specifies the discovery zone advertised by the document server. For SharePoint integrations, this value should match the zone configured with Set-SPWOPIZone.

## wopi.sendAuthorizationHeader

**type:** `boolean` | **default:** `false`

Adds the `Authorization: Bearer <token>` header to WOPI requests. Optional by specification, but may be needed for older SharePoint integrations.

## wopi.favIconUrlWord

**type:** `string` | **default:** `"/web-apps/apps/documenteditor/main/resources/img/favicon.ico"`

Defines a path to the favicon for the document editor.

## wopi.favIconUrlCell

**type:** `string`

Defines a path to the favicon for the spreadsheet editor.

## wopi.favIconUrlSlide

**type:** `string`

Defines a path to the favicon for the presentation editor.

## wopi.favIconUrlPdf

**type:** `string` | **default:** `"/web-apps/apps/pdfeditor/main/resources/img/favicon.ico"`

Defines a path to the favicon for the PDF editor.

## wopi.favIconUrlDiagram

**type:** `string` | **default:** `"/web-apps/apps/visioeditor/main/resources/img/favicon.ico"`

Defines a path to the favicon for the diagram editor.

## wopi.fileInfoBlockList

**type:** `array of strings` | **default:** `["FileUrl"]`

Defines a list of WOPI file information parameters that are blocked when sending this array to the browser. However, these parameters are available on the server.

## wopi.pdfView

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be viewed in the PDF editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.pdfEdit

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be edited in the PDF editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.forms

**type:** `array of strings` | **default:** `[]`

Defines the form file types.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.wordView

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be viewed in the document editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.wordEdit

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be edited in the document editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.cellView

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be viewed in the spreadsheet editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.cellEdit

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be edited in the spreadsheet editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.slideView

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be viewed in the presentation editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.slideEdit

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be edited in the presentation editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.diagramView

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be viewed in the diagram editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.diagramEdit

**type:** `array of strings` | **default:** `[]`

Defines the file types that can be edited in the diagram editor.

:::note
The value of this parameter is stored in the *onlyoffice-docs-formats.json* file.
:::

## wopi.publicKey

**type:** `string` | **default:** `""`

Defines the public key that the integrator uses to check the private key.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.modulus

**type:** `string` | **default:** `""`

Defines the RSA modulus in the Base64-encoded format that is used to retrieve the public key.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.exponent

**type:** `integer` | **default:** `65537`

Defines the RSA exponent in the Base64-encoded format that is used to retrieve the public key.

## wopi.privateKey

**type:** `string` | **default:** `""`

Defines the private key that signs the Document Server request.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.publicKeyOld

**type:** `string` | **default:** `""`

Defines the old public key that the integrator used to check the private key.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.modulusOld

**type:** `string` | **default:** `""`

Defines the old RSA modulus in the Base64-encoded format that was used to retrieve the public key.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.exponentOld

**type:** `integer` | **default:** `65537`

Defines the old RSA exponent in the Base64-encoded format that was used to retrieve the public key.

## wopi.privateKeyOld

**type:** `string` | **default:** `""`

Defines the old private key that signed the Document Server request.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## wopi.refreshLockInterval

**type:** `string` | **default:** `"10m"`

Defines the interval time in minutes for refreshing the lock on a file by resetting its automatic expiration timer to 30 minutes.

## wopi.dummy

**type:** `object`

Defines the properties of dummy handlers for stress testing.

### wopi.dummy.enable

**type:** `boolean` | **default:** `false`

Defines if the dummy handlers are enabled or not.

### wopi.dummy.sampleFilePath

**type:** `string` | **default:** `""`

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
    "sendAuthorizationHeader": false,
    "refreshLockInterval": "10m",
    "dummy": {
      "enable": false,
      "sampleFilePath": ""
    }
  }
}
```

