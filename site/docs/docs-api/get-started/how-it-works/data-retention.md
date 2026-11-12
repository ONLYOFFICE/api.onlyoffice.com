---
sidebar_position: -7
---

# Data retention

ONLYOFFICE Docs does not store documents permanently: they stay in the **document storage service**. While a document is open, the **document editing service** keeps a working copy of it and the changes users make. This page explains what data is kept, where, for how long, and how to delete it.

## What ONLYOFFICE Docs stores

| Data | Where it is stored | How long it is kept |
| ---- | ------------------ | ------------------- |
| Document cache (working copy, images, saved result) | The [cache storage](#where-the-cache-is-stored) | At least 24 hours after the document was last opened |
| Temporary conversion files | The temporary folder of the operating system | Deleted when the conversion finishes |
| Document changes | The [database](../configuration/server-config/server-config.md#sql) in the Enterprise and Developer editions, in memory in the Community edition | Deleted once the document is saved and the **document storage service** returns `{"error":0}` to the [callback](../../usage-api/callback-handler.md#response-from-the-document-storage-service) |
| Document record (status, callback address) | Same as document changes | Deleted together with the document cache |
| [Forgotten files](#forgotten-files) | The cache storage, or the [persistent storage](../configuration/server-config/server-config.md#persistent-storage) if configured | Not deleted automatically |
| Errored files (input files of failed conversions) | Not saved by default. When [`FileConverter.converter.errorfiles`](../configuration/server-config/server-config.md#converter) is set, the cache storage or the persistent storage | 30 days in the Linux and Windows packages, if the files are in the local `errors` folder. Otherwise, not deleted automatically |
| [Logs](#logs) | The log folder of ONLYOFFICE Docs | 30 days in the Linux and Windows packages |

The cache is cleaned up every hour. A document that is still open, or whose changes have not been saved yet, is not deleted, even when the retention time has passed. The retention time counts from the moment the document was last opened, not from the end of editing.

In the Community edition, document changes and records are kept in memory. Starting from version 10.0, unsaved changes are saved as forgotten files when ONLYOFFICE Docs shuts down normally. After an unexpected restart, such as a server reboot or a process crash, they are lost. Cache folders created before a restart are no longer deleted automatically: a folder is cleaned up only if the same document is opened again.

## Default times

All the settings below are described in the [Expiration](../configuration/server-config/server-config.md#expiration) and [Document storage service](../configuration/server-config/server-config.md#document-storage-service) sections of the server configuration. Most of them can also be changed in the [Admin Panel](https://helpcenter.onlyoffice.com/docs/configuration/enterprise/docker/admin-panel) without a restart.

| What | Default | Setting |
| ---- | ------- | ------- |
| Cache retention | `86400` seconds (24 hours) | `services.CoAuthoring.expire.files` |
| Cache cleanup schedule | Every hour (`00 00 */1 * * *`) | `services.CoAuthoring.expire.filesCron` |
| Document folders deleted per cleanup run | `100` | `services.CoAuthoring.expire.filesremovedatonce` |
| Check for abandoned editing sessions, which saves pending changes | Every 2 minutes (`0 */2 * * * *`) | `services.CoAuthoring.expire.documentsCron` |
| Idle user disconnected from editing | 1 hour (`1h`) | `services.CoAuthoring.expire.sessionidle` |
| Maximum editing session length | 30 days (`30d`) | `services.CoAuthoring.expire.sessionabsolute` |
| Signed links to the cache | `900` seconds (15 minutes) | `storage.fs.urlExpires` |

`storage.urlExpires` is not used: links to Amazon S3 and Azure Blob Storage also expire after `storage.fs.urlExpires`.

## Where the cache is stored

By default, the cache is stored on the ONLYOFFICE Docs server:

- Linux: `/var/lib/onlyoffice/documentserver/App_Data/cache/files`;
- Windows: `C:\Program Files\ONLYOFFICE\DocumentServer\server\App_Data\cache\files`.

You can move it to Amazon S3, Azure Blob Storage, or a volume mounted from another server, for example, to use the encryption provided by the storage or to share the cache between several servers in a cluster. See the [Document storage service](../configuration/server-config/server-config.md#document-storage-service) settings.

- **Amazon S3**: turn on server-side encryption (`aws:kms` or `AES256`) in the `storage.commandOptions.s3` settings.
- **Azure Blob Storage**: use an encryption scope in the `storage.commandOptions.az` settings.

By default, ONLYOFFICE Docs proxies requests to the external storage, so users do not get direct links to it (`storage.useDirectStorageUrls` is `false`).

The `files` folder of the cache storage (the `files/` prefix in Amazon S3 and Azure Blob Storage) contains:

- `data/<key>`: the document cache;
- `forgotten/<key>`: forgotten files;
- `<errorfiles>/<format>/<key>`: errored files, if enabled. `<errorfiles>` is the value of `FileConverter.converter.errorfiles`, `<format>` is the extension of the input file.

`<key>` is the [document key](../../usage-api/config/document/document.md#key) from the editor configuration. If the persistent storage is configured, forgotten and errored files are stored there under the same names.

## Who can access the cache

- ONLYOFFICE Docs itself.
- The owner of the storage where the cache is located, and administrators with access to it.
- The user who opened the document: requests from their browser contain a link to the cache of that document.

Links to the cache are signed and expire after 15 minutes by default (`storage.fs.urlExpires`). A random signing secret is generated at installation, unless you set your own:

- Linux and Windows packages and the Docker image: the [`SECURE_LINK_SECRET`](https://github.com/ONLYOFFICE/Docker-DocumentServer#available-configuration-parameters) environment variable;
- Helm chart for Kubernetes, starting from chart version 4.5.0: [`proxy.secureLinkSecret` or `proxy.secureLinkExistingSecret`](https://github.com/ONLYOFFICE/Kubernetes-Docs#4-parameters). The generated secret is kept across upgrades.

For other ways to protect your installation, see the [security checklist](https://helpcenter.onlyoffice.com/docs/configuration/securityguide).

## Logs

ONLYOFFICE Docs writes its logs to `/var/log/onlyoffice/documentserver/` on Linux and to `C:\Program Files\ONLYOFFICE\DocumentServer\Log\` on Windows. For the location of each log file, see the troubleshooting guides for [Linux](https://helpcenter.onlyoffice.com/docs/installation/community/linux/troubleshooting), [Windows](https://helpcenter.onlyoffice.com/docs/installation/community/windows/troubleshooting), and [Docker](https://helpcenter.onlyoffice.com/docs/installation/enterprise/docker/troubleshooting).

- Linux packages rotate the logs daily and keep 30 compressed files.
- Windows packages add a daily scheduled task that deletes log files older than 30 days.
- The same jobs delete errored files older than 30 days, but only from the `errors` folder of the cache on the ONLYOFFICE Docs server. To have them cleaned up, set `FileConverter.converter.errorfiles` to `errors` and keep the cache local.
- In Docker and Kubernetes, logs also go to the container output. How long it is kept depends on your Docker or cluster logging settings.

## Forgotten files

Forgotten files contain changes that were not saved before ONLYOFFICE Docs shut down. The cache cleanup does not delete them. A forgotten file is removed when the document is opened and saved again, or when you delete it with the [deleteForgotten](../../additional-api/command-service/deleteforgotten.md) command. Use [getForgottenList](../../additional-api/command-service/getforgottenlist.md) and [getForgotten](../../additional-api/command-service/getforgotten.md) to find them.

To keep forgotten and errored files apart from the temporary cache, for example, in a separate S3 bucket, configure the [persistent storage](../configuration/server-config/server-config.md#persistent-storage). This also makes server upgrades easier.

## Deleting the data of one document

There is no single command for this. To delete everything ONLYOFFICE Docs keeps for a document:

1. Make sure no one has the document open and saving has finished. The [drop](../../additional-api/command-service/drop.md) command disconnects users; unsaved changes are then saved and sent to the **document storage service**.
2. Delete the forgotten file with the [deleteForgotten](../../additional-api/command-service/deleteforgotten.md) command.
3. Delete the `data/<key>` and `data/<key>~*` folders from the cache storage, or wait for the automatic cleanup.
4. Delete the errored files of the document, if enabled.
5. In the Enterprise and Developer editions, delete the rows of the document from the `task_result` and `doc_changes` tables: the rows of its tenant whose `id` equals the key or starts with `<key>~`.

   :::warning
   Back up the database first, and delete the rows only after step 1 is complete.
   :::

Log lines contain the document key and the user ID. They cannot be cleaned for one document; log rotation deletes them after 30 days.

## Deleting all data when decommissioning a server

Delete:

- the cache storage and the persistent storage, if configured;
- the database (Enterprise and Developer editions);
- the Redis and RabbitMQ data, if used;
- the logs;
- `local.json` and `runtime.json`, which can contain secrets such as the JWT secret, and the license file;
- the Docker volumes, if ONLYOFFICE Docs runs in Docker.
