---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/liferay.svg
---

# Liferay 集成

这个[插件](https://github.com/ONLYOFFICE/onlyoffice-liferay)允许用户使用ONLYOFFICE文档在[Liferay](https://www.liferay.com/)中编辑办公文档。

## 功能特性

- 目前，使用该插件可以打开和编辑以下文档格式：DOCX、XLSX、PPTX、DOCXF、OFORM。
- 以下格式仅支持查看：ODT、ODS、ODP、DOC、XLS、PPT、PDF。
- 该插件将在**文档和媒体**部分为办公文档创建一个新的**ONLYOFFICE编辑/查看**菜单选项。这使得多个用户能够实时协作，并将所做的更改保存回Liferay系统。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Liferay和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Liferay发送POST请求。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装Liferay的ONLYOFFICE连接器

您可以从[Liferay市场](https://web.liferay.com/marketplace/-/mp/application/171169174)进行安装，或者如果您要自行构建连接器，只需将*build\libs*文件夹中编译好的 **.jar**文件放入 */opt/liferay/deploy*目录下，Liferay会自动进行安装。

## 配置Liferay的ONLYOFFICE连接器

要配置该连接器，您必须导航至**系统设置**（**控制面板->配置->系统设置**）。在**平台**部分，点击**连接器**类别并选择**ONLYOFFICE**。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Liferay的**系统设置**页面指定您自己的**密钥**。在ONLYOFFICE文档[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 编译Liferay的ONLYOFFICE连接器

只需运行*gradle build*命令。生成的 **.jar**文件将被放置在*build/libs*目录中。

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范：[此处](../basic-concepts.md)。

1. 用户在Liferay中导航至**文档和媒体**部分，并选择在**ONLYOFFICE中编辑**操作。

2. Liferay为ONLYOFFICE文档准备一个包含以下属性的JSON对象：

   - **url**:ONLYOFFICE文档用于下载文档的URL；
   - **callbackUrl**:ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **key**:即fileVersionId，用于指示ONLYOFFICE文档是否需要重新下载文档；
   - **title**:文档标题（名称）。

3. 客户端浏览器向ONLYOFFICE文档的JavaScript库发出请求，并将包含上述属性的DocEditor配置发送给ONLYOFFICE文档。

4. 然后，ONLYOFFICE文档从Liferay下载文档，用户开始编辑。

5. ONLYOFFICE文档向*callbackUrl*发送POST请求，通知Liferay有用户正在编辑文档。

6. Liferay锁定文档，但仍允许具有写入权限的其他用户通过保留相关操作，与ONLYOFFICE文档进行实时协作。

7. 当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

8. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE文档向callbackUrl发送POST请求，告知Liferay客户端已完成文档编辑并关闭了窗口。

9. Liferay下载文档的新版本，替换旧版本。

在此处下载Liferay的ONLYOFFICE连接器：[此处](https://github.com/ONLYOFFICE/onlyoffice-liferay)。
