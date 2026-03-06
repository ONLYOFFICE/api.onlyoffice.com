---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/mattermost.svg
---

# Mattermost 集成

该[应用](https://github.com/ONLYOFFICE/onlyoffice-mattermost)允许用户借助ONLYOFFICE文档在[Mattermost](https://mattermost.com/)中编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCM、DOCX、DOTM、DOTX、PDF、POTM、POTX、PPSM、PPSX、PPTM、PPTX、XLSB、XLSM、XLSX、XLTM、XLTX。
- 仅支持查看的文档格式如下：CSV、DJVU、DOC、DOT、DPS、DPT、EPUB、ET、ETT、FB2、FODP、FODS、FODT、HTM、HTML、HWP、HWPX、KEY、MD、MHT、MHTML、NUMBERS、ODG、ODP、ODS、ODT、OTP、OTS、OTT、OXPS、PAGES、POT、PPS、PPT、RTF、STW、SXC、SXI、SXW、TXT、VSDM、VSDX、VSSM、VSSX、VSTM、VSTX、WPS、WPT、XLS、XLT、XML、XPS。
- 该应用会在文档库中为办公文档创建一个新的**在ONLYOFFICE中打开**菜单项。这使得多个用户能够实时协作，并将更改保存回Mattermost。

## 安装ONLYOFFICE文档

您需要有一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Mattermost和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Mattermost发送POST请求。

ONLYOFFICE文档和Mattermost可以安装在不同的计算机上，也可以安装在同一台机器上。如果使用同一台机器，需要为ONLYOFFICE文档设置一个自定义端口。

使用[Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装 Mattermost ONLYOFFICE 应用

要在Mattermost中使用ONLYOFFICE文档，请按照以下步骤操作：

1. 安装Node.js。[查看说明](https://github.com/nodesource/distributions#installation-instructions)
2. 安装Go。[查看说明](https://go.dev/doc/install)
3. 安装make：

    ``` sh
    sudo apt install make
    ```
4. 克隆应用分支：

    ``` sh
    git clone https://github.com/ONLYOFFICE/onlyoffice-mattermost.git
    ```
5. 进入项目根目录并启动构建：

    ``` sh
    cd onlyoffice-mattermost/
    make
    ```

## 配置 Mattermost ONLYOFFICE 应用

![Mattermost设置](/assets/images/editor/mattermost-settings.png)

作为Mattermost管理员，通过**系统控制台**配置该应用。进入**应用市场**，找到**ONLYOFFICE**应用，然后点击**配置**。

- **ONLYOFFICE文档地址**：要连接ONLYOFFICE文档，请输入以下地址：

  ``` sh
  https://<documentserver>:<port>/
  ```

  其中，**documentserver**是安装了**ONLYOFFICE文档**的服务器名称，**port**是其端口号。该地址必须能被用户浏览器和Mattermost服务器访问。Mattermost服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的ONLYOFFICE云，并使用其公共IP地址或公共DNS，这些地址可以在云控制台的**实例**部分找到。

- **文档服务器JWT密钥**：从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在应用配置中指定您自己的密钥。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

- **JWT标头**：如果启用了JWT保护，由于Mattermost安全策略会阻止外部的**Authorization**标头，因此需要指定一个自定义标头名称。该标头也应在ONLYOFFICE文档的签名设置中指定。有关签名的更多信息，请参见[此处](../../additional-api/signature/signature.md)。

- **JWT前缀**：指定ONLYOFFICE文档的前缀。

您还可以通过勾选相应复选框，连接到ONLYOFFICE文档的公共测试服务器（有效期一个月）。

## 使用 Mattermost ONLYOFFICE 应用

### 上下文菜单

当在聊天消息中发送文件时，点击⋮符号，在文件上下文菜单中会出现以下操作：

- **在ONLYOFFICE中打开文件**和**更改访问权限**：适用于消息的发送者。
- **在ONLYOFFICE中打开文件**：适用于消息的接收者。

![Mattermost操作](/assets/images/editor/mattermost-actions.png)

### 创建新文件

用户可以直接在聊天中创建新文件，方法是点击消息输入框中的回形针图标，然后点击ONLYOFFICE。接着，指定文件名，选择文件格式（文档、电子表格、演示文稿），然后点击**创建**按钮。创建好的文件将以消息形式发送到聊天中。

### 打开编辑器

点击文件名可打开文件预览，其中包含一个**打开**按钮。

点击**在ONLYOFFICE中打开文件**按钮，相应的ONLYOFFICE编辑器将在同一窗口中打开。

![Mattermost编辑器](/assets/images/editor/mattermost-editor.png)

您也可以通过消息中的文件上下文菜单打开文件。

### 设置文件访问权限

<img alt="Mattermost共享" src="/assets/images/editor/mattermost-share.png" width="400px" />

默认情况下，消息发送者对文件拥有完整的编辑权限，而所有接收者仅获得只读权限。只有发送者可以通过上下文菜单中的**更改访问权限**选项来修改用户访问权限。

**个人聊天中：** 可通过下拉菜单调整访问权限。当访问级别发生变化时，ONLYOFFICE机器人将向聊天发送通知。

**群组聊天中：** 提供**默认访问权限**选项，可快速为所有参与者设置权限。若要为某个人授予特定访问权限，只需在搜索栏中输入其姓名，然后点击**添加**。

该用户随即会出现在列表中，您可以为其分配所需的访问级别。若要移除某个用户，点击其姓名旁边的叉号图标，其访问权限将恢复为**默认访问权限**中设置的权限。

每当访问级别更新时，ONLYOFFICE机器人都会通知聊天。对于个人变更，机器人还会向受影响的参与者发送私人通知。

### 跟踪更改

ONLYOFFICE机器人会发送关于文档更改的通知，其中会指明做出更改的用户姓名。

所有更改通知均可在消息的讨论线程中找到。只需点击消息右侧边缘的箭头，即可打开右侧面板，其中显示该消息讨论的完整历史记录。

<img alt="Mattermost机器人" src="/assets/images/editor/mattermost-bot.png" width="300px" />

## 工作原理

ONLYOFFICE集成遵循[此处](../basic-concepts.md)记录的API规范。

在[此处](https://github.com/ONLYOFFICE/onlyoffice-mattermost)下载Mattermost的ONLYOFFICE应用。
