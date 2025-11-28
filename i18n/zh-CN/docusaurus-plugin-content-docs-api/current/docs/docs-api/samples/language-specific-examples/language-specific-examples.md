---
sidebar_position: -5
---

# 特定语言示例

借助ONLYOFFICE文档，任何协作解决方案都可以通过文档编辑和协同编辑功能得到增强。在本节中，您将了解如何将ONLYOFFICE文档集成到您自己的网站中。

每个ONLYOFFICE文档实例都包含文本文档、电子表格、演示文稿和可填写表单的在线编辑器，以及一个测试示例。

测试示例是一个简单的文档管理系统，可集成到您的应用程序中用于测试。默认包含的测试示例是用Node.js编写的。默认情况下它是禁用的。要启用它，请按照启动屏幕上的说明操作。

:::note
这些集成示例用于演示文档编辑器的功能以及将**ONLYOFFICE文档**连接到您自己应用程序的方法。在没有进行**适当的代码修改**之前，**请勿**在您自己的服务器上使用这些示例！如果您启用了任何测试示例，在投入生产环境之前请将其禁用。
:::

## 重要安全信息

在使用测试示例时，请牢记以下安全方面的内容：

- 由于无需授权，存储不受未经授权访问的保护。
- 由于参数是由代码根据预先安排的脚本生成的，因此不会对链接中的参数替换进行检查。
- 编辑后保存文件的请求中不会进行数据检查，因为每个测试示例仅适用于来自ONLYOFFICE文档的请求。
- 不禁止从其他网站使用测试示例，因为它们旨在与来自其他域的ONLYOFFICE文档进行交互。

要开始将文档编辑器集成到您自己的网站中，您需要执行以下操作：

1. 下载ONLYOFFICE文档并在您的本地服务器上进行设置：

   [获取ONLYOFFICE文档](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

2. 选择编程语言，并下载将在线编辑器集成到您网站的示例代码：

   - [DotNet.Csharp.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/DotNet.Csharp.Example.zip)
   - [DotNet.Csharp.MVC.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/DotNet.Csharp.MVC.Example.zip)
   - [Java.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Java.Example.zip)
   - [Java.Spring.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Java.Spring.Example.zip)
   - [Node.js.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Node.js.Example.zip)
   - [PHP.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/PHP.Example.zip)
   - [PHP.Laravel.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/PHP.Laravel.Example.zip)
   - [Python.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Python.Example.zip)
   - [Ruby.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Ruby.Example.zip)
   - [Go.Example](https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Go.Example.zip)

   或者查找源代码：[集成示例](https://github.com/ONLYOFFICE/document-server-integration)。

3. 编辑示例中的配置文件，将默认路径更改为第1步中安装的编辑器的路径，以及更改编辑器配置中可用的其他参数。

   您可以在以下路径找到配置文件：

   - **.Net (C# MVC)** - *web/documentserver-example/csharp-mvc/web.appsettings.config*
   - **.Net (C#)** - *web/documentserver-example/csharp/settings.config*
   - **Go** - *web/documentserver-example/go/config/configuration.json*
   - **Java** - *web/documentserver-example/java/src/main/resources/settings.properties*
   - **Java Spring** - *web/documentserver-example/java-spring/src/main/resources/application.properties*
   - **Node.js** - *web/documentserver-example/nodejs/config/default.json*
   - **PHP** - *web/documentserver-example/php/src/configuration/ConfigurationManager.php*
   - **PHP (Laravel)** - *web/documentserver-example/php-laravel/.env.example*
   - **Python** - *web/documentserver-example/python/manage.py*
   - **Ruby** - *web/documentserver-example/ruby/config/application.rb*

4. 如果示例和ONLYOFFICE文档安装在不同的计算机上，请确保安装了示例的服务器能够访问您在配置文件中指定的（替换了**documentserver**的）地址的ONLYOFFICE文档。并且您还必须确保ONLYOFFICE文档反过来也能够访问安装了示例的服务器，使用您在配置文件中指定的（替换了**example.com***的）地址。
