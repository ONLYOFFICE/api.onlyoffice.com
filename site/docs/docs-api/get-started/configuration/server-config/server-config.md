---
title: Server configuration
toc_min_heading_level: 2
toc_max_heading_level: 2
pagination_prev: null
pagination_next: null
---

import APITable from '@site/src/components/APITable/APITable';

# Server configuration

## Introduction {#introduction}

To change any ONLYOFFICE Docs server settings, configure the corresponding parameter in the **ONLYOFFICE Docs** configuration files, which are stored in the following directory:

- For Linux: `/etc/onlyoffice/documentserver/`
- For Windows: `%ProgramFiles%\ONLYOFFICE\DocumentServer\config\`

The base settings are shipped in the `default.json` file located in that directory.

### Configuration files {#configuration-files}

ONLYOFFICE Docs reads its settings through the [node-config](https://github.com/node-config/node-config) library. On startup, node-config loads several configuration files from the directory above and merges them, so that each file overrides the values set by the files loaded before it. The full list of supported file names and their load order is described in the [node-config documentation](https://github.com/node-config/node-config/wiki/Configuration-Files).

In a standard deployment, node-config applies the following files from the lowest priority to the highest (each file overrides the previous one):

- `default.json` - the base settings shipped with ONLYOFFICE Docs.
- `{NODE_ENV}.json` - the deployment-specific settings, where `{NODE_ENV}` is the value of the `NODE_ENV` environment variable, for example, `production-linux.json` or `production-windows.json`.
- `local.json` - your own overrides that are applied to every deployment.
- `local-{NODE_ENV}.json` - your own overrides that are applied to a single deployment only, for example, `local-production-linux.json`.

ONLYOFFICE Docs applies `runtime.json` as an additional configuration layer, separate from the node-config file sequence. Its values override the base configuration above. Runtime-aware consumers can also pick up subsequent changes. In multi-tenant deployments, supported per-tenant settings override the runtime configuration. See [Runtime config](#runtime-config).

Nested objects are merged by key. Arrays are replaced entirely by the value from the higher-priority configuration, including an empty array `[]`; their elements are not merged.

:::warning
Do not edit the shipped `default.json` or `{NODE_ENV}.json` files, such as `production-linux.json` and `production-windows.json`: package upgrades and container initialization can replace them. Instead, add your overrides to `local.json` or `local-{NODE_ENV}.json`, keeping the full object structure of each parameter.
:::

Changes to startup-only settings require a restart. The server monitors `runtime.json`, but reloading that file does not dynamically reconfigure every setting.

## Admin Panel {#admin-panel}

These parameters configure the Admin Panel properties. For more details on using Admin Panel, you can refer to [this article](https://helpcenter.onlyoffice.com/docs/installation/docs-admin-panel.aspx).

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| adminPanel.host | string | `""` | The bind address of the HTTP listener. An empty value listens on all interfaces. |
| adminPanel.passwordHash | string | `""` | A password hash used to protect a password with the PBKDF2-SHA256 algorithm.<br/><br/>**Note:** The value of this parameter is stored in the *runtime.json* file. E.g., for the Linux version, this file can be found here: `/var/www/onlyoffice/Data/runtime.json` |
| adminPanel.port | integer | `9000` | The port on which the Admin Panel service is running. |

</APITable>

### Example {#admin-panel-example}

```json
{
  "adminPanel": {
    "host": "",
    "port": 9000
  }
}
```

## StatsD {#statsd}

These parameters configure the StatsD server properties, specifying an aggregator of metrics.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| statsd.useMetrics | boolean | `false` | Whether the StatsD metrics are enabled for **ONLYOFFICE Docs** or not. |
| statsd.host | string | `"localhost"` | The StatsD server host (host name or IP address). |
| statsd.port | string | `"8125"` | The StatsD server port. |
| statsd.prefix | string | `"ds."` | A string that will be added to the beginning of all the stats automatically. It helps to distinguish different applications using the same StatsD server. |

</APITable>

### Example {#statsd-example}

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

## AI Tools settings {#ai-tools-settings}

These parameters configure the AI Tools properties.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| aiSettings.enable | boolean | `true` | Whether AI features are enabled in the editors or not. When disabled, AI Tools is excluded from /plugins.json, its settings are not sent to the editors and /ai-proxy requests are rejected with HTTP 403. |
| aiSettings.version | integer | `3` | The version of the AI SDK. |
| aiSettings.timeout | string | `"5m"` | An AI proxy timeout as a duration string. |
| aiSettings.allowBrowserProxy | boolean | `true` | Whether /ai-proxy relays a request whose target matches no configured provider. When enabled, the request is forwarded as the client composed it, so the editors can reach a target configured in the browser, such as an MCP server or a web search service. The server adds no credentials of its own, the caller still needs a valid session token, only absolute http and https targets are accepted, and the request goes out through the usual externalRequest filtering. When disabled, a request with an unmatched target is answered with HTTP 403. |
| aiSettings.allowedCorsOrigins | string[] | `["https://onlyoffice.github.io","https://onlyoffice-plugins.github.io"]` | The external websites permitted to make cross-origin requests to the server. |
| aiSettings.actions | object |  | AI actions performed, e.g., Chat, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision. |
| aiSettings.providers | object |  | AI providers, e.g., OpenAI, Google Gemini, Anthropic, etc. |
| aiSettings.customProviders | object |  | The custom AI service providers configuration. |
| aiSettings.models | object[] | `[]` | AI models, e.g., gemini-1.5-pro-latest, llama3.2:latest, etc. |
| aiSettings.pluginSettings | object |  | Opaque universal AI Tools settings blob (profiles, assignments, mcpServers, webSearch, etc.) owned by AI Tools and round-tripped verbatim. |

</APITable>

### Example {#ai-tools-settings-example}

```json
{
  "aiSettings": {
    "enable": true,
    "actions": {},
    "models": [],
    "providers": {},
    "version": 3,
    "timeout": "5m",
    "allowedCorsOrigins": [
      "https://onlyoffice.github.io",
      "https://onlyoffice-plugins.github.io"
    ],
    "allowBrowserProxy": true,
    "pluginSettings": {}
  }
}
```

## Logger {#logger}

These parameters configure the logger properties.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| log.filePath | string | `""` | A path to the log file. |
| log.options | object |  | The log options. |
| log.options.replaceConsole | boolean | `true` | Whether the log information is printed to the console or not. |
| log.options.categories.default.level | string |  | The logging level for the application. |

</APITable>

### Example {#logger-example}

```json
{
  "log": {
    "filePath": "",
    "options": {
      "replaceConsole": true
    }
  }
}
```

## Runtime config {#runtime-config}

These parameters configure the `runtime.json` file and its cache. The server monitors file changes and reloads the cache. An expired cache entry is refreshed on the next read. Settings read only at startup still require a restart.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| runtimeConfig.filePath | string | `""` | A path to the `runtime.json` dynamic config file. By default, the `/var/www/onlyoffice/Data/runtime.json` path is used. |
| runtimeConfig.cache | object |  | The `runtime.json` cache options. |
| runtimeConfig.cache.stdTTL | integer | `300` | The TTL (time to live) for every generated cache element (measured in seconds). |
| runtimeConfig.cache.checkperiod | integer | `60` | The period used for the automatic delete check interval (measured in seconds). |
| runtimeConfig.cache.useClones | boolean | `false` | Whether the cached variables will be cloned or not. If `true`, a copy of the cached variable will be created. If `false`, only the reference will be saved. |

</APITable>

### Example {#runtime-config-example}

```json
{
  "runtimeConfig": {
    "filePath": "",
    "cache": {
      "stdTTL": 300,
      "checkperiod": 60,
      "useClones": false
    }
  }
}
```

## Queues {#queues}

These parameters configure a queue of messages received from the message-broker.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| queue.type | string | `"rabbitmq"` | The message broker type. |
| queue.visibilityTimeout | integer | `300` | The queue task visibility timeout (measured in seconds). Together with `queue.retentionPeriod`, it contributes to the conversion timeout. |
| queue.retentionPeriod | integer | `900` | The [TTL](https://www.rabbitmq.com/ttl.html) (time to live) of all the messages in a queue (measured in seconds). |

</APITable>

### Example {#queues-example}

```json
{
  "queue": {
    "type": "rabbitmq",
    "visibilityTimeout": 300,
    "retentionPeriod": 900
  }
}
```

## Email {#email}

These parameters configure the settings of an external mail server, which is used to send [notifications](#notification). To connect to the mail server, use the [nodemailer](https://nodemailer.com/about/) library. Many config settings are passed directly to this library.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| email.smtpServerConfiguration | object |  | The [basic settings](https://nodemailer.com/smtp/) for connecting to the SMTP server. |
| email.smtpServerConfiguration.host | string | `"localhost"` | The host name or IP address of the SMTP server. |
| email.smtpServerConfiguration.port | integer | `587` | The SMTP server port. |
| email.smtpServerConfiguration.auth | object |  | The authentication data. |
| email.smtpServerConfiguration.auth.user | string | `""` | The authentication username.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| email.smtpServerConfiguration.auth.pass | string | `""` | The authentication password.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| email.connectionConfiguration | object |  | The [technical options](https://nodemailer.com/smtp/#connection-options) for connecting to the SMTP server. |
| email.connectionConfiguration.disableFileAccess | boolean | `false` | Whether to allow using files as content. If this parameter is set to **true**, then JSON data from an untrusted source cannot be used as the email.<br/>If an attachment or message node tries to fetch something from a file, the sending returns an error. |
| email.connectionConfiguration.disableUrlAccess | boolean | `false` | Whether to allow using URLs as content. |
| email.contactDefaults | object |  | The [email message settings](https://nodemailer.com/message/#common-fields). |
| email.contactDefaults.from | string | `"from@example.com"` | The email address of the sender. All email addresses can be plain *"sender@server.com"*<br/>or with formatted name *'"Sender Name" sender@server.com'*. |
| email.contactDefaults.to | string | `"to@example.com"` | The comma separated list or an array of recipients email addresses that will appear on the *To:* field. |

</APITable>

### Example {#email-example}

```json
{
  "email": {
    "smtpServerConfiguration": {
      "host": "localhost",
      "port": 587,
      "auth": {
        "user": "",
        "pass": ""
      }
    },
    "connectionConfiguration": {
      "disableFileAccess": false,
      "disableUrlAccess": false
    },
    "contactDefaults": {
      "from": "from@example.com",
      "to": "to@example.com"
    }
  }
}
```

## Notification {#notification}

These parameters configure the notification settings.

Notifications with the following event types and content are sent:

- 70% of the [connection quota](#license.warning_limit_percents) (quota of unique users) is exceeded.

  License connection limit warning: *"Attention! You have reached 70% of the connections limit set by your license."*

- The connection quota (quota of unique users) is reached.

  License connection limit warning: *"Attention! You have reached 100% of the connection limit set by your license."*

- 30 days before the [license expires](#license.warning_license_expiration).

  License expiration warning: *"Attention! Your license is about to expire on September 8, 2024. Upon reaching this date, you will no longer be entitled to receive personal technical support and install new Docs versions released after this date."*

- The license has expired.

  License connection limit warning: *"Attention! Your license expired on September 8, 2024. You are no longer entitled to receive personal technical support and install new Docs versions released after this date. Please contact sales@onlyoffice.com to discuss license renewal."*

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| notification.rules | object |  | The rules of notification settings for four notification types:<br/>*licenseExpirationWarning*, *licenseExpirationError*, *licenseLimitEdit*, *licenseLimitLiveViewer*. |
| notification.rules.licenseExpirationWarning | object |  | The rules for the *licenseExpirationWarning* notification settings. |
| notification.rules.licenseExpirationWarning.enable | boolean | `false` | Whether the *licenseExpirationWarning* notification is enabled. Each notification type must be enabled separately. |
| notification.rules.licenseExpirationWarning.transportType | string[] | `["email"]` | The way of sending the *licenseExpirationWarning* notification. Currently, only the *email* type is available. |
| notification.rules.licenseExpirationWarning.template | object |  | A template of the *licenseExpirationWarning* notification title and body. |
| notification.rules.licenseExpirationWarning.template.title | string | `"%s Docs license expiration warning"` | A template of the *licenseExpirationWarning* notification title. |
| notification.rules.licenseExpirationWarning.template.body | string |  | A template of the *licenseExpirationWarning* notification body. |
| notification.rules.licenseExpirationWarning.policies | object |  | The *licenseExpirationWarning* notification sending policy. |
| notification.rules.licenseExpirationWarning.policies.repeatInterval | string | `"1d"` | The time when the *licenseExpirationWarning* notification will be sent (not more often than the specified period). |
| notification.rules.licenseExpirationError | object |  | The rules for the *licenseExpirationError* notification settings. |
| notification.rules.licenseExpirationError.enable | boolean | `false` | Whether the *licenseExpirationError* notification is enabled. Each notification type must be enabled separately. |
| notification.rules.licenseExpirationError.transportType | string[] | `["email"]` | The way of sending the *licenseExpirationError* notification. Currently, only the *email* type is available. |
| notification.rules.licenseExpirationError.template | object |  | A template of the *licenseExpirationError* notification title and body. |
| notification.rules.licenseExpirationError.template.title | string | `"%s Docs license expiration warning"` | A template of the *licenseExpirationError* notification title. |
| notification.rules.licenseExpirationError.template.body | string |  | A template of the *licenseExpirationError* notification body. |
| notification.rules.licenseExpirationError.policies | object |  | The *licenseExpirationError* notification sending policy. |
| notification.rules.licenseExpirationError.policies.repeatInterval | string | `"1d"` | The time when the *licenseExpirationError* notification will be sent (not more often than the specified period). |
| notification.rules.licenseLimitEdit | object |  | The rules for the *licenseLimitEdit* notification settings. |
| notification.rules.licenseLimitEdit.enable | boolean | `false` | Whether the *licenseLimitEdit* notification is enabled. Each notification type must be enabled separately. |
| notification.rules.licenseLimitEdit.transportType | string[] | `["email"]` | The way of sending the *licenseLimitEdit* notification. Currently, only the *email* type is available. |
| notification.rules.licenseLimitEdit.template | object |  | A template of the *licenseLimitEdit* notification title and body. |
| notification.rules.licenseLimitEdit.template.title | string | `"%s Docs license %s limit warning"` | A template of the *licenseLimitEdit* notification title. |
| notification.rules.licenseLimitEdit.template.body | string |  | A template of the *licenseLimitEdit* notification body. |
| notification.rules.licenseLimitEdit.policies | object |  | The *licenseLimitEdit* notification sending policy. |
| notification.rules.licenseLimitEdit.policies.repeatInterval | string | `"1h"` | The time when the *licenseLimitEdit* notification will be sent (not more often than the specified period). |
| notification.rules.licenseLimitLiveViewer | object |  | The rules for the *licenseLimitLiveViewer* notification settings. |
| notification.rules.licenseLimitLiveViewer.enable | boolean | `false` | Whether the *licenseLimitLiveViewer* notification is enabled. Each notification type must be enabled separately. |
| notification.rules.licenseLimitLiveViewer.transportType | string[] | `["email"]` | The way of sending the *licenseLimitLiveViewer* notification. Currently, only the *email* type is available. |
| notification.rules.licenseLimitLiveViewer.template | object |  | A template of the *licenseLimitLiveViewer* notification title and body. |
| notification.rules.licenseLimitLiveViewer.template.title | string | `"%s Docs license %s limit warning"` | A template of the *licenseLimitLiveViewer* notification title. |
| notification.rules.licenseLimitLiveViewer.template.body | string |  | A template of the *licenseLimitLiveViewer* notification body. |
| notification.rules.licenseLimitLiveViewer.policies | object |  | The *licenseLimitLiveViewer* notification sending policy. |
| notification.rules.licenseLimitLiveViewer.policies.repeatInterval | string | `"1h"` | The time when the *licenseLimitLiveViewer* notification will be sent (not more often than the specified period). |

</APITable>

### Example {#notification-example}

```json
{
  "notification": {
    "rules": {
      "licenseExpirationWarning": {
        "enable": false,
        "transportType": [
          "email"
        ],
        "template": {
          "title": "%s Docs license expiration warning",
          "body": "Attention! Your license is about to expire on %s.\nUpon reaching this date, you will no longer be entitled to receive personal technical support and install new Docs versions released after this date."
        },
        "policies": {
          "repeatInterval": "1d"
        }
      },
      "licenseExpirationError": {
        "enable": false,
        "transportType": [
          "email"
        ],
        "template": {
          "title": "%s Docs license expiration warning",
          "body": "Attention! Your license expired on %s.\nYou are no longer entitled to receive personal technical support and install new Docs versions released after this date.\nPlease contact sales@onlyoffice.com to discuss license renewal."
        },
        "policies": {
          "repeatInterval": "1d"
        }
      },
      "licenseLimitEdit": {
        "enable": false,
        "transportType": [
          "email"
        ],
        "template": {
          "title": "%s Docs license %s limit warning",
          "body": "Attention! You have reached %s%% of the %s limit set by your license."
        },
        "policies": {
          "repeatInterval": "1h"
        }
      },
      "licenseLimitLiveViewer": {
        "enable": false,
        "transportType": [
          "email"
        ],
        "template": {
          "title": "%s Docs license %s limit warning",
          "body": "Attention! You have reached %s%% of the live viewer %s limit set by your license."
        },
        "policies": {
          "repeatInterval": "1h"
        }
      }
    }
  }
}
```

## Document storage service {#document-storage-service}

These parameters configure the document storage service configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| storage.name | string | `"storage-fs"` | The document storage service name. E.g., the "storage-s3" value allows connecting Amazon S3 bucket as a cache. The "storage-az" value allows connecting MS Azure Blob Storage as a cache. |
| storage.fs | object |  | A fileSystem object parameters. |
| storage.fs.folderPath | string | `""` | A path to the `App_Data` folder where all files are stored. |
| storage.fs.urlExpires | integer | `900` | The time when the temporary URL to the fileSystem object expires (measured in seconds). |
| storage.fs.secretString | string | `"verysecretstring"` | The secret string which is used to sign the URL.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| storage.region | string | `""` | An AWS region where your Amazon bucket resides. |
| storage.endpoint | string | `"http://localhost/s3"` | The endpoint of S3 AWS document storage or MS Azure Blob Storage. |
| storage.bucketName | string | `"cache"` | A unique name of S3 AWS document storage or MS Azure Blob Storage. |
| storage.storageFolderName | string | `"files"` | The S3 AWS document storage folder name where all the files are stored. |
| storage.cacheFolderName | string | `"data"` | The cache folder name for working in the multi-tenant mode. |
| storage.commandOptions | object |  | The parameters that allow customizing commands to a storage, for example, enabling AWS KMS. |
| storage.commandOptions.s3 | object |  | The parameters that allow customizing commands to S3 AWS document storage. |
| storage.commandOptions.s3.putObject | object |  | The parameters of the putObject command type used to upload an object to a specified S3 bucket. |
| storage.commandOptions.s3.putObject.BucketKeyEnabled | boolean |  | This is an optional setting. Optimizes the cost per request by reducing calls to the KMS API. |
| storage.commandOptions.s3.putObject.ServerSideEncryption | string |  | The encryption type for the newly uploaded object. The available values are "aws:kms" or "AES256". |
| storage.commandOptions.s3.putObject.SSEKMSKeyId | string |  | The identifier (ARN or key) of the Customer-Managed Key in AWS KMS that is used to encrypt the object after it's uploaded. |
| storage.commandOptions.s3.getObject | object |  | The parameters of the getObject command type used to retrieve an object from a specified S3 bucket. |
| storage.commandOptions.s3.copyObject | object |  | The parameters of the copyObject command type used to create a copy of an object stored in a specified S3 bucket. |
| storage.commandOptions.s3.copyObject.MetadataDirective | string | `"COPY"` | How Amazon S3 handles the metadata of the destination object during a copy operation. If the value is set to "COPY", the metadata from the source object is copied to the destination object. If the value is set to "REPLACE", the metadata of the destination object is replaced by the metadata provided in the copyObject request and the metadata from the source object is not copied. |
| storage.commandOptions.s3.copyObject.BucketKeyEnabled | boolean |  | This is an optional setting. Optimizes the cost per request by reducing calls to the KMS API. |
| storage.commandOptions.s3.copyObject.ServerSideEncryption | string |  | The encryption type for the newly copied object. The available values are "aws:kms" or "AES256". |
| storage.commandOptions.s3.copyObject.SSEKMSKeyId | string |  | The identifier (ARN or key) of the Customer-Managed Key in AWS KMS that is used to encrypt the object after it's copied. |
| storage.commandOptions.s3.listObjects | object |  | The parameters of the listObjects command type used to retrieve a list of objects within a specified S3 bucket. |
| storage.commandOptions.s3.listObjects.MaxKeys | integer | `1000` | The maximum number of objects that are returned in a response. |
| storage.commandOptions.s3.deleteObject | object |  | The parameters of the deleteObject command type used to remove an object from a specified S3 bucket. |
| storage.commandOptions.az | object |  | The parameters that allow customizing commands to MS Azure Blob Storage. |
| storage.commandOptions.az.uploadData | object |  | The parameters of the uploadData command type used to upload data to MS Azure Blob Storage. |
| storage.commandOptions.az.uploadData.encryptionScope | string |  | The name of the encryption scope used to encrypt an uploaded blob. |
| storage.commandOptions.az.uploadStream | object |  | The parameters of the uploadStream command type used to upload data from a stream to MS Azure Blob Storage. |
| storage.commandOptions.az.uploadStream.encryptionScope | string |  | The name of the encryption scope used to encrypt a blob uploaded from a sream. |
| storage.commandOptions.az.download | object |  | The parameters of the download command type used to download data from MS Azure Blob Storage. |
| storage.commandOptions.az.syncCopyFromURL | object |  | The parameters of the syncCopyFromURL command type used to copy a blob from a source URL to a destination blob. |
| storage.commandOptions.az.syncCopyFromURL.encryptionScope | string |  | The name of the encryption scope used to encrypt a copied blob. |
| storage.commandOptions.az.listBlobsFlat | object |  | The parameters of the listBlobsFlat command type used to retrieve a list of all blobs in a container. |
| storage.commandOptions.az.listBlobsFlat.maxPageSize | integer | `1000` | The maximum number of blobs to return. |
| storage.commandOptions.az.deleteBlob | object |  | The parameters of the deleteBlob command type used to remove a blob. |
| storage.urlExpires | integer | `604800` | Unused by the current storage backends. Configure `storage.fs.urlExpires` instead, in seconds. |
| storage.accessKeyId | string | `""` | A key ID to access the S3 AWS document storage or MS Azure Blob Storage. |
| storage.secretAccessKey | string | `""` | A secret key to access the S3 AWS document storage or MS Azure Blob Storage.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| storage.sslEnabled | boolean | `false` | Whether SSL of the S3 AWS document storage is enabled or not. |
| storage.s3ForcePathStyle | boolean | `true` | Whether the requests to the S3 AWS document storage always use path style addressing. |
| storage.externalHost | string | `""` | An external host which is used instead of the host specified in the request. |
| storage.useDirectStorageUrls | boolean | `false` | The issuance of links to an external storage: direct links or links that are proxied through the Document Server. Setting this parameter to `true` enables direct links, while the `false` value allows using internal links (the server proxies requests to the storage). |

</APITable>

### Example {#document-storage-service-example}

```json
{
  "storage": {
    "name": "storage-fs",
    "fs": {
      "folderPath": "",
      "urlExpires": 900,
      "secretString": "verysecretstring"
    },
    "region": "",
    "endpoint": "http://localhost/s3",
    "bucketName": "cache",
    "storageFolderName": "files",
    "cacheFolderName": "data",
    "commandOptions": {
      "s3": {
        "putObject": {},
        "getObject": {},
        "copyObject": {
          "MetadataDirective": "COPY"
        },
        "listObjects": {
          "MaxKeys": 1000
        },
        "deleteObject": {}
      },
      "az": {
        "uploadData": {},
        "uploadStream": {},
        "download": {},
        "syncCopyFromURL": {},
        "listBlobsFlat": {
          "maxPageSize": 1000
        },
        "deleteBlob": {}
      }
    },
    "urlExpires": 604800,
    "accessKeyId": "",
    "secretAccessKey": "",
    "sslEnabled": false,
    "s3ForcePathStyle": true,
    "externalHost": "",
    "useDirectStorageUrls": false
  }
}
```

## Persistent storage {#persistent-storage}

These parameters configure the settings of the persistent storage, which is used to separate the settings for the document cache file storage and the storage of the forgotten and error files. Settings that are not specified in this object are inherited from the [storage](#document-storage-service) object. The separation is convenient for server upgrades.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| persistentStorage | object |  | Secondary storage configuration for persistent data (forgotten files, errored files). Deep-merges with the main `storage` configuration - specify only the keys that differ from the primary storage. Useful when persistent documents need a different backend (e.g. S3 bucket) than the temporary conversion cache. |

</APITable>

### Example {#persistent-storage-example}

```json
{
  "persistentStorage": {}
}
```

## RabbitMQ {#rabbitmq}

These parameters configure the RabbitMQ message broker configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| rabbitmq.url | string | `"amqp://localhost:5672"` | The RabbitMQ URL.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| rabbitmq.socketOptions | object |  | The [RabbitMQ socket options](https://amqp-node.github.io/amqplib/channel_api.html#connect) that will be passed to the socket library (`net` or `tls`). These options must be fields set on the object supplied. The socket options can be used for the SSL connection and can contain the following fields:<br/>- **cert** - defines a certificate to present to the server (in PEM or pkcs12 format), **type**: string, **example**: "";<br/>- **key** - defines the private key for the certificate (in PEM or pkcs12 format), **type**: string, **example**: "";<br/>- **passphrase** - defines a passphrase for the private key, **type**: string, **example**: "MySecretPassword";<br/>- **ca** - defines a list of the CA certificates in PEM format that we will trust, since we are using a self-signed certificate, **type**: array, **example**: [];<br/>- **noDelay** - defines if TCP_NODELAY (Nagle's algorithm) is set on the underlying socket or not, **type**: boolean, **example**: true. |
| rabbitmq.exchangepubsub | object |  | The Publisher Subscriber exchange server. |
| rabbitmq.exchangepubsub.name | string | `"ds.pubsub"` | A name of the Publisher Subscriber server. |
| rabbitmq.exchangepubsub.options | object |  | The [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the Publisher Subscriber server. |
| rabbitmq.exchangepubsub.options.durable | boolean | `true` | Whether the queue will survive broker restarts. |
| rabbitmq.queuepubsub | object |  | The Publisher Subscriber queue. |
| rabbitmq.queuepubsub.name | string | `""` | A name of the Publisher Subscriber queue. |
| rabbitmq.queuepubsub.options | object |  | The [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the Publisher Subscriber queue. |
| rabbitmq.queuepubsub.options.arguments | object |  | The additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL. |
| rabbitmq.queuepubsub.options.arguments.x-queue-type | string | `"classic"` | A value of the *x-queue-type* header which specifies the queue type. Only classic queues can be used. |
| rabbitmq.queuepubsub.options.autoDelete | boolean | `true` | Whether the queue will be deleted when the number of consumers drops to zero. |
| rabbitmq.queuepubsub.options.exclusive | boolean | `true` | Whether the queue will be scoped to the connection. |
| rabbitmq.queueconverttask | object |  | A queue of tasks. |
| rabbitmq.queueconverttask.name | string | `"ds.converttask6"` | A name of the queue of tasks. |
| rabbitmq.queueconverttask.options | object |  | The [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the queue of tasks. |
| rabbitmq.queueconverttask.options.arguments | object |  | The additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL. |
| rabbitmq.queueconverttask.options.arguments.x-queue-type | string | `"classic"` | A value of the *x-queue-type* header which specifies the queue type. This setting can be used to set the *quorum* queues. |
| rabbitmq.queueconverttask.options.durable | boolean | `true` | Whether the queue will survive broker restarts. |
| rabbitmq.queueconverttask.options.maxPriority | integer | `6` | A queue [priority](https://www.rabbitmq.com/docs/priority). |
| rabbitmq.queueconvertresponse | object |  | A queue of responses. |
| rabbitmq.queueconvertresponse.name | string | `"ds.convertresponse"` | A name of the queue of responses. |
| rabbitmq.queueconvertresponse.options | object |  | The [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the queue of responses. |
| rabbitmq.queueconvertresponse.options.arguments | object |  | The additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL. |
| rabbitmq.queueconvertresponse.options.arguments.x-queue-type | string | `"classic"` | A value of the *x-queue-type* header which specifies the queue type. This setting can be used to set the *quorum* queues. |
| rabbitmq.queueconvertresponse.options.durable | boolean | `true` | Whether the queue will survive broker restarts. |
| rabbitmq.exchangeconvertdead | object |  | A dead letter exchange. |
| rabbitmq.exchangeconvertdead.name | string | `"ds.exchangeconvertdead"` | A name of the dead letter exchange. |
| rabbitmq.exchangeconvertdead.options | object |  | The [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the dead letter exchange. |
| rabbitmq.exchangeconvertdead.options.durable | boolean | `true` | Whether the queue will survive broker restarts. |
| rabbitmq.queueconvertdead | object |  | A dead letter queue. |
| rabbitmq.queueconvertdead.name | string | `"ds.convertdead"` | A name of the dead letter queue. |
| rabbitmq.queueconvertdead.options | object |  | The [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the dead letter queue. |
| rabbitmq.queueconvertdead.options.arguments | object |  | The additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL. |
| rabbitmq.queueconvertdead.options.arguments.x-queue-type | string | `"classic"` | A value of the *x-queue-type* header which specifies the queue type. This setting can be used to set the *quorum* queues. |
| rabbitmq.queueconvertdead.options.durable | boolean | `true` | Whether the queue will survive broker restarts. |
| rabbitmq.queuedelayed | object |  | The delayed queue. |
| rabbitmq.queuedelayed.name | string | `"ds.delayed"` | A name of the delayed queue. |
| rabbitmq.queuedelayed.options | object |  | The [settings](https://amqp-node.github.io/amqplib/channel_api.html#channel_assertQueue) of the delayed queue. |
| rabbitmq.queuedelayed.options.arguments | object |  | The additional arguments, usually parameters for some kind of broker-specific extension e.g., high availability, TTL. |
| rabbitmq.queuedelayed.options.arguments.x-queue-type | string | `"classic"` | A value of the *x-queue-type* header which specifies the queue type. This setting can be used to set the *quorum* queues. |
| rabbitmq.queuedelayed.options.durable | boolean | `true` | Whether the queue will survive broker restarts. |

</APITable>

### Example {#rabbitmq-example}

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

## ActiveMQ {#activemq}

These parameters configure the ActiveMQ message broker configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| activemq.connectOptions | object |  | The [ActiveMQ connect options](https://github.com/amqp/rhea#connectoptions). |
| activemq.connectOptions.port | integer | `5672` | A port of the server to which the ActiveMQ container is connected. |
| activemq.connectOptions.host | string | `"localhost"` | A host (host name or IP address) of the server to which the ActiveMQ container is connected. |
| activemq.connectOptions.reconnect | boolean | `false` | Whether the ActiveMQ module will automatically attempt to reconnect if disconnected (**true**) or not (**false**). |
| activemq.queueconverttask | string | `"ds.converttask"` | A queue of tasks. |
| activemq.queueconvertresponse | string | `"ds.convertresponse"` | A queue of responses. |
| activemq.queueconvertdead | string | `"ActiveMQ.DLQ"` | A dead letter queue. |
| activemq.queuedelayed | string | `"ds.delayed"` | The delayed queue. |
| activemq.topicpubsub | string | `"ds.pubsub"` | The Publisher Subscriber topic. |

</APITable>

### Example {#activemq-example}

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

## DNS cache {#dns-cache}

These parameters configure the configuration of the DNS cache which is used for the IP-filter.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| dnscache.enable | boolean | `true` | Whether the DNS cache is enabled or not. |
| dnscache.ttl | integer | `300` | The time when the DNS records expire (measured in seconds). |
| dnscache.cachesize | integer | `1000` | The DNS cache size. |

</APITable>

### Example {#dns-cache-example}

```json
{
  "dnscache": {
    "enable": true,
    "ttl": 300,
    "cachesize": 1000
  }
}
```

## AES-256-GCM algorithm {#aes-256-gcm-algorithm}

These parameters configure the settings of the AES-256-GCM encryption algorithm used for password protection of the documents.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| aesEncrypt.config | object |  | The AES-256-GCM algorithm configuration. |
| aesEncrypt.config.keyByteLength | integer | `32` | The key length measured in bytes. |
| aesEncrypt.config.saltByteLength | integer | `64` | The salt length measured in bytes. |
| aesEncrypt.config.initializationVectorByteLength | integer | `16` | The initialization vector length measured in bytes. |
| aesEncrypt.config.iterationsByteLength | integer | `5` | The number of decimal digits in the random PBKDF2 iteration count. The minimum is 4. |
| aesEncrypt.secret | string | `"verysecretstring"` | A password which is used for the AES-256-GCM encryption.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |

</APITable>

### Example {#aes-256-gcm-algorithm-example}

```json
{
  "aesEncrypt": {
    "config": {
      "keyByteLength": 32,
      "saltByteLength": 64,
      "initializationVectorByteLength": 16,
      "iterationsByteLength": 5
    },
    "secret": "verysecretstring"
  }
}
```

## OpenPGP protocol {#openpgp-protocol}

These parameters configure the settings of the OpenPGP protocol, which is used to encrypt the password when opening an encrypted document for editing.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| openpgpjs.config | object |  | The [OpenPGP protocol configuration](https://github.com/openpgpjs/openpgpjs). |
| openpgpjs.encrypt | object |  | The OpenPGP encryption settings. |
| openpgpjs.encrypt.passwords | string[] | `["verysecretstring"]` | A password which is used for the OpenPGP encryption.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| openpgpjs.decrypt | object |  | The OpenPGP decryption settings. |
| openpgpjs.decrypt.passwords | string[] | `["verysecretstring"]` | A password which is used for the OpenPGP decryption.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |

</APITable>

### Example {#openpgp-protocol-example}

```json
{
  "openpgpjs": {
    "config": {},
    "encrypt": {
      "passwords": [
        "verysecretstring"
      ]
    },
    "decrypt": {
      "passwords": [
        "verysecretstring"
      ]
    }
  }
}
```

## Secret key {#secret-key}

These parameters configure the secret key configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.secret.browser | object |  | The parameters of a secret key to generate a token in the client-side browser requests to ONLYOFFICE Docs. |
| services.CoAuthoring.secret.browser.string | string | `"developer-only-not-a-real-secret"` | Inline plaintext secret value. Takes priority over the file option when both are set. |
| services.CoAuthoring.secret.browser.file | string | `""` | Path to a file containing the secret value. Loaded once and cached. Leave empty to use the string value. |
| services.CoAuthoring.secret.inbox | object |  | The parameters of a secret key to generate a token in the incoming HTTP requests with the commands from the **document storage service** to the **document command service**, **document conversion service** and **document builder service**. |
| services.CoAuthoring.secret.inbox.string | string | `"developer-only-not-a-real-secret"` | Inline plaintext secret value. Takes priority over the file option when both are set. |
| services.CoAuthoring.secret.inbox.file | string | `""` | Path to a file containing the secret value. Loaded once and cached. Leave empty to use the string value. |
| services.CoAuthoring.secret.outbox | object |  | The parameters of a secret key to generate a token in the outgoing HTTP requests to the `callbackUrl` address by **document editing service**. |
| services.CoAuthoring.secret.outbox.string | string | `"developer-only-not-a-real-secret"` | Inline plaintext secret value. Takes priority over the file option when both are set. |
| services.CoAuthoring.secret.outbox.file | string | `""` | Path to a file containing the secret value. Loaded once and cached. Leave empty to use the string value. |
| services.CoAuthoring.secret.session | object |  | The parameters of a secret key to generate the session token. |
| services.CoAuthoring.secret.session.string | string | `"developer-only-not-a-real-secret"` | Inline plaintext secret value. Takes priority over the file option when both are set. |
| services.CoAuthoring.secret.session.file | string | `""` | Path to a file containing the secret value. Loaded once and cached. Leave empty to use the string value. |

</APITable>

### Example {#secret-key-example}

```json
{
  "services": {
    "CoAuthoring": {
      "secret": {
        "browser": {
          "string": "developer-only-not-a-real-secret",
          "file": ""
        },
        "inbox": {
          "string": "developer-only-not-a-real-secret",
          "file": ""
        },
        "outbox": {
          "string": "developer-only-not-a-real-secret",
          "file": ""
        },
        "session": {
          "string": "developer-only-not-a-real-secret",
          "file": ""
        }
      }
    }
  }
}
```

## Bottleneck {#bottleneck}

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| bottleneck.getChanges | object |  | The [constructor options](https://github.com/SGrondin/bottleneck#constructor) to generate limiters for throttling the database requests. |

</APITable>

### Example {#bottleneck-example}

```json
{
  "bottleneck": {
    "getChanges": {}
  }
}
```

## Windows System Root certificates {#windows-system-root-certificates}

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| win-ca.inject | string | `"+"` | The injection mode of the Windows System Root certificates. The "+" means that a new experimental method is used to install certificates. |

</APITable>

### Example {#windows-system-root-certificates-example}

```json
{
  "win-ca": {
    "inject": "+"
  }
}
```

## WOPI {#wopi}

These parameters configure the WOPI protocol configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| wopi.enable | boolean | `false` | Whether WOPI is enabled or not. |
| wopi.host | string | `""` | The WOPI host (host name or IP address). |
| wopi.htmlTemplate | string | `"../../web-apps/apps/api/wopi"` | A path to the WOPI HTML template. |
| wopi.wopiZone | string | `"external-http"` | The discovery zone advertised by the document server. For SharePoint integrations, this value should match the zone configured with Set-SPWOPIZone. |
| wopi.requireIpFilterRule | boolean | `true` | Whether every WOPI host must be named by a `services.CoAuthoring.ipfilter.rules` entry before the server will contact it. The catch-all `*` rule does not count, because it names nothing. When the value is false, the server may also contact a host that no rule names. The remaining checks of the WOPI destination apply either way. |
| wopi.sendAuthorizationHeader | boolean | `false` | The `Authorization: Bearer <token>` header added to WOPI requests. Optional by specification, but may be needed for older SharePoint integrations. |
| wopi.favIconUrlWord | string | `"/web-apps/apps/documenteditor/main/resources/img/favicon.ico"` | A path to the favicon for the document editor. |
| wopi.favIconUrlCell | string |  | A path to the favicon for the spreadsheet editor. |
| wopi.favIconUrlSlide | string |  | A path to the favicon for the presentation editor. |
| wopi.favIconUrlPdf | string | `"/web-apps/apps/pdfeditor/main/resources/img/favicon.ico"` | A path to the favicon for the PDF editor. |
| wopi.favIconUrlDiagram | string | `"/web-apps/apps/visioeditor/main/resources/img/favicon.ico"` | A path to the favicon for the diagram editor. |
| wopi.fileInfoBlockList | string[] | `["FileUrl"]` | A list of WOPI file information parameters that are blocked when sending this array to the browser. However, these parameters are available on the server. |
| wopi.pdfView | string[] | `[]` | The file types that can be viewed in the PDF editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.pdfEdit | string[] | `[]` | The file types that can be edited in the PDF editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.forms | string[] | `[]` | The form file types.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.wordView | string[] | `[]` | The file types that can be viewed in the document editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.wordEdit | string[] | `[]` | The file types that can be edited in the document editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.cellView | string[] | `[]` | The file types that can be viewed in the spreadsheet editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.cellEdit | string[] | `[]` | The file types that can be edited in the spreadsheet editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.slideView | string[] | `[]` | The file types that can be viewed in the presentation editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.slideEdit | string[] | `[]` | The file types that can be edited in the presentation editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.diagramView | string[] | `[]` | The file types that can be viewed in the diagram editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.diagramEdit | string[] | `[]` | The file types that can be edited in the diagram editor.<br/><br/>**Note:** The value of this parameter is stored in the *onlyoffice-docs-formats.json* file. |
| wopi.publicKey | string | `""` | The public key that the integrator uses to check the private key.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| wopi.modulus | string | `""` | The RSA modulus in the Base64-encoded format that is used to retrieve the public key.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| wopi.exponent | integer | `65537` | The RSA public exponent as an integer. The server Base64-encodes it in discovery. |
| wopi.privateKey | string | `""` | The private key that signs the Document Server request.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| wopi.publicKeyOld | string | `""` | The old public key that the integrator used to check the private key.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| wopi.modulusOld | string | `""` | The old RSA modulus in the Base64-encoded format that was used to retrieve the public key.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| wopi.exponentOld | integer | `65537` | The previous RSA public exponent as an integer. The server Base64-encodes it in discovery. |
| wopi.privateKeyOld | string | `""` | The old private key that signed the Document Server request.<br/><br/>**Note:** Please note that starting from version 8.3, the values of this parameter in the *default.json* and *local.json* files are different. |
| wopi.refreshLockInterval | string | `"10m"` | The interval time, as a duration string, for refreshing the lock on a file by resetting its automatic expiration timer to 30 minutes. |
| wopi.dummy | object |  | The properties of dummy handlers for stress testing. |
| wopi.dummy.enable | boolean | `false` | Whether the dummy handlers are enabled or not. |
| wopi.dummy.sampleFilePath | string | `""` | The dummy path to the sample file. |

</APITable>

### Example {#wopi-example}

```json
{
  "wopi": {
    "enable": false,
    "host": "",
    "htmlTemplate": "../../web-apps/apps/api/wopi",
    "wopiZone": "external-http",
    "favIconUrlWord": "/web-apps/apps/documenteditor/main/resources/img/favicon.ico",
    "favIconUrlCell": "/web-apps/apps/spreadsheeteditor/main/resources/img/favicon.ico",
    "favIconUrlSlide": "/web-apps/apps/presentationeditor/main/resources/img/favicon.ico",
    "favIconUrlPdf": "/web-apps/apps/pdfeditor/main/resources/img/favicon.ico",
    "favIconUrlDiagram": "/web-apps/apps/visioeditor/main/resources/img/favicon.ico",
    "fileInfoBlockList": [
      "FileUrl"
    ],
    "pdfView": [],
    "pdfEdit": [],
    "forms": [],
    "wordView": [],
    "wordEdit": [],
    "cellView": [],
    "cellEdit": [],
    "slideView": [],
    "slideEdit": [],
    "diagramView": [],
    "diagramEdit": [],
    "publicKey": "",
    "modulus": "",
    "exponent": 65537,
    "privateKey": "",
    "publicKeyOld": "",
    "modulusOld": "",
    "exponentOld": 65537,
    "privateKeyOld": "",
    "requireIpFilterRule": true,
    "sendAuthorizationHeader": false,
    "refreshLockInterval": "10m",
    "dummy": {
      "enable": false,
      "sampleFilePath": ""
    }
  }
}
```

## Tenants {#tenants}

These parameters configure the tenants properties for working in the multi-tenant mode.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| tenants.baseDir | string | `""` | A directory that limits the files that can be accessed by **ONLYOFFICE Docs**. |
| tenants.baseDomain | string | `""` | The tenant base domain name. |
| tenants.filenameConfig | string | `"config.json"` | The name of the config file in the tenant folder to override *default.json*. It is used in the multi-tenant mode<br/>to initialize the specific tenant settings (wopi, ipfilter, jwt secret etc.). |
| tenants.filenameSecret | string | `"secret.key"` | The *.pem* filename where the tenant secret key is stored. |
| tenants.filenameLicense | string | `"license.lic"` | The filename where the tenant license is stored. |
| tenants.defaultTenant | string | `"localhost"` | The domain name of the default tenant. |
| tenants.licenseRevalidateInterval | integer | `5` | The minimal interval between the checks of the tenant license file state (measured in seconds). This is the check rate, not a guaranteed delay: on a network file system the actual delay also depends on the metadata cache of the mount. Set to 0 to disable the checks and rely on the cache TTL only. |
| tenants.cache | object |  | The cache properties for reading multi-tenant license and secret. |
| tenants.cache.stdTTL | integer | `300` | The TTL (time to live) for every generated cache element (measured in seconds). |
| tenants.cache.checkperiod | integer | `60` | The period used for the automatic delete check interval (measured in seconds). |
| tenants.cache.useClones | boolean | `false` | Whether the cached variables will be cloned or not. If `true`, a copy of the cached variable will be created. If `false`, only the reference will be saved. |

</APITable>

### Example {#tenants-example}

```json
{
  "tenants": {
    "baseDir": "",
    "baseDomain": "",
    "filenameConfig": "config.json",
    "filenameSecret": "secret.key",
    "filenameLicense": "license.lic",
    "defaultTenant": "localhost",
    "licenseRevalidateInterval": 5,
    "cache": {
      "stdTTL": 300,
      "checkperiod": 60,
      "useClones": false
    }
  }
}
```

## External request {#external-request}

These parameters configure the configuration of the external requests.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| externalRequest.directIfIn | object |  | The IP addresses that are allowed for direct requests. |
| externalRequest.directIfIn.allowList | string[] | `[]` | A list of the IP addresses that are trusted for the direct requests. |
| externalRequest.directIfIn.jwtToken | boolean | `true` | Whether the trusted IP addresses are in the JWT or not. |
| externalRequest.action | object |  | The external request options. |
| externalRequest.action.allow | boolean | `true` | Whether the external requests are allowed or not. |
| externalRequest.action.blockPrivateIP | boolean | `true` | Whether the private IP address will be blocked or not. Destination filtering for requests sent through `proxyUrl` must be configured on the proxy. The requests permitted by `externalRequest.directIfIn` are handled separately. |
| externalRequest.action.proxyUrl | string | `""` | The proxy URL. |
| externalRequest.action.proxyUser | object |  | The proxy authentication parameters. |
| externalRequest.action.proxyUser.username | string | `""` | The proxy authentication username. |
| externalRequest.action.proxyUser.password | string | `""` | The proxy authentication password.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| externalRequest.action.proxyHeaders | object |  | The proxy headers. |

</APITable>

### Example {#external-request-example}

```json
{
  "externalRequest": {
    "directIfIn": {
      "allowList": [],
      "jwtToken": true
    },
    "action": {
      "allow": true,
      "blockPrivateIP": true,
      "proxyUrl": "",
      "proxyUser": {
        "username": "",
        "password": ""
      },
      "proxyHeaders": {}
    }
  }
}
```

## Document Server services {#document-server-services}

These parameters configure the settings for the Document Server services.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring | object |  | The settings for the co-authoring editing session. |

</APITable>

## Server {#server}

These parameters configure the server configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.server.assemblyFormatAsOrigin | boolean | `true` | Whether the assembled file is saved in its original format or not. |
| services.CoAuthoring.server.callbackRequestTimeout | object |  | The timeout properties for callback requesting. |
| services.CoAuthoring.server.callbackRequestTimeout.connectionAndInactivity | string | `"10m"` | The request timeout as a duration string. `wholeCycle` limits the whole request cycle. |
| services.CoAuthoring.server.callbackRequestTimeout.wholeCycle | string | `"10m"` | The whole request cycle timeout. |
| services.CoAuthoring.server.convertServiceEnable | boolean | `true` | Whether the conversion public API endpoints are enabled or not. When disabled, requests to /converter, /converter/from-file and /ConvertService.ashx are rejected with HTTP 403. Conversions initiated by the editors are not affected. |
| services.CoAuthoring.server.docbuilderEnable | boolean | `true` | Whether the /docbuilder public API endpoints are enabled or not. When disabled, requests to /docbuilder and /docbuilder/from-file are rejected with HTTP 403. |
| services.CoAuthoring.server.documentFormatsFile | string | `"../../document-formats/onlyoffice-docs-formats.json"` | A path to the "onlyoffice-docs-formats" file. |
| services.CoAuthoring.server.downloadFileAllowExt | string[] | `["pdf","xlsx"]` | The extensions allowed to be downloaded via the downloadFile handler. |
| services.CoAuthoring.server.edit_singleton | boolean | `false` | Whether the singleton can be edited or not. |
| services.CoAuthoring.server.editorDataStorage | string | `"editorDataMemory"` | The editor data storage. The possible values: *"editorDataMemory"*, *"editorDataRedis"*. |
| services.CoAuthoring.server.editorStatStorage | string | `""` | The editor data storage for license calculation and statistics (local memory or redis). The possible values are *"editorDataMemory"*, *"editorDataRedis"*, or *""*. The default *""* value means that the value of the *editorDataStorage* parameter will be used. This parameter is primarily used for a sharded cluster. |
| services.CoAuthoring.server.forceSaveUsingButtonWithoutChanges | boolean | `false` | Whether a file without any changes can be forcesaved by clicking the **Save** button. |
| services.CoAuthoring.server.forgottenfiles | string | `"forgotten"` | A folder name where all the forgotten files are stored. |
| services.CoAuthoring.server.forgottenfilesname | string | `"output"` | A forgotten file name. |
| services.CoAuthoring.server.healthcheckfilepath | string | `"../public/healthcheck.docx"` | A path where the health check requests will be sent. |
| services.CoAuthoring.server.isAnonymousSupport | boolean | `true` | Whether the anonymous users have access to the editor or live viewer or not. |
| services.CoAuthoring.server.limits_image_download_timeout | object |  | The timeout properties for downloading images. |
| services.CoAuthoring.server.limits_image_download_timeout.connectionAndInactivity | string | `"2m"` | The request timeout as a duration string. `wholeCycle` limits the whole request cycle. |
| services.CoAuthoring.server.limits_image_download_timeout.wholeCycle | string | `"2m"` | The whole request cycle - a period from the download start to the full download. |
| services.CoAuthoring.server.limits_image_size | integer | `26214400` | A maximum size for all the images uploaded in each process (measured in bytes). |
| services.CoAuthoring.server.limits_tempfile_upload | integer | `104857600` | A maximum size for all the uploaded temporary files used by each process (measured in bytes). |
| services.CoAuthoring.server.maxRequestChanges | integer | `20000` | The maximum number of change records read from the database at once. |
| services.CoAuthoring.server.mode | string | `"development"` | The server mode. |
| services.CoAuthoring.server.host | string | `""` | The bind address of the HTTP listener. An empty value listens on all interfaces. |
| services.CoAuthoring.server.newFileTemplate | string | `"../../document-templates/new"` | A path to the "new" file template if a file of 0 bytes was received from the link for opening. |
| services.CoAuthoring.server.openProtectedFile | boolean | `true` | Whether the password-protected files can be opened or not. |
| services.CoAuthoring.server.port | integer | `8000` | The server port. |
| services.CoAuthoring.server.savetimeoutdelay | integer | `5000` | The conversion start delay time (measured in milliseconds) after the edited file is closed. |
| services.CoAuthoring.server.tokenRequiredParams | boolean | `true` | Whether the [required token parameters](https://api.onlyoffice.com/docs/docs-api/additional-api/signature/browser/#opening-file) will be validated. |
| services.CoAuthoring.server.workerpercpu | integer | `1` | A number of worker threads per CPU. |

</APITable>

### Example {#server-example}

```json
{
  "services": {
    "CoAuthoring": {
      "server": {
        "host": "",
        "port": 8000,
        "workerpercpu": 1,
        "mode": "development",
        "limits_tempfile_upload": 104857600,
        "limits_image_size": 26214400,
        "limits_image_download_timeout": {
          "connectionAndInactivity": "2m",
          "wholeCycle": "2m"
        },
        "callbackRequestTimeout": {
          "connectionAndInactivity": "10m",
          "wholeCycle": "10m"
        },
        "healthcheckfilepath": "../public/healthcheck.docx",
        "savetimeoutdelay": 5000,
        "edit_singleton": false,
        "forgottenfiles": "forgotten",
        "forgottenfilesname": "output",
        "maxRequestChanges": 20000,
        "openProtectedFile": true,
        "isAnonymousSupport": true,
        "editorDataStorage": "editorDataMemory",
        "editorStatStorage": "",
        "assemblyFormatAsOrigin": true,
        "newFileTemplate": "../../document-templates/new",
        "documentFormatsFile": "../../document-formats/onlyoffice-docs-formats.json",
        "downloadFileAllowExt": [
          "pdf",
          "xlsx"
        ],
        "tokenRequiredParams": true,
        "forceSaveUsingButtonWithoutChanges": false,
        "docbuilderEnable": true,
        "convertServiceEnable": true
      }
    }
  }
}
```

## Editor {#editor}

These parameters configure the editor configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.editor.binaryChanges | boolean | `false` | Whether the document changes are saved in binary (**true**) or JSON (**false**) format. |
| services.CoAuthoring.editor.maxChangesSize | string | `"150MB"` | A limit on the total size of the changes made to the document. When the limit is exceeded, the user receives a dialog box with a suggestion to cancel the last action or switch to the offline mode. |
| services.CoAuthoring.editor.reconnection | object |  | The settings for reconnecting the editor to the server. |
| services.CoAuthoring.editor.reconnection.attempts | integer | `50` | A maximum number of attempts to reconnect the editor. |
| services.CoAuthoring.editor.reconnection.delay | string | `"2s"` | The attempt delay for reconnecting the editor. |
| services.CoAuthoring.editor.websocketMaxPayloadSize | string | `"1.5MB"` | A maximum payload size of WebSocket. |

</APITable>

### Example {#editor-example}

```json
{
  "services": {
    "CoAuthoring": {
      "editor": {
        "reconnection": {
          "attempts": 50,
          "delay": "2s"
        },
        "binaryChanges": false,
        "websocketMaxPayloadSize": "1.5MB",
        "maxChangesSize": "150MB"
      }
    }
  }
}
```

## SQL {#sql}

These parameters configure the database configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.sql.type | string | `"postgres"` | The database type (`mysql`, `mariadb`, `mssql`, `postgres`, `dameng`, `oracle`). |
| services.CoAuthoring.sql.dbHost | string | `"localhost"` | The database server host (host name or IP address). |
| services.CoAuthoring.sql.dbPort | integer | `5432` | The database server port. |
| services.CoAuthoring.sql.dbName | string | `"onlyoffice"` | A name of a database to be created on the image startup. |
| services.CoAuthoring.sql.charset | string | `"utf8"` | The database charset. |
| services.CoAuthoring.sql.connectionlimit | integer | `10` | The maximum number of the simultaneous user connections to the database server. |
| services.CoAuthoring.sql.damengExtraOptions | object |  | The Dameng database parameters. |
| services.CoAuthoring.sql.damengExtraOptions.columnNameCase | string | `"lower"` | The case of column names. |
| services.CoAuthoring.sql.damengExtraOptions.columnNameUpperCase | boolean | `false` | Whether the column names are uppercase or not. |
| services.CoAuthoring.sql.damengExtraOptions.connectTimeout | integer | `60000` | A number of milliseconds to wait for a connection. |
| services.CoAuthoring.sql.damengExtraOptions.localTimezone | integer | `0` | The local timezone. |
| services.CoAuthoring.sql.damengExtraOptions.loginEncrypt | boolean | `false` | Whether the login encryption is enabled or not. |
| services.CoAuthoring.sql.damengExtraOptions.poolTimeout | integer | `60` | A number of seconds after which the pool terminates idle connections (unused in the pool). |
| services.CoAuthoring.sql.damengExtraOptions.queueTimeout | integer | `60000` | A number of milliseconds when messages are retained in the queue before they are discarded. |
| services.CoAuthoring.sql.damengExtraOptions.socketTimeout | integer | `60000` | A number of milliseconds when a connection request made by a client or a server doesn't receive a response from the other end. |
| services.CoAuthoring.sql.dbPass | string | `"onlyoffice"` | A password set to the database account.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| services.CoAuthoring.sql.dbUser | string | `"onlyoffice"` | A new username with superuser permissions for the database account. |
| services.CoAuthoring.sql.max_allowed_packet | integer | `1048575` | The maximum size of data that can be sent in one request. |
| services.CoAuthoring.sql.msSqlExtraOptions | object |  | The MS SQL database parameters. |
| services.CoAuthoring.sql.msSqlExtraOptions.options | object |  | The MS SQL database options. |
| services.CoAuthoring.sql.msSqlExtraOptions.options.encrypt | boolean | `false` | Whether the data will be encrypted before sending it over the network. |
| services.CoAuthoring.sql.msSqlExtraOptions.options.trustServerCertificate | boolean | `true` | Whether an encryption occurs when there is no verified server certificate. |
| services.CoAuthoring.sql.msSqlExtraOptions.pool | object |  | The parameters of the connection pool. |
| services.CoAuthoring.sql.msSqlExtraOptions.pool.idleTimeoutMillis | integer | `30000` | A number of milliseconds a client must remain idle in the pool and not be checked out before it is disconnected from the backend and discarded. Set to 0 to disable automatic disconnection of idle clients. |
| services.CoAuthoring.sql.mysqlExtraOptions | object |  | The connection parameters of the MySQL database (including SSL settings) that can be passed directly to the [node-mysql2](https://sidorares.github.io/node-mysql2/docs/examples/connections/create-connection#connectionoptions) module. |
| services.CoAuthoring.sql.mysqlExtraOptions.connectTimeout | integer | `60000` | A number of milliseconds to wait for a connection. |
| services.CoAuthoring.sql.mysqlExtraOptions.queryTimeout | integer | `60000` | A number of milliseconds before a query call times out. |
| services.CoAuthoring.sql.oracleExtraOptions | object |  | The Oracle database parameters. |
| services.CoAuthoring.sql.oracleExtraOptions.connectTimeout | integer | `60` | A number of seconds to wait for a connection. |
| services.CoAuthoring.sql.oracleExtraOptions.thin | boolean | `true` | Whether to use the Oracle Thin driver. False means Thick mode with Oracle Client libraries. |
| services.CoAuthoring.sql.pgPoolExtraOptions | object |  | The parameters that can be passed directly to the [node-postgres pool](https://github.com/brianc/node-postgres-docs/blob/master/content/api/1-pool.mdx#new-poolconfig-object) library. |
| services.CoAuthoring.sql.pgPoolExtraOptions.connectionTimeoutMillis | integer | `60000` | A number of milliseconds to wait for a connection. |
| services.CoAuthoring.sql.pgPoolExtraOptions.idleTimeoutMillis | integer | `30000` | A number of milliseconds a client must remain idle in the pool and not be checked out before it is disconnected from the backend and discarded. Set to 0 to disable automatic disconnection of idle clients. |
| services.CoAuthoring.sql.pgPoolExtraOptions.maxLifetimeSeconds | integer | `1800` | A number of seconds after which a pooled connection is recycled. A running query is never interrupted: the connection is marked as expired and closed when it is returned to the pool. Recycling lets the pool pick up a database failover or an address change and bounds the lifetime of a backend process. Set to 0 to disable recycling. |
| services.CoAuthoring.sql.pgPoolExtraOptions.query_timeout | integer | `300000` | A number of milliseconds before a query call times out on the client side. When it fires, the query is reported as failed and the pool destroys the connection, but the query is not cancelled on the server explicitly. While `statement_timeout` is 0, this is the only limit that keeps a stuck query from holding a pool slot forever. Set to 0 to disable. |
| services.CoAuthoring.sql.pgPoolExtraOptions.statement_timeout | integer | `0` | A number of milliseconds before the query statement times out on the server side. It is passed in the PostgreSQL startup message, so a connection pooler may reject the connection, silently drop the value or forward it to the backend: PgBouncer rejects it unless the parameter is listed in its `ignore_startup_parameters`, and listing it there makes the pooler drop the value instead of applying it. Behind a pooler set the limit on the database itself, for example `ALTER ROLE onlyoffice SET statement_timeout = '60s'`. Set to 0 to disable, which is the default. |
| services.CoAuthoring.sql.tableChanges | string | `"doc_changes"` | The database table name where all the document changes are stored. |
| services.CoAuthoring.sql.tableResult | string | `"task_result"` | The database table name where the query result is stored. |

</APITable>

### Example {#sql-example}

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
          "maxLifetimeSeconds": 1800,
          "statement_timeout": 0,
          "query_timeout": 300000,
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

## Redis {#redis}

These parameters configure the Redis configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.redis.host | string | `"127.0.0.1"` | The Redis server host (host name or IP address). |
| services.CoAuthoring.redis.iooptions | object |  | The parameters (username, password, modules etc.) that can be passed directly to the [ioredis RedisOptions](https://github.com/redis/ioredis/blob/main/lib/redis/RedisOptions.ts) library. |
| services.CoAuthoring.redis.iooptions.lazyConnect | boolean | `true` | Whether the connection to the server will be delayed until the first command is sent or *redis.connect()* is called explicitly. |
| services.CoAuthoring.redis.iooptionsClusterNodes | string[] | `[]` | A list of nodes of the cluster you want to connect to that can be passed directly to the [ioredis cluster](https://github.com/redis/ioredis#cluster) library<br/>to connect to the redis cluster. This setting has the priority over the *iooptions* parameter for connecting to the single redis. |
| services.CoAuthoring.redis.iooptionsClusterOptions | object |  | The parameters (clusterRetryStrategy, dnsLookup, scaleReads etc.) that can be passed directly to the [ioredis cluster](https://github.com/redis/ioredis#cluster) library<br/>to connect to the redis cluster. This setting has the priority over the *iooptions* parameter for connecting to the single redis. |
| services.CoAuthoring.redis.iooptionsClusterOptions.lazyConnect | boolean | `true` | Whether the connection to the server will be delayed until the first command is sent or *redis.connect()* is called explicitly. |
| services.CoAuthoring.redis.name | string | `"redis"` | The Redis client library, `"redis"` or `"ioredis"`. |
| services.CoAuthoring.redis.options | object |  | The parameters (username, password, modules etc.) that can be passed directly to the [node-redis createClient](https://github.com/redis/node-redis/blob/master/docs/client-configuration.md) library. |
| services.CoAuthoring.redis.optionsCluster | object |  | The parameters (rootNodes, defaults, modules etc.) that can be passed directly to the [node-redis clustering](https://github.com/redis/node-redis/blob/master/docs/clustering.md)<br/>library to connect to the redis cluster. This setting has the priority over the *options* parameter for connecting to the single redis. |
| services.CoAuthoring.redis.port | integer | `6379` | The Redis server port. |
| services.CoAuthoring.redis.prefix | string | `"ds:"` | The name prefix for all the used structures in Redis. |

</APITable>

### Example {#redis-example}

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

## Token {#token}

These parameters configure the token configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.token.browser | object |  | The browser token configuration. |
| services.CoAuthoring.token.browser.secretFromInbox | boolean | `true` | Whether the browser token is equal to the token from the incoming requests (`true`) or not (`false`). |
| services.CoAuthoring.token.enable | object |  | Whether the tokens are enabled or not. |
| services.CoAuthoring.token.enable.browser | boolean | `true` | Whether a token in the client-side browser requests is enabled or not. |
| services.CoAuthoring.token.enable.request | object |  | Whether the tokens in the HTTP requests are enabled or not. |
| services.CoAuthoring.token.enable.request.inbox | boolean | `true` | Whether a token in the incoming HTTP requests is enabled or not. |
| services.CoAuthoring.token.enable.request.outbox | boolean | `true` | Whether a token in the outgoing HTTP requests is enabled or not. |
| services.CoAuthoring.token.purposeCheck | string | `"validate"` | How strictly an inbound token must state what it is for. It governs the compatibility-sensitive checks: the token shape heuristic on the inbox operations (converter, docbuilder, command) and the `operation` claim. `off` - neither of them is applied. `validate` - the heuristic is applied on those operations, a token whose `operation` claim names an operation other than the one the endpoint serves is refused, and an endpoint that serves no named operation refuses a token that carries the claim. `strict` - the claim additionally becomes mandatory at the endpoints that name an operation (converter, docbuilder, command); the browser, editor-session and download endpoints share their tokens with one another and keep accepting tokens without the claim. The from-file endpoints require the claim in every mode, because they have no callers that predate it. An unknown value is treated as an invalid setting, and no integrator token is accepted. The setting does not relax the structural rules that each endpoint applies to the token payload it reads, and a token that ONLYOFFICE Docs issues to itself is always checked strictly. |
| services.CoAuthoring.token.inbox | object |  | The configuration of a token from the incoming requests. |
| services.CoAuthoring.token.inbox.header | string | `"Authorization"` | The HTTP header that will be used to send the incoming request token. |
| services.CoAuthoring.token.inbox.inBody | boolean | `false` | Whether a token is enabled in the incoming request body or not. |
| services.CoAuthoring.token.inbox.prefix | string | `"Bearer "` | A prefix in the HTTP header that will be used to send the incoming request token. |
| services.CoAuthoring.token.outbox | object |  | The configuration of a token from the outgoing requests. |
| services.CoAuthoring.token.outbox.algorithm | string | `"HS256"` | An algorithm which is used to sign the outgoing request token. |
| services.CoAuthoring.token.outbox.expires | string | `"5m"` | A period when the outgoing request token expires. |
| services.CoAuthoring.token.outbox.header | string | `"Authorization"` | The HTTP header that will be used to send the outgoing request token. |
| services.CoAuthoring.token.outbox.inBody | boolean | `false` | Whether a token is enabled in the outgoing request body or not. |
| services.CoAuthoring.token.outbox.prefix | string | `"Bearer "` | A prefix in the HTTP header that will be used to send the outgoing request token. |
| services.CoAuthoring.token.outbox.urlExclusionRegex | string | `""` | The regular expression that specifies URLs from which the authorization should be excluded. The empty string means that this option is disabled. |
| services.CoAuthoring.token.session | object |  | The session token configuration. |
| services.CoAuthoring.token.session.algorithm | string | `"HS256"` | An algorithm which is used to sign the session token. |
| services.CoAuthoring.token.session.expires | string | `"30d"` | A period when the session token expires. |
| services.CoAuthoring.token.verifyOptions | object |  | The token verifying options. |
| services.CoAuthoring.token.verifyOptions.clockTolerance | integer | `60` | A number of seconds which is acceptable when dealing with the clock differences among different servers. |

</APITable>

### Example {#token-example}

```json
{
  "services": {
    "CoAuthoring": {
      "token": {
        "enable": {
          "browser": true,
          "request": {
            "inbox": true,
            "outbox": true
          }
        },
        "purposeCheck": "validate",
        "browser": {
          "secretFromInbox": true
        },
        "inbox": {
          "header": "Authorization",
          "prefix": "Bearer ",
          "inBody": false
        },
        "outbox": {
          "header": "Authorization",
          "prefix": "Bearer ",
          "algorithm": "HS256",
          "expires": "5m",
          "inBody": false,
          "urlExclusionRegex": ""
        },
        "session": {
          "algorithm": "HS256",
          "expires": "30d"
        },
        "verifyOptions": {
          "clockTolerance": 60
        }
      }
    }
  }
}
```

## Expiration {#expiration}

These parameters configure the expiration settings.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.expire.filesCron | string | `"00 00 */1 * * *"` | The time for check starting (every hour by default). |
| services.CoAuthoring.expire.documentsCron | string | `"0 */2 * * * *"` | The time for starting check, during which old files are deleted from the cache (every two minutes by default). |
| services.CoAuthoring.expire.files | integer | `86400` | The time of life for the folders in `App_Data`. |
| services.CoAuthoring.expire.filesremovedatonce | integer | `100` | The number of simultaneously deleted document folders from the cache. |
| services.CoAuthoring.expire.sessionidle | string | `"1h"` | The inactive session lifetime. This parameter allows ending editing session for an idle user. It is also used to initialize document saving procedure by terminating the last editing session. So, it defines the time after which an inactive user will be disconnected from the editing session. Its value format is "1s", "1m", "1h", "1d" etc.<br/><br/>**Note:** Please note that by inactivity, we mean the absence of any action in the editor, including cursor movement. |
| services.CoAuthoring.expire.sessionabsolute | string | `"30d"` | The lifetime for any editing session. |
| services.CoAuthoring.expire.changeindex | integer | `86400` | The time for changing indexes. |
| services.CoAuthoring.expire.forcesave | integer | `604800` | The time of life for the forcesaving executed with success. |
| services.CoAuthoring.expire.forcesaveLock | integer | `5000` | The time of life for the forcesaved locks in the ioredis cluster mode. |
| services.CoAuthoring.expire.lastsave | integer | `604800` | The time of life for the last database save executed with success. |
| services.CoAuthoring.expire.lockDoc | integer | `30` | The time for locking documents. |
| services.CoAuthoring.expire.locks | integer | `604800` | The time of life for the locks. |
| services.CoAuthoring.expire.message | integer | `86400` | The time of life for the messages. |
| services.CoAuthoring.expire.monthUniqueUsers | string | `"1y"` | The time of life for the list of the month unique users. |
| services.CoAuthoring.expire.pemCheckPeriod | string | `"10m"` | The time for checking the PEM files ttl. |
| services.CoAuthoring.expire.pemStdTTL | string | `"1h"` | The time of life for the PEM files with secrets. |
| services.CoAuthoring.expire.presence | integer | `300` | The time of life for the user presence status. |
| services.CoAuthoring.expire.saved | integer | `3600` | The time of life for the database save executed with success. |
| services.CoAuthoring.expire.saveLock | integer | `60` | The time for saving locks. |
| services.CoAuthoring.expire.sessionclosecommand | string | `"2m"` | The time before the `sessionidle` or `sessionabsolute ttl` expires when a warning message is sent. |
| services.CoAuthoring.expire.updateVersionStatus | string | `"5m"` | The time when the user can open the file again after an error occurs due to opening an already saved file using the old key. |

</APITable>

### Example {#expiration-example}

```json
{
  "services": {
    "CoAuthoring": {
      "expire": {
        "saveLock": 60,
        "presence": 300,
        "locks": 604800,
        "changeindex": 86400,
        "lockDoc": 30,
        "message": 86400,
        "lastsave": 604800,
        "forcesave": 604800,
        "forcesaveLock": 5000,
        "saved": 3600,
        "documentsCron": "0 */2 * * * *",
        "files": 86400,
        "filesCron": "00 00 */1 * * *",
        "filesremovedatonce": 100,
        "sessionidle": "1h",
        "sessionabsolute": "30d",
        "sessionclosecommand": "2m",
        "pemStdTTL": "1h",
        "pemCheckPeriod": "10m",
        "updateVersionStatus": "5m",
        "monthUniqueUsers": "1y"
      }
    }
  }
}
```

## Auto assembly {#auto-assembly}

These parameters configure the automatic forcesaving configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.autoAssembly.step | string | `"1m"` | The interval between automatic force-save checks, as a duration string. |
| services.CoAuthoring.autoAssembly.enable | boolean | `false` | Whether the automatic forcesaving is enabled or not. |
| services.CoAuthoring.autoAssembly.interval | string | `"5m"` | The interval time for initiating the automatic forcesaving, as a duration string. |

</APITable>

### Example {#auto-assembly-example}

```json
{
  "services": {
    "CoAuthoring": {
      "autoAssembly": {
        "enable": false,
        "interval": "5m",
        "step": "1m"
      }
    }
  }
}
```

## Callback backoff options {#callback-backoff-options}

These parameters configure the [callback backoff options](https://github.com/tim-kos/node-retry#retrytimeoutsoptions).

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.callbackBackoffOptions.httpStatus | string | `"429,500-599"` | The HTTP statuses of the callback backoff. |
| services.CoAuthoring.callbackBackoffOptions.retries | integer | `3` | The maximum amount of times to retry the operation. |
| services.CoAuthoring.callbackBackoffOptions.timeout | object |  | The callback backoff timeouts. |
| services.CoAuthoring.callbackBackoffOptions.timeout.factor | integer | `2` | The exponential factor to use. |
| services.CoAuthoring.callbackBackoffOptions.timeout.maxTimeout | integer | `2147483647` | The maximum number of milliseconds between two retries. |
| services.CoAuthoring.callbackBackoffOptions.timeout.minTimeout | integer | `1000` | The number of milliseconds before starting the first try. |
| services.CoAuthoring.callbackBackoffOptions.timeout.randomize | boolean | `false` | Whether the timeouts are randomized by multiplying with a factor between 1 and 2 or not. |

</APITable>

### Example {#callback-backoff-options-example}

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

## IP filter {#ip-filter}

These parameters configure the IP filter configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.ipfilter.rules | object[] | `[{"address":"*","allowed":true}]` | The IP filter rules that contain the following parameters:<br/>- **address** - the IP address of the integrator. This parameter can contain IP in the X.X.X.X format for ipv4 or in the xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx format for ipv6, dns-name or * wildcard to replace any symbol/symbols, **type**: string, **example**: "ip_address";<br/>- **allowed** - specifies if the IP address is trusted or not, **type**: boolean, **example**: true. |
| services.CoAuthoring.ipfilter.useforrequest | boolean | `false` | Whether the IP filter is used for the request or not. |
| services.CoAuthoring.ipfilter.errorcode | integer | `403` | An error code for the IP filter. |

</APITable>

### Example {#ip-filter-example}

```json
{
  "services": {
    "CoAuthoring": {
      "ipfilter": {
        "rules": [
          {
            "address": "*",
            "allowed": true
          }
        ],
        "useforrequest": false,
        "errorcode": 403
      }
    }
  }
}
```

## Plugins {#plugins}

These parameters configure the plugins configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.plugins.autostart | string[] | `[]` | A list of plugins that run automatically. |
| services.CoAuthoring.plugins.uri | string | `"/sdkjs-plugins"` | A path to the folder where all the plugins are stored. |

</APITable>

### Example {#plugins-example}

```json
{
  "services": {
    "CoAuthoring": {
      "plugins": {
        "uri": "/sdkjs-plugins",
        "autostart": []
      }
    }
  }
}
```

## PubSub service {#pubsub-service}

This parameter configures the PubSub service configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.pubsub.maxChanges | integer | `1000` | The maximum size of changes which can be passed via PubSub. If the size exceeds the specified value, the changes will be read from the database. |

</APITable>

### Example {#pubsub-service-example}

```json
{
  "services": {
    "CoAuthoring": {
      "pubsub": {
        "maxChanges": 1000
      }
    }
  }
}
```

## Request Filtering Agent {#request-filtering-agent}

These parameters configure the [Request Filtering Agent configuration](https://github.com/azu/request-filtering-agent#api).

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.request-filtering-agent.allowPrivateIPAddress | boolean | `false` | Whether it is allowed to connect private IP address or not. This includes private IP addresses and reserved IP addresses. |
| services.CoAuthoring.request-filtering-agent.allowMetaIPAddress | boolean | `false` | Whether it is allowed to connect meta IP address or not. Meta address can be `0.0.0.0` (IPv4) or `::` (IPv6) - a meta address that routing another address. |
| services.CoAuthoring.request-filtering-agent.allowIPAddressList | string[] | `[]` | The IP addresses that are allowed even when they are private. The request-filtering-agent applies this list before its own meta, private and deny checks. It does not make a host a permitted WOPI destination: that is decided by `services.CoAuthoring.ipfilter.rules`. |
| services.CoAuthoring.request-filtering-agent.denyIPAddressList | string[] | `[]` | The IP addresses that are never allowed. For WOPI destinations this list is applied before `services.CoAuthoring.ipfilter.rules`, so an address listed here is refused even when a rule names it. For the other requests the request-filtering-agent's own precedence applies, where `allowIPAddressList` is checked first. The list covers the requests that go through the filtering agent; see `externalRequest` for the requests that are sent directly. |

</APITable>

### Example {#request-filtering-agent-example}

```json
{
  "services": {
    "CoAuthoring": {
      "request-filtering-agent": {
        "allowPrivateIPAddress": false,
        "allowMetaIPAddress": false
      }
    }
  }
}
```

## Default request {#default-request}

These parameters configure the [default request configuration](https://github.com/request/request#requestoptions-callback).

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.requestDefaults.rejectUnauthorized | boolean | `true` | Whether TLS certificates are verified. Set to `false` only for diagnostics with self-signed or invalid certificates. |
| services.CoAuthoring.requestDefaults.checksumVerification | boolean | `true` | Whether downloaded content is verified against integrity response headers (Content-Length, Repr-Digest, Content-Digest, Digest, x-amz-checksum-*, x-goog-hash, OC-Checksum, Content-MD5) and caller-provided expected digests such as WOPI SHA256. When enabled, the Want-Repr-Digest and Want-Content-Digest headers are added to download requests. |
| services.CoAuthoring.requestDefaults.headers | object |  | Default HTTP headers added to every outgoing request. |
| services.CoAuthoring.requestDefaults.headers.User-Agent | string | `"DocumentServer"` | HTTP User-Agent header sent with outgoing requests. |
| services.CoAuthoring.requestDefaults.headers.Connection | string | `"Keep-Alive"` | HTTP Connection header controlling keep-alive behaviour for outgoing requests. |

</APITable>

### Example {#default-request-example}

```json
{
  "services": {
    "CoAuthoring": {
      "requestDefaults": {
        "headers": {
          "User-Agent": "DocumentServer",
          "Connection": "Keep-Alive"
        },
        "rejectUnauthorized": true,
        "checksumVerification": true
      }
    }
  }
}
```

## Socket.IO {#socket-io}

These parameters configure the Socket.IO module configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.socketio.connection | object |  | The connection properties. |
| services.CoAuthoring.socketio.connection.maxHttpBufferSize | integer | `100000000` | The maximum number of bytes a single message can be, before closing the socket. |
| services.CoAuthoring.socketio.connection.path | string | `"/doc/"` | The path that is captured on the server side. |
| services.CoAuthoring.socketio.connection.pingInterval | integer | `25000` | The interval time in milliseconds, which is used to check if the connection is still alive between the server and the client.<br/>The server sends a ping packet to the client, and if the client does not respond with a pong within a `pingTimeout` period,<br/>the server considers that the connection is closed. |
| services.CoAuthoring.socketio.connection.pingTimeout | integer | `20000` | The timeout period in milliseconds within which the client must respond with a pong to the server ping.<br/>If there is no response, the server considers that the connection is closed.<br/>The connection between the server and the client is checked every `pingInterval` milliseconds. |
| services.CoAuthoring.socketio.connection.serveClient | boolean | `false` | Whether the client files will be served or not. |

</APITable>

### Example {#socket-io-example}

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

## SockJs {#sockjs}

These parameters configure the SockJs configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.sockjs.disable_cors | boolean | `true` | Whether CORS is disabled for the SockJS endpoints or not. When the value is **true**, the **Access-Control-Allow-Origin** header is not sent. |
| services.CoAuthoring.sockjs.sockjs_url | string | `""` | A path to the `sockjs.min.js` file. |
| services.CoAuthoring.sockjs.websocket | boolean | `true` | Whether the WebSocket protocol is enabled or not. |

</APITable>

### Example {#sockjs-example}

```json
{
  "services": {
    "CoAuthoring": {
      "sockjs": {
        "sockjs_url": "",
        "disable_cors": true,
        "websocket": true
      }
    }
  }
}
```

## Themes {#themes}

This parameter configures the properties of the custom color themes.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.themes.uri | string | `"/web-apps/apps/common/main/resources/themes"` | A path to the folder where all the *json* files with the custom color themes are stored. |

</APITable>

### Example {#themes-example}

```json
{
  "services": {
    "CoAuthoring": {
      "themes": {
        "uri": "/web-apps/apps/common/main/resources/themes"
      }
    }
  }
}
```

## Utils {#utils}

These parameters configure the utils configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| services.CoAuthoring.utils.limits_image_types_upload | string |  | The supported image formats for uploading. |
| services.CoAuthoring.utils.utils_common_fontdir | string | `"null"` | A directory where all the fonts are stored. |
| services.CoAuthoring.utils.utils_fonts_search_patterns | string | `"*.ttf;*.ttc;*.otf"` | The patterns for searching font files of the corresponding extensions. |
| services.CoAuthoring.utils.limits_document_types_upload | string | `"xlsx"` | Semicolon-separated list of document file extensions allowed for upload. Only files matching these extensions are accepted. |

</APITable>

### Example {#utils-example}

```json
{
  "services": {
    "CoAuthoring": {
      "utils": {
        "utils_common_fontdir": "null",
        "utils_fonts_search_patterns": "*.ttf;*.ttc;*.otf",
        "limits_image_types_upload": "jpg;jpeg;jpe;jfif;jif;png;gif;bmp;svg;tiff;tif;webp;heic;heif;avif",
        "limits_document_types_upload": "xlsx"
      }
    }
  }
}
```

## License {#license}

These parameters configure the license configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| license.license_file | string | `""` | A path to the license file. |
| license.warning_limit_percents | integer | `70` | A percent range of the [connections and connections_view](https://api.onlyoffice.com/docs/docs-api/additional-api/command-service/license/)<br/>limitations, exceeding which a license limit warning appears in logs. |
| license.packageType | integer | `0` | The license package type: 2 - Developer Edition.<br/><br/>**Note:** This parameter is set at the time of version build. You do not have to manually configure it. |
| license.warning_license_expiration | string | `"30d"` | The time before the license expires when a warning message is sent. |

</APITable>

### Example {#license-example}

```json
{
  "license": {
    "license_file": "",
    "warning_limit_percents": 70,
    "packageType": 0,
    "warning_license_expiration": "30d"
  }
}
```

## Converter {#converter}

These parameters configure the file converter configuration.

<APITable>

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| FileConverter.converter | object |  | The converter properties. |
| FileConverter.converter.maxDownloadBytes | integer | `104857600` | A maximum size of the file being requested (measured in bytes). |
| FileConverter.converter.signingKeyStorePath | string | `""` | Legacy. The path to the signing certificate file. Use `signing.keyStorePath` instead. |
| FileConverter.converter.signing | object |  | The signing settings. `keyStorePath` takes priority over legacy `signingKeyStorePath`. Cloud provider is detected by `awsKms.keyId`. |
| FileConverter.converter.signing.keyStorePath | string | `""` | The path to the signing certificate. P12/PFX for local x2t, PEM chain for cloud signing. |
| FileConverter.converter.signing.meta | object |  | The signature metadata fields embedded in the PDF digital signature. |
| FileConverter.converter.signing.meta.reason | string | `""` | The purpose of signing (e.g. Approved). |
| FileConverter.converter.signing.meta.name | string | `""` | The signer name. |
| FileConverter.converter.signing.meta.location | string | `""` | The signing location. |
| FileConverter.converter.signing.meta.contactInfo | string | `""` | The contact details (URL or email). |
| FileConverter.converter.signing.awsKms | object |  | The AWS KMS (or compatible) settings. Set `keyId` to enable. |
| FileConverter.converter.signing.awsKms.endpoint | string | `""` | The KMS endpoint URL. Allows alternative KMS-compatible services. |
| FileConverter.converter.signing.awsKms.keyId | string | `""` | The KMS key ID or ARN. If set, AWS KMS signing is active. |
| FileConverter.converter.signing.awsKms.accessKeyId | string | `""` | The AWS access key. Leave empty to use the default credential chain. |
| FileConverter.converter.signing.awsKms.secretAccessKey | string | `""` | The AWS secret access key.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| FileConverter.converter.signing.csc | object |  | The CSC API v2 (ETSI TS 119 432) settings. Set `baseUrl` to enable. |
| FileConverter.converter.signing.csc.baseUrl | string | `""` | The CSC API base URL. If set, CSC signing is active. |
| FileConverter.converter.signing.csc.tokenUrl | string | `""` | The OAuth2 token endpoint. |
| FileConverter.converter.signing.csc.clientId | string | `""` | The OAuth2 client ID. |
| FileConverter.converter.signing.csc.clientSecret | string | `""` | The OAuth2 client secret.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| FileConverter.converter.signing.csc.grantType | string | `""` | Optional. The OAuth2 grant type: `''` (auto-detect), `'password'`, or `'client_credentials'`. Empty selects based on presence of username/password. |
| FileConverter.converter.signing.csc.clientAuth | string | `""` | Optional. How the client authenticates to the token endpoint: `''` (body), `'basic'`, `'body'`, or `'both'`. |
| FileConverter.converter.signing.csc.tokenBodyFormat | string | `""` | Optional. The token request body format: `'form'` (default, RFC 6749) or `'json'`. |
| FileConverter.converter.signing.csc.username | string | `""` | Optional. The username for the password grant type. |
| FileConverter.converter.signing.csc.password | string | `""` | Optional. The password for the password grant type.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| FileConverter.converter.signing.csc.credentialId | string | `""` | Optional. The signing credential ID. Auto-discovered via credentials/list when empty. |
| FileConverter.converter.signing.csc.clientData | string | `""` | Optional. The provider-specific `clientData` for credentials/list (e.g. eSeal credential type). |
| FileConverter.converter.signing.csc.scope | string | `"service"` | Optional. The OAuth2 scope (e.g. `'service'`). |
| FileConverter.converter.signing.csc.audience | string | `""` | Optional. The OAuth2 audience parameter. |
| FileConverter.converter.spawnOptions | object |  | The parameters that can be passed directly to the [node.js child_process.spawn](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options) library (only for running x2t). |
| FileConverter.converter.spawnOptions.env.SIGNING_KEYSTORE_PASSPHRASE | string |  | The passphrase for the PKCS#12 keystore file.<br/><br/>**Warning:** Do not store sensitive values in version control. Consider using environment variables or a secrets manager. |
| FileConverter.converter.inputLimits | object[] |  | The limits for input files. |
| FileConverter.converter.inputLimits.type | string |  | The OOXML file types for which the limits are specified (text documents/spreadsheets/presentations/diagrams). This does not include other objects, like images. |
| FileConverter.converter.inputLimits.zip | object |  | The zip archive properties. |
| FileConverter.converter.inputLimits.zip.template | string | `"*.xml"` | The name template for files which sizes are counted. |
| FileConverter.converter.inputLimits.zip.uncompressed | string |  | The maximum total uncompressed size of the matching files in the archive. |
| FileConverter.converter.args | string | `""` | The additional parameters for running x2t. |
| FileConverter.converter.docbuilderPath | string | `"null"` | A path to the Document Builder application. |
| FileConverter.converter.downloadAttemptDelay | integer | `1000` | The attempt delay to download the converted file. |
| FileConverter.converter.downloadAttemptMaxCount | integer | `3` | A maximum number of attempts to download the converted file. |
| FileConverter.converter.downloadTimeout | object |  | The timeout properties for downloading the converted file. |
| FileConverter.converter.downloadTimeout.connectionAndInactivity | string | `"2m"` | The request timeout as a duration string. `wholeCycle` limits the whole request cycle. |
| FileConverter.converter.downloadTimeout.wholeCycle | string | `"2m"` | The whole request cycle timeout. |
| FileConverter.converter.errorfiles | string | `""` | A path to the error files. |
| FileConverter.converter.fontDir | string | `"null"` | A path to the folder with fonts. |
| FileConverter.converter.maxprocesscount | integer | `1` | A maximum number of conversion processes which can be active at one time. |
| FileConverter.converter.maxRedeliveredCount | integer | `2` | A maximum number of message re-deliveries. |
| FileConverter.converter.presentationThemesDir | string | `"null"` | A path to the folder with the presentation themes. |
| FileConverter.converter.streamWriterBufferSize | integer | `8388608` | The StreamWriter buffer size. |
| FileConverter.converter.x2tPath | string | `"null"` | A path to the x2t file converter. |

</APITable>

### Example {#converter-example}

```json
{
  "FileConverter": {
    "converter": {
      "maxDownloadBytes": 104857600,
      "downloadTimeout": {
        "connectionAndInactivity": "2m",
        "wholeCycle": "2m"
      },
      "downloadAttemptMaxCount": 3,
      "downloadAttemptDelay": 1000,
      "maxprocesscount": 1,
      "fontDir": "null",
      "presentationThemesDir": "null",
      "x2tPath": "null",
      "docbuilderPath": "null",
      "signingKeyStorePath": "",
      "signing": {
        "keyStorePath": "",
        "meta": {
          "reason": "",
          "name": "",
          "location": "",
          "contactInfo": ""
        },
        "awsKms": {
          "endpoint": "",
          "keyId": "",
          "accessKeyId": "",
          "secretAccessKey": ""
        },
        "csc": {
          "baseUrl": "",
          "tokenUrl": "",
          "clientId": "",
          "clientSecret": "",
          "grantType": "",
          "clientAuth": "",
          "tokenBodyFormat": "",
          "username": "",
          "password": "",
          "credentialId": "",
          "clientData": "",
          "scope": "service",
          "audience": ""
        }
      },
      "args": "",
      "spawnOptions": {},
      "errorfiles": "",
      "streamWriterBufferSize": 8388608,
      "maxRedeliveredCount": 2,
      "inputLimits": [
        {
          "type": "docx;dotx;docm;dotm",
          "zip": {
            "uncompressed": "50MB",
            "template": "*.xml"
          }
        },
        {
          "type": "xlsx;xltx;xlsm;xltm",
          "zip": {
            "uncompressed": "300MB",
            "template": "*.xml"
          }
        },
        {
          "type": "pptx;ppsx;potx;pptm;ppsm;potm",
          "zip": {
            "uncompressed": "50MB",
            "template": "*.xml"
          }
        },
        {
          "type": "vsdx;vstx;vssx;vsdm;vstm;vssm",
          "zip": {
            "uncompressed": "50MB",
            "template": "*.xml"
          }
        }
      ]
    }
  }
}
```
