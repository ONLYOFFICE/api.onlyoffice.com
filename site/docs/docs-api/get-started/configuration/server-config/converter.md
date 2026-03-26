---
sidebar_position: 40
---

# Converter

These parameters define the file converter configuration.

## FileConverter.converter

`Type: object`

Defines the converter properties.

### FileConverter.converter.maxDownloadBytes

`Type: integer`   `Default: 104857600`

Defines a maximum size of the file being requested (measured in bytes).

### FileConverter.converter.signingKeyStorePath

`Type: string`   `Default: ""`

Legacy. Path to signing certificate file. Use signing.keyStorePath instead.

### FileConverter.converter.signing

`Type: object`

Signing settings. keyStorePath takes priority over legacy signingKeyStorePath. Cloud provider detected by awsKms.keyId.

### FileConverter.converter.signing.keyStorePath

`Type: string`   `Default: ""`

Path to signing certificate. P12/PFX for local x2t, PEM chain for cloud signing.

### FileConverter.converter.signing.meta

`Type: object`

Signature metadata fields embedded in the PDF digital signature.

### FileConverter.converter.signing.meta.reason

`Type: string`   `Default: ""`

Purpose of signing (e.g. Approved).

### FileConverter.converter.signing.meta.name

`Type: string`   `Default: ""`

Signer name.

### FileConverter.converter.signing.meta.location

`Type: string`   `Default: ""`

Signing location.

### FileConverter.converter.signing.meta.contactInfo

`Type: string`   `Default: ""`

Contact details (URL or email).

### FileConverter.converter.signing.awsKms

`Type: object`

AWS KMS (or compatible) settings. Set keyId to enable.

### FileConverter.converter.signing.awsKms.endpoint

`Type: string`   `Default: ""`

KMS endpoint URL. Allows alternative KMS-compatible services.

### FileConverter.converter.signing.awsKms.keyId

`Type: string`   `Default: ""`

KMS key ID or ARN. If set, AWS KMS signing is active.

### FileConverter.converter.signing.awsKms.accessKeyId

`Type: string`   `Default: ""`

AWS access key. Empty = default credential chain.

### FileConverter.converter.signing.awsKms.secretAccessKey

`Type: string`   `Default: ""`

AWS secret access key.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

### FileConverter.converter.signing.csc

`Type: object`

CSC API v2 (ETSI TS 119 432) settings. Set baseUrl to enable.

### FileConverter.converter.signing.csc.baseUrl

`Type: string`   `Default: ""`

CSC API base URL. If set, CSC signing is active.

### FileConverter.converter.signing.csc.tokenUrl

`Type: string`   `Default: ""`

OAuth2 token endpoint.

### FileConverter.converter.signing.csc.clientId

`Type: string`   `Default: ""`

OAuth2 client ID.

### FileConverter.converter.signing.csc.clientSecret

`Type: string`   `Default: ""`

OAuth2 client secret.

### FileConverter.converter.signing.csc.grantType

`Type: string`   `Default: ""`

Optional. OAuth2 grant type: '' (auto-detect), 'password', or 'client_credentials'. Empty selects based on presence of username/password.

### FileConverter.converter.signing.csc.clientAuth

`Type: string`   `Default: ""`

Optional. How client authenticates to token endpoint: '' (body), 'basic', 'body', or 'both'.

### FileConverter.converter.signing.csc.tokenBodyFormat

`Type: string`   `Default: ""`

Optional. Token request body format: 'form' (default, RFC 6749) or 'json'.

### FileConverter.converter.signing.csc.username

`Type: string`   `Default: ""`

Optional. Username for password grant type.

### FileConverter.converter.signing.csc.password

`Type: string`   `Default: ""`

Optional. Password for password grant type.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

### FileConverter.converter.signing.csc.credentialId

`Type: string`   `Default: ""`

Optional. Signing credential ID. Auto-discovered via credentials/list when empty.

### FileConverter.converter.signing.csc.clientData

`Type: string`   `Default: ""`

Optional. Provider-specific clientData for credentials/list (e.g. eSeal credential type).

### FileConverter.converter.signing.csc.scope

`Type: string`   `Default: "service"`

Optional. OAuth2 scope (e.g. 'service').

### FileConverter.converter.signing.csc.audience

`Type: string`   `Default: ""`

Optional. OAuth2 audience parameter.

### FileConverter.converter.spawnOptions

`Type: object`

Defines the parameters that can be passed directly to the [node.js child_process.spawn](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options) library (only for running x2t).

### FileConverter.converter.spawnOptions.env.SIGNING_KEYSTORE_PASSPHRASE

`Type: string`

Passphrase for the PKCS#12 keystore file

### FileConverter.converter.inputLimits

`Type: array of objects`

Defines limits for input files.

### FileConverter.converter.inputLimits.type

