---
sidebar_position: 22
---

# Server

These parameters define the server configuration.

## services.CoAuthoring.server.assemblyFormatAsOrigin

**type:** `boolean` | **default:** `true`

Defines if the assembled file is saved in its original format or not.

## services.CoAuthoring.server.callbackRequestTimeout

**type:** `object`

Defines the timeout properties for callback requesting.

### services.CoAuthoring.server.callbackRequestTimeout.connectionAndInactivity

**type:** `string` | **default:** `"10m"`

Defines a period which specifies two timeouts:

- **read timeout** - time to wait for a server to send response headers (and start the response body) before aborting the request;

- **connection timeout** - sets the socket to timeout after timeout of inactivity. Note that increasing the timeout beyond the OS-wide TCP connection timeout will not have any effect.

This parameter is sent to the **npm** module.

### services.CoAuthoring.server.callbackRequestTimeout.wholeCycle

**type:** `string` | **default:** `"10m"`

Defines the whole request cycle timeout.

## services.CoAuthoring.server.documentFormatsFile

**type:** `string` | **default:** `"../../document-formats/onlyoffice-docs-formats.json"`

Defines a path to the "onlyoffice-docs-formats" file.

## services.CoAuthoring.server.downloadFileAllowExt

**type:** `string[]` | **default:** `["pdf","xlsx"]`

Defines extensions which are allowed to be downloaded via the downloadFile handler.

## services.CoAuthoring.server.edit_singleton

**type:** `boolean` | **default:** `false`

Defines if the singleton can be edited or not.

## services.CoAuthoring.server.editorDataStorage

**type:** `string` | **default:** `"editorDataMemory"`

Defines the editor data storage. The possible values: *"editorDataRedis"*, *""*.

## services.CoAuthoring.server.editorStatStorage

**type:** `string` | **default:** `""`

Defines the editor data storage for license calculation and statistics (local memory or redis). The possible values are *"editorDataMemory"*, *"editorDataRedis"*, or *""*. The default *""* value means that the value of the *editorDataStorage* parameter will be used. This parameter is primarily used for a sharded cluster.

## services.CoAuthoring.server.forceSaveUsingButtonWithoutChanges

**type:** `boolean` | **default:** `false`

Defines whether a file without any changes can be forcesaved by clicking the **Save** button.

## services.CoAuthoring.server.forgottenfiles

**type:** `string` | **default:** `"forgotten"`

Defines a folder name where all the forgotten files are stored.

## services.CoAuthoring.server.forgottenfilesname

**type:** `string` | **default:** `"output"`

Defines a forgotten file name.

## services.CoAuthoring.server.healthcheckfilepath

**type:** `string` | **default:** `"../public/healthcheck.docx"`

Defines a path where the health check requests will be sent.

## services.CoAuthoring.server.isAnonymousSupport

**type:** `boolean` | **default:** `true`

Defines if the anonymous users have access to the editor or live viewer or not.

## services.CoAuthoring.server.limits_image_download_timeout

**type:** `object`

Defines the timeout properties for downloading images.

### services.CoAuthoring.server.limits_image_download_timeout.connectionAndInactivity

**type:** `string` | **default:** `"2m"`

Defines a period which specifies two timeouts:

- **read timeout** - time to wait for a server to send response headers (and start the response body) before aborting the request;

- **connection timeout** - sets the socket to timeout after timeout of inactivity. Note that increasing the timeout beyond the OS-wide TCP connection timeout will not have any effect.

This parameter is sent to the **npm** module.

### services.CoAuthoring.server.limits_image_download_timeout.wholeCycle

**type:** `string` | **default:** `"2m"`

Defines the whole request cycle - a period from the download start to the full download.

## services.CoAuthoring.server.limits_image_size

**type:** `integer` | **default:** `26214400`

Defines a maximum size for all the images uploaded in each process (measured in bytes).

## services.CoAuthoring.server.limits_tempfile_upload

**type:** `integer` | **default:** `104857600`

Defines a maximum size for all the uploaded temporary files used by each process (measured in bytes).

## services.CoAuthoring.server.maxRequestChanges

**type:** `integer` | **default:** `20000`

Defines a maximum size of the request changes.

## services.CoAuthoring.server.mode

**type:** `string` | **default:** `"development"`

Defines the server mode.

## services.CoAuthoring.server.newFileTemplate

**type:** `string` | **default:** `"../../document-templates/new"`

Defines a path to the "new" file template if a file of 0 bytes was received from the link for opening.

## services.CoAuthoring.server.openProtectedFile

**type:** `boolean` | **default:** `true`

Defines if the password-protected files can be opened or not.

## services.CoAuthoring.server.port

**type:** `integer` | **default:** `8000`

Defines the server port.

## services.CoAuthoring.server.savetimeoutdelay

**type:** `integer` | **default:** `5000`

Defines the conversion start delay time (measured in milliseconds) after the edited file is closed.

## services.CoAuthoring.server.tokenRequiredParams

**type:** `boolean` | **default:** `true`

Defines if the [required token parameters](https://api.onlyoffice.com/docs/docs-api/additional-api/signature/browser/#opening-file) will be validated. This is required for security. For example, the conversion token will not be used to open a document.

## services.CoAuthoring.server.workerpercpu

**type:** `integer` | **default:** `1`

Defines a number of worker threads per CPU.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "server": {
        "port": 8000,
        "workerpercpu": 1,
        "mode": "development",
        "limits_tempfile_upload": 104857600,
        "limits_image_size": 26214400,
        "limits_image_download_timeout": {
          "connectionAndInactivity": "2m",
          "wholeCycle": "2m"
        },
        "callbackRequestTimeout": {
          "connectionAndInactivity": "10m",
          "wholeCycle": "10m"
        },
        "healthcheckfilepath": "../public/healthcheck.docx",
        "savetimeoutdelay": 5000,
        "edit_singleton": false,
        "forgottenfiles": "forgotten",
        "forgottenfilesname": "output",
        "maxRequestChanges": 20000,
        "openProtectedFile": true,
        "isAnonymousSupport": true,
        "editorDataStorage": "editorDataMemory",
        "editorStatStorage": "",
        "assemblyFormatAsOrigin": true,
        "newFileTemplate": "../../document-templates/new",
        "documentFormatsFile": "../../document-formats/onlyoffice-docs-formats.json",
        "downloadFileAllowExt": [
          "pdf",
          "xlsx"
        ],
        "tokenRequiredParams": true,
        "forceSaveUsingButtonWithoutChanges": false
      }
    }
  }
}
```

