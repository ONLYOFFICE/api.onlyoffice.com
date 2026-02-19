---
sidebar_position: -3
---

# PHP (Laravel) 示例

## 概述

这是一个使用 PHP 和 [Laravel 框架](https://laravel.com/docs/11.x/installation#meet-laravel)编写的示例应用，集成了 ONLYOFFICE文档。

:::caution
该示例应用仅用于测试和演示编辑器功能，**请勿**在未修改代码的情况下直接用于生产环境。如需启用测试示例，务必在上线前将其禁用。
:::

## 重要安全信息

使用测试示例时，请注意以下安全事项：

- 因为无需授权，存储内容未受到未授权访问的保护。
- 参数由代码按固定脚本生成，链接中不执行参数替换检查。
- 测试示例仅用于响应 ONLYOFFICE 文档的请求，因此保存文件时未进行数据校验。
- 由于测试示例设计为与跨域的 ONLYOFFICE 文档交互，因此未限制来自其他站点的访问。

## 步骤 1. 配置环境

示例应用的根目录包含一个`.env.example`文件，其中定义了常用的环境变量。请将该文件内容复制到项目目录下的`.env`文件中。

您可以在[此处](#step-3-configure-the-php-laravel-example)找到完整的环境变量列表。

## 步骤 2. 安装必备组件并使用编辑器运行网站

PHP（Laravel）示例提供了多种安装选项，但我们强烈建议使用 Docker。

### 选项 1. 使用 Docker 安装

首先，您需要安装 [Docker 桌面应用](https://www.docker.com/products/docker-desktop/)。
该应用已内置 Docker 配置文件，只需运行几条命令即可启动项目，您也可根据个人需求自行修改这些配置。

1. 下载并解压发布压缩包到以下目录，或从[GitHub](https://github.com/ONLYOFFICE/document-server-integration/tree/master/web/documentserver-example/php-laravel)克隆源代码：

  ```sh
  cd /my/php-laravel/project
  curl --output PHP.Laravel.Example.zip --location https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/PHP.Laravel.Example.zip
  unzip PHP.Laravel.Example.zip
  cd "PHP Laravel Example"
  ```

  :::note
  您应该修改`.env`文件中的`DOCUMENT_SERVER_JWT_SECRET`环境变量，因为`docker-compose.yml`使用它在 ONLYOFFICE 文档中设置 JWT 机密。
  :::

2. 要运行容器，可以使用`make compose-start`命令来构建并启动项目，也可以手动执行相应命令：

   - 构建并启动 Docker Compose：

     ```sh
     docker compose build && docker compose up -d
     ```

   - 安装依赖项：

     ```sh
     docker compose exec example composer install
       && docker compose exec node npm install
       && docker compose exec node npm run build
     ```

   - 为 Laravel 实例生成应用程序密钥：

     ```sh
     docker compose exec example php artisan key:generate
     ```

   :::note
   要停止 Docker 容器，可以运行`make compose-stop`或`docker compose down`命令。
   :::

   如果安装和配置顺利完成，您现在可以通过访问`localhost:80`来试用示例应用程序。

   :::note
   同时，您可以根据需要调整 [nginx](https://github.com/ONLYOFFICE/document-server-integration/tree/master/web/documentserver-example/php-laravel/docker) 配置和应用运行的[端口](https://github.com/ONLYOFFICE/document-server-integration/blob/master/web/documentserver-example/php-laravel/docker-compose.yml)。
   :::

### 选项 2. 本地安装

在开始使用示例前，请先安装 ONLYOFFICE 文档。有关在 [Windows](https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx?from=api_php_laravel_example)、[Linux](https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu.aspx?from=api_php_laravel_example) 或 [Docker](https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker.aspx?from=api_php_laravel_example) 上的安装方法，请参考详细指南。

1. 安装准备：

   - [PHP >= 8.2](https://www.php.net/)
   - [Node.js (16+) and NPM](https://laravel.com/docs/11.x/vite#installing-node)
   - [Laravel (11) Server Requirements](https://laravel.com/docs/11.x/deployment#server-requirements)

2. 下载发布压缩包并解压至您选择的目录，或从[GitHub](https://github.com/ONLYOFFICE/document-server-integration/tree/master/web/documentserver-example/php-laravel)克隆源代码：

  ```sh
  cd /path/to/my/projects
  curl --output PHP.Laravel.Example.zip --location https://github.com/ONLYOFFICE/document-server-integration/releases/latest/download/PHP.Laravel.Example.zip
  unzip PHP.Laravel.Example.zip
  cd "PHP Laravel Example"
  ```

3. 运行 `make install` 或手动执行以下命令：

   - 安装 Composer 依赖项：

      ```sh
      composer install
      ```

   - 安装前端依赖项并构建应用资源：

      ```sh
      npm install && npm run build
      ```

   - 为 Laravel 实例生成应用程序密钥：

      ```sh
      php artisan key:generate
      ```

   如果安装和配置成功，您现在可以访问服务器地址来试用示例应用程序。

## 步骤 3. 配置 PHP（Laravel）示例 {#step-3-configure-the-php-laravel-example}

PHP（Laravel）示例是通过更改环境变量来配置的。

| 变量名称                           | 示例                    | 描述                                                 |
| ------------------------------ | ----------------------- | ---------------------------------------------------- |
| `USER`                         | `user`                  | 系统中的用户名。                                     |
| `UID`                          | `1000`                  | 系统中的用户 ID 号 (UID)。                           |
| `DOCUMENT_STORAGE_PUBLIC_URL`  | `http://localhost`      | 客户端用于与服务器通信的 URL 地址。                  |
| `DOCUMENT_STORAGE_PRIVATE_URL` | `http://proxy`          | ONLYOFFICE 文档用于与服务器通信的 URL 地址。         |
| `DOCUMENT_SERVER_PUBLIC_URL`   | `http://localhost:8080` | 客户端用于与 ONLYOFFICE 文档通信的 URL 地址。        |
| `DOCUMENT_SERVER_PRIVATE_URL`  | `http://proxy:8080`     | 服务器用于与 ONLYOFFICE 文档通信的 URL 地址。        |
| `DOCUMENT_SERVER_JWT_SECRET`   | `your-256-bit-secret`   | JWT 授权密钥。                                       |

## 步骤 4. 检查可访问性

如果示例和 ONLYOFFICE 文档安装在不同的计算机上，请确保示例服务器能通过配置文件中指定的地址访问 ONLYOFFICE 文档，而不是使用默认的 `documentserver`。

ONLYOFFICE 文档能通过配置文件中指定的地址访问示例服务器，而不是默认的 `example.com`。

## 故障排除

如果您在框架的安装或配置方面遇到问题，请查看 [Laravel 文档](https://laravel.com/docs/11.x/deployment#server-configuration)页面。
