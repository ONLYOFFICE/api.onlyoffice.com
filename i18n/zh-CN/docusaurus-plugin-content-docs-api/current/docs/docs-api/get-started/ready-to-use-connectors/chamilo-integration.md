---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/chamilo.svg
---

# Chamilo 集成

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="gl3gmhOKFk8"/>
```

该[插件](https://github.com/ONLYOFFICE/onlyoffice-chamilo)支持您在[Chamilo](https://chamilo.org/en/)中使用ONLYOFFICE文档直接编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、ODP、ODS、ODT、PPTX、XLSX。
- 仅支持查看的文档格式如下：CSV、DJVU、DOC、EPUB、HTM、HTML、MHT、PDF、PPS、PPT、RTF、TXT、XLS、XPS。
- 该插件会在文档库中为Office文档添加**使用ONLYOFFICE打开**菜单选项。这使多个用户能够实时协作，并将更改保存回Chamilo。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Chamilo和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Chamilo发送POST请求。

ONLYOFFICE文档和Chamilo可以安装在不同的计算机上，也可以安装在同一台机器上。如果您使用同一台机器，需要为文档服务器设置一个自定义端口，因为默认情况下ONLYOFFICE文档和Chamilo都使用80端口。

使用[Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 下载更新版本的Chamilo ONLYOFFICE插件

当Chamilo批准并将该插件作为官方插件集成后，Chamilo团队会努力在Chamilo软件包中提供最新稳定版本的插件。下载其他版本的插件可能会对您的安装产生负面影响。但是，如果您认为需要从第三方下载更新版本，以下是推荐的操作步骤：

1. 运行以下命令获取[代码仓库](https://github.com/ONLYOFFICE/onlyoffice-chamilo)的最新版本：

   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-chamilo
   cd onlyoffice-chamilo
   ```

2. 获取子模块：

   ``` sh
   git submodule update --init --recursive
   ```

3. 获取插件依赖项：

   ``` sh
   composer install
   ```

4. 收集所有文件：

   ``` sh
   mkdir /tmp/onlyoffice-deploy
   mkdir /tmp/onlyoffice-deploy/onlyoffice
   cp -r ./ /tmp/onlyoffice-deploy/onlyoffice
   cd /tmp/onlyoffice-deploy/onlyoffice
   rm -rf ./.git*
   rm -rf */.git*
   ```

5. 将上一步中获取的文件进行归档：

   ``` sh
   cd ../
   zip onlyoffice.zip -r onlyoffice
   ```

## 安装Chamilo ONLYOFFICE插件

要在Chamilo中使用ONLYOFFICE文档，请按照以下步骤操作：

1. 进入Chamilo的**管理**界面，选择**插件**部分。

2. 选择ONLYOFFICE插件，然后点击**启用所选插件**按钮。

   如果您想要使用该插件的更新版本，则需要用新收集的插件替换预安装的默认插件文件夹：

   ``` sh
   /var/www/html/chamilo-1.11.16/plugin/onlyoffice
   ```

   其中，**chamilo-1.11.16**是您当前的Chamilo版本。

### 适用于低于1.11.16的Chamilo版本

1. 进入Chamilo的**管理**界面，选择**插件**部分，然后点击**上传插件**按钮。
2. 从**版本发布**部分上传*onlyoffice.zip*文件。您会看到插件列表。
3. 从Chamilo的根文件夹运行`composer install`命令。
4. 返回插件列表，选择ONLYOFFICE插件，然后点击**启用**按钮。

## 配置Chamilo ONLYOFFICE插件

在**插件**页面中，找到ONLYOFFICE并点击**配置**。您会看到**设置**页面。启用该插件并指定ONLYOFFICE文档的地址：

``` sh
https://<documentserver>/
```

其中，**documentserver**是安装了**ONLYOFFICE文档**的服务器名称。该地址必须能被您的浏览器和Chamilo服务器访问。Chamilo服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。您可以[注册](https://www.onlyoffice.com/docs-registration.aspx?from=api)免费的ONLYOFFICE云服务，并使用其公共IP地址或公共DNS，可在云控制台的**实例**部分中找到。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Chamilo的**设置**页面指定您自己的**密钥**。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 工作原理

ONLYOFFICE集成遵循[此处](../basic-concepts.md)记录的API规范。

### 对于教师/培训师

1. 若要创建新文件，教师需打开文档文件夹，然后点击**新建**的ONLYOFFICE图标。

2. 您会被重定向到文件创建页面，在此页面您需要输入文件名和格式（文本文档、电子表格或演示文稿）。浏览器会调用*/plugin/onlyoffice/create.php*方法。该方法会将一个空文件的副本添加到课程文件夹中。

3. 若要打开现有文件，用户需选择正常编辑图标旁边的**使用ONLYOFFICE打开**图标。

4. 请求会被发送到*/plugin/onlyoffice/editor.php?docId="文档标识符"*。服务器会处理该请求，并生成具有以下属性的编辑器初始化配置：

   - **url**：ONLYOFFICE文档用于下载文档的URL；
   - **callbackUrl**：ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **documentServerUrl**：客户端需要回复给ONLYOFFICE文档的URL（可在管理设置页面设置）；
   - **key**：用于指示ONLYOFFICE文档是否需要重新下载文档的etag。

5. 服务器会返回一个包含打开编辑器脚本的页面。

6. 浏览器打开此页面并加载编辑器。

7. 浏览器向ONLYOFFICE文档发出请求，并将文档配置传递给它。

8. ONLYOFFICE文档加载文档，用户开始编辑。

9. ONLYOFFICE文档向*callbackUrl*发送POST请求，通知Chamilo用户正在编辑文档。

10. 当所有用户都完成编辑后，他们关闭编辑器窗口。

11. 在[10秒](../how-it-works/saving-file.md#save-delay)不活动后，ONLYOFFICE文档向*callbackUrl*发送POST请求，告知编辑已结束，并发送一个指向新文档版本的链接。

12. Chamilo加载文档的新版本并覆盖原文件。

### 对于学习者

1. 学习者可以在文档工具中访问所有ONLYOFFICE支持的文档旁边的ONLYOFFICE图标。

2. 在学习路径中，查看器与Chamilo无缝集成，以打开支持的文档。

在[此处](https://github.com/ONLYOFFICE/onlyoffice-chamilo/tree/master)下载Chamilo的ONLYOFFICE插件。
