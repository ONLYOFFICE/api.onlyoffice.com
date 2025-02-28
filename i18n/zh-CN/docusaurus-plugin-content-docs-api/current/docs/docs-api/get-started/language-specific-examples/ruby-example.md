---
sidebar_position: -2
---

# Ruby example

## 概述

本示例将帮助您把ONLYOFFICE文档集成到用PHP编写的Web应用程序中。

> 本示例仅用于测试目的以及演示编辑器的功能。在没有进行适当的代码修改之前，**请勿**在您自己的服务器上使用此集成示例。如果您启用了测试示例，在投入生产环境之前请将其禁用。

## 重要安全信息

在使用测试示例时，请牢记以下安全方面的内容：

- 由于无需授权，存储不受未经授权访问的保护。
- 由于参数是由代码根据预先安排的脚本生成的，因此不会对链接中的参数替换进行检查。
- 编辑后保存文件的请求中不会进行数据检查，因为每个测试示例仅适用于来自ONLYOFFICE文档的请求。
- 不禁止从其他网站使用测试示例，因为它们旨在与来自其他域的ONLYOFFICE文档进行交互。

## 步骤1.安装先决条件并运行带有编辑器的网站

Ruby示例提供了多种安装选项，但我们强烈建议为此使用Docker。

### 选项1.使用Docker

要使用[Docker](https://www.docker.com/)运行实例，您将需要[Docker Desktop 4.17.0](https://docs.docker.com/desktop/)或[Docker Engine 20.10.23](https://docs.docker.com/engine/)以及[Docker Compose 2.15.1](https://docs.docker.com/compose/)。另外，您可能需要考虑安装[GNU Make 4.4.1](https://www.gnu.org/software/make/)，不过这是可选的。这些是工具所需的最低版本。

安装好所有内容后，下载发行版压缩包并解压：

``` sh
curl --output Ruby.Example.zip --location https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Ruby.Example.zip
unzip Ruby.Example.zip
```

然后打开示例目录并[启动容器](https://github.com/ONLYOFFICE/document-server-integration/blob/eaa06d1919ee92b72c945e14aa8d96871dd26879/web/documentserver-example/ruby/Makefile#L46):

``` sh
cd "Ruby Example"
make compose-prod
```

默认情况下，服务器在*localhost:80*启动。

要配置示例，您可以编辑[compose-base.yml](https://github.com/ONLYOFFICE/document-server-integration/blob/eaa06d1919ee92b72c945e14aa8d96871dd26879/web/documentserver-example/ruby/compose-base.yml)中的环境变量。有关环境变量的更多信息，请参见[下面](#step-3-configure-the-ruby-example)。

### 选项2.在本地计算机上

下载并安装ONLYOFFICE文档（打包为文档服务器）：

[获取ONLYOFFICE文档](https://www.onlyoffice.com/download-docs.aspx?from=api#docs-developer)

查看详细指南，了解如何在[Windows](https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx?from=api_php_example)，[Linux](https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu.aspx?from=api_php_example)，和[Docker](https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker.aspx?from=api_php_example)上安装它。

要在您的本地计算机上运行示例，您将需要[Ruby 3.2.2](https://www.ruby-lang.org/en/)和[Bundler 2.4.10](https://bundler.io/)。另外，您可能需要考虑安装[GNU Make4.4.1](https://www.gnu.org/software/make/)，不过这是可选的。这些是工具所需的最低版本。

安装好所有内容后，下载发行版压缩包并解压：

``` sh
curl --output Ruby.Example.zip --location https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/Ruby.Example.zip
unzip Ruby.Example.zip
```

然后打开示例目录，[安装依赖项](https://github.com/ONLYOFFICE/document-server-integration/blob/eaa06d1919ee92b72c945e14aa8d96871dd26879/web/documentserver-example/ruby/Makefile#L33)，并[启动服务器](https://github.com/ONLYOFFICE/document-server-integration/blob/eaa06d1919ee92b72c945e14aa8d96871dd26879/web/documentserver-example/ruby/Makefile#L42):

``` sh
cd "Ruby Example"
make prod
make server-prod
```

默认情况下，服务器在*0.0.0.0:9000*启动。

要配置示例，您可以在启动服务器的命令之前传递环境变量。有关环境变量的更多信息，请参见[下面](#step-3-configure-the-ruby-example)。

## 步骤2.检查可访问性

如果示例和ONLYOFFICE文档安装在不同的计算机上，请确保安装了示例的服务器能够访问您在配置文件中指定的（替换了**documentserver**的）地址的ONLYOFFICE文档。

同时确保ONLYOFFICE文档反过来也能够访问安装了示例的服务器，使用您在配置文件中指定的（替换了**example.com**的）地址。

## 步骤3.配置Ruby示例

通过更改环境变量来配置示例。

| 参数                      | 示例                 | 描述                                                             |
| ------------------------------ | ----------------------- | ----------------------------------------------------------------------- |
| BINDING                        | 0.0.0.0                 | 服务器应启动的地址。                                        |
| DOCUMENT\_SERVER\_PRIVATE\_URL | `http://proxy:8080`     | 服务器将通过其与 ONLYOFFICE 文档通信的 URL。                             |
| DOCUMENT\_SERVER\_PUBLIC\_URL  | `http://localhost:8080` | 用户将通过其与 ONLYOFFICE 文档通信的 URL。                               |
| EXAMPLE\_URL                   | `http://proxy`          | ONLYOFFICE 文档将通过其与服务器通信的 URL。                               |
| JWT\_SECRET                    | your-256-bit-secret     | JWT 授权密钥。留空以禁用授权。                                          |
| PORT                           | 80                      | 服务器应运行的端口。                                              |
