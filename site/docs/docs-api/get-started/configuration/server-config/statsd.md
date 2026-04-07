---
sidebar_position: 3
---

# StatsD

These parameters define the StatsD server properties, specifying an aggregator of metrics.

## statsd.useMetrics

`Type: boolean`   `Default: false`

Defines if the StatsD metrics are enabled for **ONLYOFFICE Docs** or not.

## statsd.host

`Type: string`   `Default: "localhost"`

Defines the StatsD server host (host name or IP address).

## statsd.port

`Type: string`   `Default: "8125"`

Defines the StatsD server port.

## statsd.prefix

`Type: string`   `Default: "ds."`

Defines a string that will be added to the beginning of all the stats automatically. It helps to distinguish different applications using the same StatsD server.

## Example

```json
{
  "statsd": {
    "useMetrics": false,
    "host": "localhost",
    "port": "8125",
    "prefix": "ds."
  }
}
```

