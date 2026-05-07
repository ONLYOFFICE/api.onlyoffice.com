---
sidebar_position: 7
---

# Queues

These parameters define a queue of messages received from the message-broker.

## queue.type

**type:** `string` | **default:** `"rabbitmq"`

Defines the message broker type.

## queue.visibilityTimeout

**type:** `integer` | **default:** `300`

Defines the conversion timeout (measured in seconds).

## queue.retentionPeriod

**type:** `integer` | **default:** `900`

Defines the [TTL](https://www.rabbitmq.com/ttl.html) (time to live) of all the messages in a queue (measured in seconds).

## Example

```json
{
  "queue": {
    "type": "rabbitmq",
    "visibilityTimeout": 300,
    "retentionPeriod": 900
  }
}
```

