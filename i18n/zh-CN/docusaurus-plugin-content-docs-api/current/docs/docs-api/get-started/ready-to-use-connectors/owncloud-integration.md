---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/owncloud.svg
---

# ownCloud 集成

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="IAjhUxBWKkQ"/>
```

这个[应用](https://github.com/ONLYOFFICE/onlyoffice-owncloud)允许用户借助ONLYOFFICE文档，在[ownCloud](https://owncloud.com)中编辑办公文档。

最新的已签名的连接器版本可在[ownCloud](https://marketplace.owncloud.com/apps/onlyoffice)官方商店中获取。

## 功能特性

- 目前，使用该应用程序可打开并编辑以下文档格式：DOCX、XLSX、PPTX、CSV、TXT、DOCXF、OFORM。
- 仅支持查看的文档格式如下：PDF、DJVU、XPS。
- 以下格式可转换为OOXML格式：DOC、DOCM、DOT、DOTX、EPUB、HTM、HTML、ODP、ODT、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM、RTF、XLS、XLSM、XLT、XLTM、XLTX。ODT、ODS和ODP也支持即时转换。在管理员设置中启用相应选项后，ODF格式的文档在点击后会立即在编辑器中转换并打开。
- 该应用程序会在**新建(+)**菜单中创建用于创建**文档**、**电子表格**、**演示文稿**的选项。它还会在文档库中为Office文档创建一个新的**在ONLYOFFICE中打开**菜单项。这使得多个用户能够实时协作，并将更改保存回ownCloud。连接到同一文档服务器的多个联合ownCloud实例之间也支持协同编辑。
- 支持以不同的权限类型共享文件，如查看/编辑、评论、审阅、填写表单。还可以限制下载（在所有编辑器中）和修改筛选器（在电子表格中）。也支持通过公共链接进行共享。
- 支持在**ownCloud Web**中处理文档、电子表格和演示文稿。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从ownCloud和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向ownCloud发送POST请求。

ONLYOFFICE文档和ownCloud可以安装在不同的计算机上，也可以安装在同一台机器上。如果选择后者，您需要为文档服务器设置一个自定义端口，因为默认情况下ONLYOFFICE文档和ownCloud都使用80端口。或者您可以在代理服务器后使用ONLYOFFICE文档，有关配置方法，请参考[这篇文章。](https://helpcenter.onlyoffice.com/server/document/document-server-proxy.aspx)。

您也可以使用我们的[Docker安装方式](https://github.com/ONLYOFFICE/docker-onlyoffice-owncloud)，通过几条命令就能完成ONLYOFFICE文档和ownCloud的安装与配置。

## 安装ownCloud ONLYOFFICE集成应用程序 {#installing-owncloud-onlyoffice-integration-app}

ownCloud管理员可以从内置的应用市场安装集成应用程序。为此，点击左上角的汉堡菜单，选择**应用市场**。然后，在可用应用程序列表中找到**ONLYOFFICE**并进行安装。

如果安装ownCloud的服务器没有互联网访问权限，或者由于其他原因需要手动安装，管理员可以按以下步骤手动安装该应用程序。要在ownCloud中使用ONLYOFFICE文档，必须执行以下步骤：

1. 进入ownCloud服务器的*apps/*目录(或者[用于](https://doc.owncloud.org/server/admin_manual/installation/apps_management_installation.html#using-custom-app-directories)连接应用程序的其他目录):

  ``` sh
  cd apps/
  ```

2.获取ownCloud ONLYOFFICE集成应用程序。有以下几种方法：

   1. 从[ownCloud](https://marketplace.owncloud.com/apps/onlyoffice)官方应用商店下载最新的已签名版本。
   2. 从GitHub上的应用程序[发布页面](https://github.com/ONLYOFFICE/onlyoffice-owncloud/releases)下载最新的已签名版本。
   3. 克隆应用程序源代码并自行编译：
   
   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-owncloud.git onlyoffice
   cd onlyoffice
   git submodule update --init --recursive
   ```

   :::note
   ownCloud无法使用未签名的应用程序，并会给出警告，所以您需要使用选项**a**或**b**来获取应用程序。
   :::

3. 修改所有者，以便可以从ownCloud Web界面更新应用程序：

  ``` sh
  chown -R www-data:www-data onlyoffice
  ```

4. 在ownCloud中，管理员打开包含**未启用**应用的*\~/settings/admin?sectionid=apps\&category=disabled*页面，并为**ONLYOFFICE**应用点击**启用**。

## 配置ownCloud ONLYOFFICE集成应用程序 {#configuring-owncloud-onlyoffice-integration-app}

