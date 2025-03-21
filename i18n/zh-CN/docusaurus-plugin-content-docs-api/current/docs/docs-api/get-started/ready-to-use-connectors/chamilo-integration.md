---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/chamilo.svg
---

# Chamilo 集成

该[插件](https://github.com/ONLYOFFICE/onlyoffice-chamilo)支持您在[Chamilo](https://chamilo.org/en/)中使用ONLYOFFICE文档直接编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX、PPSX、DOCXF、OFORM。
- 仅支持查看的文档格式如下：PDF、DJVU、TXT、CSV、ODT、ODS、ODP、DOC、XLS、PPT、PPS、EPUB、RTF、HTML、HTM、MHT、XPS。
- 该插件会在文档库中添加“使用ONLYOFFICE打开”选项。这使多个用户能够实时协作，并将更改保存回Chamilo。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Chamilo和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Chamilo发送POST请求。

ONLYOFFICE文档和Chamilo可以安装在不同的计算机上，也可以安装在同一台机器上。如果您使用同一台机器，需要为文档服务器设置一个自定义端口，因为默认情况下ONLYOFFICE文档和Chamilo都使用80端口。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 收集Chamilo ONLYOFFICE集成插件

1. 运行以下命令获取[代码仓库](https://github.com/ONLYOFFICE/onlyoffice-chamilo)的最新版本：

   ``` sh
   git clone https://github.com/ONLYOFFICE/onlyoffice-chamilo cd onlyoffice-chamilo
   ```

2. 获取子模块：

   ``` sh
   git submodule update --init --recursive
   ```

3. 收集所有文件：

   ``` sh
   mkdir /tmp/onlyoffice-deploy
   mkdir /tmp/onlyoffice-deploy/onlyoffice
   cp -r ./ /tmp/onlyoffice-deploy/onlyoffice
   cd /tmp/onlyoffice-deploy/onlyoffice
   rm -rf ./.git*
   rm -rf */.git*
   ```

4. 将上一步中获取的文件进行归档：

   ``` sh
   cd ../
   zip onlyoffice.zip -r onlyoffice
   ```

## 安装Chamilo ONLYOFFICE集成插件

要在Chamilo中使用ONLYOFFICE文档，请按照以下步骤操作：

1. 进入Chamilo的**管理**界面，选择**插件**部分。

2. 选择ONLYOFFICE插件，然后点击**启用所选插件**按钮。

   如果您想要使用该插件的更新版本，则需要用新收集的插件替换预安装的默认插件文件夹：

   ``` sh
   /var/www/html/chamilo-1.11.16/plugin/onlyoffice
   ```

   其中，**chamilo-1.11.16**是您当前的Chamilo版本。

如果您的Chamilo版本低于1.11.16：

1. 进入Chamilo的**管理**界面，选择**插件**部分，然后点击**上传插件**按钮。
2. 从**版本发布**部分上传*onlyoffice.zip*文件。您会看到插件列表。
3. 从Chamilo的根文件夹运行*composer install*命令。
4. 返回插件列表，选择ONLYOFFICE插件，然后点击**启用所选插件**按钮。

## 配置Chamilo ONLYOFFICE集成插件

在**插件**页面中，找到ONLYOFFICE并点击**配置**。您会看到**设置**页面。启用该插件并指定ONLYOFFICE文档的地址：

``` sh
https://<文档服务器地址>/
```

其中，**文档服务器地址**是安装了**ONLYOFFICE文档**的服务器名称。该地址必须能被您的浏览器和Chamilo服务器访问。Chamilo服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Chamilo的**设置**页面指定您自己的**密钥**。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)，中，指定相同的密钥并启用验证。

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范：[这里](../basic-concepts.md)。

1. 若要创建新文件，教师需打开所需的文件夹，然后点击**新建**的ONLYOFFICE图标。

2. 您会被重定向到文件创建页面，在此页面您需要输入文件名和格式（文本文档、电子表格或演示文稿）。浏览器会调用 */plugin/onlyoffice/create.php*方法。该方法会将一个空文件的副本添加到课程文件夹中。

3. 若要打开现有文件，您需选择**使用ONLYOFFICE打开**图标。

4. 请求会被发送到 */plugin/onlyoffice/editor.php?docId="文档标识符"*。服务器会处理该请求，并生成具有以下属性的编辑器初始化配置：

   - **url**：ONLYOFFICE文档用于下载文档的URL；
   - **callbackUrl**：ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **documentServerUrl**：客户端需要回复给ONLYOFFICE文档的URL（可在管理设置页面设置）；
   - **key**：用于指示ONLYOFFICE文档是否需要重新下载文档的etag。

5. 服务器会返回一个包含打开编辑器脚本的页面。

6. 浏览器打开此页面并加载编辑器。

7. 浏览器向ONLYOFFICE文档发出请求，并将文档配置传递给它。

8. ONLYOFFICE文档加载文档，您开始编辑。

9. ONLYOFFICE文档向*callbackUrl*发送POST请求，通知Chamilo您正在编辑文档。

10. 当所有用户都完成编辑后，他们关闭编辑器窗口。

11. 在[10秒](../how-it-works/saving-file.md#save-delay)后，ONLYOFFICE文档向*callbackUrl*发送POST请求，告知编辑已结束，并发送一个指向新文档版本的链接。

12. Chamilo加载文档的新版本并覆盖原文件。

D在此处下载Chamilo ONLYOFFICE集成插件：[这里](https://github.com/ONLYOFFICE/onlyoffice-chamilo/tree/master)、
