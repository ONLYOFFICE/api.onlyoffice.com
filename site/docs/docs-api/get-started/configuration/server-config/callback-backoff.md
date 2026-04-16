---
sidebar_position: 29
---

# Callback backoff options

These parameters define the [callback backoff options](https://github.com/tim-kos/node-retry#retrytimeoutsoptions).

## services.CoAuthoring.callbackBackoffOptions.httpStatus

`Type: string`   `Default: "429,500-599"`

Defines the HTTP statuses of the callback backoff.

## services.CoAuthoring.callbackBackoffOptions.retries

`Type: integer`   `Default: 3`

Defines the maximum amount of times to retry the operation.

## services.CoAuthoring.callbackBackoffOptions.timeout

`Type: object`

Defines the callback backoff timeouts.

### services.CoAuthoring.callbackBackoffOptions.timeout.factor

`Type: integer`   `Default: 2`

Defines the exponential factor to use.

### services.CoAuthoring.callbackBackoffOptions.timeout.maxTimeout

`Type: integer`   `Default: 2147483647`

Defines the maximum number of milliseconds between two retries.

### services.CoAuthoring.callbackBackoffOptions.timeout.minTimeout

`Type: integer`   `Default: 1000`

Defines the number of milliseconds before starting the first try.

### services.CoAuthoring.callbackBackoffOptions.timeout.randomize

`Type: boolean`   `Default: false`

Defines if the timeouts are randomized by multiplying with a factor between 1 and 2 or not.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "callbackBackoffOptions": {
        "retries": 3,
        "timeout": {
          "factor": 2,
          "minTimeout": 1000,
          "maxTimeout": 2147483647,
          "randomize": false
        },
        "httpStatus": "429,500-599"
      }
    }
  }
}
```

