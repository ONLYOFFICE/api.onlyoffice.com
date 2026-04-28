---
sidebar_position: 20
---

# External request

These parameters define the configuration of the external requests.

## externalRequest.directIfIn

**type:** `object`

Defines the IP addresses that are allowed for direct requests.

### externalRequest.directIfIn.allowList

**type:** `string[]` | **default:** `[]`

Defines a list of the IP addresses that are trusted for the direct requests.

### externalRequest.directIfIn.jwtToken

**type:** `boolean` | **default:** `true`

Defines if the trusted IP addresses are in the JWT or not.

## externalRequest.action

**type:** `object`

Defines the external request options.

### externalRequest.action.allow

**type:** `boolean` | **default:** `true`

Defines if the external requests are allowed or not.

### externalRequest.action.blockPrivateIP

**type:** `boolean` | **default:** `true`

Defines if the private IP address will be blocked or not.

### externalRequest.action.proxyUrl

**type:** `string` | **default:** `""`

Defines the proxy URL.

### externalRequest.action.proxyUser

**type:** `object`

Defines the proxy authentication parameters.

### externalRequest.action.proxyUser.username

**type:** `string` | **default:** `""`

Defines the proxy authentication username.

### externalRequest.action.proxyUser.password

**type:** `string` | **default:** `""`

Defines the proxy authentication password.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

### externalRequest.action.proxyHeaders

**type:** `object`

Defines the proxy headers.

## Example

```json
{
  "externalRequest": {
    "directIfIn": {
      "allowList": [],
      "jwtToken": true
    },
    "action": {
      "allow": true,
      "blockPrivateIP": true,
      "proxyUrl": "",
      "proxyUser": {
        "username": "",
        "password": ""
      },
      "proxyHeaders": {}
    }
  }
}
```

