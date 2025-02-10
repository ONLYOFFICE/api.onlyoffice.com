---
sidebar_position: -6
---

## Where can I find integration examples for ONLYOFFICE Docs?

The examples of integration of ONLYOFFICE Docs with your own website can be found [here](../../get-started/language-specific-examples/language-specific-examples.md). You can choose among different web development programming languages:

- [.Net (C#) / .Net (C# MVC)](../../get-started/language-specific-examples/Net%20example.md)
- [Java](../../get-started/language-specific-examples/Java%20example.md)
- [Java Spring](../../get-started/language-specific-examples/Java%20Spring%20example.md)
- [Node.js](../../get-started/language-specific-examples/NodeJS%20example.md)
- [PHP](../../get-started/language-specific-examples/PHP%20example.md)
- [Python](../../get-started/language-specific-examples/Python%20example.md)
- [Ruby](../../get-started/language-specific-examples/Ruby%20example.md)
- [Java integration SDK](../../get-started/language-specific-examples/Java%20integration%20SDK.md)

The examples will show where to get the source codes, how to install and set up the working examples for integrating ONLYOFFICE Docs into your website written with the help of one of these programming languages.

If you want to connect ONLYOFFICE Docs to one of the existing document management services, you can see the ready-made connectors for the following services:

- [Alfresco](../../get-started/ready-to-use-connectors/alfresco%20integration.md)
- [Chamilo](../../get-started/ready-to-use-connectors/Chamilo%20integration.md)
- [Confluence](../../get-started/ready-to-use-connectors/Confluence%20integration.md)
- [Drupal](../../get-started/ready-to-use-connectors/Drupal%20integration.md)
- [HumHub](../../get-started/ready-to-use-connectors/HumHub%20integration.md)
- [Liferay](../../get-started/ready-to-use-connectors/Liferay%20integration.md)
- [Mattermost](../../get-started/ready-to-use-connectors/Mattermost%20integration.md)
- [Moodle](../../get-started/ready-to-use-connectors/Moodle%20integration.md)
- [Nextcloud](../../get-started/ready-to-use-connectors/nextcloud-integration.md)
- [Nuxeo](../../get-started/ready-to-use-connectors/Nuxeo%20integration.md)
- [Odoo](../../get-started/ready-to-use-connectors/Odoo%20integration.md)
- [ownCloud](../../get-started/ready-to-use-connectors/ownCloud%20integration.md)
- [Plone](../../get-started/ready-to-use-connectors/Plone%20integration.md)
- [Redmine](../../get-started/ready-to-use-connectors/Redmine%20integration.md)
- [SharePoint](../../get-started/ready-to-use-connectors/SharePoint%20integration.md)
- [Strapi](../../get-started/ready-to-use-connectors/Strapi%20integration.md)
- [SuiteCRM](../../get-started/ready-to-use-connectors/SuiteCRM%20integration.md)
- [WordPress](../../get-started/ready-to-use-connectors/WordPress%20integration.md)

Most of the connectors are available from the corresponding service application store and are easy to install. Just follow the step-by-step instructions at the [connector page](../../get-started/ready-to-use-connectors/nextcloud-integration.md) and connect ONLYOFFICE Docs to your service.

## Which paths should I specify when integrating ONLYOFFICE Docs with my website?

After you download and unpack the examples for integration ONLYOFFICE Docs with your website, you need to open the source codes and replace all the instances of the **https\://documentserver/** string with the actual address of your installed ONLYOFFICE Docs.

## What settings should be used when connecting ONLYOFFICE to ownClowd/Nextcloud via a local and public network?

When connecting your ownCloud/Nextcloud installation to ONLYOFFICE Docs, you need to make sure that the server with ONLYOFFICE Docs installed is accessible both for the internet browsers and ownCloud/Nextcloud installations, i.e. the requests can be sent to and the responses can be accepted from the computer with ONLYOFFICE Docs installed.

The interaction scheme between ownCloud installation and ONLYOFFICE Docs is available [here](../../get-started/ready-to-use-connectors/ownCloud%20integration.md#configuring-owncloud-onlyoffice-integration-app). If you use Nextcloud, visit [this page](../../get-started/ready-to-use-connectors/nextcloud-integration.md#configuring-nextcloud-onlyoffice-integration-app) to see how you can properly set up your server.