在ownCloud中，打开包含**ONLYOFFICE**部分管理设置的*\~/settings/admin?sectionid=additional#onlyoffice*页面。输入以下地址来连接ONLYOFFICE文档：

``` sh
https://<documentserver>/
```

其中，**文档服务器地址**是安装了**ONLYOFFICE文档** 的服务器名称。该地址必须能被用户浏览器和ownCloud服务器访问。ownCloud服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。

![本地的](/assets/images/editor/owncloud-local.jpg)

有时，网络配置可能会导致已安装的ownCloud和ONLYOFFICE文档之间无法通过公共地址进行请求。**“高级服务器设置**允许设置ownCloud服务器内部请求的ONLYOFFICE文档地址，以及ONLYOFFICE文档内部请求的返回ownCloud地址。您需要在相应字段中输入这些地址。

![公共](/assets/images/editor/owncloud-public.jpg)

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在ownCloud管理配置中指定您自己的密钥。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

启用或禁用**在同一标签页中打开文件**设置。

**在ONLYOFFICE中打开**操作将添加到文件上下文菜单中。您可以将此操作设置为默认操作，这样在点击选定文件类型的文件名时，就会使用该操作。

## 检查连接

您可以使用以下occ命令检查与ONLYOFFICE文档的连接：

``` sh
occ onlyoffice:documentserver --check
```

您将看到一段文本，内容要么是连接成功的信息，要么是错误原因。

## 在ownCloud Web中启用编辑功能

要在**ownCloud Web**中启用编辑功能，需要在ownCloud Web的*config.json*:

