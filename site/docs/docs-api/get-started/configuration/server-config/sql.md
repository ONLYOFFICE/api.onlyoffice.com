---
sidebar_position: 24
---

# SQL

These parameters define the database configuration.

## services.CoAuthoring.sql.type

`Type: string`   `Default: "postgres"`

Defines the database type (`mysql`, `mariadb`, `mssql`, `postgres`, `dameng`, `oracle`).

## services.CoAuthoring.sql.dbHost

`Type: string`   `Default: "localhost"`

Defines the database server host (host name or IP address).

## services.CoAuthoring.sql.dbPort

`Type: integer`   `Default: 5432`

Defines the database server port.

## services.CoAuthoring.sql.dbName

`Type: string`   `Default: "onlyoffice"`

Defines a name of a database to be created on the image startup.

## services.CoAuthoring.sql.charset

`Type: string`   `Default: "utf8"`

Defines the database charset.

## services.CoAuthoring.sql.connectionlimit

`Type: integer`   `Default: 10`

Defines the maximum number of the simultaneous user connections to the database server.

## services.CoAuthoring.sql.damengExtraOptions

`Type: object`

Defines the Dameng database parameters.

### services.CoAuthoring.sql.damengExtraOptions.columnNameCase

`Type: string`   `Default: "lower"`

Defines the case of column names.

### services.CoAuthoring.sql.damengExtraOptions.columnNameUpperCase

`Type: boolean`   `Default: false`

Defines if the column names are uppercase or not.

### services.CoAuthoring.sql.damengExtraOptions.connectTimeout

`Type: integer`   `Default: 60000`

Defines a number of milliseconds to wait for a connection.

### services.CoAuthoring.sql.damengExtraOptions.localTimezone

`Type: integer`   `Default: 0`

Defines the local timezone.

### services.CoAuthoring.sql.damengExtraOptions.loginEncrypt

`Type: boolean`   `Default: false`

Defines if the login encryption is enabled or not.

### services.CoAuthoring.sql.damengExtraOptions.poolTimeout

`Type: integer`   `Default: 60`

Defines a number of seconds after which the pool terminates idle connections (unused in the pool).

### services.CoAuthoring.sql.damengExtraOptions.queueTimeout

`Type: integer`   `Default: 60000`

Defines a number of milliseconds when messages are retained in the queue before they are discarded.

### services.CoAuthoring.sql.damengExtraOptions.socketTimeout

`Type: integer`   `Default: 60000`

Defines a number of milliseconds when a connection request made by a client or a server doesn&#x27;t receive a response from the other end.

## services.CoAuthoring.sql.dbPass

`Type: string`   `Default: "onlyoffice"`

Defines a password set to the database account.

## services.CoAuthoring.sql.dbUser

`Type: string`   `Default: "onlyoffice"`

Defines a new username with superuser permissions for the database account.

## services.CoAuthoring.sql.max_allowed_packet

`Type: integer`   `Default: 1048575`

Defines the maximum size of data that can be sent in one request.

## services.CoAuthoring.sql.msSqlExtraOptions

`Type: object`

Defines the MS SQL database parameters.

### services.CoAuthoring.sql.msSqlExtraOptions.options

`Type: object`

Defines the MS SQL database options.

### services.CoAuthoring.sql.msSqlExtraOptions.options.encrypt

`Type: boolean`   `Default: false`

Defines whether the data will be encrypted before sending it over the network.

### services.CoAuthoring.sql.msSqlExtraOptions.options.trustServerCertificate

`Type: boolean`   `Default: true`

Defines whether an encryption occurs when there is no verified server certificate.

### services.CoAuthoring.sql.msSqlExtraOptions.pool

`Type: object`

Defines the parameters of the connection pool.

### services.CoAuthoring.sql.msSqlExtraOptions.pool.idleTimeoutMillis

`Type: integer`   `Default: 30000`

Defines a number of milliseconds a client must remain idle in the pool and not be checked out before it is disconnected from the backend and discarded. Set to 0 to disable automatic disconnection of idle clients.

