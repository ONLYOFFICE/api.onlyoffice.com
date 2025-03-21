---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/wordpress.svg
---

# WordPress 集成

该[插件](https://github.com/ONLYOFFICE/onlyoffice-wordpress)可让用户借助ONLYOFFICE文档在 [WordPress](https://wordpress.org/) 网站及管理面板的页面上编辑和查看办公文档。

## 功能特点

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX。
- 仅支持查看的文档格式如下：DOC、DOCM、DOT、DOTX、DOTM、ODT、FODT、OTT、RTF、TXT、HTML、HTM、MHT、XML、PDF、DJVU、FB2、EPUB、XPS、XLS、XLSM、XLT、XLTX、XLTM、ODS、FODS、OTS、CSV、PPS、PPSX、PPSM、PPT、PPTM、POT、POTX、POTM、ODP、FODP、OTP。
- 该插件支持多个用户实时协作，且所做更改可保存回WordPress。

## 安装ONLYOFFICE文档

您需要部署一个ONLYOFFICE文档（文档服务器）实例，确保WordPress和任意终端客户端都能解析并连接到它。若无法实现连接，请参考官方的 [ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。此外，ONLYOFFICE文档还需具备直接向WordPress发送POST请求的能力。

使用 [Docker](https://github.com/onlyoffice/Docker-DocumentServer) 是安装ONLYOFFICE文档实例，最简单的方式。

## 安装WordPress ONLYOFFICE集成插件

要开始在WordPress中使用ONLYOFFICE文档，请按照以下步骤操作：

1. 下载压缩后的插件。
2. 进入到WordPress管理仪表板中的**插件**部分
3. 点击页面顶部的**添加新插件**。
4. 点击页面顶部的**上传插件**。
5. 点击**选择文件**，然后选择下载的压缩插件。
6. 插件安装完成后，点击**激活**。

或者，您也可克隆主分支（后续同样要在WordPress管理后台激活插件）：

``` sh
cd wp-content/plugins
git clone https://github.com/ONLYOFFICE/onlyoffice-wordpress
```

## 配置WordPress ONLYOFFICE集成插件

通过WordPress界面配置插件。进入**WordPress管理仪表板->ONLYOFFICE->设置**，并指定以下参数：

- **文档编辑服务地址**。填写已安装的ONLYOFFICE文档的URL。
- **文档服务器JWT密钥**。从7.2版本开始，JWT默认启用，并且会自动生成密钥，以限制对ONLYOFFICE文档的访问，出于安全原因和数据完整性考虑。在WordPress管理配置中指定您自己的密钥。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 使用WordPress ONLYOFFICE集成插件

ONLYOFFICE集成插件支持WordPress管理员借助ONLYOFFICE文档打开文件进行协作编辑。在已发布的文章中，编辑器仅以**嵌入**模式对所有WordPress网站访问者（包括已授权和未授权的用户）可见。

### 编辑上传到WordPress的文件

从**媒体**部分上传的所有文件都将显示在**ONLYOFFICE->文件**页面。点击文件名，编辑器将在同一标签页中打开。具有管理员权限的用户可以共同编辑文档。所有更改都将保存到同一个文件中。

### 创建文章

在创建文章时，您可以添加ONLYOFFICE元素（块），然后上传新文件或从**媒体库**中选择一个文件。添加的文件将在当前编辑的文章中以ONLYOFFICE徽标和文件名的形式显示。文章发布后（当您点击**发布**或**更新**按钮时），您的WordPress网站访问者将可以在**嵌入**模式下查看此文件。

## 工作原理

ONLYOFFICE集成遵循记录的API。[此处](../basic-concepts.md)。

下载WordPress ONLYOFFICE集成插件：[此处](https://github.com/ONLYOFFICE/onlyoffice-wordpress)。
