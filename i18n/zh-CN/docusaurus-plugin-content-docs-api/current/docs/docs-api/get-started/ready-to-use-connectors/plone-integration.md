---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/plone.svg
---

# Plone 集成

该[插件](https://github.com/ONLYOFFICE/onlyoffice-plone)允许用户在[Plone](https://plone.org/)中借助ONLYOFFICE文档编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX。
- 仅支持查看的文档格式如下：DJVU、DOC、DOCM、DOT、DOTM、DOTX、EPUB、FB2、FODT、HTML、MHT、ODT、OTT、OXPS、PDF、RTF、TXT、XPS、XML、CSV、FODS、ODS、OTS、XLS、XLSB、XLSM、XLT、XLTM、XLTX、FODP、ODP、OTP、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM。
- 支持转换（另存为）的文档格式如下：DOC、DOCM、DOCX、DOT、DOTM、DOTX、EPUB、FB2、FODT、HTML、MHT、ODT、OTT、OXPS、PDF、RTF、XPS、XML、FODS、ODS、OTS、XLS、XLSB、XLSM、XLSX、XLT、XLTM、XLTX、FODP、ODP、OTP、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM、PPTX。
- 支持转换为Office Open XML格式的文档格式如下：DOC、DOCM、DOT、DOTM、DOTX、EPUB、FB2、FODT、HTML、MHT、ODT、OTT、OXPS、PDF、RTF、XPS、XML、FODS、ODS、OTS、XLS、XLSB、XLSM、XLT、XLTM、XLTX、FODP、ODP、OTP、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM。
- 该插件会在文档库中为Office文档创建一个新的**ONLYOFFICE编辑**菜单项。这使得多个用户能够实时协作，并将更改保存回Plone。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Plone和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Plone发送POST请求。

使用[Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装Plone ONLYOFFICE集成插件

要在Plone中使用ONLYOFFICE文档，必须执行以下步骤：

1. 安装说明可在[安装Plone附加组件](https://6.docs.plone.org/admin-guide/add-ons.html)中找到。

2. 前往**站点设置 -> 附加组件**，然后点击**安装**按钮来启用插件。

您也可以通过Docker安装插件：

``` sh
docker run -p 8080:8080 -e ADDONS="onlyoffice.plone" plone/plone-backend:6.0 start
```

:::note
请注意，如果您之前安装过旧版本的插件（早期使用*onlyoffice.connector*这个旧名称的插件版本），请在安装新版本之前将其卸载。
:::

## 配置Plone ONLYOFFICE集成插件

要配置插件，请前往**站点设置**。向下滚动到**附加组件配置**部分，然后点击**ONLYOFFICE配置**按钮。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在Plone配置页面指定您自己的**密钥**。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 开发Plone ONLYOFFICE插件

运行以下命令从本地存储库安装附加组件：

``` sh
docker run -p 8080:8080 -e DEVELOP="/app/src/onlyoffice.plone" -v /path/to/onlyoffice.plone:/app/src/onlyoffice.plone plone/plone-backend:6.0 start
```

:::note
更多信息，请参阅[开发包变量](https://6.dev-docs.plone.org/install/containers/images/backend.html#developing-packages-variable)。
:::

## 升级Plone ONLYOFFICE集成插件

1. 如果您在*buildout.cfg*文件中指定了具体的插件版本（所谓的*锁定版本*，这是一种推荐做法），例如*onlyoffice.plone = 1.0.0*，请更新该引用以指向较新版本。如果未指定插件版本，那么将自动加载最新版本：

   ``` ini
   [versions]
   onlyoffice.plone = 1.0.1
   ```

2. 运行*bin/buildout*。等待新版本下载并安装完成。

3. 重启Plone。在执行下一步操作之前，您的站点可能会显示异常，甚至无法访问。

4. 导航到**附加组件**界面（在站点URL后添加 */prefs\_install\_products\_form*），在**升级**列表中选择**onlyoffice.plone**，然后点击**升级onlyoffice.plone**。

## 工作原理

ONLYOFFICE集成遵循[此处](../basic-concepts.md)记录的API规范。

1. 用户在Plone中找到文档，并选择**ONLYOFFICE编辑**操作。

2. Plone为ONLYOFFICE文档准备一个包含以下属性的JSON对象：

   - **url**：ONLYOFFICE文档用于下载文档的URL；
   - **callbackUrl**：ONLYOFFICE文档用于通知文档编辑状态的URL；
   - **key**：由*UUID+Modified Timestamp*组成，用于指示ONLYOFFICE文档是否需要重新下载文档；
   - **title**：文档标题（名称）。

3. Plone从 *.pt* 模板构建一个页面，填充所有这些值，以便客户端浏览器可以加载编辑器。

4. 客户端浏览器向ONLYOFFICE文档的JavaScript库发出请求，并将包含上述属性的DocEditor配置发送给ONLYOFFICE文档。

5. 然后，ONLYOFFICE文档从Plone下载文档，用户开始编辑。

6. ONLYOFFICE文档向*callbackUrl*发送POST请求，通知Plone有用户正在编辑文档。

7. 当所有用户和客户端浏览器完成编辑后，他们关闭编辑窗口。

8. 在[10秒](../how-it-works/saving-file.md#save-delay)无操作后，ONLYOFFICE文档向*callbackUrl*发送POST请求，告知Plone客户端已完成文档编辑并关闭了它。

9. Plone下载文档的新版本，替换旧版本。

在[此处](https://github.com/ONLYOFFICE/onlyoffice-plone)下载Plone ONLYOFFICE集成插件。