`Type: string`

Defines the OOXML file types for which the limits are specified (text documents/spreadsheets/presentations). This does not include other objects, like images.

### FileConverter.converter.inputLimits.zip

`Type: object`

Defines the zip archive properties.

### FileConverter.converter.inputLimits.zip.template

`Type: string`   `Default: "*.xml"`

Defines the name template for files which sizes are counted.

### FileConverter.converter.inputLimits.zip.uncompressed

`Type: string`   `Default: "50MB"/"300MB"/"50MB"`

Defines the total uncompressed file size for text documents/spreadsheets/presentations.

### FileConverter.converter.args

`Type: string`   `Default: ""`

Defines the additional parameters for running x2t.

### FileConverter.converter.docbuilderPath

`Type: string`   `Default: "null"`

Defines a path to the Document Builder application.

### FileConverter.converter.downloadAttemptDelay

`Type: integer`   `Default: 1000`

Defines the attempt delay to download the converted file.

### FileConverter.converter.downloadAttemptMaxCount

`Type: integer`   `Default: 3`

Defines a maximum number of attempts to download the converted file.

### FileConverter.converter.downloadTimeout

`Type: object`

Defines the timeout properties for downloading the converted file.

### FileConverter.converter.downloadTimeout.connectionAndInactivity

`Type: string`   `Default: "2m"`

Defines a period which specifies two timeouts:

- **read timeout** - time to wait for a server to send response headers (and start the response body) before aborting the request;

- **connection timeout** - sets the socket to timeout after timeout of inactivity. Note that increasing the timeout beyond the OS-wide TCP connection timeout will not have any effect.

This parameter is sent to the **npm** module.

### FileConverter.converter.downloadTimeout.wholeCycle

`Type: string`   `Default: "2m"`

Defines the whole request cycle timeout.

### FileConverter.converter.errorfiles

`Type: string`   `Default: ""`

Defines a path to the error files.

### FileConverter.converter.fontDir

`Type: string`   `Default: "null"`

Defines a path to the folder with fonts.

### FileConverter.converter.maxprocesscount

`Type: integer`   `Default: 1`

Defines a maximum number of conversion processes which can be active at one time.

### FileConverter.converter.maxRedeliveredCount

`Type: integer`   `Default: 2`

Defines a maximum number of message re-deliveries.

### FileConverter.converter.presentationThemesDir

`Type: string`   `Default: "null"`

Defines a path to the folder with the presentation themes.

### FileConverter.converter.streamWriterBufferSize

`Type: integer`   `Default: 8388608`

Defines the StreamWriter buffer size.

### FileConverter.converter.x2tPath

`Type: string`   `Default: "null"`

Defines a path to the x2t file converter.

## Example

```json
{
  "FileConverter": {
    "converter": {
      "maxDownloadBytes": 104857600,
      "downloadTimeout": {
        "connectionAndInactivity": "2m",
        "wholeCycle": "2m"
      },
      "downloadAttemptMaxCount": 3,
      "downloadAttemptDelay": 1000,
      "maxprocesscount": 1,
      "fontDir": "null",
      "presentationThemesDir": "null",
      "x2tPath": "null",
      "docbuilderPath": "null",
      "signingKeyStorePath": "",
      "signing": {
        "keyStorePath": "",
        "meta": {
          "reason": "",
          "name": "",
          "location": "",
          "contactInfo": ""
        },
        "awsKms": {
          "endpoint": "",
          "keyId": "",
          "accessKeyId": "",
          "secretAccessKey": ""
        },
        "csc": {
          "baseUrl": "",
          "tokenUrl": "",
          "clientId": "",
          "clientSecret": "",
          "grantType": "",
          "clientAuth": "",
          "tokenBodyFormat": "",
          "username": "",
          "password": "",
          "credentialId": "",
          "clientData": "",
          "scope": "service",
          "audience": ""
        }
      },
      "args": "",
      "spawnOptions": {},
      "errorfiles": "",
      "streamWriterBufferSize": 8388608,
      "maxRedeliveredCount": 2,
      "inputLimits": [
        {
          "type": "docx;dotx;docm;dotm",
          "zip": {
            "uncompressed": "50MB",
            "template": "*.xml"
          }
        },
        {
          "type": "xlsx;xltx;xlsm;xltm",
          "zip": {
            "uncompressed": "300MB",
            "template": "*.xml"
          }
        },
        {
          "type": "pptx;ppsx;potx;pptm;ppsm;potm",
          "zip": {
            "uncompressed": "50MB",
            "template": "*.xml"
          }
        },
        {
          "type": "vsdx;vstx;vssx;vsdm;vstm;vssm",
          "zip": {
            "uncompressed": "50MB",
            "template": "*.xml"
          }
        }
      ]
    }
  }
}
```

