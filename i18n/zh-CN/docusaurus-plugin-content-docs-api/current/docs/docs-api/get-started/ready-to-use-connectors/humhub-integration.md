---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/humhub.svg
---

# HumHub 集成

这个[插件](https://github.com/ONLYOFFICE/onlyoffice-humhub)允许用户借助ONLYOFFICE文档在[HumHub](https://www.humhub.com/)中编辑办公文档。

该插件可在官方的[HumHub应用市场](https://marketplace.humhub.com/module/onlyoffice)获取。

## 功能特性

- 目前，使用该插件可打开并编辑的文档格式有：DOCX、XLSX、PPTX、DOCXF、OFORM。
- 仅支持查看的文档格式如下：ODT、ODS、ODP、DOC、XLS、PPT、TXT、PDF。
- 可转换为OOXML格式的文档如下：ODT、ODS、ODP、DOC、XLS、PPT、TXT、CSV。
- 该插件会为Office文档创建一个新的**编辑/查看**菜单项。这使得多个用户能够实时协作，并将更改保存回HumHub。

## 安装 ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从HumHub和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向HumHub发送POST请求。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装HumHub ONLYOFFICE连接器

您可以从[HumHub应用市场](https://marketplace.humhub.com/module/onlyoffice)或者直接将[代码仓库](https://github.com/ONLYOFFICE/onlyoffice-humhub)克隆到*moduleAutoloadPaths*参数指定的其中一个文件夹内。更多信息请查看[HumHub文档](https://docs.humhub.org/docs/develop/environment#module-loader-path)。

## 配置HumHub ONLYOFFICE连接器

要配置该插件，您必须进入**管理->模块**。找到ONLYOFFICE插件并点击**配置**。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在HumHub配置页面指定您自己的JWT**密钥**。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 工作原理

ONLYOFFICE集成遵循此处记录的API规范：[这里](../basic-concepts.md)。

1. 创建新文件时，用户会在**创建文档**菜单中看到**文档****电子表格**或**演示文稿**选项。

2. 浏览器调用 */controllers/CreateController.php* 控制器中的*index*方法。

3. 或者，打开现有文件时，根据文件扩展名，用户会看到**查看文档**或**编辑文档**选项。

4. 会打开一个弹出窗口，并调用 */controllers/OpenController.php*控制器中的*index*方法。

5. 应用程序准备一个包含以下属性的JSON对象：

   - **url**：ONLYOFFICE文档用于下载文档的URL；
   - **callbackUrl**：ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **key**：用于指示ONLYOFFICE文档是否需要重新下载文档的随机MD5哈希值；
   - **title**：文档标题（名称）；
   - **id**：用户标识；
   - **name**：用户名。

6. HumHub获取该对象，并从*views/open/index.php*模板构建一个页面，填充所有这些值，以便客户端浏览器可以加载编辑器。

7. 客户端浏览器向ONLYOFFICE文档的JavaScript库发出请求，并将包含上述属性的DocEditor配置发送给ONLYOFFICE文档。

8. 然后，ONLYOFFICE文档从HumHub下载文档，用户开始编辑。

9. ONLYOFFICE文档向*callbackUrl*发送POST请求，通知HumHub有用户正在编辑文档。

10. 当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

11. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE文档向*callbackUrl*发送POST请求，告知HumHub客户端已完成文档编辑并关闭了窗口。

12. HumHub下载文档的新版本，替换旧版本。

在此处下载HumHub ONLYOFFICE连接器：[这里](https://github.com/ONLYOFFICE/onlyoffice-humhub)。