- 如果您是从[官方应用市场](https://marketplace.owncloud.com/apps/onlyoffice)安装的ownCloud Web，路径是 *\<owncloud-root-catalog>/config/config.json*。
- 如果您是根据[此说明](#installing-owncloud-onlyoffice-integration-app)自行从源代码编译的，路径是*\<owncloud-web-root-catalog>/config/config.json*。

要注册连接器，请使用以下代码行：

``` json
{
  "external_apps": [
    {
      "id": "onlyoffice",
      "path": "http(s)://<owncloud-10-server-address>/custom/onlyoffice/js/web/onlyoffice.js"
    }
  ]
}

```

根据您的Web服务器配置，您可以从URL路径中删除*index.php*部分

## 工作原理

ONLYOFFICE集成遵循[此处](../basic-concepts.md)记录的API规范。

1. 创建新文件时，用户在ownCloud中导航到文档文件夹，然后点击**新建(+)**菜单中的**文档**、**电子表格”**或**演示文稿**选项。

2. 浏览器调用 */lib/Controller/EditorController.php*控制器中的*creat*方法。此方法会将*assets*文件夹中的文件副本添加到用户当前所在的文件夹中。

3.打开现有文件时，用户在ownCloud中找到该文件，并选择**在ONLYOFFICE中打开**菜单项。

4.会打开一个新的浏览器标签页，并调用 */lib/Controller/EditorController.php*控制器中的*index*方法。

5. 应用程序准备一个包含以下属性的JSON对象：

   - **url**- ONLYOFFICE文档用于下载文档的URL；
   - **callbackUrl**- ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **documentServerUrl**- 客户端需要响应给ONLYOFFICE文档的 URL（可在管理设置页面中设置）；
   - **key**- 由*UUID+修改时间戳*组成，用于指示ONLYOFFICE文档是否需要重新下载文档。

6. ownCloud获取该对象，并从*templates/editor.php*模板构建一个页面，填充所有这些值，以便客户端浏览器可以加载编辑器。

7. 客户端浏览器向ONLYOFFICE文档的JavaScript库发出请求，并将包含上述属性的DocEditor配置发送给ONLYOFFICE文档。

8. 然后，ONLYOFFICE文档从ownCloud下载文档，用户开始编辑。

9. ONLYOFFICE文档向*callbackUrl*发送POST请求，通知ownCloud有用户正在编辑文档。

10. 当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

11. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE文档向*callbackUrl*发送POST请求，告知ownCloud客户端已完成文档编辑并关闭了它。

12. ownCloud下载文档的新版本，替换旧版本。

## 已知问题

- **连接外部存储**：在某些情况下，使用**外部存储**应用添加存储时，协同编辑会出现问题。如果使用相同的授权密钥进行连接（选择*用户名和密码*或*全局凭证*身份验证类型），则用户可以进行协同编辑。如果使用不同的授权密钥（*登录凭据，保存到数据库*或*用户输入，存储到数据库*身份验证选项），则无法进行协同编辑。当使用*登录凭据，保存到会话*身份验证类型时，文件无法在编辑器中打开。

- **加密文件存储**：ownCloud提供了加密文件存储的选项。但是，如果启用了*每个用户的加密密钥*加密(ownCloud**默认加密模块**应用默认使用)，ONLYOFFICE文档将无法打开加密文件进行编辑，也无法在编辑后保存。管理设置页面的ONLYOFFICE部分将显示相关通知。不过，如果设置了*主密钥*加密，ONLYOFFICE应用将按预期工作。启用*主密钥*加密的说明可在ownCloud官方文档网站的[ownCloud](https://doc.owncloud.org/server/admin_manual/configuration/files/encryption/encryption_configuration.html#enabling-master-key-based-encryption-from-the-command-line)获取。

  :::note
  ownCloud建议仅在没有现有数据的全新安装或尚未启用加密的系统上使用*主加密密钥*，因为在已使用*每个用户的加密密钥*加密的文件上启用*主密钥*加密后，这些文件**可能会永久丢失**。
  :::

- **证书验证**：如果文档服务器使用自签名证书，ownCloud将不会验证此类证书，并且不允许与ONLYOFFICE文档进行连接。这个问题可以通过两种方式解决：

  1. 在ownCloud的ONLYOFFICE管理页面服务器设置部分，勾选**禁用证书验证（不安全）**复选框。
  2. 手动更改ownCloud配置文件。找到ownCloud配置文件(*/owncloud/config/config.php*)并打开它。在其中插入以下部分：

  ``` php
  <?php
  'onlyoffice' => array (
      'verify_peer_off' => true
  )
  ?>
  ```

  这将禁用证书验证，允许ownCloud与ONLYOFFICE文档建立连接。

  :::note
  请记住，这是一个临时的不安全解决方案，我们强烈建议您更换为由某些证书颁发机构颁发的证书。完成更换后，不要忘记取消勾选相应的设置框或从ownCloud配置文件中删除上述部分内容。
  :::

- **后台任务**：如果编辑器在正常运行一段时间后无法打开或保存文档，原因可能是网络设置更改、相关服务被禁用或SSL证书存在问题。

 为了解决这个问题，我们添加了一个在服务器上运行的异步后台任务，用于检查编辑器的可用性。它可以测试您的**ownCloud实例**和**ONLYOFFICE文档**之间的连接，即检查服务器地址的可用性和JWT密钥的有效性。

 如果检测到任何问题，ONLYOFFICE集成连接器（以及创建和打开文件的功能）将被禁用。作为ownCloud管理员，您将收到相应的通知。

  此选项可帮助您避免因服务器设置不正确而需要更改设置时出现的问题。

  默认情况下，此后台任务每天运行一次。如有必要，您可以更改运行频率。为此，打开ownCloud配置文件(*\_/owncloud/config/config.php\_*)。插入以下部分并输入所需的分钟数：

  ``` php
  <?php
  "onlyoffice" => array (
      "editors_check_interval" => 3624
  )
  ?>
  ```

  要禁用此检查，请输入值0。

- **联合云共享**：如果使用**联合云共享**应用共享文档，连接到不同ONLYOFFICE服务器的ownCloud实例之间将无法进行协同编辑。来自同一文档服务器的用户可以在协同编辑模式下编辑文档，但来自两个（或更多）不同文档服务器的用户将无法实时协作处理同一文档。

- **文件转换**：ONLYOFFICE文档在打开和编辑文件时以Office Open XML格式为基础。如果文件格式与OOXML不同，为了使ONLYOFFICE文档能够正常工作并提高性能，文件仍将转换为相应的OOXML格式。之后您可以编辑文件，对基础OOXML格式进行任何更改，并将文件保存为该基础OOXML格式。

  如果原始ownCloud文件格式与基础格式不同，而您仍想将其保存为原始格式，文件将从OOXML转换回该格式。由于这些格式在根本上存在差异，一些数据（如图表、表格、自选图形或图像）和格式可能会丢失，这是因为一些格式(*csv*，*txt*等)不支持这些内容，或者对它们的处理方式与OOXML标准不同。这就是为什么默认情况下所有非OOXML文件仅支持查看，尽管在上下文菜单中有转换文件的选项。如果您了解转换后可能会丢失数据/格式，但仍想打开非OOXML文件进行编辑，可以在设置列表中勾选这些文件。默认情况下，*csv*和*txt*文件支持编辑。

- 当用户访问没有下载权限的文档时，文件打印和使用系统剪贴板的功能不可用。不过，可以通过编辑器工具栏和上下文菜单中的按钮在编辑器内进行复制和粘贴操作。

在此处下载ownCloud ONLYOFFICE集成应用程序：[此处](https://github.com/ONLYOFFICE/onlyoffice-owncloud)。
