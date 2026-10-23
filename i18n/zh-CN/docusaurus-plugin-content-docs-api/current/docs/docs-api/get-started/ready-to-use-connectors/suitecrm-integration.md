---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/suitecrm.svg
---

# SuiteCRM 集成

该[插件](https://github.com/ONLYOFFICE/onlyoffice-suitecrm)支持在 [SuiteCRM](https://suitecrm.com/) 中使用 ONLYOFFICE 文档编辑办公文档。

## 功能特性

- 目前，支持编辑以下格式的文档：DOCX、XLSX、PPTX。
- 仅支持查看以下格式的文档：PDF、ODT、ODS、ODP、DOC、XLS、PPT、PPS、EPUB、RTF、HTML、HTM、TXT、CSV。
- 借助该插件，用户可以编辑文本文档、电子表格和演示文稿，还能创建并填写数字表单。
- 该插件会在文档库中为办公文档新增**在 ONLYOFFICE 中打开**菜单选项。这使得多个用户能够实时协作，并将更改保存回 SuiteCRM。

## 安装 ONLYOFFICE 文档

您需要部署一个 ONLYOFFICE 文档（文档服务器）实例，确保 SuiteCRM 和所有终端客户端都能解析并连接到该实例。若无法实现连接，请参考官方的 [ONLYOFFICE 文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE 文档还需具备直接向 SuiteCRM 发送 POST 请求的能力。

使用 [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer) 是安装 ONLYOFFICE 文档实例的最简单方法。

## 安装 SuiteCRM ONLYOFFICE 集成插件

可从[此处](https://github.com/ONLYOFFICE/onlyoffice-suitecrm/releases)获取 ONLYOFFICE 集成插件的最新编译包。

要开始在 SuiteCRM 中使用 ONLYOFFICE 文档，请按照以下步骤操作：

1. 打开 SuiteCRM，依次点击**管理->管理工具->模块加载器**，上传 ONLYOFFICE 插件压缩包。
2. 按下**安装**按钮来安装上传的模块。
3. 切换到**管理->管理工具->修复**，然后运行**快速修复和重建**。

## 配置 SuiteCRM ONLYOFFICE 集成插件

安装后即可访问插件设置页面：**管理->ONLYOFFICE->ONLYOFFICE 设置**。

输入以下地址以连接 ONLYOFFICE 文档：

```sh
https://<documentserver>/
```

这里的 **documentserver** 指的是安装了 **ONLYOFFICE 文档**的服务器名称。该地址要确保用户浏览器和 SuiteCRM 服务器均可访问，同时，SuiteCRM 服务器地址也需能被 **ONLYOFFICE 文档**访问，以保证系统正常运行。您可以[注册](https://www.onlyoffice.com/zh/docs-registration?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些信息可以在云控制台的**实例**部分找到。

从7.2版本开始，JWT 会默认开启，并自动生成一个密钥，用于限制对 ONLYOFFICE 文档的访问，以确保安全性和数据完整性。在 SuiteCRM 的 **ONLYOFFICE 设置**页面中指定您自己的**密钥**。在 ONLYOFFICE 文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 使用 SuiteCRM ONLYOFFICE 集成插件

插件安装并配置完成后，您就可以在**文档**模块中编辑和协作处理办公文件：

1. 进入**文档**模块。
2. 点击文件名打开**详细信息视图**页面。
3. 在**详细信息视图**页面，点击**操作**下拉菜单中的**在 ONLYOFFICE 中打开**，文件将在新标签页中打开。

## 工作原理

ONLYOFFICE 集成遵循[此处](../basic-concepts.md)记录的 API。

在[此处](https://github.com/ONLYOFFICE/onlyoffice-suitecrm)下载 SuiteCRM ONLYOFFICE 集成插件。
