---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/suitecrm.svg
---

# SuiteCRM 集成

该[插件](https://github.com/ONLYOFFICE/onlyoffice-suitecrm)支持在[SuiteCRM](https://suitecrm.com/)中使用ONLYOFFICE文档编辑办公文档。

## 功能特性

- 目前，支持编辑以下格式的文档：DOCX，XLSX，PPTX，DOCXF，OFORM。
- 仅支持查看以下格式的文档：PDF，ODT，ODS，ODP，DOC，XLS，PPT，PPS，EPUB，RTF，HTML，HTM，TXT，CSV。
- 借助该插件，用户可以编辑文本文档、电子表格和演示文稿，还能创建并填写数字表单。
- 该插件会在文档库中添加**在ONLYOFFICE中打开**选项。这使得多个用户能够实时协作，并将更改保存回SuiteCRM。

## 安装ONLYOFFICE文档

您需要部署一个ONLYOFFICE文档（文档服务器）实例，确保SuiteCRM和所有终端客户端都能解析并连接到该实例。若无法实现连接，请参考官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还需具备直接向SuiteCRM发送POST请求的能力。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是安装ONLYOFFICE文档实例的最简单方法。

## 安装SuiteCRM ONLYOFFICE集成插件

可从此处获取ONLYOFFICE集成插件的最新编译包：[此处](https://github.com/ONLYOFFICE/onlyoffice-suitecrm/releases)。

要开始在SuiteCRM中使用ONLYOFFICE文档，请按照以下步骤操作：

1. 打开SuiteCRM，依次点击**管理->管理工具->模块加载器**，上传ONLYOFFICE插件压缩包。
2. 按下**安装**按钮来安装上传的模块。
3. 切换到**管理->管理工具->修复**，然后运行**快速修复和重建**。

## 配置SuiteCRM ONLYOFFICE集成插件

安装后即可访问插件设置页面：**管理->ONLYOFFICE->ONLYOFFICE设置**进入插件设置页面。

- **文档服务器地址**。输入安装了ONLYOFFICE文档的服务器名称：

  ``` sh
  http://documentserver/
  ```

  这里的**documentserver**指的是安装了**ONLYOFFICE文档**的服务器名称。该地址要确保用户浏览器和SuiteCRM服务器均可访问，同时，SuiteCRM服务器地址也需能被**ONLYOFFICE文档**访问，以保证系统正常运行。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

- **文档服务器密钥**。从7.2版本开始，JWT会默认开启，并自动生成一个密钥，用于限制对ONLYOFFICE文档的访问，保障系统安全和数据完整。ONLYOFFICE文档的访问，以确保安全性和数据完整性。在SuiteCRM的**ONLYOFFICE设置**中.在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 使用SuiteCRM ONLYOFFICE集成插件

插件安装并配置完成，您就可以在**文档**模块中编辑和协作处理办公文件：

1. 进入**文档**模块。
2. 点击文件名打开**详细信息视图**页面。
3. 在**详细信息视图**页面，点击**操作**下拉菜单中的**在ONLYOFFICE中打开**，文件将在新标签页中打开。

## 工作原理

ONLYOFFICE集成遵循此处记录的API[此处](../basic-concepts.md)。

在此处下载SuiteCRM ONLYOFFICE集成插件[此处](https://github.com/ONLYOFFICE/onlyoffice-suitecrm)。
