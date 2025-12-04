---
sidebar_position: -11
---

# NodeJS 示例

## 概述

本示例将帮助您把ONLYOFFICE文档集成到基于Node.js的Web应用程序中。

:::note
本示例仅用于测试目的以及演示编辑器的功能。在没有进行适当的代码修改之前，**请勿**在您自己的服务器上使用此集成示例。如果您启用了测试示例，在投入生产环境之前请将其禁用。
:::

## 重要安全信息

在使用测试示例时，请牢记以下安全方面的内容：

- 由于无需授权，存储不受未经授权访问的保护。
- 由于参数是由代码根据预先安排的脚本生成的，因此不会对链接中的参数替换进行检查。
- 编辑后保存文件的请求中不会进行数据检查，因为每个测试示例仅适用于来自ONLYOFFICE文档的请求。
- 不禁止从其他网站使用测试示例，因为它们旨在与来自其他域的ONLYOFFICE文档进行交互。

## 适用于Windows系统

### 步骤1.安装ONLYOFFICE文档

下载并安装ONLYOFFICE文档（打包为文档服务器）：

[获取ONLYOFFICE文档](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

如需了解如何[在Windows系统上安装ONLYOFFICE文档](https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx?from=api_nodejs_example)请查看详细指南。

### 步骤2.下载用于集成编辑器的Node.js代码

从我们的网站下载[Node.js示例](./language-specific-examples.md)。

要将编辑器连接到您的网站，请在*config/default.json*文件中指定编辑器的安装路径和存储文件夹的路径：

``` json
{
  "storageFolder": "./files",
  "storagePath": "/files",
  "siteUrl": "https://documentserver/"
}

```

其中，**documentserver**是安装了ONLYOFFICE文档的服务器名称，**storageFolder**和**storagePath**是将创建和存储文件的路径。您可以设置一个绝对路径，例如*D:\\\folder*。请注意，在Windows操作系统中，必须使用双反斜杠作为分隔符。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

如果您想尝试配置编辑器，请修改*\views\editor.ejs*文件中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

### 步骤3.安装Node.js环境

安装用于运行**Node.js**项目的node.js环境。请访问[官方网站](https://nodejs.org/en/download/)，根据您的Windows操作系统（32位或64位）选择正确的版本进行安装。

### 步骤4. 配置 JWT 
 
打开 *config/default.json* 文件并启用 JWT：

``` json
{
   "server": {
      "token": {
         "enable": true
      }
   }
}
```

   同样也要与 ONLYOFFICE 文档[指定相同密钥](https://helpcenter.onlyoffice.com/installation/docs-configure-jwt.aspx)：

``` json
{
   "server": {
      "token": {
         "secret": "secret"
      }
   }
}
```

### 步骤5.运行Node.js代码

我们将在Node.js运行时环境中运行代码，并使用**命令行界面(cmd)**与之交互。

1. 启动**命令提示符**，并切换到包含Node.js项目代码的文件夹，例如：

   ``` sh
   cd /d "C:\Node.js Example"
   ```

2. Node.js附带了一个包管理器，即**node包管理器(npm**)，它会随Node.js一起自动安装。要运行Node.js代码，请使用以下*npm*命令安装项目模块：

   ``` sh
   npm install
   ```

   项目文件夹中将会创建一个新的*node\_modules*文件夹。

3. 使用**命令提示符**运行项目：

   ``` sh
   node bin/www
   ```

4. 在您的浏览器中使用以下地址查看结果：

   ``` sh
   http://localhost:3000
   ```

### 步骤6.检查可访问性

如果示例和ONLYOFFICE文档安装在不同的计算机上，请确保安装了示例的服务器能够访问您在配置文件中指定的（替换了**documentserver**的）地址的ONLYOFFICE文档。同时确保ONLYOFFICE文档反过来也能够访问安装了示例的服务器，使用您在配置文件中指定的（替换了**example.com**的）地址。

## 适用于Linux系统

### 步骤1.安装ONLYOFFICE文档

下载并安装ONLYOFFICE文档（打包为文档服务器）：

[获取ONLYOFFICE文档](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

如需了解如何[在Linux系统上安装ONLYOFFICE文档](https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu.aspx?from=api_nodejs_example)，请查看详细指南。

### 步骤2.安装先决条件并运行带有编辑器的网站

1. 安装**Node.js**:

   ``` sh
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   ```

   ``` sh
   sudo apt-get install -y nodejs
   ```

2. 下载包含Node.js示例的压缩包并解压：

   ``` sh
   wget https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Node.js.Example.zip
   ```

   ``` sh
   unzip Node.js.Example.zip
   ```

 或者直接从 [GitHub](https://github.com/ONLYOFFICE/document-server-integration/tree/master/web/documentserver-example/nodejs) 获取源代码。

3. 将当前目录切换到项目目录：

   ``` sh
   cd Node.js\ Example/
   ```

4. 安装依赖项：

   ``` sh
   npm install
   ```

5. 编辑*config/default.json*配置文件。指定安装了ONLYOFFICE文档的本地服务器名称。

   ``` sh
   nano config/default.json
   ```

   编辑以下内容：

   ``` json
   {
     "storageFolder": "./files",
     "storagePath": "/files",
     "siteUrl": "https://documentserver/"
   }
   ```

   其中，**documentserver**是安装了ONLYOFFICE文档的服务器名称，**storageFolder**和**storagePath**是将创建和存储文件的路径。请注意，您必须对该文件夹具有读写权限。如果没有，请使用以下命令：

   ``` sh
   sudo chmod -R ugo+rw /{path}
   ```

   启用 JWT：

      ``` json
   {
      "server": {
         "token": {
            "enable": true
         }
      }
   }
   ```

   同样也要与 ONLYOFFICE 文档[指定相同密钥](https://helpcenter.onlyoffice.com/installation/docs-configure-jwt.aspx)：

      ``` json
   {
      "server": {
         "token": {
            "secret": "secret"
         }
      }
   }
   ```

6. 使用Node.js运行项目：

   ``` sh
   node bin/www
   ```

7. 在您的浏览器中使用以下地址查看结果：

   ``` sh
   http://localhost:3000
   ```

### 步骤3.检查可访问性

如果示例和ONLYOFFICE文档安装在不同的计算机上，请确保安装了示例的服务器能够访问您在配置文件中指定的（替换了**documentserver**的）地址的ONLYOFFICE文档。同时确保ONLYOFFICE文档反过来也能够访问安装了示例的服务器，使用您在配置文件中指定的（替换了**example.com**的）地址。
