---
sidebar_position: 26
---

# Token

These parameters define the token configuration.

## services.CoAuthoring.token.browser

`Type: object`

Defines the browser token configuration.

### services.CoAuthoring.token.browser.secretFromInbox

`Type: boolean`   `Default: true`

Defines if the browser token is equal to the token from the incoming requests (`true`) or not (`false`).

## services.CoAuthoring.token.enable

`Type: object`

Defines if the tokens are enabled or not.

### services.CoAuthoring.token.enable.browser

`Type: boolean`   `Default: false`

Defines if a token in the client-side browser requests is enabled or not.

### services.CoAuthoring.token.enable.request

`Type: object`

Defines if the tokens in the HTTP requests are enabled or not.

### services.CoAuthoring.token.enable.request.inbox

`Type: boolean`   `Default: false`

Defines if a token in the incoming HTTP requests is enabled or not.

### services.CoAuthoring.token.enable.request.outbox

`Type: boolean`   `Default: false`

Defines if a token in the outgoing HTTP requests is enabled or not.

## services.CoAuthoring.token.inbox

`Type: object`

Defines the configuration of a token from the incoming requests.

### services.CoAuthoring.token.inbox.header

`Type: string`   `Default: "Authorization"`

Defines the HTTP header that will be used to send the incoming request token.

### services.CoAuthoring.token.inbox.inBody

`Type: boolean`   `Default: false`

Defines if a token is enabled in the incoming request body or not.

### services.CoAuthoring.token.inbox.prefix

`Type: string`   `Default: "Bearer "`

Defines a prefix in the HTTP header that will be used to send the incoming request token.

## services.CoAuthoring.token.outbox

`Type: object`

Defines the configuration of a token from the outgoing requests.

### services.CoAuthoring.token.outbox.algorithm

`Type: string`   `Default: "HS256"`

Defines an algorithm which is used to sign the outgoing request token.

### services.CoAuthoring.token.outbox.expires

`Type: string`   `Default: "5m"`

Defines a period when the outgoing request token expires.

### services.CoAuthoring.token.outbox.header

`Type: string`   `Default: "Authorization"`

Defines the HTTP header that will be used to send the outgoing request token.

### services.CoAuthoring.token.outbox.inBody

`Type: boolean`   `Default: false`

Defines if a token is enabled in the outgoing request body or not.

### services.CoAuthoring.token.outbox.prefix

`Type: string`   `Default: "Bearer "`

Defines a prefix in the HTTP header that will be used to send the outgoing request token.

### services.CoAuthoring.token.outbox.urlExclusionRegex

`Type: string`   `Default: ""`

Defines the regular expression that specifies URLs from which the authorization should be excluded. The empty string means that this option is disabled.

## services.CoAuthoring.token.session

`Type: object`

Defines the session token configuration.

### services.CoAuthoring.token.session.algorithm

`Type: string`   `Default: "HS256"`

Defines an algorithm which is used to sign the session token.

### services.CoAuthoring.token.session.expires

`Type: string`   `Default: "30d"`

Defines a period when the session token expires.

## services.CoAuthoring.token.verifyOptions

`Type: object`

Defines the token verifying options.

### services.CoAuthoring.token.verifyOptions.clockTolerance

`Type: integer`   `Default: 60`

Defines a number of seconds which is acceptable when dealing with the clock differences among different servers.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "token": {
        "enable": {
          "browser": false,
          "request": {
            "inbox": false,
            "outbox": false
          }
        },
        "browser": {
          "secretFromInbox": true
        },
        "inbox": {
          "header": "Authorization",
          "prefix": "Bearer ",
          "inBody": false
        },
        "outbox": {
          "header": "Authorization",
          "prefix": "Bearer ",
          "algorithm": "HS256",
          "expires": "5m",
          "inBody": false,
          "urlExclusionRegex": ""
        },
        "session": {
          "algorithm": "HS256",
          "expires": "30d"
        },
        "verifyOptions": {
          "clockTolerance": 60
        }
      }
    }
  }
}
```

