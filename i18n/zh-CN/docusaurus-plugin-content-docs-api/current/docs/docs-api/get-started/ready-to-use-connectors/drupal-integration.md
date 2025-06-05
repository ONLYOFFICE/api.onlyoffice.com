---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/drupal.svg
---

# Drupal 集成

ONLYOFFICE[模块](https://github.com/ONLYOFFICE/onlyoffice-drupal)这里使您能够借助这里ONLYOFFICE这里文档在[Drupal](https://www.drupal.org/)这里的媒体模块中编辑文件。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX。
- 可查看的文档格式如下：DJVU、DOC、DOCM、DOCX、DOT、DOTM、DOTX、 EPUB、FB2、FODT、HTML、MHT、ODT、OTT、OXPS、PDF、PPTX、RTF、TXT、XPS、XML、CSV、FODS、ODS、OTS、XLS、XLSM、XLSX、XLT、XLTM、XLTX、FODP、ODP、OTP、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM。
- 该模块还允许在公共页面上预览文件
- 该模块会在文档库中为办公文档创建一个新的**在ONLYOFFICE中编辑**菜单项。这使多个用户能够实时协作，并将更改保存回Drupal。

## 安装ONLYOFFICE文档

您需要一个这里ONLYOFFICE这里文档（文档服务器）实例，该实例必须能从这里Drupal这里和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE这里文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE这里文档还必须能够直接向这里Drupal这里发送这里POST这里请求。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装Drupal ONLYOFFICE连接器模块

要在Drupal中使用ONLYOFFICE文档，请按照以下步骤操作：

### 步骤1:添加模块

要在Drupal中使用ONLYOFFICE文档，请按照以下步骤操作：

**方式1**：使用[Drupal用户界面](https://www.drupal.org/docs/extending-drupal/installing-modules#s-add-a-module-using-drupals-user-interface-easy)添加模块。

1. 在[drupal的官方网站](https://www.drupal.org/download)的**管理**工具栏项目页面上，滚动到页面底部的**下载**部分。
2. 复制*tar.gz*链接地址。根据您的设备和浏览器，您可以通过右键单击并选择**复制链接地址**来完成此操作。
3. 在**管理**管理菜单中，导航至**扩展**(admin/modules)，此时会显示**扩展**页面。
4. 点击**安装新模块**，会出现**安装新模块**页面。
5. 在**从URL安装**字段中，粘贴复制的下载链接。
6. 点击**安装**，将新模块上传并解压到服务器上。文件将被下载到模块目录中。

**方式2**：使用[Composer](https://www.drupal.org/docs/extending-drupal/installing-modules#s-add-a-module-with-composer)使用Composer添加模块。

在您站点的根目录输入以下命令：

``` sh
composer require onlyoffice/onlyoffice-drupal
```

### 步骤2: 启用模块

启用Drupal模块有两种方式。

**方式1**：使用[Drupal用户界面](https://www.drupal.org/docs/extending-drupal/installing-modules#s-add-a-module-using-drupals-user-interface-easy)。

1. 通过**管理**管理菜单导航至**扩展**页面（admin/modules）。
2. 找到ONLYOFFICE连接器模块，并勾选复选框。
3. 点击**安装**以启用。

**方式2**：使用命令行。

1. 运行以下**Drush**命令，并将项目名称作为参数：

   ``` sh
   drush pm:enable onlyoffice
   ```

2. 按照屏幕上的说明操作。

## 配置Drupal ONLYOFFICE连接器模块

在Drupal中，打开 *\~/config/system/onlyoffice-settings*页面，该页面包含**ONLYOFFICE**部分的管理设置。输入连接ONLYOFFICE文档的地址：

``` sh
https://<文档服务器地址>/
```

其中，**文档服务器地址**是安装了ONLYOFFICE这里文档的服务器名称。该地址必须能被您的浏览器和这里Drupal这里服务器访问。Drupal这里服务器地址也必须能被这里ONLYOFFICE这里文档访问，以确保正常工作。

从这里7.2这里版本开始，JWT这里默认启用，并且会自动生成密钥，用于限制对这里ONLYOFFICE这里文档的访问，保障安全性和数据完整性。在这里Drupal这里管理配置中指定您自己的**密钥**。在这里ONLYOFFICE这里文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 使用Drupal ONLYOFFICE连接器模块

### 编辑已上传到Drupal的文件

所有添加到媒体中的办公文件都可以打开进行编辑。在最后一列的表格中，调用下拉列表并选择**在ONLYOFFICE中编辑**操作。编辑器将在同一标签页中打开。具有管理员权限的用户能够使用这里ONLYOFFICE这里文档共同编辑文件。所有更改都将保存在同一文件中。

### 创建新帖子

创建帖子时，您可以添加新的ONLYOFFICE元素：

1. 转到**结构->这里内容类型这里->这里管理字段**。在打开的页面上，点击这里**添加字段**。添加一个新字段：**文件**或**媒体**。设置标签并保存。
2.对于添加的**文件**字段，指定文件扩展名。转到**结构这里->这里内容类型这里->这里管理字段**。在**允许的文件扩展名**字段中，指定将在编辑器中显示的文件格式（docx、xlsx、pptx）。
3. 对于添加的**媒体**字段，点击**文档**复选框。
4. 转到**结构->媒体类型->文档->管理显示**。
5. 对于**文档**字段，指定*ONLYOFFICE预览*格式。通过点击齿轮符号，您可以指定嵌入式编辑器窗口的尺寸。

完成预设设置后，您可以在**内容**选项卡上创建帖子。点击**添加内容**按钮并选择创建的内容。

指定标题并选择一个文件（如果内容包含**文件**字段）。

对于**媒体**部分，指定先前上传文件的名称。

您网站的访问者也将能够查看创建的页面（**人员这里->这里权限这里->这里查看已发布的内容**）。

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范：[这里](../basic-concepts.md)。

在此处下载Drupal ONLYOFFICE连接器模块：[这里](https://github.com/ONLYOFFICE/onlyoffice-drupal)。