## services.CoAuthoring.sql.mysqlExtraOptions

`Type: object`

Defines the connection parameters of the MySQL database (including SSL settings) that can be passed directly to the [node-mysql2](https://sidorares.github.io/node-mysql2/docs/examples/connections/create-connection#connectionoptions) module.

### services.CoAuthoring.sql.mysqlExtraOptions.connectTimeout

`Type: integer`   `Default: 60000`

Defines a number of milliseconds to wait for a connection.

### services.CoAuthoring.sql.mysqlExtraOptions.queryTimeout

`Type: integer`   `Default: 60000`

Defines a number of milliseconds before a query call times out.

## services.CoAuthoring.sql.oracleExtraOptions

`Type: object`

Defines the Oracle database parameters.

### services.CoAuthoring.sql.oracleExtraOptions.connectTimeout

`Type: integer`   `Default: 60`

Defines a number of seconds to wait for a connection.

### services.CoAuthoring.sql.oracleExtraOptions.thin

`Type: boolean`   `Default: true`

Defines connection to Oracle in the Thick Mode using Oracle Instant Client in a cluster.

## services.CoAuthoring.sql.pgPoolExtraOptions

`Type: object`

Defines the parameters that can be passed directly to the [node-postgres pool](https://github.com/brianc/node-postgres-docs/blob/master/content/api/1-pool.mdx#new-poolconfig-object) library.

### services.CoAuthoring.sql.pgPoolExtraOptions.connectionTimeoutMillis

`Type: integer`   `Default: 60000`

Defines a number of milliseconds to wait for a connection.

### services.CoAuthoring.sql.pgPoolExtraOptions.idleTimeoutMillis

`Type: integer`   `Default: 30000`

Defines a number of milliseconds a client must remain idle in the pool and not be checked out before it is disconnected from the backend and discarded. Set to 0 to disable automatic disconnection of idle clients.

### services.CoAuthoring.sql.pgPoolExtraOptions.maxLifetimeSeconds

`Type: integer`   `Default: 60000`

Defines a number of seconds that represents the maximum lifetime.

### services.CoAuthoring.sql.pgPoolExtraOptions.query_timeout

`Type: integer`   `Default: 60000`

Defines a number of milliseconds before a query call times out.

### services.CoAuthoring.sql.pgPoolExtraOptions.statement_timeout

`Type: integer`   `Default: 60000`

Defines a number of milliseconds before the query statement times out.

## services.CoAuthoring.sql.tableChanges

`Type: string`   `Default: "doc_changes"`

Defines the database table name where all the document changes are stored.

## services.CoAuthoring.sql.tableResult

`Type: string`   `Default: "task_result"`

Defines the database table name where the query result is stored.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "sql": {
        "type": "postgres",
        "tableChanges": "doc_changes",
        "tableResult": "task_result",
        "dbHost": "localhost",
        "dbPort": 5432,
        "dbName": "onlyoffice",
        "dbUser": "onlyoffice",
        "dbPass": "onlyoffice",
        "charset": "utf8",
        "connectionlimit": 10,
        "max_allowed_packet": 1048575,
        "pgPoolExtraOptions": {
          "idleTimeoutMillis": 30000,
          "maxLifetimeSeconds": 60000,
          "statement_timeout": 60000,
          "query_timeout": 60000,
          "connectionTimeoutMillis": 60000
        },
        "damengExtraOptions": {
          "columnNameUpperCase": false,
          "columnNameCase": "lower",
          "connectTimeout": 60000,
          "loginEncrypt": false,
          "localTimezone": 0,
          "poolTimeout": 60,
          "socketTimeout": 60000,
          "queueTimeout": 60000
        },
        "oracleExtraOptions": {
          "thin": true,
          "connectTimeout": 60
        },
        "msSqlExtraOptions": {
          "options": {
            "encrypt": false,
            "trustServerCertificate": true
          },
          "pool": {
            "idleTimeoutMillis": 30000
          }
        },
        "mysqlExtraOptions": {
          "connectTimeout": 60000,
          "queryTimeout": 60000
        }
      }
    }
  }
}
```

