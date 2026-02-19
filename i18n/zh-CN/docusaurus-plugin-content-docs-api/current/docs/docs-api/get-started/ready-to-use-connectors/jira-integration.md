---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/jira.svg
---

# Jira 集成

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="mQgpkMwwbLE"/>
```

该[应用程序](https://github.com/ONLYOFFICE/onlyoffice-jira)允许用户借助ONLYOFFICE文档在[Jira Software](https://www.atlassian.com/software/jira)中编辑办公文档。

该连接器可在官方的[Atlassian市场](https://marketplace.atlassian.com/apps/1226616/onlyoffice-connector-for-jira)中获取。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX、DOCXF、OFORM。
- 仅支持查看的文档格式如下：DOC、DOCM、DOC、DOTX、DOTM、ODT、FODT、OTT、RTF、TXT、HTML、HTM、MHT、PDF、DJVU、FB2、EPUB、XPS、XLS、XLSM、XLTZ、XLTX、XLTM、ODS、FODS、OTS、CSV、PPS、PPSX、PPSM、PPT、PPTM、POT、POTX、POTM、ODP、FODP、OTP。
- 该插件会在文档库中为Office文档创建一个新的**在ONLYOFFICE中编辑**菜单项。这使得多个用户能够实时协作，并将更改保存回Jira。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Jira和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](http://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Jira发送POST请求。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装Jira ONLYOFFICE集成应用程序

在Jira的**管理应用程序**页面上传已编译的*target/onlyoffice-jira-app.jar*文件。

最新的新的译包文件可在[此处](https://github.com/ONLYOFFICE/onlyoffice-jira/releases)以及[Atlassian市场](https://marketplace.atlassian.com/apps/1226616/onlyoffice-connector-for-jira)获取。

您也可以从Jira管理面板安装该应用程序：

1. 导航至**管理应用程序**页面。
2. 点击左侧面板中的**查找新应用程序**。
3. 使用搜索功能找到**ONLYOFFICE Connector for Jira**。
4. 点击**安装**以下载并安装该应用程序。

## 配置Jira ONLYOFFICE集成应用程序

在**管理应用程序**页面找到已上传的应用程序。点击**配置**，并输入安装了ONLYOFFICE文档的服务器名称：

``` sh
http://documentserver/
```

其中，**documentserver**是安装了**ONLYOFFICE文档**的服务器名称。该地址必须能被用户浏览器和Jira服务器访问。Jira服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Jira管理页面指定您自己的**密钥**。在ONLYOFFICE官方的[配置文档](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

有时，您的网络配置可能不允许Jira和ONLYOFFICE文档之间通过公共地址进行请求。**级服务器设置**部分允许您设置Jira内部请求的ONLYOFFICE文档地址，以及ONLYOFFICE文档内部请求返回的Jira地址。

## 编译Jira ONLYOFFICE集成应用程序

如果您打算自行编译Jira ONLYOFFICE集成应用程序（例如，编辑源代码然后进行编译），请按照以下步骤操作：

1. 成功构建需要稳定的Java版本。如果未安装，可使用以下命令安装**Open JDK 8**：

   ``` sh
   sudo apt-get update
   sudo apt-get install openjdk-8-jdk
   ```

2. 安装**Atlassian插件开发工具包（Atlassian Plugin SDK）**。安装过程可参考[此处](https://developer.atlassian.com/server/framework/atlassian-sdk/set-up-the-atlassian-plugin-sdk-and-build-a-project/)。

3. 编译软件包：

   ``` sh
   atlas-package
   ```

## 使用Jira ONLYOFFICE集成应用程序

借助ONLYOFFICE集成应用程序，您可以直接在Jira仪表板中查看、编辑附加到任务的办公文件，并进行协同创作。

要编辑文档，点击附件名称旁边的ONLYOFFICE文档图标，相应的在线编辑器将在新标签页中打开。

编辑会话结束后，包含所有更改的文档将作为新附件保存。您可以通过相同的文件名加上后缀来识别它。如果您正在协作编辑附件，只有在最后一个用户退出编辑器后，更改才会被保存。

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范：[这里](../basic-concepts.md)。

1. 用户导航至Jira附件并选择**在ONLYOFFICE中编辑**操作。

2. Jira向**OnlyOfficeEditorServlet**发出请求(URL格式为:*/plugins/servlet/onlyoffice/doceditor?attachmentId=$attachment.id*)。

3. Jira将文档发送到ONLYOFFICE文档存储服务，并接收一个临时链接。

4. Jira准备一个包含以下属性的JSON对象：

   - **url**:ONLYOFFICE文档用于下载文档的临时链接；
   - **callbackUrl**:ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **docserviceApiUrl**:客户端需要回复给ONLYOFFICE文档的URL（由files.docservice.url.api属性提供）；
   - **key**:用于指示ONLYOFFICE文档是否需要重新下载文档的UUID；
   - **title**:文档标题（名称）。

5. Jira获取该对象，并从freemarker模板构建一个页面，填充所有这些值，以便客户端浏览器可以加载编辑器。

6. 客户端浏览器向ONLYOFFICE文档的JavaScript库发出请求，并将包含上述属性的DocEditor配置发送给ONLYOFFICE文档。

7. 然后，ONLYOFFICE文档从文档存储中下载文档，用户开始编辑。

8.当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

9. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE文档向*callbackUrl*发送POST请求，告知Jira客户端已完成文档编辑并关闭了窗口。

10. 包含所有更改的文档将作为新附件保存，文件名会添加后缀。

在此处下载Jira ONLYOFFICE集成应用程序：[此处](https://github.com/ONLYOFFICE/onlyoffice-jira)。
