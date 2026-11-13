---
sidebar_position: -7
---

# 数据保留

ONLYOFFICE 文档不会永久存储文档：文档始终保存在**文档存储服务**中。文档打开期间，**文档编辑服务**会保留文档的工作副本以及用户所做的更改。本页介绍保留哪些数据、存储在何处、保留多长时间以及如何删除这些数据。

## ONLYOFFICE 文档存储的数据 {#what-onlyoffice-docs-stores}

| 数据 | 存储位置 | 保留时间 |
| ---- | -------- | -------- |
| 文档缓存（工作副本、图像、保存结果） | [缓存存储](#where-the-cache-is-stored) | 自文档最后一次打开起至少 24 小时。在社区版中，重启之前创建的文件夹会保留到再次打开该文档为止 |
| 临时转换文件 | 操作系统的临时文件夹 | 转换完成后删除 |
| 文档更改 | 企业版和开发者版存储在[数据库](../configuration/server-config/server-config.md#sql)中，社区版存储在内存中 | 文档保存完成且**文档存储服务**对[回调](../../usage-api/callback-handler.md#response-from-the-document-storage-service)返回 `{"error":0}` 后删除 |
| 文档记录（状态、回调地址） | 与文档更改相同 | 与文档缓存一起删除 |
| [被遗忘的文件](#forgotten-files) | 缓存存储；如果已配置，则为[持久存储](../configuration/server-config/server-config.md#persistent-storage) | 不会自动删除 |
| 错误文件（转换失败的输入文件） | 默认不保存。设置 [`FileConverter.converter.errorfiles`](../configuration/server-config/server-config.md#converter) 后，保存在缓存存储或持久存储中 | 如果文件位于本地 `errors` 文件夹中，Linux 和 Windows 安装包中为 30 天；否则不会自动删除 |
| [日志](#logs) | ONLYOFFICE 文档的日志文件夹 | Linux 和 Windows 安装包中为 30 天 |

缓存每小时清理一次。仍处于打开状态或更改尚未保存的文档不会被删除，即使已超过保留时间。保留时间从文档最后一次打开时开始计算，而不是从编辑结束时开始计算。

在社区版中，文档更改和记录保存在内存中。从 10.0 版本开始，ONLYOFFICE 文档正常关闭时，未保存的更改会保存为被遗忘的文件。如果发生意外重启（例如服务器重启或进程崩溃），这些更改将丢失。由于记录已丢失，任何重启之前创建的缓存文件夹都不会被自动清理删除：只有再次打开同一文档时，才会清理该文件夹。在企业版和开发者版中，记录保存在数据库中，因此自动清理会照常删除这些文件夹。

## 默认时间 {#default-times}

以下所有设置均在服务器配置的[过期](../configuration/server-config/server-config.md#expiration)和[文档存储服务](../configuration/server-config/server-config.md#document-storage-service)部分中进行了说明。其中大部分设置也可以在[管理面板](https://helpcenter.onlyoffice.com/zh/docs/configuration/enterprise/docker/admin-panel)中更改，无需重启。

| 内容 | 默认值 | 设置 |
| ---- | ------ | ---- |
| 缓存保留时间 | `86400` 秒（24 小时） | `services.CoAuthoring.expire.files` |
| 缓存清理计划 | 每小时（`00 00 */1 * * *`） | `services.CoAuthoring.expire.filesCron` |
| 每次清理删除的文档文件夹数 | `100` | `services.CoAuthoring.expire.filesremovedatonce` |
| 检查被放弃的编辑会话并保存待处理的更改 | 每 2 分钟（`0 */2 * * * *`） | `services.CoAuthoring.expire.documentsCron` |
| 断开空闲用户的编辑连接 | 1 小时（`1h`） | `services.CoAuthoring.expire.sessionidle` |
| 编辑会话的最长时间 | 30 天（`30d`） | `services.CoAuthoring.expire.sessionabsolute` |
| 指向缓存的签名链接 | `900` 秒（15 分钟） | `storage.fs.urlExpires` |

`storage.urlExpires` 未被使用：指向 Amazon S3 和 Azure Blob Storage 的链接同样在 `storage.fs.urlExpires` 之后过期。

## 缓存的存储位置 {#where-the-cache-is-stored}

默认情况下，缓存存储在 ONLYOFFICE 文档服务器上：

- Linux：`/var/lib/onlyoffice/documentserver/App_Data/cache/files`；
- Windows：`C:\Program Files\ONLYOFFICE\DocumentServer\server\App_Data\cache\files`。

您可以将其移至 Amazon S3、Azure Blob Storage 或从其他服务器挂载的卷，例如，以使用存储提供的加密功能，或在集群中的多台服务器之间共享缓存。请参阅[文档存储服务](../configuration/server-config/server-config.md#document-storage-service)设置。

- **Amazon S3**：在 `storage.commandOptions.s3` 设置中启用服务器端加密（`aws:kms` 或 `AES256`）。
- **Azure Blob Storage**：在 `storage.commandOptions.az` 设置中使用加密范围。

默认情况下，ONLYOFFICE 文档会代理对外部存储的请求，因此用户不会获得指向它的直接链接（`storage.useDirectStorageUrls` 为 `false`）。

缓存存储的 `files` 文件夹（在 Amazon S3 和 Azure Blob Storage 中为 `files/` 前缀）包含：

- `data/<key>`：文档缓存；
- `forgotten/<key>`：被遗忘的文件；
- `<errorfiles>/<format>/<key>`：错误文件（如果已启用）。`<errorfiles>` 是 `FileConverter.converter.errorfiles` 的值，`<format>` 是输入文件的扩展名。

`<key>` 是编辑器配置中的[文档标识符](../../usage-api/config/document/document.md#key)。如果配置了持久存储，被遗忘的文件和错误文件将以相同的名称存储在持久存储中。

## 谁可以访问缓存 {#who-can-access-the-cache}

- ONLYOFFICE 文档本身。
- 缓存所在存储的所有者，以及有权访问该存储的管理员。
- 打开文档的用户：其浏览器发出的请求包含指向该文档缓存的链接。

指向缓存的链接经过签名，默认在 15 分钟后过期（`storage.fs.urlExpires`）。安装时会生成随机签名密钥，除非您设置了自己的密钥：

- Linux 和 Windows 安装包以及 Docker 镜像：[`SECURE_LINK_SECRET`](https://github.com/ONLYOFFICE/Docker-DocumentServer#available-configuration-parameters) 环境变量；
- 适用于 Kubernetes 的 Helm chart（从 chart 4.5.0 版本开始）：[`proxy.secureLinkSecret` 或 `proxy.secureLinkExistingSecret`](https://github.com/ONLYOFFICE/Kubernetes-Docs#4-parameters)。生成的密钥在升级后保持不变。

有关保护安装的其他方法，请参阅[安全指南](https://helpcenter.onlyoffice.com/zh/docs/configuration/securityguide)。

## 日志 {#logs}

ONLYOFFICE 文档在 Linux 上将日志写入 `/var/log/onlyoffice/documentserver/`，在 Windows 上写入 `C:\Program Files\ONLYOFFICE\DocumentServer\Log\`。有关各个日志文件的位置，请参阅 [Linux](https://helpcenter.onlyoffice.com/zh/docs/installation/community/linux/troubleshooting)、[Windows](https://helpcenter.onlyoffice.com/zh/docs/installation/community/windows/troubleshooting) 和 [Docker](https://helpcenter.onlyoffice.com/zh/docs/installation/enterprise/docker/troubleshooting) 的故障排除指南。

- Linux 安装包每天轮转日志，并保留 30 个压缩文件。
- Windows 安装包会添加一个每日计划任务，删除超过 30 天的日志文件。
- 这些任务还会删除超过 30 天的错误文件，但仅限于 ONLYOFFICE 文档服务器上缓存的 `errors` 文件夹。如需自动清理这些文件，请将 `FileConverter.converter.errorfiles` 设置为 `errors`，并将缓存保留在本地。
- 在 Docker 和 Kubernetes 中，日志还会输出到容器输出，其保留时间取决于 Docker 或集群的日志设置。

## 被遗忘的文件 {#forgotten-files}

被遗忘的文件包含 ONLYOFFICE 文档关闭前未保存的更改。缓存清理不会删除这些文件。再次打开并保存文档，或使用 [deleteForgotten](../../additional-api/command-service/deleteforgotten.md) 命令删除时，被遗忘的文件才会被移除。使用 [getForgottenList](../../additional-api/command-service/getforgottenlist.md) 和 [getForgotten](../../additional-api/command-service/getforgotten.md) 命令查找这些文件。

要将被遗忘的文件和错误文件与临时缓存分开存储（例如存储在单独的 S3 存储桶中），请配置[持久存储](../configuration/server-config/server-config.md#persistent-storage)。这也会让服务器升级更加方便。

## 删除单个文档的数据 {#deleting-the-data-of-one-document}

目前没有可完成此操作的单个命令。要删除 ONLYOFFICE 文档为某个文档保留的所有数据：

1. 确保没有人打开该文档，且保存已完成。[drop](../../additional-api/command-service/drop.md) 命令会断开用户连接；随后未保存的更改会被保存并发送到**文档存储服务**。
2. 使用 [deleteForgotten](../../additional-api/command-service/deleteforgotten.md) 命令删除被遗忘的文件。
3. 从缓存存储中删除 `data/<key>` 和 `data/<key>~*` 文件夹，或等待自动清理。
4. 删除该文档的错误文件（如果已启用）。
5. 在企业版和开发者版中，从 `task_result` 和 `doc_changes` 表中删除该文档的行：即该文档所属租户中 `id` 等于文档标识符或以 `<key>~` 开头的行。

   :::warning
   请先备份数据库，并且只在第 1 步完成后再删除这些行。
   :::

日志行包含文档标识符和用户 ID。无法针对单个文档清理日志；日志轮转会在 30 天后将其删除。

## 停用服务器时删除所有数据 {#deleting-all-data-when-decommissioning-a-server}

删除：

- 缓存存储以及持久存储（如果已配置）；
- 数据库（企业版和开发者版）；
- Redis 和 RabbitMQ 数据（如果使用）；
- 日志；
- `local.json` 和 `runtime.json`（可能包含 JWT 密钥等机密信息）以及许可证文件；
- Docker 卷（如果 ONLYOFFICE 文档在 Docker 中运行）。
