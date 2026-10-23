---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/strapi.svg
---

# Strapi 集成

该[插件](https://github.com/ONLYOFFICE/onlyoffice-strapi)能让用户借助 ONLYOFFICE 文档，在 [Strapi](https://strapi.io/) 中编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX。
- 支持查看的文档格式如下：CSV、DJVU、DOC、DOCM、DOCX、DOT、DOTM、DOTX、EPUB、FB2、FODP、FODS、FODT、HTM、HTML、MHT、ODP、ODS、ODT、OTP、OTS、OTT、OXPS、PDF、POT、POTM、POTX、PPS、PPSM、PPSX、PPT、PPTM、PPTX、RTF、TXT、XLS、XLSM、XLSX、XLT、XLTM、XLTX、XML、XPS。
- 该插件会在文档库中为办公文档添加一个新的**在 ONLYOFFICE 中编辑**菜单项，支持多个用户实时协作，并将更改保存回 Strapi。

## 安装 ONLYOFFICE 文档

您需要部署一个 ONLYOFFICE 文档（文档服务器）实例，确保 Strapi 和所有终端客户端都能解析并连接到该实例。若无法实现连接，请参考官方的 [ONLYOFFICE 文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE 文档还必须能够直接向 Strapi 发送 POST 请求。

安装 ONLYOFFICE 文档实例的最简单方法是使用 [Docker](https://github.com/ONLYOFFICE/Docker-DocumentServer)。

## 安装 Strapi ONLYOFFICE 集成插件

要在 Strapi 中使用 ONLYOFFICE 文档，请按以下步骤操作：

1. 修改 Strapi 中间件文件：*strapi/config/middlewares.js*。

   为允许插入编辑器框架并加载*api.js*，将该文件中的*strapi::security*行替换为以下内容：

   ``` js
   const config = {
     name: "strapi::security",
     config: {
       contentSecurityPolicy: {
         useDefaults: true,
         directives: {
           "script-src": ["'self'", "https:", "http:"],
           "frame-src": ["'self'", "https:", "http:"],
         },
       },
     },
   }
   ```

   如果已有此类配置，仅需添加*directives*即可。

2. 在 Strapi 项目中安装插件：

   ``` sh
   npm install onlyoffice-strapi --save
   ```

3. 安装成功后，必须重建管理界面，以便包含此插件。要重建并重启 Strapi，可运行：

   ``` sh
   # using yarn
   yarn build
   yarn develop
   
   # using npm
   npm run build
   npm run develop
   ```

## 配置 Strapi ONLYOFFICE 集成插件

您可以通过 Strapi 的**控制面板->设置->全局设置->ONLYOFFICE** 来配置 ONLYOFFICE 应用。在设置页面，输入：

- **文档服务器地址**。已安装的 ONLYOFFICE 文档的 URL。
- **文档服务器 JWT 密钥**。从 7.2 版本起，JWT 默认开启，并自动生成密钥，用于限制对 ONLYOFFICE 文档的访问，保障系统安全和数据完整。在 Strapi 设置页面指定自己的密钥，在 ONLYOFFICE 文档的[配置文件](../../additional-api/signature/signature.md)中，设置相同密钥并启用验证。

## 使用 Strapi ONLYOFFICE 集成插件

用户可以查看、编辑和共同创作添加到 Strapi 媒体库中的文档。可在 Strapi 的 ONLYOFFICE 文件页面查找和排序可供查看/编辑的文档，点击文件名即可打开编辑器。

### 访问权限

- 打开文件进行编辑：具有**更新（裁剪、详情、替换）+删除**权限设置的角色。
- 打开文件进行查看：具有**访问媒体库**权限设置的角色。

## 工作原理

ONLYOFFICE 集成遵循[此处](../basic-concepts.md)记录的 API 规范。

在[此处](https://github.com/ONLYOFFICE/onlyoffice-strapi)下载 Strapi ONLYOFFICE 集成插件。
