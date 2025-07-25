---
sidebar_position: -4
---

# Docs API integration samples

With ONLYOFFICE Docs, any of collaborative solutions can be enhanced with document editing and co-editing. In this section, you will learn how to integrate ONLYOFFICE Docs into your own website.

Each ONLYOFFICE Docs instance includes online editors for text documents, spreadsheets, presentations, PDFs, and fillable forms, plus a test example.

Test example is simple document management system that can be built into your application for testing. The test example included by default is written on Node.js. It is disabled by default. To enable it, follow the instructions on your start screen.

> The integration examples are used to demonstrate document editors functions and the ways to connect **ONLYOFFICE Docs** to your own application. **DO NOT USE** these examples on your own server without **PROPER CODE MODIFICATIONS**! If you enabled any of the test examples, disable it before going for production.

## Important security info

Please keep in mind the following security aspects when you are using test examples:

- There is no protection of the storage from unauthorized access since there is no need for authorization.
- There are no checks against parameter substitution in links, since the parameters are generated by the code according to the pre-arranged scripts.
- There are no data checks in requests of saving the file after editing, since each test example is intended for requests only from ONLYOFFICE Docs.
- There are no prohibitions on using test examples from other sites, since they are intended to interact with ONLYOFFICE Docs from another domain.

To start integrating document editors into your own website you need to do the following:

1. Download ONLYOFFICE Docs and set it up on your local server:

   [Get ONLYOFFICE Docs](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

2. Select the programming language and download the code for the sample of online editors integration into your website:

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

   or find source code: [integration example](https://github.com/ONLYOFFICE/document-server-integration).

3. Edit the configuration files in the sample changing the default path for the one to the editors installed at step 1 and other parameters available for editor configuration.

   You can find the configuration files at the following paths:

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

4. In case the example and ONLYOFFICE Docs are installed on different computers, make sure that your server with the example installed has access to the ONLYOFFICE Docs with the address which you specify instead of **documentserver** in the configuration files. And you must also make sure that the ONLYOFFICE Docs in its turn has access to the server with the example installed with the address which you specify instead of **example.com** in the configuration files.
