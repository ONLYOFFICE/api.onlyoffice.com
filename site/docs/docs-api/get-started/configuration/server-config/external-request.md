---
sidebar_position: 20
---

# External request

These parameters define the configuration of the external requests.

## externalRequest.directIfIn

`Type: object`

Defines the IP addresses that are allowed for direct requests.

### externalRequest.directIfIn.allowList

`Type: array of strings`   `Default: []`

Defines a list of the IP addresses that are trusted for the direct requests.

### externalRequest.directIfIn.jwtToken

`Type: boolean`   `Default: true`

Defines if the trusted IP addresses are in the JWT or not.

## externalRequest.action

`Type: object`

Defines the external request options.

### externalRequest.action.allow

`Type: boolean`   `Default: true`

Defines if the external requests are allowed or not.

### externalRequest.action.blockPrivateIP

`Type: boolean`   `Default: true`

Defines if the private IP address will be blocked or not.

### externalRequest.action.proxyUrl

`Type: string`   `Default: ""`

Defines the proxy URL.

### externalRequest.action.proxyUser

`Type: object`

Defines the proxy authentication parameters.

### externalRequest.action.proxyUser.username

`Type: string`   `Default: ""`

Defines the proxy authentication username.

### externalRequest.action.proxyUser.password

`Type: string`   `Default: ""`

Defines the proxy authentication password.

:::warning
Do not store sensitive values in version control. Consider using environment variables or a secrets manager.
:::

### externalRequest.action.proxyHeaders

`Type: object`

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

