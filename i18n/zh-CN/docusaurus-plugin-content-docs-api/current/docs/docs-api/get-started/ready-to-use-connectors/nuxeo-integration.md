---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/nuxeo.svg
---

# Nuxeo 集成

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="W6z0475IxCU"/>
```

该[插件](https://github.com/ONLYOFFICE/onlyoffice-nuxeo)允许用户借助ONLYOFFICE文档，在[Nuxeo](https://www.nuxeo.com/)中编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCM、DOCX、DOTM、DOTX、HTM、XML、XLSM、XLSX、XLTM、XLTX、POTM、POTX、PPSM、PPSX、PPTM、PPTX。
- 仅支持查看的文档格式如下：DJVU、DOC、DOT、EPUB、FB2、FODT、HTML、MHT、ODT、OTT、OXPS、PDF、RTF、TXT、XPS、CSV、FODS、ODS、OTS、XLS、XLT、FODP、ODP、OTP、POT、PPS、PPT。
- 以下格式可转换为Office Open XML格式：DOC、DOCM、DOT、DOTM、DOTX、EPUB、FB2、FODT、HTM、HTML、MHT、ODT、OTT、OXPS、PDF、RTF、XML、XPS、FODS、ODS、OTS、XLS、XLSM、XLT、XLTM、XLTX、FODP、ODP、OTP、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM。
- 该插件支持多个用户实时协作，并将更改保存回Nuxeo。

## 安装ONLYOFFICE文档

您需要一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Nuxeo和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Nuxeo发送POST请求。

使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)是启动ONLYOFFICE文档实例的最简单方法。

## 安装Nuxeo ONLYOFFICE集成插件

您有两种安装方式：

**方式一**：Nuxeo 应用市场（推荐）

直接从 [Nuxeo 应用市场](https://connect.nuxeo.com/nuxeo/site/marketplace) 安装。

**方式二**：[nuxeoctl](https://doc.nuxeo.com/nxdoc/installing-a-new-package-on-your-instance/)

``` sh
nuxeoctl mp-install /path/to/onlyoffice-nuxeo-package-x.x.zip
```

## 配置Nuxeo ONLYOFFICE集成插件

打开[nuxeo.conf](https://doc.nuxeo.com/nxdoc/configuration-parameters-index-nuxeoconf/)，输入安装了ONLYOFFICE文档的服务器名称：

``` ini
onlyoffice.docserv.url=http://documentserver/
```

其中，**documentserver**是安装了**ONLYOFFICE文档**的服务器名称。该地址必须能被用户浏览器和Nuxeo服务器访问。Nuxeo服务器地址也必须能被**ONLYOFFICE文档**访问，以确保正常工作。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在`nuxeo.conf`文件中添加**onlyoffice.jwt.secret=yoursecret**这一行来指定您自己的密钥。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 编译Nuxeo ONLYOFFICE插件

在Ubuntu系统上构建Nuxeo插件，必须执行以下步骤：

1. 成功构建需要稳定的Java版本。如果未安装，可使用以下命令安装**Open JDK 8**：

   ``` sh
   sudo apt-get update
   sudo apt-get install openjdk-8-jdk
   ```

2. 安装最新版的**Maven**。安装过程可参考[此处](https://maven.apache.org/install.html)。

3. 下载Nuxeo ONLYOFFICE集成插件的源代码：

   ``` sh
   git clone https://github.com/onlyoffice/onlyoffice-nuxeo.git
   ```

4. 编译Nuxeo ONLYOFFICE集成插件：

   ``` sh
   cd onlyoffice-nuxeo/
   mvn clean install
   ```

5. 构建好的包位于 `./onlyoffice-nuxeo-package/target/onlyoffice-nuxeo-package-x.x.zip`。

## 工作原理

ONLYOFFICE集成遵循[此处](../basic-concepts.md)记录的API规范。

### 新建文件

1. 打开目标工作区/文件夹。
2. 点击"新建"（ONLYOFFICE图标）。
3. 选择文档/电子表格/演示文稿，为其命名并确认。
4. 编辑器随即打开，可立即开始编辑。

### 打开现有文件

1. 在Nuxeo中找到您的文件。
2. 点击**用ONLYOFFICE打开**（或编辑器图标）。
3. 文件在嵌入式编辑器中打开，可根据您的权限进行查看或编辑。

### 自动保存与版本控制

更改内容将发送回Nuxeo，由Nuxeo负责仓库更新和版本管理。

在[此处](https://github.com/ONLYOFFICE/onlyoffice-nuxeo)下载Nuxeo ONLYOFFICE集成插件。
