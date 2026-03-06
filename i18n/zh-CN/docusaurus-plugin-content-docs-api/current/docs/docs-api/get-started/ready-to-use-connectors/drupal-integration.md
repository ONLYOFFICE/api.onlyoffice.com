---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/drupal.svg
---

# Drupal 集成

ONLYOFFICE [模块](https://github.com/ONLYOFFICE/onlyoffice-drupal)使用户能够借助 ONLYOFFICE 文档在 [Drupal](https://www.drupal.org/) 的媒体模块中编辑文件。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX、PDF。
- 可查看的文档格式如下：DJVU、DOC、DOCM、DOT、DOTM、DOTX、EPUB、FB2、FODT、HTML、MHT、ODT、OTT、OXPS、PDF、RTF、TXT、XPS、XML、CSV、FODS、ODS、OTS、XLS、XLSM、XLT、XLTM、XLTX、FODP、ODP、OTP、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM。
- 该模块还允许在公共页面上预览文件。
- 该模块会在文档库中为办公文档创建一个新的**在 ONLYOFFICE 中编辑**菜单项。这使多个用户能够实时协作，并将更改保存回 Drupal。

## 安装 ONLYOFFICE 文档

您需要一个 ONLYOFFICE 文档（文档服务器）实例，该实例必须能从 Drupal 和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的 [ONLYOFFICE 文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE 文档还必须能够直接向 Drupal 发送 POST 请求。

使用 [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer) 是启动 ONLYOFFICE 文档实例的最简单方法。

## 系统要求

- **firebase/php-jwt**：6.0.0 或更高版本

请确保运行：

``` sh
composer require firebase/php-jwt:^6.0
```

## 安装 Drupal ONLYOFFICE 连接器模块

要在 Drupal 中使用 ONLYOFFICE 文档，请按照以下步骤操作：

### 步骤 1：添加模块

添加 Drupal 模块有两种方式。

**方式 1**：使用 [Composer](https://www.drupal.org/docs/extending-drupal/installing-modules#s-add-a-module-with-composer) 添加模块。

这是推荐的方式。在您站点的根目录输入以下命令：

``` sh
composer require onlyoffice/onlyoffice-drupal
```

要应用本地化设置，请运行：

``` sh
drush locale-check
drush locale-update
```

**方式 2**：[手动](https://www.drupal.org/docs/user_guide/en/extend-module-install.html)添加模块。

新模块不再能通过 Drupal 网页界面上传。

1. 前往 [drupal.org](https://www.drupal.org/project/onlyoffice/) 上的 **Drupal ONLYOFFICE 模块**项目页面，滚动到页面底部的**发行版**部分。点击**查看所有发行版**链接，从列表中选择所需版本。
2. 下载您所选版本的 *tar.gz* 或 *zip* 压缩包。
3. 解压压缩包，并将模块文件夹放置到站点的 `/modules/contrib/` 目录中。
4. 继续按照下一节的说明启用模块。

:::note
"添加新模块"界面选项（含 URL 字段）已从 Drupal 核心中移除。现在手动安装需要直接将文件下载并放置到模块目录中。
:::

### 步骤 2：启用模块

安装完成后（通过上述任一方式），使用以下方式之一启用模块：

**方式 1**：使用 [Drupal 管理界面](https://www.drupal.org/docs/extending-drupal/installing-modules#s-using-the-drupal-user-interface-easy)。

1. 在**管理**菜单中，导航至**扩展**页面（admin/modules）。
2. 找到 **ONLYOFFICE 连接器**模块并勾选复选框。
3. 点击**安装**以启用该模块。

**方式 2**：使用命令行。

1. 运行以下 **Drush** 命令，并将项目名称作为参数：

   ``` sh
   drush pm:enable onlyoffice
   ```

2. 按照屏幕上的说明操作。

## 配置 Drupal ONLYOFFICE 连接器模块

在 Drupal 中，打开 *\~/config/system/onlyoffice-settings* 页面，该页面包含 **ONLYOFFICE** 部分的管理设置。或者依次点击**配置 → 媒体 → ONLYOFFICE 连接器设置**。输入连接 ONLYOFFICE 文档的地址：

``` sh
https://<documentserver>/
```

其中，**documentserver** 是安装了 **ONLYOFFICE 文档**的服务器名称。该地址必须能被您的浏览器和 Drupal 服务器访问。Drupal 服务器地址也必须能被 ONLYOFFICE 文档访问，以确保正常工作。您可以[注册](https://www.onlyoffice.com/docs-registration.aspx?from=api)免费的 ONLYOFFICE 云服务，并使用其公共 IP 地址或公共 DNS，可在云控制台的**实例**部分找到。

从版本 7.2 开始，JWT 默认启用，并会自动生成密钥，用于限制对 ONLYOFFICE 文档的访问，保障安全性和数据完整性。在 Drupal 管理配置中指定您自己的**密钥**。在 ONLYOFFICE 文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 使用 Drupal ONLYOFFICE 连接器模块

### 编辑已上传到 Drupal 的文件

所有添加到媒体中的办公文件都可以打开进行编辑。在最后一列的表格中，调用下拉列表并选择**在 ONLYOFFICE 中编辑**操作。编辑器将在同一标签页中打开。具有管理员权限的用户能够使用 ONLYOFFICE 文档共同编辑文件。所有更改都将保存在同一文件中。

### 创建新帖子

创建帖子时，您可以添加新的 ONLYOFFICE 元素：

1. 转到**结构 → 内容类型 → 管理字段**。在打开的页面上，点击**添加字段**。添加一个新字段：**文件**或**媒体**。设置标签并保存。
2. 对于添加的**文件**字段，指定文件扩展名。转到**结构 → 内容类型 → 管理字段**。在**允许的文件扩展名**字段中，指定将在编辑器中显示的文件格式（docx、xlsx、pptx）。
3. 对于添加的**媒体**字段，点击**文档**复选框。
4. 转到**结构 → 媒体类型 → 文档 → 管理显示**。
5. 对于**文档**字段，指定 *ONLYOFFICE 预览*格式。通过点击齿轮符号，您可以指定嵌入式编辑器窗口的尺寸。

完成预设设置后，您可以在**内容**选项卡上创建帖子。点击**添加内容**按钮并选择创建的内容。

指定标题并选择一个文件（如果内容包含**文件**字段）。

对于**媒体**部分，指定先前上传文件的名称。

您网站的访问者也将能够查看创建的页面（**人员 → 权限 → 查看已发布的内容**）。

### 处理表单

ONLYOFFICE 表单部分允许 Drupal 用户创建新的 PDF 表单：**管理 → 内容 → ONLYOFFICE 表单**。

**创建、上传、编辑 PDF 表单**

要创建新的 PDF 表单，点击**创建并上传**按钮。选择**空白**选项并填写新文件的名称。

要上传表单，选择**上传**选项，从设备上传 PDF 表单。

创建/上传的文件将出现在表单页面的列表中，并在新标签页中以编辑模式在 ONLYOFFICE 编辑器中打开。

**在 Drupal 页面上发布 PDF 表单**

要将 PDF 表单添加到 Drupal 页面，需要进行一些初始设置。导航至**管理 → 结构 → 内容类型**。对于所需的内容类型，选择**管理字段**。在下一页，点击**创建新字段**，选择 **ONLYOFFICE 表单**，并设置字段名称。这将为所选内容类型添加一个 ONLYOFFICE 表单类型的字段。

要将 PDF 表单添加到网站页面，导航至**管理 → 内容**。点击**添加内容**按钮，选择包含之前添加的 ONLYOFFICE 表单字段的内容类型。在表单字段中，输入现有表单的名称。如果表单尚未创建，点击**创建新的 ONLYOFFICE 表单**打开 PDF 表单部分，在那里您可以上传或创建新的 PDF 表单。最后，点击**保存**按钮完成 Drupal 中的页面创建。

**填写 PDF 表单**

在 Drupal 页面上，用户可以在表单中填写数据。要提交已填写的表单，点击编辑器顶部面板中的**完成并提交**按钮。

提交后，已完成的表单将发送到网站。访问者还可以通过打开编辑器顶部面板中的上下文菜单并选择**下载为 DOCX** 或**下载为 PDF** 将副本下载到设备。

**处理已填写的表单**

在**管理 → 内容 → ONLYOFFICE 表单 → 已提交的表单**部分，Drupal 用户可以查看已完成的表单，按模板名称组织。要查看特定模板的所有回复，只需选择该表单的模板名称即可。

## 工作原理

ONLYOFFICE 集成遵循[此处](../basic-concepts.md)记录的 API 规范。

在[此处](https://github.com/ONLYOFFICE/onlyoffice-drupal)下载 Drupal ONLYOFFICE 模块。
