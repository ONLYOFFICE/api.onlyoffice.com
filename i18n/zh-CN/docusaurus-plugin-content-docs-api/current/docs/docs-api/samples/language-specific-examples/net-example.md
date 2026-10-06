---
sidebar_position: -10
description: 运行 ONLYOFFICE 文档 .NET 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "C#"]
---

# .NET (C#) 集成

.NET 集成示例是两个基于 .NET Framework 4.8 的小型 ASP.NET 应用程序：使用 Web Forms 构建的 `csharp`，以及使用 ASP.NET MVC 构建的 `csharp-mvc`。它们都可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。在编写您自己的集成之前，运行其中任意一个示例即可看到一个完整可用的集成。这些示例只能在 Windows 上通过 IIS 运行。

:::warning
本示例仅用于测试。它没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，并在投入生产环境之前将其禁用。
:::

## 先决条件

- **ONLYOFFICE 文档**：[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。
- **.NET Framework 4.8**：请参阅[官方网站](https://dotnet.microsoft.com/download/dotnet-framework/net48)。
- **Internet Information Services (IIS)**：请参阅[官方网站](https://learn.microsoft.com/iis/get-started/whats-new-in-iis-10/installing-iis-10)。
- **Visual Studio**：请参阅[官方网站](https://visualstudio.microsoft.com/downloads/)。
- **Git**：请参阅[官方网站](https://git-scm.com/downloads)。

在 **Windows 功能**中启用 IIS 时，请展开 **Internet Information Services** > **万维网服务**，并选中 **.NET Extensibility 4.8**、**ASP.NET 4.8**、**ISAPI 扩展**、**ISAPI 筛选器**、**默认文档**和**请求筛选**。在 Visual Studio 中，请安装 **ASP.NET 和 Web 开发**工作负载。

## 步骤1. 下载示例

克隆示例仓库，进入您要运行的示例目录，并获取其子模块。以下命令使用的是 [Web Forms 示例](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/csharp)。对于 [MVC 示例](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/csharp-mvc)，请改为进入 `csharp-mvc` 目录：

```sh
git clone --depth 1 https://github.com/ONLYOFFICE/document-server-integration
cd document-server-integration/web/documentserver-example/csharp
git submodule update --init --depth 1 .
```

## 步骤2. 配置连接

打开 `settings.config` 文件（MVC 示例中为 `web.appsettings.config`）并编辑以下键：

```xml
<appSettings>
  <add key="files.docservice.url.site" value="http://documentserver/"/>
  <add key="storage-path" value=""/>
  <add key="files.docservice.secret" value="" />
  <add key="files.docservice.url.example" value=""/>
</appSettings>
```

- `files.docservice.url.site`：安装了 ONLYOFFICE 文档的服务器地址。请将 `documentserver` 替换为该服务器的名称或 IP 地址，并保留末尾的斜杠。
- `storage-path`：示例创建和存储文件的文件夹。如果该值为空，示例会将文件存储在其自身的文件夹中，位于以用户 IP 地址命名的子文件夹内。您可以设置一个绝对路径，例如 `D:\folder`。IIS 应用程序池标识需要对该文件夹具有读写权限。
- `files.docservice.secret`：必须与 ONLYOFFICE 文档的 JWT 设置一致。该键默认为空，这会在示例中禁用 JWT。ONLYOFFICE 文档默认启用 JWT，因此请将此键设置为您服务器的[密钥](/docs/docs-api/additional-api/signature/signature.md)。
- `files.docservice.url.example`：ONLYOFFICE 文档访问示例时使用的地址。如果 ONLYOFFICE 文档在另一台计算机上或在 Docker 中运行，则需要设置此项，因为您在浏览器中打开的地址（例如 `localhost`）在那里指向的是其他位置。

如果您想尝试配置编辑器，请修改 `DocEditor.aspx.cs` 文件（MVC 示例中为 `Models/FileModel.cs`）中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

## 步骤3. 构建并运行示例

1. 在 Visual Studio 中打开 `OnlineEditorsExample.sln`（MVC 示例中为 `OnlineEditorsExampleMVC.sln`），然后选择**生成** > **生成解决方案**。Visual Studio 会还原 NuGet 包，并将示例编译到 `bin` 文件夹中。
2. 在 IIS 管理器中，右键单击**网站**，然后选择**添加网站**。将**物理路径**设置为示例文件夹，并将**端口**设置为任意空闲端口。
3. 在**应用程序池**中，确保新网站所用的应用程序池的 **.NET CLR 版本**为 `v4.0`。
4. 右键单击该网站，然后选择**管理网站** > **浏览**。

浏览器将打开 `http://localhost:<port>/`。您将看到示例的起始页面，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单。

## 故障排除

- **文档安全令牌的格式不正确**：示例中未启用 JWT（`files.docservice.secret` 为空），或者 `files.docservice.secret` 与 ONLYOFFICE 文档的密钥不一致。
- **下载失败**：ONLYOFFICE 文档无法访问示例。请在 `settings.config`（MVC 示例中为 `web.appsettings.config`）中将 `files.docservice.url.example` 设置为 ONLYOFFICE 文档可以解析的地址。
