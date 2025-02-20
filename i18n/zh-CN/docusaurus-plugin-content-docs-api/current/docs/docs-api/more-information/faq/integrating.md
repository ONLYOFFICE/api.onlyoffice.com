---
sidebar_position: -6
---

# Integrating

## 在哪里可以找到 ONLYOFFICE 文档的集成示例？

可以在[此处](../../get-started/language-specific-examples/language-specific-examples.md) 找到将 ONLYOFFICE 文档与您自己的网站集成的示例。您可以在不同的 Web 开发编程语言中进行选择：

- [.Net (C#) / .Net (C# MVC)](../../get-started/language-specific-examples/net-example.md)
- [Java](../../get-started/language-specific-examples/java-example.md)
- [Java Spring](../../get-started/language-specific-examples/java-spring-example.md)
- [Node.js](../../get-started/language-specific-examples/nodejs-example.md)
- [PHP](../../get-started/language-specific-examples/php-example.md)
- [Python](../../get-started/language-specific-examples/python-example.md)
- [Ruby](../../get-started/language-specific-examples/ruby-example.md)
- [Java integration SDK](../../get-started/language-specific-examples/java-integration-sdk.md)

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

## 在将 ONLYOFFICE 文档与我的网站集成时，我应该指定哪些路径？

下载并解压用于将 ONLYOFFICE 文档与您的网站集成的示例后，您需要打开源代码并将 **https\://documentserver/** 字符串的所有实例替换为您安装的 ONLYOFFICE 文档的实际地址。

## 通过本地和公共网络将 ONLYOFFICE 连接到 ownClowd/Nextcloud 时应该使用哪些设置？

将 ownCloud/Nextcloud安装连接到 ONLYOFFICE 文档时，您需要确保 Internet 浏览器和 ownCloud/Nextcloud 安装都可以访问安装了 ONLYOFFICE 文档的服务器，即一台可以向它发送请求，也可以接受来自它的响应的安装了 ONLYOFFICE 文档的计算机。

ownCloud 安装和 ONLYOFFICE 文档之间的交互方案可在[此处](../../get-started/ready-to-use-connectors/owncloud-integration.md#configuring-owncloud-onlyoffice-integration-app) 获得。如果您使用 Nextcloud，请访问[此页面](../../get-started/ready-to-use-connectors/nextcloud-integration.md#configuring-nextcloud-onlyoffice-integration-app) 以了解如何正确设置服务器。
