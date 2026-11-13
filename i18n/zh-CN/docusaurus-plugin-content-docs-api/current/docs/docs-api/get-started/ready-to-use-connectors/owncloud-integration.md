---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/owncloud.svg
---

import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

# ownCloud 集成

<YoutubeVideo videoId="33w03FcPWTo"/>

适用于 ownCloud 的 ONLYOFFICE 应用允许用户借助 ONLYOFFICE 文档在 [ownCloud](https://owncloud.com) 中编辑办公文档。其源代码托管在 [GitHub](https://github.com/ONLYOFFICE/onlyoffice-owncloud) 上，最新的已签名版本可在 [ownCloud 应用市场](https://marketplace.owncloud.com/apps/onlyoffice)获取。

## 功能特性 {#features}

- 目前，使用该应用程序可打开并编辑以下文档格式：DOCM、DOCX、DOTM、DOTX、PDF、POTM、POTX、PPSM、PPSX、PPTM、PPTX、XLSB、XLSM、XLSX、XLTM、XLTX。
- 仅支持查看的文档格式如下：CSV、DJVU、DOC、DOT、DPS、DPT、EPUB、ET、ETT、FB2、FODP、FODS、FODT、HTM、HTML、HWP、HWPX、KEY、MD、MHT、MHTML、NUMBERS、ODG、ODP、ODS、ODT、OTP、OTS、OTT、OXPS、PAGES、POT、PPS、PPT、RTF、STW、SXC、SXI、SXW、TXT、VSDM、VSDX、VSSM、VSSX、VSTM、VSTX、WPS、WPT、XLS、XLT、XML、XPS。
- 以下格式可转换为 OOXML 格式：DOC、DOCM、DOT、DOTX、EPUB、HTM、HTML、ODP、ODT、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM、RTF、XLS、XLSM、XLT、XLTM、XLTX。ODT、ODS 和 ODP 也支持即时转换。在管理员设置中启用相应选项后，ODF 格式的文档在点击后会立即在编辑器中转换并打开。
- 该应用程序会在**新建（+）**菜单中创建用于创建**文档**、**电子表格**、**演示文稿**的选项。它还会在文档库中为 Office 文档创建一个新的**在 ONLYOFFICE 中打开**菜单项。这使得多个用户能够实时协作，并将更改保存回 ownCloud。连接到同一文档服务器的多个联合 ownCloud 实例之间也支持协同编辑。
- 支持以不同的权限类型共享文件，如查看/编辑、评论、审阅、填写表单。还可以限制下载（在所有编辑器中）和修改筛选器（在电子表格中）。也支持通过公共链接进行共享。
- 支持在 **ownCloud Web** 中处理文档、电子表格和演示文稿。

## 安装 ONLYOFFICE 文档 {#installing-onlyoffice-docs}

您需要一个 ONLYOFFICE 文档（文档服务器）实例，该实例必须能从 ownCloud 和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的 [ONLYOFFICE 文档安装指南](https://helpcenter.onlyoffice.com/docs/installation/community/linux/installing/install-ubuntu)。ONLYOFFICE 文档还必须能够直接向 ownCloud 发送 POST 请求。

ONLYOFFICE 文档和 ownCloud 可以安装在不同的计算机上，也可以安装在同一台机器上。如果选择后者，您需要为文档服务器设置一个自定义端口，因为默认情况下 ONLYOFFICE 文档和 ownCloud 都使用 80 端口。或者您可以在代理服务器后使用 ONLYOFFICE 文档，有关配置方法，请参考[这篇文章](https://helpcenter.onlyoffice.com/docs/configuration/community/docker/proxy)。

您也可以使用我们的 [Docker 安装方式](https://github.com/ONLYOFFICE/docker-onlyoffice-owncloud)，通过几条命令就能完成 ONLYOFFICE 文档和 ownCloud 的安装与配置。

## 安装 ownCloud ONLYOFFICE 集成应用程序 {#installing-onlyoffice-app-for-owncloud}

ownCloud 管理员可以从内置的应用市场安装集成应用程序。为此，点击左上角的汉堡菜单，选择**应用市场**。然后，在可用应用程序列表中找到 **ONLYOFFICE** 并进行安装。

如果安装 ownCloud 的服务器没有互联网访问权限，或者由于其他原因需要手动安装，管理员可以按以下步骤手动安装该应用程序。要在 ownCloud 中使用 ONLYOFFICE 文档，必须执行以下步骤：

1. 进入 ownCloud 服务器的 *apps/* 目录（或者[用于](https://doc.owncloud.com/server/11.1/admin_manual/configuration/server/config_sample_php_parameters.html#define-alternative-app-directories)连接应用程序的其他目录）：

   ``` sh
   cd apps/
   ```

2. 获取 ownCloud ONLYOFFICE 集成应用程序。有以下几种方法：

   1. 从 [ownCloud](https://marketplace.owncloud.com/apps/onlyoffice) 官方应用商店下载最新的已签名版本。
   2. 从 GitHub 上的应用程序[发布页面](https://github.com/ONLYOFFICE/onlyoffice-owncloud/releases)下载最新的已签名版本。
   3. 克隆应用程序源代码并自行编译：
   
   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-owncloud.git onlyoffice
   cd onlyoffice
   git submodule update --init --recursive
   ```

   :::note
   ownCloud 无法使用未签名的应用程序，并会给出警告，所以您需要使用选项 **1** 或 **2** 来获取应用程序。
   :::

3. 修改所有者，以便可以从 ownCloud Web 界面更新应用程序：

    ``` sh
    chown -R www-data:www-data onlyoffice
    ```

4. 在 ownCloud 中，管理员打开包含**未启用**应用的 *\~/settings/admin?sectionid=apps\&category=disabled* 页面，并为 **ONLYOFFICE** 应用点击**启用**。

## 配置 ownCloud ONLYOFFICE 集成应用程序 {#configuring-onlyoffice-app-for-owncloud}

在 ownCloud 中，打开包含 **ONLYOFFICE** 部分管理设置的 *\~/settings/admin?sectionid=additional#onlyoffice* 页面。输入以下地址来连接 ONLYOFFICE 文档：

```sh
https://<documentserver>/
```

其中，**文档服务器地址**是安装了 **ONLYOFFICE 文档**的服务器名称。该地址必须能被用户浏览器和 ownCloud 服务器访问。ownCloud 服务器地址也必须能被 **ONLYOFFICE 文档**访问，以确保正常工作。您可以[注册](https://www.onlyoffice.com/zh/signup?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

![本地的](/assets/images/editor/owncloud-local.jpg)

有时，网络配置可能会导致已安装的 ownCloud 和 ONLYOFFICE 文档之间无法通过公共地址进行请求。**更多设置**允许设置 ownCloud 服务器内部请求的 ONLYOFFICE 文档地址，以及 ONLYOFFICE 文档内部请求的返回 ownCloud 地址。您需要在相应字段中输入这些地址。

![公共](/assets/images/editor/owncloud-public.jpg)

从 7.2 版本开始，JWT 默认启用，并且会自动生成密钥，用于限制对 ONLYOFFICE 文档的访问，保障安全性和数据完整性。在 ownCloud 管理配置中指定您自己的密钥。在 ONLYOFFICE 文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

启用或禁用**在同一标签页中打开文件**设置。

**在 ONLYOFFICE 中打开**操作将添加到文件上下文菜单中。您可以将此操作设置为默认操作，这样在点击选定文件类型的文件名时，就会使用该操作。

## 检查连接 {#checking-the-connection}

您可以使用以下 `occ` 命令检查与 ONLYOFFICE 文档的连接：

```sh
occ onlyoffice:documentserver --check
```

您将看到一段文本，内容要么是连接成功的信息，要么是错误原因。

### 自签名证书 {#self-signed-certificates}

如果您正在为您的 ONLYOFFICE 文档使用自签名证书，ownCloud 将不会验证此类证书，并且不允许与 ONLYOFFICE 文档进行连接。您可以通过以下两种方式之一关闭证书验证：

1. 在 ownCloud 的 ONLYOFFICE 管理页面**服务器设置**部分，勾选**关闭证书校验（不安全）**复选框。
2. 手动更改 ownCloud 配置文件。找到 ownCloud 配置文件（*/owncloud/config/config.php*）并打开它。在 `$CONFIG` 数组中添加以下条目（如果数组中已有 `onlyoffice` 条目，请将该键添加到其中）：

   ```php
   'onlyoffice' => array (
       'verify_peer_off' => true,
   ),
   ```

   只有在从未通过界面或 `occ` 命令设置过 `verify_peer_off` 时，ownCloud 才会读取此条目。保存服务器设置后，以**关闭证书校验（不安全）**复选框为准。

这将禁用证书验证，允许 ownCloud 与 ONLYOFFICE 文档建立连接。此设置仅适用于 ownCloud 向 ONLYOFFICE 文档发出的请求，不适用于通过**联合云共享**连接的 ownCloud 实例之间的请求。

如果 ownCloud 也使用自签名证书，ONLYOFFICE 文档同样无法从 ownCloud 下载文件。要在 ONLYOFFICE 文档一侧禁用证书验证，请在 ONLYOFFICE 文档的 *local.json* 配置文件中将 [`services.CoAuthoring.requestDefaults.rejectUnauthorized`](../configuration/server-config/server-config.md#services.CoAuthoring.requestDefaults.rejectUnauthorized) 参数设置为 `false`，然后重启 ONLYOFFICE 文档服务。

:::note
请记住，这是一个临时的不安全解决方案，我们强烈建议您更换为由受信任的证书颁发机构颁发的证书。完成更换后，不要忘记取消勾选**关闭证书校验（不安全）**复选框（如果从未通过界面或 `occ` 命令设置过 `verify_peer_off`，则从 `config.php` 中删除上述条目），并将 `rejectUnauthorized` 恢复为 `true`。
:::

### 后台连接检查 {#background-connection-check}

如果编辑器在正常运行一段时间后无法打开或保存文档，原因可能是网络设置更改、相关服务被禁用或 SSL 证书存在问题。

为了发现这类问题，ONLYOFFICE 应用会在服务器上运行一个后台任务，检查您的 **ownCloud 实例**和 **ONLYOFFICE 文档**之间的连接，即检查服务器地址的可用性和 JWT 密钥的有效性。如果 ONLYOFFICE 文档使用的 ownCloud 地址是 `localhost` 或 `127.0.0.1`，则会跳过此检查。在这种情况下，请在**更多设置**中指定 **ONLYOFFICE Docs 内部请求服务器的地址**。

如果检测到任何问题，ONLYOFFICE 操作将被移除，因此无法再在 ONLYOFFICE 中创建或打开文件。`admin` 组的成员将收到通知；如果勾选了**启用电子邮件通知**复选框（默认勾选），还会收到电子邮件。在错误存在期间，检查不会再次运行，因此这些操作不会自动恢复。请排除问题，然后在管理页面上保存服务器设置，或运行 `occ onlyoffice:documentserver --check`。连接成功后，这些操作将恢复。

默认情况下，此后台任务每天运行一次（`86400` 秒）。如有必要，您可以更改运行频率。为此，打开 ownCloud 配置文件（*/owncloud/config/config.php*），在 `$CONFIG` 数组中添加 `editors_check_interval` 条目，并输入所需的秒数。例如，若要每小时检查一次：

```php
'onlyoffice' => array (
    'editors_check_interval' => 3600,
),
```

要关闭此检查，请在管理页面上取消勾选**启用编辑器后台连接检查**复选框，或将 `editors_check_interval` 设置为 `0`。

## 在 ownCloud Web 中启用编辑功能 {#enabling-editing-for-owncloud-web}

要在 **ownCloud Web** 中启用编辑功能，需要在 ownCloud Web 的 *config.json* 中注册该应用程序：

- 如果您是从[官方应用市场](https://marketplace.owncloud.com/apps/onlyoffice)安装的 ownCloud Web，路径是 *\<owncloud-root-catalog>/config/config.json*。
- 如果您是根据[此说明](#installing-onlyoffice-app-for-owncloud)自行从源代码编译的，路径是 *\<owncloud-web-root-catalog>/config/config.json*。

要注册应用程序，请使用以下代码行：

```json
{
  "external_apps": [
    {
      "id": "onlyoffice",
      "path": "http(s)://<owncloud-10-server-address>/custom/onlyoffice/js/web/onlyoffice.js"
    }
  ]
}

```

根据您的 Web 服务器配置，您可以从 URL 路径中删除 *index.php* 部分。

## 工作原理 {#how-it-works}

ONLYOFFICE 集成遵循[此处](../basic-concepts.md)记录的 API 规范。

1. 创建新文件时，用户在 ownCloud 中导航到文档文件夹，然后点击**新建（+）**菜单中的**文档**、**电子表格**或**演示文稿**选项。

2. 浏览器调用 */lib/Controller/editorController.php* 控制器中的 *create* 方法。此方法会将 *assets* 文件夹中的文件副本添加到用户当前所在的文件夹中。

3. 打开现有文件时，用户在 ownCloud 中找到该文件，并选择**在 ONLYOFFICE 中打开**菜单项。

4. 会打开一个新的浏览器标签页，并调用 */lib/Controller/editorController.php* 控制器中的 *index* 方法。

5. 应用程序准备一个包含以下属性的 JSON 对象：

   - **url**：ONLYOFFICE 文档用于下载文档的 URL；
   - **callbackUrl**：ONLYOFFICE 文档用于通知文档编辑状态的 URL；
   - **documentServerUrl**：客户端需要响应给 ONLYOFFICE 文档的 URL（可在管理设置页面中设置）；
   - **key**：由 *UUID+ 修改时间戳* 组成，用于指示 ONLYOFFICE 文档是否需要重新下载文档。

6. ownCloud 获取该对象，并从 *templates/editor.php* 模板构建一个页面，填充所有这些值，以便客户端浏览器可以加载编辑器。

7. 客户端浏览器向 ONLYOFFICE 文档的 JavaScript 库发出请求，并将包含上述属性的 DocEditor 配置发送给 ONLYOFFICE 文档。

8. 然后，ONLYOFFICE 文档从 ownCloud 下载文档，用户开始编辑。

9. ONLYOFFICE 文档向 *callbackUrl* 发送 POST 请求，通知 ownCloud 有用户正在编辑文档。

10. 当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

11. 在 [10 秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE 文档向 *callbackUrl* 发送 POST 请求，告知 ownCloud 客户端已完成文档编辑并关闭了它。

12. ownCloud 下载文档的新版本，替换旧版本。

## 文件转换 {#converting-files}

ONLYOFFICE 文档在打开和编辑文件时以 Office Open XML 格式为基础。如果文件格式与 OOXML 不同，为了使 ONLYOFFICE 文档能够正常工作并提高性能，文件仍将转换为相应的 OOXML 格式。将文件保存为原始格式时，文件将从 OOXML 转换回该格式。由于这些格式在根本上存在差异，一些数据（如图表、表格、自选图形或图像）和格式可能会丢失，这是因为一些格式（*csv*、*txt* 等）不支持这些内容，或者对它们的处理方式与 OOXML 标准不同。

因此，ONLYOFFICE 应用对不同格式的处理方式不同：

- OOXML 文件和 *pdf* 文件以编辑模式打开。
- 可以编辑但可能丢失数据的格式，例如 *odt*、*ods*、*odp*、*rtf*、*txt*、*csv*、*tsv*、*epub* 或 *html*，默认仅支持查看。要以编辑模式打开这些格式，请在设置中的**默认的文件编辑器（由于文件格式限制，保存为下列格式时，数据可能会缺失）**列表中勾选它们。*txt* 和 *csv* 默认已勾选。
- 其他格式，例如 *doc*、*xls*、*ppt*、*md* 或 *hwp*，仅支持查看，无法编辑。

对于 *doc*、*xls*、*ppt* 等格式，以及上述列表中的 *odt*、*ods*、*odp*、*rtf* 等格式（*txt*、*csv* 和 *tsv* 除外），文件上下文菜单中提供**用 ONLYOFFICE 转换**选项。该选项会在同一文件夹中创建文件的 OOXML 副本。

## 已知问题 {#known-issues}

如果您遇到此处未列出的问题，请在该应用的 [GitHub 问题跟踪器](https://github.com/ONLYOFFICE/onlyoffice-owncloud/issues)中报告。

### 连接外部存储 {#connecting-external-storages}

在某些情况下，使用**外部存储**应用添加存储时，协同编辑会出现问题。如果使用相同的授权密钥进行连接（选择*用户名和密码*或*全局凭证*身份验证类型），则用户可以进行协同编辑。如果使用不同的授权密钥（*登录凭据，保存到数据库*或*用户输入，存储到数据库*身份验证选项），则无法进行协同编辑。当使用*登录凭据，保存到会话*身份验证类型时，文件无法在编辑器中打开。

### 加密文件存储 {#encrypting-file-storage}

ownCloud 提供了加密文件存储的选项。但是，如果启用了*每个用户的加密密钥*加密（ownCloud **默认加密模块**应用默认使用），ONLYOFFICE 文档将无法下载加密文件，也无法在编辑后保存。ONLYOFFICE 应用不会阻止打开此类文件：编辑器会打开，但文档无法加载。管理设置页面的 ONLYOFFICE 部分将显示相关通知。不过，如果设置了*主密钥*加密，ONLYOFFICE 应用将按预期工作，只是启用任何加密后，**编辑时保留中间版本（强制保存）**均不可用。启用*主密钥*加密的说明可在 [ownCloud 文档](https://doc.owncloud.com/server/11.1/admin_manual/configuration/files/encryption/encryption_configuration.html#enabling-master-key-based-encryption-from-the-command-line)中获取。

:::note
ownCloud 建议仅在没有现有数据的全新安装或尚未启用加密的系统上使用*主加密密钥*，因为在已使用*每个用户的加密密钥*加密的文件上启用*主密钥*加密后，这些文件**可能会永久丢失**。
:::

### 联合云共享 {#federated-cloud-sharing}

如果使用**联合云共享**应用共享文档，连接到不同 ONLYOFFICE 服务器的 ownCloud 实例之间将无法进行协同编辑。连接到同一 ONLYOFFICE 文档服务器的用户可以协同编辑文档，但连接到两个（或更多）不同 ONLYOFFICE 文档服务器的用户将无法实时协作处理同一文档。协同编辑还要求远程实例上安装 ONLYOFFICE 应用，因为文档标识符需要从远程实例获取。如果没有该应用，文件仍可打开，但两个实例的用户将在不同的会话中编辑文件。

### 无下载权限共享的文件 {#files-shared-without-download-permission}

ONLYOFFICE 文档需要从 ownCloud 下载文件才能将其打开。对于在没有下载权限的情况下共享的文件，只有在 ONLYOFFICE 设置中指定了**秘钥**时，ownCloud 才允许此下载。如果未指定秘钥，此类文件将无法在编辑器中打开。

当用户访问没有下载权限的文档时，文件打印和使用系统剪贴板的功能不可用。不过，可以通过编辑器工具栏和上下文菜单中的按钮在编辑器内进行复制和粘贴操作。
