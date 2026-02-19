---
sidebar_position: -2
---

# PHP 示例

## 简介

要将 **ONLYOFFICE 文档生成器** 集成到基于 **PHP** 的自有网站中，您需要在本地服务器上下载并安装 **ONLYOFFICE 文档生成器**，并使用 [PHP 示例](./overview.md) 进行集成。本指南将展示如何在 [Windows 操作系统](#在-windows-操作系统上运行示例) 上运行该 PHP 示例。

## 在 Windows 操作系统上运行示例

### 步骤 1：下载并安装 ONLYOFFICE 文档生成器

首先，下载 **ONLYOFFICE 文档生成器** 并安装到您的计算机上：

[获取 ONLYOFFICE 文档生成器](https://www.onlyoffice.com/download-builder.aspx?from=api)

### 步骤 2：下载用于生成器集成的 PHP 示例代码

从我们的网站下载 [PHP 示例](./overview.md) 并解压到您计算机的任意位置。

您需要将生成器连接到您的网站。为此，请在 *config.php* 文件中指定生成器的安装路径：

```php
<?php
$GLOBALS['builder_path'] = "C:\\ONLYOFFICE\\DocumentBuilder\\docbuilder.exe";
?>
```

### 步骤 3：安装必备组件

您可以使用任何能够运行 PHP 代码的 Web 服务器来运行此示例。我们将演示如何使用 **Internet Information Services (IIS)** Web 服务器来运行该 PHP 示例。为了在 IIS 上设置和配置 PHP，将使用 **PHP Manager for IIS**。

- **IIS：版本 7** 或更高版本（请参考 [Microsoft 官方网站](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh994592(v=ws.11)) 了解如何安装 **IIS**）；
- **PHP**（可从 [php.net](https://php.net/downloads.php) 网站下载）；
- **PHP Manager for IIS**（可从 [Microsoft 开源网站](https://www.iis.net/downloads/community/2018/05/php-manager-150-for-iis-10) 下载）。

### 步骤 4：IIS 配置

1. **PHP Manager for IIS 配置**：

   安装完成 **PHP Manager for IIS** 后，启动 **IIS 管理器**：

   开始 -> 控制面板 -> 系统和安全 -> 管理工具 -> Internet Information Services (IIS) 管理器

   然后在 IIS 的 **功能视图** 中找到 **PHP Manager** 功能。

   ![PHP 管理器](/assets/images/php/manager.png)

   您需要使用 **PHP Manager** 在 **IIS** 中注册已安装的 PHP 版本。

   双击 **PHP Manager** 将其打开，点击 **注册新的 PHP 版本** 任务，并指定 PHP 主可执行文件的完整路径。例如：C:\Program Files\PHP\php-cgi.exe。

   ![注册 PHP 版本](/assets/images/php/php-version-1.jpg)

   点击 **确定** 后，新的 **PHP 版本** 将在 IIS 中注册并生效。

   ![新的 PHP 版本](/assets/images/php/php-version-2.jpg)

2. 配置 IIS 以处理 PHP 请求：

   要让 IIS 托管 PHP 应用程序，必须添加处理程序映射，告知 IIS 通过 FastCGI 协议将所有特定于 PHP 的请求传递给 PHP 应用程序框架。

   双击 **处理程序映射** 功能：

   ![处理程序映射](/assets/images/php/handlerclick.png)

   在 **操作** 面板中，点击 **添加模块映射**。在 **添加模块映射** 对话框中，按如下方式指定配置设置：

   - 请求路径：**\*.php**，
   - 模块：**FastCgiModule**，
   - 可执行文件：**"C:\\\[您的 PHP 安装路径]\\php-cgi.exe"**，
   - 名称：**PHP via FastCGI**，

     点击 **确定**。

   ![添加处理程序](/assets/images/php/handler-add.png)

IIS 管理器配置完成后，就可以运行 **PHP** 示例了。

### 步骤 5：运行包含编辑器的网站

1. 在 IIS 管理器中添加您的网站：

   在 **连接** 面板上，右键单击树中的 **网站** 节点，然后点击 **添加网站**。

   ![添加网站](/assets/images/csharp/add.png)

2. 在 **添加网站** 对话框中，在 **网站名称** 框中指定包含 PHP 项目的文件夹名称。

   在 **物理路径** 框中指定您项目所在文件夹的路径。

   在 **端口** 框中指定仅用于此网站的唯一值。

   ![网站名称](/assets/images/docbuilder/php-add.png)

3. 使用 IIS 管理器浏览您的网站：

   右键单击该网站 -> **管理网站** -> **浏览**

   ![浏览](/assets/images/php/browse.png)