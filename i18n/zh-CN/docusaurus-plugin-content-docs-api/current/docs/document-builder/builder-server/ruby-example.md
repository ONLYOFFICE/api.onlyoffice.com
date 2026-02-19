---
sidebar_position: -1
---

# Ruby 示例

## 简介

要在 **Ruby** 环境下将 **ONLYOFFICE 文档生成器** 集成到您自己的应用程序中，您需要下载并安装 **ONLYOFFICE 文档生成器** 到您的计算机，并使用 [Ruby 示例](./overview.md) 进行集成。我们将展示如何在 Linux 操作系统上运行 Ruby 示例。

## 步骤 1：下载并安装 ONLYOFFICE 文档生成器

首先，下载 **ONLYOFFICE 文档生成器** 并安装到您的计算机：

[获取 ONLYOFFICE 文档生成器](https://www.onlyoffice.com/download-builder.aspx?from=api)

## 步骤 2：安装先决条件并运行应用程序

1. 安装 **Ruby 版本管理器（RVM）** 和最新的稳定 **Ruby** 版本：

   ```sh
   gpg --keyserver "hkp://keys.gnupg.net" --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
   \curl -sSL https://get.rvm.io | bash -s stable --rails
   ```

   > 您的系统需要安装 **curl** 才能继续。如果没有安装，请运行以下命令进行安装：
   >
   > ```sh
   > sudo apt-get install curl
   > ```

2. 创建 *Ruby 示例* 项目文件夹。下载 Ruby 示例的压缩包并将其解压到创建的文件夹中：

   ```sh
   wget "https://github.com/ONLYOFFICE/document-builder-integration/releases/latest/download/Ruby.Example.zip"
   unzip Ruby.Example.zip
   ```

3. 将当前目录切换到项目目录：

   ```sh
   cd ~/Ruby\ Example/
   ```

4. 安装依赖项：

   ```sh
   bundle install
   ```

   > 在完成此操作之前，您可能需要安装 **bundler**。可以使用以下命令安装：
   >
   > ```sh
   > gem install bundler
   > ```

5. 使 **Ruby** 在计算机启动时自动运行：

   ```sh
   echo "source $HOME/.rvm/scripts/rvm" >> ~/.bash_profile
   ```

6. 运行 **Rails** 应用程序：

   ```sh
   rails s -b 0.0.0.0 -p 80
   ```

现在，您可以在浏览器中通过 `http://localhost` 地址或本地网络中的计算机地址查看结果。

如果您想尝试修改代码，可以在 *\~/app/controllers/main_page_controller.rb* 控制器中找到主要的应用程序代码。