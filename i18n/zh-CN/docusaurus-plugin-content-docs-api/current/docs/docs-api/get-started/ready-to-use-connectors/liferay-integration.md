---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/liferay.svg
---

import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

# Liferay 集成

<YoutubeVideo videoId="U20aA97JglI"/>

这个[应用](https://github.com/ONLYOFFICE/onlyoffice-liferay)允许用户使用 ONLYOFFICE 文档在 [Liferay](https://www.liferay.com/) 中编辑办公文档。

## 功能特性

- 目前，使用该应用可以打开和编辑以下文档格式：DOCM、DOCX、DOTM、DOTX、PDF、POTM、POTX、PPSM、PPSX、PPTM、PPTX、XLSB、XLSM、XLSX、XLTM、XLTX。
- 以下格式仅支持查看：CSV、DJVU、DOC、DOT、DPS、DPT、EPUB、ET、ETT、FB2、FODP、FODS、FODT、HTM、HTML、HWP、HWPX、KEY、MD、MHT、MHTML、NUMBERS、ODG、ODP、ODS、ODT、OTP、OTS、OTT、OXPS、PAGES、POT、PPS、PPT、RTF、STW、SXC、SXI、SXW、TXT、VSDM、VSDX、VSSM、VSSX、VSTM、VSTX、WPS、WPT、XLS、XLT、XML、XPS。
- 该应用将在**文档和媒体**部分为办公文档创建一个新的**在 ONLYOFFICE 中编辑**菜单选项。这使得多个用户能够实时协作，并将所做的更改保存回 Liferay 系统。

## 安装 ONLYOFFICE 文档

您需要一个 ONLYOFFICE 文档（文档服务器）实例，该实例必须能从 Liferay 和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的 [ONLYOFFICE 文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE 文档还必须能够直接向 Liferay 发送 POST 请求。

使用 [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer) 是启动 ONLYOFFICE 文档实例的最简单方法。

## 安装 Liferay 的 ONLYOFFICE 应用

您可以从 [Liferay 市场](https://web.liferay.com/marketplace/-/mp/application/171169174)进行安装，或者如果您要自行构建应用，只需将 `build/libs` 文件夹中编译好的 `.jar` 文件放入 `/opt/liferay/deploy`。Liferay 会自动进行安装。

## 配置 Liferay 的 ONLYOFFICE 应用

要配置该应用，请导航至**控制面板 -> 配置 -> 系统设置**。在**平台**部分，点击**连接器**类别并选择 **ONLYOFFICE**。

从7.2版本开始，JWT 默认启用，并且会自动生成密钥，用于限制对 ONLYOFFICE 文档的访问，保障安全性和数据完整性。在 Liferay 的**系统设置**页面指定您自己的**密钥**。在 ONLYOFFICE 文档[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 编译 Liferay 的 ONLYOFFICE 应用

运行 `gradle build`。生成的 `.jar` 文件将被放置在 `build/libs` 目录中。

## 工作原理

ONLYOFFICE 集成遵循[此处](../basic-concepts.md)记录的 API。

1. 用户在 Liferay 中导航至**文档和媒体**部分，并选择在 **ONLYOFFICE 中编辑**操作。

2. Liferay 为 ONLYOFFICE 文档准备一个包含以下属性的 JSON 对象：

   - **url** - ONLYOFFICE 文档用于下载文档的 URL；
   - **callbackUrl** - ONLYOFFICE 文档用于通知文档编辑状态的 URL；
   - **key** - 即 *fileVersionId*，用于指示 ONLYOFFICE 文档是否需要重新下载文档；
   - **title** - 文档标题（名称）。

3. 客户端浏览器向 ONLYOFFICE 文档的 JavaScript 库发出请求，并将包含上述属性的 DocEditor 配置发送给 ONLYOFFICE 文档。

4. 然后，ONLYOFFICE 文档从 Liferay 下载文档，用户开始编辑。

5. ONLYOFFICE 文档向*callbackUrl*发送 POST 请求，通知 Liferay 有用户正在编辑文档。

6. Liferay 锁定文档，但仍通过保留**在 ONLYOFFICE 中编辑**操作，允许具有写入权限的其他用户与 ONLYOFFICE 文档进行实时协作。

7. 当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

8. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE 文档向 *callbackUrl* 发送 POST 请求，告知 Liferay 客户端已完成文档编辑并关闭了窗口。

9. Liferay 下载文档的新版本，替换旧版本。

在[此处](https://github.com/ONLYOFFICE/onlyoffice-liferay)下载 Liferay 的 ONLYOFFICE 应用。
