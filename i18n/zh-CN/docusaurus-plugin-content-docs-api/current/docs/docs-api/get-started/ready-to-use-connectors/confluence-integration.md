---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/confluence.svg
---

# Confluence 集成

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="pGd06HLkWU4"/>
```

这个[插件](https://github.com/ONLYOFFICE/onlyoffice-confluence)允许用户在[Confluence](https://www.atlassian.com/software/confluence/)中使用ONLYOFFICE文档直接编辑办公文档。

该连接器可在官方的[Atlassian应用市场](https://marketplace.atlassian.com/1218214)获取。

## 功能特性

- 目前，可编辑或查看的文档格式有：DOCX、XLSX、PPTX、DOCXF、OFORM。
- 该插件会在文档库中添加**在ONLYOFFICE中编辑**选项。这使多个用户能够实时协作，并将更改保存回Confluence。
- 目前，可转换为OOXML格式的文档有：ODT、DOC、ODP、PPT、ODS、XLS。

## 安装ONLYOFFICE文档

您需要有一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Confluence和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Confluence发送POST请求。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是安装ONLYOFFICE文档实例的最简单方法。

## 安装Confluence ONLYOFFICE集成应用程序

在Confluence的**管理插件**页面上传已编译的*target/onlyoffice-confluence-plugin.jar*文件。

最新的编译包文件可在[这里](https://github.com/onlyoffice/onlyoffice-confluence/releases)以及[Atlassian应用市场](https://marketplace.atlassian.com/apps/1218214/onlyoffice-connector-for-confluence?tab=overview\&hosting=datacenter)获取。

您也可以从Confluence管理面板安装该应用程序：

1. 以管理员身份登录您的Confluence实例。
2. 导航至**管理插件**页面。
3. 点击左侧面板中的**查找新应用程序**或**查找新插件**。
4. 通过搜索找到**ONLYOFFICE连接器Confluence**搜索结果将包含与您的Confluence实例兼容的插件版本。
5. 点击**安装**以下载并安装该应用程序。
6. 现在您可以在**已安装并准备就绪**对话框中点击**关闭**。

## 配置Confluence ONLYOFFICE集成应用程序

在**管理插件**页面找到已上传的**ONLYOFFICE Confluence连接器**。点击**配置**，然后输入安装了ONLYOFFICE文档的服务器名称：

``` sh
https://documentserver/
```

其中，**documentserver**是安装了**ONLYOFFICE文档**的服务器名称。该地址必须能被用户浏览器和Confluence服务器访问。Confluence服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Confluence的**设置**页面指定您自己的**文档服务器密钥**。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)，中，指定相同的密钥并启用验证。

## 编译Confluence ONLYOFFICE集成应用程序

如果您计划自行编译Confluence ONLYOFFICE集成应用程序（例如，编辑源代码然后进行编译），请按照以下步骤操作：

1. 成功编译需要稳定的Java版本。如果未安装，可使用以下命令安装**Open JDK 8**：

   ``` sh
   sudo apt-get update
   sudo apt-get install openjdk-8-jdk
   ```

2. 安装**Atlassian插件软件开发工具包(SDK)**。安装过程可参考[这里](https://developer.atlassian.com/docs/getting-started/set-up-the-atlassian-plugin-sdk-and-build-a-project)。

3. 获取子模块：

   ``` sh
   git submodule update --init --recursive
   ```

4. 编译软件包：

   ``` sh
   atlas-package
   ```

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范：[这里](../basic-concepts.md)。

1. 用户导航至Confluence附件并选择**在ONLYOFFICE中编辑**操作。

2. Confluence向**OnlyOfficeEditorServlet**发出请求(URL格式为:*/plugins/servlet/onlyoffice/doceditor?attachmentId=$attachment.id*)。

3. Confluence将文档发送到ONLYOFFICE文档存储服务，并接收一个临时链接。

4. Confluence准备一个包含以下属性的JSON对象：

   - **url**:ONLYOFFICE文档用于下载文档的临时链接；
   - **callbackUrl**:ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **docserviceApiUrl**:客户端需要回复给ONLYOFFICE文档的URL（由files.docservice.url.api属性提供）；
   - **key**:用于指示ONLYOFFICE文档是否需要重新下载文档的UUID；
   - **title**:文档标题（名称）。

5. Confluence获取该对象，并从freemarker模板构建一个页面，填充所有这些值，以便客户端浏览器可以加载编辑器。

6. 客户端浏览器向ONLYOFFICE文档的JavaScript库发出请求，并将包含上述属性的DocEditor配置发送给ONLYOFFICE文档。

7. 然后，ONLYOFFICE文档从文档存储中下载文档，用户开始编辑。

8.当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

9. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE文档向*callbackUrl*发送POST请求，告知Confluence客户端已完成文档编辑并关闭了窗口。

10. Confluence下载文档的新版本，替换旧版本。

在此处下载Confluence ONLYOFFICE集成应用程序：[这里](https://github.com/ONLYOFFICE/onlyoffice-confluence)。
