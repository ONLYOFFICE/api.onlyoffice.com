---
sidebar_position: 25
---

# Redis

These parameters define the Redis configuration.

## services.CoAuthoring.redis.host

**type:** `string` | **default:** `"127.0.0.1"`

Defines the Redis server host (host name or IP address).

## services.CoAuthoring.redis.iooptions

**type:** `object`

Defines the parameters (username, password, modules etc.) that can be passed directly to the [ioredis RedisOptions](https://github.com/redis/ioredis/blob/main/lib/redis/RedisOptions.ts) library.

### services.CoAuthoring.redis.iooptions.lazyConnect

**type:** `boolean` | **default:** `true`

Defines if the connection to the server will be delayed until the first command is sent or *redis.connect()* is called explicitly.

## services.CoAuthoring.redis.iooptionsClusterNodes

**type:** `array of strings` | **default:** `[]`

Defines a list of nodes of the cluster you want to connect to that can be passed directly to the [ioredis cluster](https://github.com/redis/ioredis#cluster) library
to connect to the redis cluster. This setting has the priority over the *iooptions* parameter for connecting to the single redis.

## services.CoAuthoring.redis.iooptionsClusterOptions

**type:** `object`

Defines the parameters (clusterRetryStrategy, dnsLookup, scaleReads etc.) that can be passed directly to the [ioredis cluster](https://github.com/redis/ioredis#cluster) library
to connect to the redis cluster. This setting has the priority over the *iooptions* parameter for connecting to the single redis.

### services.CoAuthoring.redis.iooptionsClusterOptions.lazyConnect

**type:** `boolean` | **default:** `true`

Defines if the connection to the server will be delayed until the first command is sent or *redis.connect()* is called explicitly.

## services.CoAuthoring.redis.name

**type:** `string` | **default:** `"redis"`

Defines the database name, `"redis"` or `"ioredis"`.

## services.CoAuthoring.redis.options

**type:** `object`

Defines the parameters (username, password, modules etc.) that can be passed directly to the [node-redis createClient](https://github.com/redis/node-redis/blob/master/docs/client-configuration.md) library.

## services.CoAuthoring.redis.optionsCluster

**type:** `object`

Defines the parameters (rootNodes, defaults, modules etc.) that can be passed directly to the [node-redis clustering](https://github.com/redis/node-redis/blob/master/docs/clustering.md)
library to connect to the redis cluster. This setting has the priority over the *options* parameter for connecting to the single redis.

## services.CoAuthoring.redis.port

**type:** `integer` | **default:** `6379`

Defines the Redis server port.

## services.CoAuthoring.redis.prefix

**type:** `string` | **default:** `"ds:"`

Defines the name prefix for all the used structures in Redis.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "redis": {
        "name": "redis",
        "prefix": "ds:",
        "host": "127.0.0.1",
        "port": 6379,
        "options": {},
        "optionsCluster": {},
        "iooptions": {
          "lazyConnect": true
        },
        "iooptionsClusterNodes": [],
        "iooptionsClusterOptions": {
          "lazyConnect": true
        }
      }
    }
  }
}
```

