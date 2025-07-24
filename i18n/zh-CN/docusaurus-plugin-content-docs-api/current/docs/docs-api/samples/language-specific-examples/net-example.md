---
sidebar_label: .Net example
sidebar_position: -8
---

# .Net 示例

## 概述

本示例将帮助您把ONLYOFFICE文档集成到用.Net（C#）或.Net（C#MVC）编写的Web应用程序中。

> 本示例仅用于测试目的以及演示编辑器的功能。在没有进行适当的代码修改之前，**请勿**在您自己的服务器上使用此集成示例。如果您启用了测试示例，在投入生产环境之前请将其禁用。

## 重要安全信息

在使用测试示例时，请牢记以下安全方面的内容：

- 由于无需授权，存储不受未经授权访问的保护。
- 由于参数是由代码根据预先安排的脚本生成的，因此不会对链接中的参数替换进行检查。
- 编辑后保存文件的请求中不会进行数据检查，因为每个测试示例仅适用于来自ONLYOFFICE文档的请求。
- 不禁止从其他网站使用测试示例，因为它们旨在与来自其他域的ONLYOFFICE文档进行交互。

## 步骤 1.安装ONLYOFFICE文档

下载并安装ONLYOFFICE文档（打包为文档服务器）：

[获取ONLYOFFICE文档](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

如需了解如何安装ONLYOFFICE文档，请查看详细指南，[适用于Windows](https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx?from=api_csharp_example)，[适用于Linux](https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu.aspx?from=api_csharp_example)，或者[适用于Docker](https://helpcenter.onlyoffice.com/server/developer-edition/docker/docker-installation.aspx?from=api_csharp_example)。

## 步骤2.下载用于集成编辑器的.Net（C#）/.Net（C#MVC）代码

从我们的网站下载[.Net(C#)或.Net(C#MVC)示例](./language-specific-examples.md)

要将编辑器连接到您的网站，请在*settings.config*文件（对于MVC版本则是*web.appsettings.config*文件）中指定编辑器的安装路径和存储文件夹的路径：

``` xml
<add key="storage-path" value=""/>
<add key="files.docservice.url.site" value="https://documentserver/" />
```

其中，**documentserver**是安装了ONLYOFFICE文档的服务器名称，storage-path是将创建和存储文件的路径。您可以设置一个绝对路径。

如果您想尝试配置编辑器，请修改*DocEditor.aspx*文件中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

## 步骤3.安装先决条件

检查您的系统是否满足以下要求：

- **Microsoft.NET Framework**:Microsoft.NET Framework：4.5版本（可从[Microsoft官方网站](https://www.microsoft.com/zh-cn/download/details.aspx?id=30653)下载）；
- **Internet Information Services**:7版本或更高版本。

配置IIS组件以使服务器正常工作：

1. 打开Windows功能：

   **开始**->**控制面板**->**程序**->**程序和功能**->**启用或关闭Windows功能**

2. 在打开的窗口中，找到**Internet Information Services**，并勾选下图中所选的所有功能：

   <img alt="Windows features" src="/assets/images/csharp/server-components.png" width="778px" />

 ## 步骤4. 配置 JWT

 打开 *settings.config* 文件（或 MVC 版本的 *web.appsettings.config* 文件），并与 ONLYOFFICE 文档[指定相同密钥](https://helpcenter.onlyoffice.com/installation/docs-configure-jwt.aspx) 以启用 JWT：
 
 ``` xml
 <add key="files.docservice.secret" value="secret" />
 ```

## 步骤5.运行带有编辑器的网站

1. 运行Internet Information Service（IIS）管理器：

   **开始**->**控制面板**->**系统和安全**->**管理工具**->**Internet Information Services (IIS)管理器**

2. 在IIS管理器中添加您的网站。

   在**连接**面板中，右键单击树状结构中的**网站**节点，然后单击**添加网站**。

   <img alt="Connections" src="/assets/images/csharp/add.png" width="320px" />

3. 在**添加网站**对话框中，在**网站名称**框中指定包含.Net（C#）/.Net（C# MVC）项目的文件夹名称。

   在**物理路径**框中指定项目文件夹的路径。

   在**端口**框中指定仅用于此网站的唯一值。

   <img alt="Add website" src="/assets/images/csharp/sitename.png" width="583px" />

4. 检查IIS管理器中为您的网站指定的.NET平台版本。选择**v4.0.**版本。

   **应用程序池**->右键单击平台名称->**设置应用程序池默认值**->**.NET CLR版本**

   <img alt="Advanced settings" src="/assets/images/csharp/platform.png" width="539px" />

5. 使用IIS管理器浏览您的网站：

   Right-click the site ->**Manage Website**->**Browse**

   <img alt="Browse website" src="/assets/images/csharp/browse.png" width="500px" />

## 步骤 6.检查可访问性

如果示例和ONLYOFFICE文档安装在不同的计算机上，请确保安装了示例的服务器能够访问您在配置文件中指定的（替换了**documentserver**的）地址的ONLYOFFICE文档。同时确保ONLYOFFICE文档反过来也能够访问安装了示例的服务器，使用您在配置文件中指定的（替换了**example.com**的）地址。
