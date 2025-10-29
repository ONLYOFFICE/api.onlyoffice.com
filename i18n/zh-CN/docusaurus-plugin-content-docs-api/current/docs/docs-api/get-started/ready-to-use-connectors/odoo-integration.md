---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/odoo.svg
---

# Odoo integration

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="wkLTlJpmLQg"/>
```

该[应用程序](https://github.com/ONLYOFFICE/onlyoffice-odoo)允许用户在[Odoo](https://www.odoo.com/)的“文档”模块中，借助ONLYOFFICE文档进行办公文档的编辑与协作。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、DOCXF、XLSX、PPTX。
- 仅支持查看的文档格式如下：DJVU、DOC、DOCM、DOT、DOTM、DOTX、EPUB、FB2、FODT、HTML、MHT、ODT、OFORM、OTT、OXPS、PDF、RTF、TXT、XPS、XML、CSV、FODS、ODS、OTS、XLS、XLSB、XLSM、XLT、XLTM、XLTX、FODP、ODP、OTP、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM。
- 该应用程序会在文档库中为Office文档创建一个新的**在ONLYOFFICE中打开**菜单项。这使得多个用户能够实时协作，并将更改保存回Odoo。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Odoo和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Odoo发送POST请求。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装Odoo ONLYOFFICE集成应用程序

要在Odoo中使用ONLYOFFICE文档，必须执行以下步骤：

**方法1**：从管理面板安装

1. [登录](https://www.odoo.com/web/login)您现有的Odoo账户，或者[注册](https://www.odoo.com/web/signup)一个新账户。
2. 进入Odoo管理面板，点击顶部菜单栏中的**应用**。
3. 在**应用**目录中搜索ONLYOFFICE。
4. 点击**安装**按钮。

**方法2**：手动安装

1. 访问[Odoo应用目录](https://apps.odoo.com/apps)，选择您已安装的Odoo版本。

2. 搜索ONLYOFFICE并下载。您也可以从官方[GitHub仓库](https://github.com/ONLYOFFICE/onlyoffice-odoo/releases)下载应用程序的最新版本。

3. 将ONLYOFFICE连接器放入*/path/to/odoo/addons* 目录。确保ONLYOFFICE文件夹命名为*onlyoffice_odoo*。

   或者，您可以在*/path/to/odoo/config/odoo.conf* 文件中添加以下内容，指定您存放*apps/addons*文件夹的路径：

   ``` ini
   [options]
   addons_path = /mnt/extra-addons
   ```

4. 安装*pyjwt*包：

   ``` sh
   pip install pyjwt
   ```

5.将Odoo切换到开发者模式，点击**应用->更新应用列表**，或者直接重启您的Odoo实例。

## 配置Odoo ONLYOFFICE集成应用程序

要配置该应用程序，进入**设置**。在左侧边栏找到**ONLYOFFICE**并点击。指定已安装的ONLYOFFICE文档的URL：

``` sh
https://<documentserver>/
```

其中，**文档服务器地址**是安装了**ONLYOFFICE文档**的服务器名称。该地址必须能被用户浏览器和Odoo服务器访问。Odoo服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Odoo配置页面指定您自己的密钥。**密钥**。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 工作原理

ONLYOFFICE 集成遵循此处记录的API规范：[这里](../basic-concepts.md)。

在此处下载Odoo ONLYOFFICE集成应用程序：[此处](https://github.com/ONLYOFFICE/onlyoffice-odoo/tree/develop)。
