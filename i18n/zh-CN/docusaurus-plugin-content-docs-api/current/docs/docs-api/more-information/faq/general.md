---
sidebar_position: -12
---

# 一般问题

## 我是 ONLYOFFICE 文档 API 的新手。我应该从哪里开始？

如果您不知道如何开始使用 ONLYOFFICE 文档 API，我们建议您首先阅读[基本概念](../../get-started/basic-concepts.md)和[工作原理](../../get-started/how-it-works/how-it-works.md)部分，以便更好地了解 ONLYOFFICE 文档 API 的构建方式。熟悉了主要概念后，您可以访问[立即试用](../../get-started/try-docs/try-docs.md)部分，查看 ONLYOFFICE 文档主要功能的实际示例。

如果您对特定的编程语言示例感兴趣，请参阅[特定于语言的示例](../../samples/language-specific-examples/language-specific-examples.md) ，它们是以多种编程语言编写，解释了如何安装 ONLYOFFICE 文档、从何处获取示例源文件以及如何安装它们和连接 ONLYOFFICE 文档。

使用某些文档管理系统（如 Nextcloud、ownCloud、SharePoint 等）并希望了解如何将 ONLYOFFICE 文档连接到这些系统的用户，可以访问[即用型连接器](../../get-started/ready-to-use-connectors/nextcloud-integration.md)部分。该部分详细介绍了与 ONLYOFFICE 文档配合使用的主要插件。

每个API方法的详细描述可在更大的**文档**模块中找到。所有方法都在相应的部分中描述，它们的列表在[高级参数](../../usage-api/advanced-parameters.md)部分中可以找到。

## 如何查看ONLYOFFICE 文档的当前版本号？

当前的ONLYOFFICE 文档版本号可在文档编辑器、演示文稿编辑器或电子表格编辑器的**关于**页面上找到，位于徽标和编辑器名称的正下方。

您可以使用 API 向 **文档命令服务**发送 POST 请求。将 *c* 参数的值设为 [version](../../additional-api/command-service/version.md)，在请求正文中作为 JSON 对象发送：

  ``` json
  {
    "c": "version"
  }
  ```

版本的请求结果以 JSON 形式返回，如下所示：

  ``` json
  {
    "error": 0,
    "version": "4.3.1.4"
  }
  ```

有关与**文档命令服务**交互以及使用各种命令执行此操作的更多详细信息，请访问[此页面](../../additional-api/command-service/command-service.md)。

## 我想从 default.json 配置文件中更改一些 ONLYOFFICE 文档参数。我该怎么做才能使我的更改在更新后不会丢失？

ONLYOFFICE 文档的所有主要设置都存储在 *default.json* 配置文件中，该文件位于 */etc/onlyoffice/documentserver* /文件夹（适用于 Linux）或 *%ProgramFiles%\ONLYOFFICE\DocumentServer\config\\* （适用于 Windows）中。在同一文件夹中还有特定于平台的 *production.json* 文件，其中存储了与 Linux 或 Windows 相关的设置。

ONLYOFFICE 文档使用 [Node.js 配置模块](https://www.npmjs.com/package/config)来组织和构造配置文件，因此这些文件的层次结构如下所示：

  ``` ini
  default.json
  production.json
  local.json
  ```

所有主要设置都存储在 *default.json* 文件中，其中一些设置被 *production.json* 文件中的设置添加或覆盖，任何用户/开发人员设置被 *local.json* 配置文件中的设置覆盖。

> 如果您更改 *default.json* 或 *production.json* 文件中的参数，所有更改将在 ONLYOFFICE 文档更新或 Docker 容器重启后丢失（如果您使用 Docker 安装了 ONLYOFFICE 文档）。

因此，我们强烈建议您**不要**更改 *default.json* 或 *production.json* 文件中的参数，而是使用 *local.json* 配置文件。此文件必须与 *default.json* 文件在同一文件夹中创建，并且**必须保留**必要参数的**整个对象结构**。

*local.json* 的使用示例可以在以下部分中找到：

- [保存延迟](../../get-started/how-it-works/saving-file.md#save-delay)
- [强制保存](../../get-started/how-it-works/saving-file.md#force-saving)
- [请求正文中的令牌](../../additional-api/signature/request/token-in-body.md)
- [启用 WOPI](../../using-wopi/overview.md#enabling-wopi)
- [IP过滤器](../../using-wopi/overview.md#ip-filter)
