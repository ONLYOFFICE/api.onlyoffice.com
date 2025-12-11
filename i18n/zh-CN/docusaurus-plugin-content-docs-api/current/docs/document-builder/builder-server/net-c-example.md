---
sidebar_position: -4
---

# .Net（C#）示例

## 介绍

要将**ONLYOFFICE Document Builder**集成到您自己的**Net（C#）或 .Net（C# MVC）** 应用程序中，您需要下载并安装**ONLYOFFICE Document Builder**到您的计算机，并使用[.Net（C#）或 .Net（C# MVC）示例](./overview.md)进行集成。本指南将展示成功集成**ONLYOFFICE Document Builder**的操作步骤。

## 步骤 1：下载并安装 ONLYOFFICE Document Builder

首先，下载**ONLYOFFICE Document Builder**并安装到您的计算机：

[获取 ONLYOFFICE Document Builder](https://www.onlyoffice.com/download-builder.aspx?from=api)

## 步骤 2：安装先决条件

要成功运行带有**ONLYOFFICE Document Builder**的网站，请检查您的系统是否满足必要的系统要求。系统必须安装以下组件：

- Microsoft .NET Framework：4.0 或更高版本（可从[微软官方网站](https://www.microsoft.com/en-US/download/details.aspx?id=30653)下载）；
- Internet Information Services：7 或更高版本；
- Microsoft Visual Studio（可从[Visual Studio 官方网站](https://www.visualstudio.com/downloads/download-visual-studio-vs)下载最新版本）。

## 步骤 3：下载 .Net（C#）/ .Net（C# MVC）示例代码并构建应用程序

从我们的网站[下载](./overview.md).Net（C#）或 .Net（C# MVC）示例，并将其解压到您计算机的某个位置。

使用**Visual Studio**应用程序打开解压后的项目文件夹中的**DocumentBuilder.sln**解决方案文件。等待项目加载完成。

项目完全加载后，转到**Visual Studio**顶部菜单，选择**项目**->**重新生成解决方案**。项目将重新生成，之后您可以使用顶部面板上带有浏览器名称的绿色三角形按钮在浏览器中运行它。

## 步骤 4：运行带有 ONLYOFFICE Document Builder 的网站

如果您想使用 Microsoft**IIS**服务运行示例应用程序，需要按照以下附加步骤操作。

1. ### 启用 ASP.NET 4.6 IIS 功能

   转到**开始**->**控制面板**->**程序和功能**，然后点击左侧菜单中的**打开或关闭 Windows 功能**选项。

   在其中选择**Internet Information Services**->**万维网服务**->**应用程序开发功能**，并启用**NET 4.6**的所有选项（包括**.NET 扩展性 4.6**和**ASP.NET 4.6**选项）：

   <img alt="NET 4.6" src="/assets/images/docbuilder/csharp/net46.png" width="550px" />

   请确保**NET Framework 4.6 高级服务**->**ASP.NET 4.6**也已启用。

2. ### 运行 Internet Information Service（IIS）管理器

   为此，转到**开始**->**控制面板**->**管理工具**，然后运行**Internet Information Services（IIS）管理器**。

3. ### 在 IIS 管理器中添加您的网站

   在**连接**面板上，右键单击树中的**站点**节点，然后点击**添加网站...**：

   ![Add website](/assets/images/docbuilder/csharp/add.png)

4. ### 配置您的网站

   在**添加网站**对话框中，在**站点名称**框中指定 .Net（C#）/ .Net（C# MVC）项目所在文件夹的名称。

   在**物理路径**框中指定您的项目所在文件夹的路径。

   在**端口**框中指定仅用于此网站的唯一值：

   <img alt="Site name" src="/assets/images/docbuilder/csharp/sitename.png" width="416px" />

5. ### 检查 IIS 管理器中为您的网站指定的 .NET 平台版本

   选择**应用程序池**，然后右键单击平台名称，选择**设置应用程序池默认值**，最后将**NET CLR 版本**设置为**v4.0.** 版本：

   <img alt="Platform" src="/assets/images/docbuilder/csharp/platform.png" width="416px" />

6. ### 使用 IIS 管理器浏览您的网站

   右键单击该站点，选择**管理网站**上下文菜单选项，然后使用**浏览**：

   ![Browse](/assets/images/docbuilder/csharp/browse.png)

如果您想尝试修改代码，可以在*\DocumentBuilder\Controllers\\*控制器中找到主要的应用程序代码。** ONLYOFFICE Document Builder**可执行文件的路径可以在**web.config**文件的以下行中更改：

```xml
<configuration>
    <appSettings>
        <add key="builder-path" value="C:\ONLYOFFICE\DocumentBuilder\docbuilder.exe" />
    </appSettings>
</configuration>
```

将其设置为您计算机上**ONLYOFFICE Document Builder**的实际路径。