---
sidebar_position: 13
---

# ActiveMQ

These parameters define the ActiveMQ message broker configuration.

## activemq.connectOptions

**type:** `object`

Defines the [ActiveMQ connect options](https://github.com/amqp/rhea#connectoptions).

### activemq.connectOptions.port

**type:** `integer` | **default:** `5672`

Defines a port of the server to which the ActiveMQ container is connected.

### activemq.connectOptions.host

**type:** `string` | **default:** `"localhost"`

Defines a host (host name or IP address) of the server to which the ActiveMQ container is connected.

### activemq.connectOptions.reconnect

**type:** `boolean` | **default:** `false`

Defines if the ActiveMQ module will automatically attempt to reconnect if disconnected (**true**) or not (**false**).

## activemq.queueconverttask

**type:** `string` | **default:** `"ds.converttask"`

Defines a queue of tasks.

## activemq.queueconvertresponse

**type:** `string` | **default:** `"ds.convertresponse"`

Defines a queue of responses.

## activemq.queueconvertdead

**type:** `string` | **default:** `"ActiveMQ.DLQ"`

Defines a dead letter queue.

## activemq.queuedelayed

**type:** `string` | **default:** `"ds.delayed"`

Defines the delayed queue.

## activemq.topicpubsub

**type:** `string` | **default:** `"ds.pubsub"`

Defines the Publisher Subscriber topic.

## Example

```json
{
  "activemq": {
    "connectOptions": {
      "port": 5672,
      "host": "localhost",
      "reconnect": false
    },
    "queueconverttask": "ds.converttask",
    "queueconvertresponse": "ds.convertresponse",
    "queueconvertdead": "ActiveMQ.DLQ",
    "queuedelayed": "ds.delayed",
    "topicpubsub": "ds.pubsub"
  }
}
```

