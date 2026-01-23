---
sidebar_position: -3
---

# Node.js 示例

## 介绍

要将 **ONLYOFFICE 文档生成器** 集成到基于 **Node.js** 的自有应用程序中，您需要下载并安装 **ONLYOFFICE 文档生成器** 到您的计算机，并使用 [Node.js 示例](./overview.md) 进行集成。我们将展示如何在 [Windows 操作系统](#在-windows-操作系统上运行示例) 和 [Linux 操作系统](#在-linux-操作系统上运行示例) 上运行 Node.js 示例。

## 在 Windows 操作系统上运行示例

### 步骤 1：下载并安装 ONLYOFFICE 文档生成器

首先，下载 **ONLYOFFICE 文档生成器** 并安装到您的计算机：

[获取 ONLYOFFICE 文档生成器](https://www.onlyoffice.com/download-builder.aspx?from=api)

### 步骤 2：下载用于编辑器集成的 Node.js 代码

从我们的网站下载 [Node.js 示例](./overview.md)。

您需要将 ONLYOFFICE 文档生成器连接到您的网站。为此，请在 *config/default.json* 文件中指定路径：

```json
{
  "builderPath": "C:\\ONLYOFFICE\\DocumentBuilder\\docbuilder.exe"
}
```

### 步骤 3：系统要求

下载并安装 **node.js** 环境，该环境将用于运行 Node.js 项目。请访问 [官方网站](https://nodejs.org/en/download/)，选择适合您的 Windows 操作系统（32 位或 64 位）的正确版本。

### 步骤 4：运行 Node.js 代码

我们将在 Node.js 运行时环境中运行代码，并使用命令行界面 (cmd) 与其交互。

1. 启动 **命令提示符** 并切换到包含 Node.js 项目代码的文件夹，例如：

   ```sh
   cd /d C:\nodejs
   ```

2. Node.js 附带了一个包管理器，即 **node package manager (npm)**，它会随 Node.js 自动安装。要运行 Node.js 代码，请使用以下 npm 命令安装项目模块：

   ```sh
   npm install
   ```

   项目文件夹中将创建一个新的 *node_modules* 文件夹。

3. 使用 **命令提示符** 运行项目：

   ```sh
   node bin/www
   ```

4. 在浏览器中使用以下地址查看结果：

   ```sh
   http://localhost:3000
   ```

## 在 Linux 操作系统上运行示例

### 步骤 1：下载并安装 ONLYOFFICE 文档生成器

首先，下载 [**ONLYOFFICE 文档生成器**](https://www.onlyoffice.com/document-builder.aspx) 并安装到您的计算机。

### 步骤 2：安装先决条件并运行应用程序

1. 安装 **Node.js**：

   ```sh
   curl -sL https://deb.nodesource.com/setup_4.x | sudo bash -
   ```

   ```sh
   apt-get install nodejs
   ```

2. 创建 *Node.js 示例* 项目文件夹。下载 Node.js 示例的压缩包并将其解压缩到创建的文件夹中：

   ```sh
   wget https://github.com/ONLYOFFICE/document-builder-integration/releases/latest/download/Node.js.Example.zip
   ```

   ```sh
   unzip Node.js.Example.zip
   ```

3. 将当前目录切换到项目目录：

   ```sh
   cd ~/Node.js Example/
   ```

4. 安装依赖项：

   ```sh
   npm install
   ```

5. 编辑 *config/default.json* 配置文件。指定 ONLYOFFICE 文档生成器的路径。

   ```sh
   nano config/default.json
   ```

   编辑以下行：

   ```json
   {
     "builderPath": "/usr/bin/docbuilder"
   }
   ```

6. 使用 Node.js 运行项目：

   ```sh
   nodejs bin/www
   ```

7. 在浏览器中使用以下地址查看结果：

   ```sh
   http://localhost
   ```

现在，您可以使用 `http://localhost` 地址或在本地网络中使用计算机地址在浏览器中查看结果。