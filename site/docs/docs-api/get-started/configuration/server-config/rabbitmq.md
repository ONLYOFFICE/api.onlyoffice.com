---
sidebar_position: 12
---

# RabbitMQ

These parameters define the RabbitMQ message broker configuration.

## rabbitmq.url

`Type: string`   `Default: "amqp://localhost:5672"`

Defines the RabbitMQ URL.

:::note
Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different.
:::

## rabbitmq.socketOptions

`Type: object`

Defines the [RabbitMQ socket options](https://amqp-node.github.io/amqplib/channel_api.html#connect) that will be passed to the socket library (`net` or `tls`). These options must be fields set on the object supplied. The socket options can be used for the SSL connection and can contain the following fields:

- **cert** - defines a certificate to present to the server (in PEM or pkcs12 format), **type**: string, **example**: "";

- **key** - defines the private key for the certificate (in PEM or pkcs12 format), **type**: string, **example**: "";

- **passphrase** - defines a passphrase for the private key, **type**: string, **example**: "MySecretPassword";

- **ca** - defines a list of the CA certificates in PEM format that we will trust, since we are using a self-signed certificate, **type**: array, **example**: [];

- **noDelay** - defines if TCP_NODELAY (Nagle&#x27;s algorithm) is set on the underlying socket or not, **type**: boolean, **example**: true.

## rabbitmq.exchangepubsub

`Type: object`

Defines the Publisher Subscriber exchange server.

### rabbitmq.exchangepubsub.name

`Type: string`   `Default: "ds.pubsub"`

Defines a name of the Publisher Subscriber server.

### rabbitmq.exchangepubsub.options

`Type: object`

Defines the [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the Publisher Subscriber server.

### rabbitmq.exchangepubsub.options.durable

`Type: boolean`   `Default: true`

Defines whether the queue will survive broker restarts.

## rabbitmq.queuepubsub

`Type: object`

Defines the Publisher Subscriber queue.

### rabbitmq.queuepubsub.name

`Type: string`   `Default: ""`

Defines a name of the Publisher Subscriber queue.

### rabbitmq.queuepubsub.options

`Type: object`

Defines the [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the Publisher Subscriber queue.

### rabbitmq.queuepubsub.options.arguments

`Type: object`

Defines the additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL.

### rabbitmq.queuepubsub.options.arguments.x-queue-type

`Type: string`   `Default: "classic"`

Defines a value of the *x-queue-type* header which specifies the queue type. Only classic queues can be used.

### rabbitmq.queuepubsub.options.autoDelete

`Type: boolean`   `Default: true`

Defines whether the queue will be deleted when the number of consumers drops to zero.

### rabbitmq.queuepubsub.options.exclusive

`Type: boolean`   `Default: true`

Defines whether the queue will be scoped to the connection.

## rabbitmq.queueconverttask

`Type: object`

Defines a queue of tasks.

### rabbitmq.queueconverttask.name

`Type: string`   `Default: "ds.converttask6"`

Defines a name of the queue of tasks.

### rabbitmq.queueconverttask.options

`Type: object`

Defines the [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the queue of tasks.

### rabbitmq.queueconverttask.options.arguments

`Type: object`

Defines the additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL.

### rabbitmq.queueconverttask.options.arguments.x-queue-type

`Type: string`   `Default: "classic"`

Defines a value of the *x-queue-type* header which specifies the queue type. This setting can be used to set the *quorum* queues.

### rabbitmq.queueconverttask.options.durable

`Type: boolean`   `Default: true`

Defines whether the queue will survive broker restarts.

### rabbitmq.queueconverttask.options.maxPriority

`Type: integer`   `Default: 6`

Defines a queue [priority](https://www.rabbitmq.com/docs/priority).

## rabbitmq.queueconvertresponse

`Type: object`

Defines a queue of responses.

### rabbitmq.queueconvertresponse.name

`Type: string`   `Default: "ds.convertresponse"`

Defines a name of the queue of responses.

### rabbitmq.queueconvertresponse.options

`Type: object`

Defines the [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the queue of responses.

### rabbitmq.queueconvertresponse.options.arguments

`Type: object`

Defines the additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL.

### rabbitmq.queueconvertresponse.options.arguments.x-queue-type

`Type: string`   `Default: "classic"`

Defines a value of the *x-queue-type* header which specifies the queue type. This setting can be used to set the *quorum* queues.

### rabbitmq.queueconvertresponse.options.durable

`Type: boolean`   `Default: true`

Defines whether the queue will survive broker restarts.

## rabbitmq.exchangeconvertdead

`Type: object`

Defines a dead letter exchange.

### rabbitmq.exchangeconvertdead.name

`Type: string`   `Default: "ds.exchangeconvertdead"`

Defines a name of the dead letter exchange.

### rabbitmq.exchangeconvertdead.options

`Type: object`

Defines the [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the dead letter exchange.

### rabbitmq.exchangeconvertdead.options.durable

`Type: boolean`   `Default: true`

Defines whether the queue will survive broker restarts.

## rabbitmq.queueconvertdead

`Type: object`

Defines a dead letter queue.

### rabbitmq.queueconvertdead.name

`Type: string`   `Default: "ds.convertdead"`

Defines a name of the dead letter queue.

### rabbitmq.queueconvertdead.options

`Type: object`

Defines the [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the dead letter queue.

### rabbitmq.queueconvertdead.options.arguments

`Type: object`

Defines the additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL.

### rabbitmq.queueconvertdead.options.arguments.x-queue-type

`Type: string`   `Default: "classic"`

Defines a value of the *x-queue-type* header which specifies the queue type. This setting can be used to set the *quorum* queues.

### rabbitmq.queueconvertdead.options.durable

`Type: boolean`   `Default: true`

Defines whether the queue will survive broker restarts.

## rabbitmq.queuedelayed

`Type: object`

Defines the delayed queue.

### rabbitmq.queuedelayed.name

`Type: string`   `Default: "ds.delayed"`

Defines a name of the delayed queue.

### rabbitmq.queuedelayed.options

`Type: object`

Defines the [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the delayed queue.

### rabbitmq.queuedelayed.options.arguments

`Type: object`

Defines the additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL.

### rabbitmq.queuedelayed.options.arguments.x-queue-type

`Type: string`   `Default: "classic"`

Defines a value of the *x-queue-type* header which specifies the queue type. This setting can be used to set the *quorum* queues.

### rabbitmq.queuedelayed.options.durable

`Type: boolean`   `Default: true`

Defines whether the queue will survive broker restarts.

## Example

```json
{
  "rabbitmq": {
    "url": "amqp://localhost:5672",
    "socketOptions": {},
    "exchangepubsub": {
      "name": "ds.pubsub",
      "options": {
        "durable": true
      }
    },
    "queuepubsub": {
      "name": "",
      "options": {
        "autoDelete": true,
        "exclusive": true,
        "arguments": {
          "x-queue-type": "classic"
        }
      }
    },
    "queueconverttask": {
      "name": "ds.converttask6",
      "options": {
        "durable": true,
        "maxPriority": 6,
        "arguments": {
          "x-queue-type": "classic"
        }
      }
    },
    "queueconvertresponse": {
      "name": "ds.convertresponse",
      "options": {
        "durable": true,
        "arguments": {
          "x-queue-type": "classic"
        }
      }
    },
    "exchangeconvertdead": {
      "name": "ds.exchangeconvertdead",
      "options": {
        "durable": true
      }
    },
    "queueconvertdead": {
      "name": "ds.convertdead",
      "options": {
        "durable": true,
        "arguments": {
          "x-queue-type": "classic"
        }
      }
    },
    "queuedelayed": {
      "name": "ds.delayed",
      "options": {
        "durable": true,
        "arguments": {
          "x-queue-type": "classic"
        }
      }
    }
  }
}
```

