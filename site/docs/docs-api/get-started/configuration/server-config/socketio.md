---
sidebar_position: 35
---

# Socket.IO

These parameters define the Socket.IO module configuration.

## services.CoAuthoring.socketio.connection

**type:** `object`

Defines the connection properties.

### services.CoAuthoring.socketio.connection.maxHttpBufferSize

**type:** `integer` | **default:** `100000000`

Defines the maximum number of bytes a single message can be, before closing the socket.

### services.CoAuthoring.socketio.connection.path

**type:** `string` | **default:** `"/doc/"`

Defines the path that is captured on the server side.

### services.CoAuthoring.socketio.connection.pingInterval

**type:** `integer` | **default:** `25000`

Defines the interval time in milliseconds, which is used to check if the connection is still alive between the server and the client.
The server sends a ping packet to the client, and if the client does not respond with a pong within a `pingTimeout` period,
the server considers that the connection is closed.

### services.CoAuthoring.socketio.connection.pingTimeout

**type:** `integer` | **default:** `20000`

Defines the timeout period in milliseconds within which the client must respond with a pong to the server ping.
If there is no response, the server considers that the connection is closed.
The connection between the server and the client is checked every `pingInterval` milliseconds.

### services.CoAuthoring.socketio.connection.serveClient

**type:** `boolean` | **default:** `false`

Defines if the client files will be served or not.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "socketio": {
        "connection": {
          "path": "/doc/",
          "serveClient": false,
          "pingTimeout": 20000,
          "pingInterval": 25000,
          "maxHttpBufferSize": 100000000
        }
      }
    }
  }
}
```

