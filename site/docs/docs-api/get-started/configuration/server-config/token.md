---
sidebar_position: 26
---

# Token

These parameters define the token configuration.

## services.CoAuthoring.token.browser

**type:** `object`

Defines the browser token configuration.

### services.CoAuthoring.token.browser.secretFromInbox

**type:** `boolean` | **default:** `true`

Defines if the browser token is equal to the token from the incoming requests (`true`) or not (`false`).

## services.CoAuthoring.token.enable

**type:** `object`

Defines if the tokens are enabled or not.

### services.CoAuthoring.token.enable.browser

**type:** `boolean` | **default:** `false`

Defines if a token in the client-side browser requests is enabled or not.

### services.CoAuthoring.token.enable.request

**type:** `object`

Defines if the tokens in the HTTP requests are enabled or not.

### services.CoAuthoring.token.enable.request.inbox

**type:** `boolean` | **default:** `false`

Defines if a token in the incoming HTTP requests is enabled or not.

### services.CoAuthoring.token.enable.request.outbox

**type:** `boolean` | **default:** `false`

Defines if a token in the outgoing HTTP requests is enabled or not.

## services.CoAuthoring.token.inbox

**type:** `object`

Defines the configuration of a token from the incoming requests.

### services.CoAuthoring.token.inbox.header

**type:** `string` | **default:** `"Authorization"`

Defines the HTTP header that will be used to send the incoming request token.

### services.CoAuthoring.token.inbox.inBody

**type:** `boolean` | **default:** `false`

Defines if a token is enabled in the incoming request body or not.

### services.CoAuthoring.token.inbox.prefix

**type:** `string` | **default:** `"Bearer "`

Defines a prefix in the HTTP header that will be used to send the incoming request token.

## services.CoAuthoring.token.outbox

**type:** `object`

Defines the configuration of a token from the outgoing requests.

### services.CoAuthoring.token.outbox.algorithm

**type:** `string` | **default:** `"HS256"`

Defines an algorithm which is used to sign the outgoing request token.

### services.CoAuthoring.token.outbox.expires

**type:** `string` | **default:** `"5m"`

Defines a period when the outgoing request token expires.

### services.CoAuthoring.token.outbox.header

**type:** `string` | **default:** `"Authorization"`

Defines the HTTP header that will be used to send the outgoing request token.

### services.CoAuthoring.token.outbox.inBody

**type:** `boolean` | **default:** `false`

Defines if a token is enabled in the outgoing request body or not.

### services.CoAuthoring.token.outbox.prefix

**type:** `string` | **default:** `"Bearer "`

Defines a prefix in the HTTP header that will be used to send the outgoing request token.

### services.CoAuthoring.token.outbox.urlExclusionRegex

**type:** `string` | **default:** `""`

Defines the regular expression that specifies URLs from which the authorization should be excluded. The empty string means that this option is disabled.

## services.CoAuthoring.token.session

**type:** `object`

Defines the session token configuration.

### services.CoAuthoring.token.session.algorithm

**type:** `string` | **default:** `"HS256"`

Defines an algorithm which is used to sign the session token.

### services.CoAuthoring.token.session.expires

**type:** `string` | **default:** `"30d"`

Defines a period when the session token expires.

## services.CoAuthoring.token.verifyOptions

**type:** `object`

Defines the token verifying options.

### services.CoAuthoring.token.verifyOptions.clockTolerance

**type:** `integer` | **default:** `60`

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

