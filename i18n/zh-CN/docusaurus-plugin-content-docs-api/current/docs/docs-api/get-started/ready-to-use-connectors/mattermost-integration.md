---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/mattermost.svg
---

# Mattermost 集成

该[插件](https://github.com/ONLYOFFICE/onlyoffice-mattermost)允许用户借助ONLYOFFICE文档在[Mattermost](https://mattermost.com/)中编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX。
- 仅支持查看的文档格式如下：XLS、CSV、XLSM、XLT、XLTM、ODS、FODS、OTS、PPS、PPSX、PPSM、PPT、PPTM、POT、POTX、POTM、ODP、FODP、OTP、DOC、DOCM、DOT、DOTX、DOTM、ODT、FODT、OTT、RTF。
- 该插件会在文档库中为办公文档创建一个新的**在ONLYOFFICE中打开**菜单项。这使得多个用户能够实时协作，并将更改保存回Mattermost。

## 安装ONLYOFFICE文档

您需要有一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Mattermost和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Mattermost发送POST请求。

ONLYOFFICE文档和Mattermost可以安装在不同的计算机上，也可以安装在同一台机器上。如果使用同一台机器，需要为ONLYOFFICE文档设置一个自定义端口。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是安装ONLYOFFICE文档实例的最简单方法。

## 安装 Mattermost ONLYOFFICE集成插件

要在Mattermost中使用ONLYOFFICE文档，请按照以下步骤操作：

1. 克隆[主分支](https://github.com/ONLYOFFICE/onlyoffice-mattermost)。

2. 进入项目根目录。

3. 安装依赖项：

   ``` sh
   npm install --legacy-peer-deps
   ```

   :::note
   请注意，您需要在计算机上安装Node.js（v.15.14.0）才能构建该插件。
   :::

4. 运行以下命令：

   ``` sh
   make dist
   ```

5. 访问 `<your_mattermost_host>/admin_console/plugins/plugin_management`。

6. 从*dist*文件夹中选择编译好的插件，然后点击**上传**。

## 配置Mattermost ONLYOFFICE集成插件

![Mattermost设置](/assets/images/editor/mattermost-settings.png)

- **启用插件**：将此参数设置为**true**以启用Mattermost ONLYOFFICE集成插件。

- **文档编辑服务地址**：要连接ONLYOFFICE文档，请输入以下地址：

  ``` sh
  https://<documentserver>:<port>/
  ```

  其中，**文档服务器地址**是安装了**ONLYOFFICE文档**的服务器名称，**端口号**是其端口。该地址必须能被用户浏览器和Mattermost服务器访问。Mattermost服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。

- **密钥**：从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Mattermost插件配置中指定您自己的密钥。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

- **JWT标头**：如果启用了JWT保护，由于Mattermost安全策略会阻止外部的**Authorization**标头，因此需要指定一个自定义标头名称。该标头也应在ONLYOFFICE文档的签名设置中指定。有关签名的更多信息，请参见[此处](../../additional-api/signature/signature.md)。

- **JWT前缀**：指定ONLYOFFICE文档的前缀。

## 使用Mattermost ONLYOFFICE集成插件

用户可以打开在Mattermost个人聊天和群组聊天中发送的文件进行查看和协同编辑。

当在聊天消息中发送文件时，点击⋮符号，在文件上下文菜单中会出现以下操作：

- **在ONLYOFFICE中打开文件**和**更改访问权限**：消息发送者可用。
- **在ONLYOFFICE中打开文件**：适用于消息的收件人。

![Mattermost操作](/assets/images/editor/mattermost-actions.png)

点击**在ONLYOFFICE中打开文件**按钮后，相应的ONLYOFFICE编辑器会在同一窗口中打开。

![Mattermost编辑器](/assets/images/editor/mattermost-editor.png)

附带文档的消息发送者可以通过上下文菜单中的**更改访问权限**选项，来更改文件的访问权限。此操作在个人聊天和群组聊天中均可用。

<img alt="Mattermost共享" src="/assets/images/editor/mattermost-share.png" width="400px" />

ONLYOFFICE机器人会发送关于文档更改的通知，其中会指明做出更改的用户姓名。

<img alt="Mattermost机器人" src="/assets/images/editor/mattermost-bot.png" width="300px" />

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范：[这里](../basic-concepts.md)。

在此处下载Mattermost ONLYOFFICE集成插件：[这里](https://github.com/ONLYOFFICE/onlyoffice-mattermost)。
