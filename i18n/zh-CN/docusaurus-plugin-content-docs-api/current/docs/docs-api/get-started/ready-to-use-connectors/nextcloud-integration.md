---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/nextcloud.svg
---

import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

# Nextcloud 集成

<YoutubeVideo videoId="vN9v9sJ0HVw"/>

适用于 Nextcloud 的 ONLYOFFICE 应用允许用户借助 ONLYOFFICE 文档在 [Nextcloud](https://nextcloud.com) 中编辑办公文档。其源代码托管在 [GitHub](https://github.com/ONLYOFFICE/onlyoffice-nextcloud) 上，最新的已签名版本可在 [Nextcloud 应用商店](https://apps.nextcloud.com/apps/onlyoffice)获取。

## 功能特性 {#features}

- 目前，使用该应用程序可打开并编辑以下文档格式：DOCM、DOCX、DOTM、DOTX、PDF、POTM、POTX、PPSM、PPSX、PPTM、PPTX、XLSB、XLSM、XLSX、XLTM、XLTX。
- 仅支持查看的文档格式为：CSV、DJVU、DOC、DOT、DPS、DPT、EPUB、ET、ETT、FB2、FODP、FODS、FODT、HTM、HTML、HWP、HWPX、KEY、MD、MHT、MHTML、NUMBERS、ODG、ODP、ODS、ODT、OTP、OTS、OTT、OXPS、PAGES、POT、PPS、PPT、RTF、STW、SXC、SXI、SXW、TSV、TXT、VSDM、VSDX、VSSM、VSSX、VSTM、VSTX、WPS、WPT、XLS、XLT、XML、XPS。
- 以下格式可转换为 OOXML 格式：DOC、DOCM、DOT、DOTX、EPUB、HTM、HTML、ODP、ODT、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM、RTF、XLS、XLSM、XLT、XLTM、XLTX。
- 该应用程序会在**新建（+）**菜单中创建用于创建**文档**、**电子表格**、**演示文稿**、**PDF** 的选项。它还会在文档库中为 Office 文档创建一个新的**在 ONLYOFFICE 中打开**菜单项。这使得多个用户能够实时协作，并将更改保存回 Nextcloud。连接到同一文档服务器的多个联合 Nextcloud 实例之间也支持协同编辑。

## 安装 ONLYOFFICE 文档 {#installing-onlyoffice-docs}

您需要一个 ONLYOFFICE 文档（文档服务器）实例，该实例必须能从 Nextcloud 和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的 [ONLYOFFICE 文档安装指南](https://helpcenter.onlyoffice.com/docs/installation/community/linux/installing/install-ubuntu)。ONLYOFFICE 文档还必须能够直接向 Nextcloud 发送 POST 请求。

ONLYOFFICE 文档和 Nextcloud 可以安装在不同的计算机上，也可以安装在同一台机器上。如果选择后者，您需要为文档服务器设置一个自定义端口，因为默认情况下 ONLYOFFICE 文档和 Nextcloud 都使用 80 端口。或者您可以在代理服务器后使用 ONLYOFFICE 文档，有关配置方法，请参考[这篇文章](https://helpcenter.onlyoffice.com/docs/configuration/community/docker/proxy)。

使用 [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer) 是启动 ONLYOFFICE 文档实例的最简单方法。

您也可以使用我们的 [Docker 安装方式](https://github.com/ONLYOFFICE/docker-onlyoffice-nextcloud)，通过几条命令就能完成 ONLYOFFICE 文档和 Nextcloud 的安装与配置。

## 安装 Nextcloud ONLYOFFICE 集成应用程序 {#installing-onlyoffice-app-for-nextcloud}

Nextcloud 管理员可以从内置应用市场安装集成应用程序。为此，点击用户名并选择**应用**。然后，在可用应用列表中找到 **ONLYOFFICE** 并进行安装。

如果安装 Nextcloud 的服务器没有互联网访问权限，或者由于其他原因需要手动安装，管理员可以按以下步骤手动安装该应用程序。要在 Nextcloud 中使用 ONLYOFFICE 文档，必须执行以下步骤：

1. 进入 Nextcloud 服务器的 *apps/* 目录（或[用于](https://docs.nextcloud.com/server/stable/admin_manual/apps_management.html#using-custom-app-directories)连接应用程序的其他目录）：

   ``` sh
   cd apps/
   ```

2. 获取 Nextcloud ONLYOFFICE 集成应用程序。有以下几种方法：

   1. 从 [Nextcloud](https://apps.nextcloud.com/apps/onlyoffice) 官方应用商店下载最新的已签名版本。
   2. 从 GitHub 上的应用程序[发布页面](https://github.com/ONLYOFFICE/onlyoffice-nextcloud/releases)下载最新的已签名版本。
   3. 克隆应用程序源代码并自行编译：

   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-nextcloud.git onlyoffice
   cd onlyoffice
   git submodule update --init --recursive
   ```

3. 运行构建（仅当您在上一步选择了克隆方式时）：

   ``` sh
   npm install
   npm run build
   ```

4. 安装 Composer 依赖（仅当您在第 2 步选择了克隆方式时）：

   ``` sh
   composer install
   composer scope-dependencies
   rm -rf vendor/firebase
   composer dump-autoload
   ```

5. 修改所有者，以便可以从 Nextcloud Web 界面更新应用程序：

    ``` sh
    chown -R www-data:www-data onlyoffice
    ```

6. 在 Nextcloud 中，管理员打开包含**未启用**应用的 *\~/settings/apps/disabled* 页面，并为 **ONLYOFFICE** 应用点击**启用**。

## 配置 Nextcloud ONLYOFFICE 集成应用程序 {#configuring-onlyoffice-app-for-nextcloud}

在 Nextcloud 中，打开包含 **ONLYOFFICE** 部分管理设置的 *\~/settings/admin/onlyoffice* 页面。输入以下地址来连接 ONLYOFFICE 文档：

```sh
https://<文档服务器地址>/
```

其中，**文档服务器地址**是安装了 **ONLYOFFICE 文档**的服务器名称。该地址必须能被用户浏览器和 Nextcloud 服务器访问。Nextcloud 服务器地址也必须能被 **ONLYOFFICE 文档**访问，以确保正常工作。您可以[注册](https://www.onlyoffice.com/zh/signup?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

![本地的](/assets/images/editor/nextcloud-local.jpg)

有时，网络配置可能会导致已安装的 Nextcloud 和 ONLYOFFICE 文档之间无法通过公共地址进行请求。**更多设置**允许设置 Nextcloud 服务器内部请求的 ONLYOFFICE 文档地址，以及 ONLYOFFICE 文档内部请求的返回 Nextcloud 地址。您需要在相应字段中输入这些地址。

![公共](/assets/images/editor/nextcloud-public.jpg)

从 7.2 版本开始，JWT 默认启用，并且会自动生成密钥，用于限制对 ONLYOFFICE 文档的访问，保障安全性和数据完整性。在 Nextcloud 管理配置中指定您自己的密钥。在 ONLYOFFICE 文档[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

启用或禁用**在同一标签页中打开文件**设置。

**在 ONLYOFFICE 中打开**操作将添加到文件上下文菜单中。您可以将此操作设置为默认操作，这样在点击选定文件类型的文件名时，就会使用该操作。

### ONLYOFFICE Nextcloud 连接器：配置参数 {#onlyoffice-connector-for-nextcloud-configuration-parameters}

以下是 ONLYOFFICE Nextcloud 集成应用程序的所有可用配置参数，分为以下三个表格：

- 基本配置：可通过 Nextcloud 管理界面或`occ`命令配置的参数。
- 水印设置：同样可通过界面或`occ`配置，但存储在`files`应用下，而非`onlyoffice`。
- 高级配置：可通过`config/config.php`文件配置的参数。

部分参数（例如`DocumentServerUrl`、`jwt_secret`、`jwt_header`、`verify_peer_off`）两种方式均可设置，因此它们会同时出现在基本配置和高级配置表格中。对于这些参数，仅当未通过界面或`occ`命令设置值时，连接器才会从`config/config.php`中读取。

#### 基本配置（UI / `occ`） {#basic-configuration-ui--occ}

这些设置可通过 Nextcloud 管理界面或`occ`命令进行配置。

| 参数                                         | 描述                                                                        |
|---------------------------------------------|-----------------------------------------------------------------------------|
| `DocumentServerUrl`                         | ONLYOFFICE 文档服务器的公共地址。                                             |
| `verify_peer_off`                           | 如果为`true`，禁用 SSL 证书验证。默认值：`false`。                                 |
| `jwt_secret`                                | 用于签名和验证 JWT 令牌的密钥。                                                   |
| `Advanced server settings`                  | 对授权标头和内部服务器 URL 设置进行分组。仅可通过 UI 配置。                              |
| `jwt_header`                                | 用于发送 JWT 的 HTTP 头名称。必须与 ONLYOFFICE 文档中配置的头名称一致。默认值：`Authorization`；启用内置演示服务器时为`AuthorizationJWT`。                            |
| `DocumentServerInternalUrl`                 | ONLYOFFICE 文档用于服务器到服务器通信的内部地址。                                   |
| `StorageUrl`                                | ONLYOFFICE 文档使用的 Nextcloud 服务器内部地址。                                    |
| `demo`                                      | 连接到内置的演示版 ONLYOFFICE 文档服务器。仅可通过 UI 配置。                          |
| `groups`                                    | 允许特定用户组访问编辑器。示例：`["admin", "editors"]`。                         |
| `restrictExternalStorage`                   | 限制从外部存储访问 ONLYOFFICE 的文件。默认值：`false`。                             |
| `preview`                                   | 启用文档预览生成。                                                            |
| `sameTab`                                   | 在同一标签页中打开文件。默认值：`true`。                                         |
| `enableSharing`                             | 启用文件共享。若通过`occ`强制启用，即使`sameTab`为`true`，编辑器也会在新标签页中打开。默认值：`false`。 |
| `advanced`                                  | 启用高级文档权限。默认值：`false`。                                             |
| `versionHistory`                            | 保存每个文档版本的元数据。默认值：`true`。                                       |
| `cronChecker`                               | 启用对编辑器的后台连接检查。默认值：`true`。                                     |
| `emailNotifications`                        | 启用电子邮件通知。默认值：`true`。                                              |
| `unknownAuthor`                             | 未知作者的显示名称。示例：`Guest User`。                                        |
| `defFormats`                                | 点击文件名时以**在 ONLYOFFICE 中打开**作为默认操作的格式。JSON 对象，将格式名称映射为布尔值。示例：`{"docx":true,"xlsx":true}`。 |
| `editFormats`                               | 以编辑模式而非查看模式打开的格式。JSON 对象，将格式名称映射为布尔值。示例：`{"csv":true,"txt":true}`。 |
| `customizationForcesave`                    | 编辑时保存中间版本（强制保存）。默认值：`false`。                                 |
| `liveViewOnShare`                           | 通过公共链接访问文件时启用实时查看模式。默认值：`false`。                           |
| `customizationChat`                         | 启用或禁用聊天面板。                                                          |
| `customizationCompactHeader`                | 启用紧凑标题模式。                                                            |
| `customizationFeedback`                     | 启用反馈和支持链接。                                                          |
| `customizationHelp`                         | 启用帮助链接。                                                                |
| `customizationReviewDisplay`                | 查看时的审阅模式。可选值：`original`、`markup`、`final`。默认值：`original`。    |
| `customizationTheme`                        | 设置编辑器颜色主题。可选值：`theme-system`、`default-light`、`default-dark`。默认值：`theme-system`。 |
| `customization_plugins`                     | 启用插件。默认值：`true`。                                                     |
| `customization_macros`                      | 启用文档宏。默认值：`true`。                                                   |
| `protection`                                | 控制谁可以保护文档。可选值：`owner`、`all`。默认值：`owner`。                     |

:::tip
您也可以使用`occ`命令行界面来获取/设置这些参数：

```sh
php occ config:app:set onlyoffice customizationChat --value=false
```
:::

#### 水印设置 {#watermark-settings}

水印设置（`watermark_*`键）存储在`files`应用下，而非`onlyoffice`。使用`files`作为应用 ID 通过`occ`进行设置：

```sh
php occ config:app:set files {watermark_setting_key} --value={setting_value}
```

这些开关的可选值为`yes`或`no`。

| 参数                       | 描述                                                                                          | 默认值               |
|---------------------------|------------------------------------------------------------------------------------------------|----------------------|
| `watermark_enabled`       | 启用水印功能。                                                                                  | `no`                 |
| `watermark_text`          | 水印文本。支持的标签：`{userId}`、`{userDisplayName}`、`{email}`、`{date}`、`{themingName}`。      | `{userId}, {date}`   |
| `watermark_allGroups`     | 为`watermark_allGroupsList`中所列用户组的成员显示水印。                                            | `no`                 |
| `watermark_allGroupsList` | 以逗号分隔的显示水印的用户组列表。示例：`admin,editors`。                                           | 空                   |
| `watermark_allTags`       | 为带有`watermark_allTagsList`中所列标签的文件显示水印。                                            | `no`                 |
| `watermark_allTagsList`   | 以逗号分隔的显示水印的文件系统标签 ID 列表。示例：`3,7`。                                              | 空                   |
| `watermark_linkAll`       | 为所有链接共享显示水印。                                                                          | `no`                 |
| `watermark_shareAll`      | 为从其他用户接收的所有共享显示水印。                                                                | `no`                 |
| `watermark_shareRead`     | 在只读共享中显示水印。                                                                            | `no`                 |
| `watermark_linkSecure`    | 在禁止下载的链接共享中显示水印。                                                                    | `no`                 |
| `watermark_linkRead`      | 在只读链接共享中显示水印。                                                                         | `no`                 |
| `watermark_linkTags`      | 在带有`watermark_linkTagsList`中所列系统标签的链接共享中显示水印。                                    | `no`                 |
| `watermark_linkTagsList`  | 以逗号分隔的系统标签 ID 列表，其链接共享将显示水印。示例：`3,7`。                                        | 空                   |

#### 高级配置（`config/config.php`） {#advanced-configuration-configconfigphp}

您可以在`config/config.php`文件中定义以下参数来自定义 ONLYOFFICE 连接器的行为：

| 参数                        | 描述                                                                                            |
|----------------------------|-------------------------------------------------------------------------------------------------|
| `DocumentServerUrl`         | ONLYOFFICE 文档服务器的公共地址。                                                                  |
| `DocumentServerInternalUrl` | ONLYOFFICE 文档用于服务器到服务器通信的内部地址。                                                      |
| `StorageUrl`               | ONLYOFFICE 文档使用的 Nextcloud 服务器内部地址。                                                         |
| `jwt_secret`               | 用于签名和验证 JWT 令牌的密钥。                                                                      |
| `jwt_header`               | 用于发送 JWT 的 HTTP 头名称。必须与 ONLYOFFICE 文档中配置的头名称一致。默认值：`Authorization`；启用内置演示服务器时为`AuthorizationJWT`。                                                |
| `jwt_leeway`               | 验证 JWT 令牌时用于处理时钟偏差的容差时间（秒）。                                                      |
| `jwt_expiration`           | JWT 令牌过期时间（秒）。                                                                           |
| `verify_peer_off`          | 如果为`true`，禁用 SSL 证书验证。默认值：`false`。                                                    |
| `limit_thumb_size`         | 生成缩略图的最大文件大小（字节）。                                                                  |
| `disable_download`         | 如果为`true`，禁用文件下载功能。                                                                   |
| `editors_check_interval`   | 使用 cron 检查 ONLYOFFICE 文档可用性的时间间隔（秒）。默认值：`86400`。                                     |
| `permissions_modifyFilter` | 全局应用电子表格筛选（`true`，影响所有用户）或仅本地应用（`false`）。默认值：`true`。                     |
| `customization_customer`   | 显示在编辑器“关于”部分的客户信息。                                                                   |
| `customization_logo`       | 编辑器标题栏中显示的徽标。                                                                          |
| `customization_loaderLogo` | 编辑器加载页面中显示的徽标。                                                                        |
| `customization_loaderName` | 编辑器加载页面中显示的文本。                                                                        |
| `customization_zoom`       | 文档默认缩放级别（百分比）。默认值：`100`。                                                           |
| `customization_autosave`   | 启用编辑时自动保存。默认值：`true`。                                                                 |

以下参数必须手动添加到 Nextcloud 安装目录中的`config/config.php`文件：

```php
<?php
'onlyoffice' => array (
    'jwt_secret' => 'your_secret_key',
    'jwt_header' => 'Authorization',
)
?>
```

## 检查连接 {#checking-the-connection}

您可以使用以下 `occ` 命令检查与 ONLYOFFICE 文档的连接：

```sh
occ onlyoffice:documentserver --check
```

您将看到一段文本，内容要么是连接成功的信息，要么是错误原因。

### 自签名证书 {#self-signed-certificates}

如果您正在为您的 ONLYOFFICE 文档使用自签名证书，Nextcloud 将不会验证此类证书，并且不允许与 ONLYOFFICE 文档进行连接。您可以通过以下两种方式之一关闭证书验证：

1. 在 Nextcloud 的 ONLYOFFICE 管理页面**服务器设置**部分，勾选**关闭证书校验（不安全）**复选框。
2. 手动更改 Nextcloud 配置文件。找到 Nextcloud 配置文件（*/nextcloud/config/config.php*）并打开它。在 `$CONFIG` 数组中添加以下条目（如果数组中已有 `onlyoffice` 条目，请将该键添加到其中）：

   ```php
   'onlyoffice' => array (
       'verify_peer_off' => true,
   ),
   ```

   只有在从未通过界面或 `occ` 命令设置过 `verify_peer_off` 时，Nextcloud 才会读取此条目（参见[基本配置](#basic-configuration-ui--occ)）。保存服务器设置后，以**关闭证书校验（不安全）**复选框为准。

这将禁用证书验证，允许 Nextcloud 与 ONLYOFFICE 文档建立连接。此设置仅适用于 Nextcloud 向 ONLYOFFICE 文档发出的请求，不适用于通过**联合云共享**连接的 Nextcloud 实例之间的请求。

如果 Nextcloud 也使用自签名证书，ONLYOFFICE 文档同样无法从 Nextcloud 下载文件。要在 ONLYOFFICE 文档一侧禁用证书验证，请在 ONLYOFFICE 文档的 *local.json* 配置文件中将 [`services.CoAuthoring.requestDefaults.rejectUnauthorized`](../configuration/server-config/server-config.md#services.CoAuthoring.requestDefaults.rejectUnauthorized) 参数设置为 `false`，然后重启 ONLYOFFICE 文档服务。

:::note
请记住，这是一个临时的不安全解决方案，我们强烈建议您更换为由受信任的证书颁发机构颁发的证书。完成更换后，不要忘记取消勾选**关闭证书校验（不安全）**复选框（如果从未通过界面或 `occ` 命令设置过 `verify_peer_off`，则从 `config.php` 中删除上述条目），并将 `rejectUnauthorized` 恢复为 `true`。
:::

### 后台连接检查 {#background-connection-check}

如果编辑器在正常运行一段时间后无法打开或保存文档，原因可能是网络设置更改、相关服务被禁用或 SSL 证书存在问题。

为了发现这类问题，ONLYOFFICE 应用会在服务器上运行一个后台任务，检查您的 **Nextcloud 实例**和 **ONLYOFFICE 文档**之间的连接，即检查服务器地址的可用性和 JWT 密钥的有效性。如果 ONLYOFFICE 文档使用的 Nextcloud 地址是 `localhost` 或 `127.0.0.1`，则会跳过此检查。在这种情况下，请在**更多设置**中指定 **ONLYOFFICE Docs 内部请求服务器的地址**。

如果检测到任何问题，ONLYOFFICE 编辑器将不再注册，因此无法再在 ONLYOFFICE 中创建或打开文件。`admin` 组的成员将收到通知；如果勾选了**启用电子邮件通知**复选框（默认勾选），还会收到电子邮件。在错误存在期间，检查不会再次运行，因此编辑器不会自动恢复。请排除问题，然后在管理页面上保存服务器设置，或运行 `occ onlyoffice:documentserver --check`。连接成功后，编辑器将恢复。

默认情况下，此后台任务每天运行一次（`86400` 秒）。如有必要，您可以使用 `editors_check_interval` 参数更改运行频率（参见[高级配置](#advanced-configuration-configconfigphp)）。为此，打开 Nextcloud 配置文件（*/nextcloud/config/config.php*），在 `$CONFIG` 数组中添加该条目，并输入所需的秒数。例如，若要每小时检查一次：

```php
'onlyoffice' => array (
    'editors_check_interval' => 3600,
),
```

要关闭此检查，请在管理页面上取消勾选**启用编辑器后台连接检查**复选框（即[基本配置](#basic-configuration-ui--occ)中的 `cronChecker` 参数），或将 `editors_check_interval` 设置为 `0`。

## 高级文档权限 {#advanced-document-permissions}

高级标签页允许您仅向共享标签页中指定的用户授予额外的访问权限，而不允许他们重新共享文件。根据所选的自定义权限选项和文件类型（docx、pptx、xlsx），您可以授予不同的额外权限。

- 如果 **DOCX** 文件在共享标签页中以自定义权限（启用编辑，禁用共享）方式共享，您可以在高级标签页中将权限设置为仅审阅（**仅审阅**）或仅评论（**仅评论**）。
- 如果 **XLSX** 文件在共享标签页中以自定义权限（启用编辑，禁用共享）方式共享，您可以在高级标签页中将权限设置为仅评论（**仅评论**）或为所有人应用筛选（**全局筛选**，默认启用）。
- 如果 **PPTX** 文件在共享标签页中以自定义权限（启用编辑，禁用共享）方式共享，您可以在高级标签页中将权限设置为仅评论（**仅评论**）。
- 如果 **PDF** 文件在共享标签页中以自定义权限（启用编辑，禁用共享）方式共享，您可以在高级标签页中将权限设置为仅填写（**表单填写**）。

## 工作原理 {#how-it-works}

ONLYOFFICE 集成遵循此处记录的 API 规范：[此处](../basic-concepts.md)。

1. 创建新文件时，用户在 Nextcloud 中导航到文档文件夹，然后点击**新建（+）**菜单中的**文档**、**电子表格**或**演示文稿**选项。

2. 浏览器调用 */lib/Controller/editorController.php* 控制器中的 *create* 方法。此方法会将 *assets* 文件夹中的文件副本添加到用户当前所在的文件夹中。

3. 打开现有文件时，用户在 Nextcloud 中找到该文件，并选择**在 ONLYOFFICE 中打开**菜单项。

4. 会打开一个新的浏览器标签页，并调用 */lib/Controller/editorController.php* 控制器中的 *index* 方法。

5. 应用程序准备一个包含以下属性的 JSON 对象：

   - **url**：ONLYOFFICE 文档用于下载文档的 URL；
   - **callbackUrl**：ONLYOFFICE 文档用于通知文档编辑状态的 URL；
   - **documentServerUrl**：客户端需要响应给 ONLYOFFICE 文档的 URL（可在管理设置页面中设置）；
   - **key**：由 *UUID+ 修改时间戳* 组成，用于指示 ONLYOFFICE 文档是否需要重新下载文档。

6. Nextcloud 获取该对象，并从 *templates/editor.php* 模板构建一个页面，填充所有这些值，以便客户端浏览器可以加载编辑器。

7. 客户端浏览器向 ONLYOFFICE 文档的 JavaScript 库发出请求，并将包含上述属性的 DocEditor 配置发送给 ONLYOFFICE 文档。

8. 然后，ONLYOFFICE 文档从 Nextcloud 下载文档，用户开始编辑。

9. ONLYOFFICE 文档向 *callbackUrl* 发送 POST 请求，通知 Nextcloud 有用户正在编辑文档。

10. 当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

11. 在 [10 秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE 文档向 *callbackUrl* 发送 POST 请求，告知 Nextcloud 客户端已完成文档编辑并关闭了它。

12. Nextcloud 下载文档的新版本，替换旧版本。

## 文件转换 {#converting-files}

ONLYOFFICE 文档在打开和编辑文件时以 Office Open XML 格式为基础。如果文件格式与 OOXML 不同，为了使 ONLYOFFICE 文档能够正常工作并提高性能，文件仍将转换为相应的 OOXML 格式。将文件保存为原始格式时，文件将从 OOXML 转换回该格式。由于这些格式在根本上存在差异，一些数据（如图表、表格、自选图形或图像）和格式可能会丢失，这是因为一些格式（*csv*、*txt* 等）不支持这些内容，或者对它们的处理方式与 OOXML 标准不同。

因此，ONLYOFFICE 应用对不同格式的处理方式不同：

- OOXML 文件和 *pdf* 文件以编辑模式打开。
- 可以编辑但可能丢失数据的格式，例如 *odt*、*ods*、*odp*、*rtf*、*txt*、*csv*、*tsv*、*epub* 或 *html*，默认仅支持查看。要以编辑模式打开这些格式，请在设置中的**默认的文件编辑器（由于文件格式限制，保存为下列格式时，数据可能会缺失）**列表中勾选它们。*txt* 和 *csv* 默认已勾选。
- 其他格式，例如 *doc*、*xls*、*ppt*、*md* 或 *hwp*，仅支持查看，无法编辑。

对于 *doc*、*xls*、*ppt* 等格式，以及上述列表中的 *odt*、*ods*、*odp*、*rtf* 等格式（*txt*、*csv* 和 *tsv* 除外），文件上下文菜单中提供**用 ONLYOFFICE 转换**选项。该选项会在同一文件夹中创建文件的 OOXML 副本。

## 已知问题 {#known-issues}

如果您遇到此处未列出的问题，请在该应用的 [GitHub 问题跟踪器](https://github.com/ONLYOFFICE/onlyoffice-nextcloud/issues)中报告。

### 连接外部存储 {#connecting-external-storages}

在某些情况下，使用**外部存储**应用添加存储时，协同编辑会出现问题。如果使用相同的授权密钥进行连接（选择*用户名和密码*或*全局凭证*身份验证类型），则用户可以进行协同编辑。如果使用不同的授权密钥（*登录凭据，保存到数据库*或*用户输入，存储到数据库*身份验证选项），则无法进行协同编辑。当使用*登录凭据，保存到会话*身份验证类型时，文件无法在编辑器中打开。要完全禁止在 ONLYOFFICE 中打开外部存储中的文件，请使用 `restrictExternalStorage` 参数（参见[基本配置](#basic-configuration-ui--occ)）。

### 联合云共享 {#federated-cloud-sharing}

如果使用**联合云共享**应用共享文档，连接到不同 ONLYOFFICE 服务器的 Nextcloud 实例之间将无法进行协同编辑。连接到同一 ONLYOFFICE 文档服务器的用户可以协同编辑文档，但连接到两个（或更多）不同 ONLYOFFICE 文档服务器的用户将无法实时协作处理同一文档。协同编辑还要求远程实例上安装 ONLYOFFICE 应用，因为文档标识符需要从远程实例获取。如果没有该应用，文件仍可打开，但两个实例的用户将在不同的会话中编辑文件。

### 无下载权限共享的文件 {#files-shared-without-download-permission}

ONLYOFFICE 文档需要从 Nextcloud 下载文件才能将其打开。对于在没有下载权限的情况下共享的文件，只有在 ONLYOFFICE 设置中指定了**秘钥**时，Nextcloud 才允许此下载。如果未指定秘钥，此类文件将无法在编辑器中打开。

当用户访问没有下载权限的文档时，文件打印和使用系统剪贴板的功能不可用。不过，可以通过编辑器工具栏和上下文菜单中的按钮在编辑器内进行复制和粘贴操作。`disable_download` 参数（参见[高级配置](#advanced-configuration-configconfigphp)）在编辑器中对所有用户和文件具有相同的效果。

### 在其他工具中同时编辑 {#editing-in-other-tools-at-the-same-time}

如果安装了锁提供程序，例如 [Temporary File Lock](https://apps.nextcloud.com/apps/files_lock) 应用，ONLYOFFICE 应用将使用 Nextcloud 文件锁定：在 ONLYOFFICE 中编辑文件时锁定该文件，并以仅查看模式打开被其他用户或应用锁定的文件。如果没有锁提供程序，则无法阻止文件同时在 ONLYOFFICE 和其他工具中被编辑，更改可能会被覆盖或丢失。
