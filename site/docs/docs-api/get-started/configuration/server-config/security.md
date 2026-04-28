---
sidebar_position: 15
---

# Security

## AES-256-GCM algorithm

These parameters define the settings of the AES-256-GCM encryption algorithm used for password protection of the documents.

### aesEncrypt.config

**type:** `object`

Defines the AES-256-GCM algorithm configuration.

#### aesEncrypt.config.keyByteLength

**type:** `integer` | **default:** `32`

Defines the key length measured in bytes.

#### aesEncrypt.config.saltByteLength

**type:** `integer` | **default:** `64`

Defines the salt length measured in bytes.

#### aesEncrypt.config.initializationVectorByteLength

**type:** `integer` | **default:** `16`

Defines the initialization vector length measured in bytes.

#### aesEncrypt.config.iterationsByteLength

**type:** `integer` | **default:** `5`

Defines the iterations length measured in bytes.

### aesEncrypt.secret

**type:** `string` | **default:** `"verysecretstring"`

Defines a password which is used for the AES-256-GCM encryption.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

## OpenPGP protocol

These parameters define the settings of the OpenPGP protocol, which is used to encrypt the password when opening an encrypted document for editing.

### openpgpjs.config

**type:** `object`

Defines the [OpenPGP protocol configuration](https://github.com/openpgpjs/openpgpjs).

### openpgpjs.encrypt

**type:** `object`

Defines the OpenPGP encryption settings.

#### openpgpjs.encrypt.passwords

**type:** `array of strings` | **default:** `["verysecretstring"]`

Defines a password which is used for the OpenPGP encryption.

### openpgpjs.decrypt

**type:** `object`

Defines the OpenPGP decryption settings.

#### openpgpjs.decrypt.passwords

**type:** `array of strings` | **default:** `["verysecretstring"]`

Defines a password which is used for the OpenPGP decryption.

## Secret key

These parameters define the secret key configuration.

### services.CoAuthoring.secret.browser

**type:** `object`

Defines the parameters of a secret key to generate a token in the client-side browser requests to ONLYOFFICE Docs:

- **string** - the secret key, **type**: string, **example**: "secret";

- **file** - the PEM file where the secret is stored, **type**: string, **example**: "".

#### services.CoAuthoring.secret.browser.string

**type:** `string` | **default:** `"secret"`

Inline plaintext secret value. Takes priority over the file option when both are set.

#### services.CoAuthoring.secret.browser.file

**type:** `string` | **default:** `""`

Path to a file containing the secret value. Loaded once and cached. Leave empty to use the string value.

### services.CoAuthoring.secret.inbox

**type:** `object`

Defines the parameters of a secret key to generate a token in the incoming HTTP requests with the commands from the **document storage service** to the **document command service**, **document conversion service** and **document builder service**:

- **string** - the secret key, **type**: string, **example**: "secret";

- **file** - the PEM file where the secret is stored, **type**: string, **example**: "".

#### services.CoAuthoring.secret.inbox.string

**type:** `string` | **default:** `"secret"`

Inline plaintext secret value. Takes priority over the file option when both are set.

#### services.CoAuthoring.secret.inbox.file

**type:** `string` | **default:** `""`

Path to a file containing the secret value. Loaded once and cached. Leave empty to use the string value.

### services.CoAuthoring.secret.outbox

**type:** `object`

Defines the parameters of a secret key to generate a token in the outgoing HTTP requests to the `callbackUrl` address by **document editing service**:

- **string** - the secret key, **type**: string, **example**: "secret";

- **file** - the PEM file where the secret is stored, **type**: string, **example**: "".

#### services.CoAuthoring.secret.outbox.string

**type:** `string` | **default:** `"secret"`

Inline plaintext secret value. Takes priority over the file option when both are set.

#### services.CoAuthoring.secret.outbox.file

**type:** `string` | **default:** `""`

Path to a file containing the secret value. Loaded once and cached. Leave empty to use the string value.

### services.CoAuthoring.secret.session

**type:** `object`

Defines the parameters of a secret key to generate the session token:

- **string** - the secret key, **type**: string, **example**: "secret";

- **file** - the PEM file where the secret is stored, **type**: string, **example**: "".

#### services.CoAuthoring.secret.session.string

**type:** `string` | **default:** `"secret"`

Inline plaintext secret value. Takes priority over the file option when both are set.

#### services.CoAuthoring.secret.session.file

**type:** `string` | **default:** `""`

Path to a file containing the secret value. Loaded once and cached. Leave empty to use the string value.

## Example

```json
{
  "aesEncrypt": {
    "config": {
      "keyByteLength": 32,
      "saltByteLength": 64,
      "initializationVectorByteLength": 16,
      "iterationsByteLength": 5
    },
    "secret": "verysecretstring"
  },
  "openpgpjs": {
    "config": {},
    "encrypt": {
      "passwords": [
        "verysecretstring"
      ]
    },
    "decrypt": {
      "passwords": [
        "verysecretstring"
      ]
    }
  },
  "services": {
    "CoAuthoring": {
      "secret": {
        "browser": {
          "string": "secret",
          "file": ""
        },
        "inbox": {
          "string": "secret",
          "file": ""
        },
        "outbox": {
          "string": "secret",
          "file": ""
        },
        "session": {
          "string": "secret",
          "file": ""
        }
      }
    }
  }
}
```

