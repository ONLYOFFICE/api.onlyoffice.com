---
sidebar_position: 13
---

# ActiveMQ

These parameters define the ActiveMQ message broker configuration.

## activemq.connectOptions

`Type: object`

Defines the [ActiveMQ connect options](https://github.com/amqp/rhea#connectoptions).

### activemq.connectOptions.port

`Type: integer`   `Default: 5672`

Defines a port of the server to which the ActiveMQ container is connected.

### activemq.connectOptions.host

`Type: string`   `Default: "localhost"`

Defines a host (host name or IP address) of the server to which the ActiveMQ container is connected.

### activemq.connectOptions.reconnect

`Type: boolean`   `Default: false`

Defines if the ActiveMQ module will automatically attempt to reconnect if disconnected (**true**) or not (**false**).

## activemq.queueconverttask

`Type: string`   `Default: "ds.converttask"`

Defines a queue of tasks.

## activemq.queueconvertresponse

`Type: string`   `Default: "ds.convertresponse"`

Defines a queue of responses.

## activemq.queueconvertdead

`Type: string`   `Default: "ActiveMQ.DLQ"`

Defines a dead letter queue.

## activemq.queuedelayed

`Type: string`   `Default: "ds.delayed"`

Defines the delayed queue.

## activemq.topicpubsub

`Type: string`   `Default: "ds.pubsub"`

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

