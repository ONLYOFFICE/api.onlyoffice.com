---
sidebar_position: -6
---

# 集成问题

## 在哪里可以找到 ONLYOFFICE 文档的集成示例？ {#where-can-i-find-integration-examples-for-onlyoffice-docs}

可以在[此处](../../samples/language-specific-examples/language-specific-examples.md)找到将 ONLYOFFICE 文档与您自己的网站集成的示例。您可以在不同的 Web 开发编程语言中进行选择：

- [.Net (C#) / .Net (C# MVC)](../../samples/language-specific-examples/net-example.md)
- [Java](../../samples/language-specific-examples/java-example.md)
- [Java Spring](../../samples/language-specific-examples/java-spring-example.md)
- [Node.js](../../samples/language-specific-examples/nodejs-example.md)
- [PHP](../../samples/language-specific-examples/php-example.md)
- [PHP (Laravel)](../../samples/language-specific-examples/php-laravel-example.md)
- [Python](../../samples/language-specific-examples/python-example.md)
- [Ruby](../../samples/language-specific-examples/ruby-example.md)
- [Go](../../samples/language-specific-examples/go-example.md)
- [Java integration SDK](../../samples/language-specific-examples/java-integration-sdk.md)

这些示例将显示从何处获取源代码，如何安装和设置工作示例，以便将 ONLYOFFICE 文档集成到您的网站中，它们是用其中一个编程语言编写的。

如果您想将 ONLYOFFICE 文档连接到现有的文档管理服务之一，您可以查看以下服务的现成连接器：

- [Alfresco](../../get-started/ready-to-use-connectors/alfresco-integration.md)
- [Chamilo](../../get-started/ready-to-use-connectors/chamilo-integration.md)
- [Confluence](../../get-started/ready-to-use-connectors/confluence-integration.md)
- [Drupal](../../get-started/ready-to-use-connectors/drupal-integration.md)
- [HumHub](../../get-started/ready-to-use-connectors/humhub-integration.md)
- [Liferay](../../get-started/ready-to-use-connectors/liferay-integration.md)
- [Mattermost](../../get-started/ready-to-use-connectors/mattermost-integration.md)
- [Moodle](../../get-started/ready-to-use-connectors/moodle-integration.md)
- [Nextcloud](../../get-started/ready-to-use-connectors/nextcloud-integration.md)
- [Nuxeo](../../get-started/ready-to-use-connectors/nuxeo-integration.md)
- [Odoo](../../get-started/ready-to-use-connectors/odoo-integration.md)
- [ownCloud](../../get-started/ready-to-use-connectors/owncloud-integration.md)
- [Plone](../../get-started/ready-to-use-connectors/plone-integration.md)
- [Redmine](../../get-started/ready-to-use-connectors/redmine-integration.md)
- [SharePoint](../../get-started/ready-to-use-connectors/sharepoint-integration.md)
- [Strapi](../../get-started/ready-to-use-connectors/strapi-integration.md)
- [SuiteCRM](../../get-started/ready-to-use-connectors/suitecrm-integration.md)
- [WordPress](../../get-started/ready-to-use-connectors/wordpress-integration.md)

大多数连接器可从相应的服务应用程序商店获得，并且易于安装。只需按照[连接器页面](../../get-started/ready-to-use-connectors/nextcloud-integration.md)上的分步说明将 ONLYOFFICE 文档连接到您的服务。

## 在将 ONLYOFFICE 文档与我的网站集成时，我应该指定哪些路径？ {#which-paths-should-i-specify-when-integrating-onlyoffice-docs-with-my-website}

下载并解压用于将 ONLYOFFICE 文档与您的网站集成的示例后，您需要打开源代码并将 **https\://documentserver/** 字符串的所有实例替换为您安装的 ONLYOFFICE 文档的实际地址。

## 通过本地和公共网络将 ONLYOFFICE 连接到 ownCloud/Nextcloud 时应该使用哪些设置？ {#what-settings-should-be-used-when-connecting-onlyoffice-to-owncloudnextcloud-via-a-local-and-public-network}

将 ownCloud/Nextcloud 安装连接到 ONLYOFFICE 文档时，您需要确保 Internet 浏览器和 ownCloud/Nextcloud 安装都可以访问安装了 ONLYOFFICE 文档的服务器，即一台可以向它发送请求，也可以接受来自它的响应的安装了 ONLYOFFICE 文档的计算机。

ownCloud 安装和 ONLYOFFICE 文档之间的交互方案可在[此处](../../get-started/ready-to-use-connectors/owncloud-integration.md#how-it-works)获得。如果您使用 Nextcloud，请访问[此页面](../../get-started/ready-to-use-connectors/nextcloud-integration.md#configuring-onlyoffice-app-for-nextcloud)以了解如何正确设置服务器。

## ONLYOFFICE 文档无法从使用自签名证书的服务器下载文件，我该怎么办？ {#onlyoffice-docs-cannot-download-a-file-from-my-server-that-uses-a-self-signed-certificate-what-should-i-do}

默认情况下，ONLYOFFICE 文档会验证其下载文件的服务器的证书，因此会拒绝自签名证书。这适用于任何集成。如需测试，您可以关闭验证：在 ONLYOFFICE 文档的 *local.json* 配置文件中将 [`services.CoAuthoring.requestDefaults.rejectUnauthorized`](../../get-started/configuration/server-config/server-config.md#services.CoAuthoring.requestDefaults.rejectUnauthorized) 参数设置为 `false`，然后重启 ONLYOFFICE 文档服务。

此设置不安全，仅适用于测试。在生产环境中，请更换为由受信任的证书颁发机构颁发的证书，并将 `rejectUnauthorized` 恢复为 `true`。

如果 ONLYOFFICE 文档本身使用自签名证书，集成方也必须接受该证书。对于 ownCloud 和 Nextcloud，请参阅 [ownCloud](../../get-started/ready-to-use-connectors/owncloud-integration.md#self-signed-certificates) 和 [Nextcloud](../../get-started/ready-to-use-connectors/nextcloud-integration.md#self-signed-certificates) 的自签名证书说明。
