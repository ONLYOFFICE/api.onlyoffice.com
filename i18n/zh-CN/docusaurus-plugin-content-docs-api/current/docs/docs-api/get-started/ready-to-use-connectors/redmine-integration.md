---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/redmine.svg
---

# Redmine 集成

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="_1Q86nRnumo"/>
```

这个[插件](https://github.com/ONLYOFFICE/onlyoffice-redmine)能让用户借助ONLYOFFICE文档，在[Redmine](https://www.redmine.org/)中编辑附件。

该插件可在官方的[Redmine插件目录](https://www.redmine.org/plugins/onlyoffice_redmine)中获取。

## 功能特性

- 可查看和编辑文本文档、电子表格、演示文稿以及表单。
- 支持通过两种协同编辑模式（快速模式和严格模式）进行文档实时协同编辑，具备修订跟踪、添加注释和内置聊天功能。
- 设有设置页面，用于配置与服务器的连接、JWT身份验证，还能自定义编辑器外观。
- 授权编辑器支持移动端查看。
- 可依据用户的语言偏好，使用模板创建新附件。
- 能够转换附件格式，并进行保存或下载操作。

## 支持的格式

|        | djvu  |  doc  | docm  | docx  | docxf |  dot  | dotm  | dotx  | epub* | fb2*  | fodt  |  htm  | html* |  mht  | mhtml | odt*  | oform | ott*  | oxps  |  pdf  | rtf*  |  stw  |  sxw  | txt*  |  wps  |  wpt  |  xml  |  xps  | csv*  |  et   |  ett  | fods  | ods*  | ots*  |  sxc  |  xls  | xlsb  | xlsm  | xlsx  |  xlt  | xltm  | xltx  |  dps  |  dpt  | fodp  | odp*  | otp*  |  pot  | potm  | potx  |  pps  | ppsm  | ppsx  |  ppt  | pptm  | pptx  |  sxi  |
| :----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 查看    |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |   +   |
| 编辑    |   -   |   -   |   +   |   +   |   +   |   -   |   +   |   +   |   +   |   +   |   -   |   -   |   +   |   -   |   -   |   +   |   -   |   +   |   -   |   +   |   +   |   -   |   -   |   +   |   -   |   -   |   -   |   -   |   +   |   -   |   -   |   -   |   +   |   +   |   -   |   -   |   -   |   +   |   +   |   -   |   +   |   +   |   -   |   -   |   -   |   +   |   +   |   -   |   +   |   +   |   -   |   +   |   +   |   -   |   +   |   +   |   -   |
| 创建    |   -   |   -   |   -   |   +   |   +   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   +   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   -   |   +   |   -   |

\* *- 要能够打开这些格式进行编辑，请在[格式设置](#formats)中勾选。由于某些格式限制，可能会出现数据丢失的情况。*

## 安装ONLYOFFICE文档

在安装插件之前，请确保您拥有一个ONLYOFFICE文档（文档服务器）实例，该实例必须能从Redmine和任何终端客户端解析并连接。此外，要确保ONLYOFFICE文档能够直接向Redmine发送POST请求。

我们建议使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)来安装ONLYOFFICE文档。或者，您也可以按照[这些说明](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)，在Debian、Ubuntu或其衍生系统上进行安装。

## 安装Redmine ONLYOFFICE集成插件

安装该插件需要Redmine4.2或更高版本，或者5.0或更高版本。同时要注意，该插件与Ruby2.7.2或更高版本，或者3.0.0或更高版本兼容。我们建议使用Redmine5搭配Ruby3。

1. 如果您是Redmine新手，请按照[这些说明](https://www.redmine.org/projects/redmine/wiki/RedmineInstall)。

2. 下载[插件](https://github.com/ONLYOFFICE/onlyoffice-redmine/releases):

   ``` sh
   curl --location https://github.com/ONLYOFFICE/onlyoffice-redmine/releases/latest/download/onlyoffice_redmine.tar.zst --output onlyoffice_redmine.tar.zst
   ```

3. 将其解压到插件目录：

   ``` sh
   tar --extract --file onlyoffice_redmine.tar.zst --directory plugins
   ```

4. 如果Redmine没有自动安装插件依赖项，则需手动安装：

   ``` sh
   bundle install
   ```

5. 执行迁移操作：

   ``` sh
   RAILS_ENV=production bundle exec rake redmine:plugins:migrate NAME=onlyoffice_redmine
   ```

6. 重启Redmine。

在Redmine的[维基页面](https://www.redmine.org/projects/redmine/wiki/Plugins#Installing-a-plugin)上可以了解更多关于插件安装的信息。

## 配置Redmine ONLYOFFICE集成插件

通过Redmine界面配置插件。进入**管理->插件**，找到Redmine的 ONLYOFFICE集成插件并点击**配置**：

![Redmine设置](/assets/images/editor/redmine-settings.png)

### 常规设置

- **文档编辑服务地址**：已安装的ONLYOFFICE文档（文档服务器）的URL。留空则会禁用该插件。

### 高级服务器设置

- 服务器内部请求的ONLYOFFICE文档地址。
- ONLYOFFICE文档内部请求的服务器地址。
- 连接到演示ONLYOFFICE文档服务器。

### 安全设置

- **密钥**：从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障安全性和数据完整性。在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)，中指定您的密钥，然后在插件的设置页面中指定相同的密钥。留空则会禁用身份验证。
- 授权标头。
- 禁用证书验证（不安全）。

### 编辑器自定义设置

- 显示聊天菜单按钮。
- 更紧凑地显示标题。
- 显示反馈与支持菜单按钮。
- 显示帮助菜单按钮。
- 显示单色工具栏标题。

### 格式设置 {#formats}

- 指定允许直接打开进行编辑的格式列表。

## 工作原理

该插件使用[ONLYOFFICE文档API](../basic-concepts.md)并集成到Redmine的多个页面中，包括[文档](#documents)，[附件](#attachment)，[文件](#files)，[问题](#issues)，[新闻](#news)，[维基](#wiki)，和[论坛](#forums)。此外，该插件还添加了诸如["在ONLYOFFICE中创建"](#create-in-onlyoffice)和["使用ONLYOFFICE转换"](#convert-with-onlyoffice)等常规页面。

### 文档 {#documents}

![文档页面](/assets/images/editor/documents-page.png)

在**文档**页面，用户可以打开附件进行查看、编辑、创建或转换操作。界面中显示的选项可能会因用户权限的不同而有所差异。

|   选项            |             权限                |
| ——————————————————|————————————————————————————————|
| 查看              | 查看文档                        |
| 编辑              | 查看文档、编辑文档               |
| 创建              | 查看文档、编辑文档               |
| 转换：保存         | 查看文档、编辑文档               |
| 转换：下载         | 查看文档                        |

### 附件 {#attachment}

![附件页面](/assets/images/editor/attachment-page.png)

在**附件**页面，用户可以打开附件进行查看、编辑或转换操作。界面中显示的选项可能会因用户对附件所在模块的权限不同而有所差异。

### 文件 {#files}

![文件页面](/assets/images/editor/files-page.png)

在**文件**页面，用户可以打开附件进行查看、编辑或转换操作。界面中显示的选项可能会因用户权限的不同而有所差异。

| 选项              | 权限                      |
| ----------------- | ------------------------ |
| 查看              |  查看问题                 |
| 编辑              |  查看问题、编辑自己的问题   |
| 转换：保存        |  查看问题、编辑自己的问题   |
|转换：下载         |  查看问题                  |

### 问题 {#issues}

![问题页面](/assets/images/editor/issues-page.png)

在**问题**页面，用户可以打开附件进行查看、编辑或转换操作。界面中显示的选项可能会因用户对附件所在模块的权限不同而有所差异。

|选项	              | 权限                          |
| ----------------- | ---------------------------- |
| 查看              | 查看问题                      |
| 编辑              | 查看问题、编辑自己的问题        |
| 转换：保存        | 查看问题、编辑自己的问题        |
|转换：下载         | 查看问题                       |

### 新闻 {#news}

![新闻页面](/assets/images/editor/news-page.png)

在**新闻**页面，用户可以打开附件进行查看、编辑或转换操作。界面中显示的选项可能会因用户权限的不同而有所差异。

| 选项              | 权限                   |
| ----------------- | ---------------------- |
| 查看              | 查看新闻                |
| 编辑              | 查看新闻、管理新闻       |
| 转换：保存         | 查看新闻、管理新闻       |
| 转换：下载         |  查看新闻               |

### 维基 {#wiki}

![维基页面](/assets/images/editor/wiki-page.png)

在**维基**页面，用户可以打开附件进行查看、编辑或转换操作。界面中显示的选项可能会因用户权限的不同而有所差异。

| 选项	           | 权限                       |
| ----------------- | -------------------------- |
| 查看              | 查看维基                    |
| 编辑              | 查看维基、编辑维基页面       |
| 转换：保存         |查看维基、编辑维基页面        |
| 转换：下载         | 查看维基                  |

### 论坛 {#forums}

![论坛页面](/assets/images/editor/forums-page.png)

在**论坛**页面，用户可以打开附件进行查看、编辑或转换操作。界面中显示的选项可能会因用户权限的不同而有所差异。

| 选项              | 权限                          |
| ----------------- | ---------------------------- |
| 查看              | 查看消息                      |
| 编辑              | 查看消息、编辑消息             |
| 转换：保存         | 查看消息、编辑消息             |
| 转换：下载         | 查看消息                      |

### 在ONLYOFFICE中查看或编辑

![在ONLYOFFICE中查看或编辑](/assets/images/editor/view-or-edit.png)

在**ONLYOFFICE中查看或编辑**页面，用户可以查看或编辑附件。此页面的可见性取决于用户对附件所在模块的权限。

### 在ONLYOFFICE中创建 {#create-in-onlyoffice}

![在ONLYOFFICE中创建](/assets/images/editor/create-page.png)

**在ONLYOFFICE中创建**页面，用户可以使用考虑用户语言偏好的模板创建附件。查看[支持的格式](#formats)。此页面的可见性取决于用户对模块的权限。

### 使用ONLYOFFICE转换 {#convert-with-onlyoffice}

![使用ONLYOFFICE转换](/assets/images/editor/convert-page.png)

在**使用ONLYOFFICE转换**页面，用户可以转换附件。此页面的可见性取决于用户对附件所在模块的权限。
