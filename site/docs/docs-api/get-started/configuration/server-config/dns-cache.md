---
sidebar_position: 14
---

# DNS cache

These parameters define the configuration of the DNS cache which is used for the IP-filter.

## dnscache.enable

**type:** `boolean` | **default:** `true`

Defines if the DNS cache is enabled or not.

## dnscache.ttl

**type:** `integer` | **default:** `300`

Defines the time when the DNS records expire (measured in seconds).

## dnscache.cachesize

**type:** `integer` | **default:** `1000`

Defines the DNS cache size.

## Example

```json
{
  "dnscache": {
    "enable": true,
    "ttl": 300,
    "cachesize": 1000
  }
}
```

