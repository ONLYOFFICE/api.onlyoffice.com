---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/strapi.svg
---

# Strapi 集成

该[插件](https://github.com/ONLYOFFICE/onlyoffice-strapi) 能让用户借助ONLYOFFICE文档，在[Strapi](https://strapi.io/)中编辑办公文档。

## 功能特性

- 目前，可编辑的文档格式有：DOCX、XLSX、PPTX。
- 支持查看的文档格式如下：DOC、DOCX、DOCM、DOT、DOTX、DOTM、ODT、FODT、OTT、RTF、TXT、HTML、HTM、MHT、XML、PDF、DJVU、FB2、EPUB、XPS、OXPS、XLS、XLSX、XLSM、XLT、XLTX、XLTM、ODS、FODS、OTS、CSV、PPS、PPSX、PPSM、PPT、PPTX、PPTM、POT、POTX、POTM、ODP、FODP、OTP。
- 该插件会在文档库中为办公文档添加一个新的**在ONLYOFFICE中编辑**菜单项，支持多个用户实时协作，并将更改保存回Strapi。

## 安装ONLYOFFICE文档

您需要部署一个ONLYOFFICE文档（文档服务器）实例，确保Strapi和所有终端客户端都能解析并连接到该实例。若无法实现连接，请参考官方的[ONLYOFFICE文档安装指南](https://helpcenter.onlyoffice.com/server/linux/document/linux-installation.aspx)。ONLYOFFICE文档还必须能够直接向Strapi发送POST请求。

安装ONLYOFFICE文档实例的最简单方法是使用[Docker](https://github.com/onlyoffice/Docker-DocumentServer)。

## 安装Strapi ONLYOFFICE集成插件

要在Strapi中使用ONLYOFFICE文档，请按以下步骤操作：

1. 修改Strapi中间件文件：*strapi/config/middlewares.js*。

   为允许插入编辑器框架并加载*api.js*，将该文件中的*strapi::security*行替换为以下内容：

   ``` ts
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

2. 在Strapi项目中安装插件：

   ``` sh
   npm install onlyoffice-stapi --save
   ```

3. 安装成功后，必须重建管理界面，以便包含此插件。要重建并重启Strapi，可运行：

   ``` sh
   # using yarn
   yarn build
   yarn develop
   
   # using npm
   npm run build
   npm run develop
   ```

## 配置Strapi ONLYOFFICE集成插件

您可以通过Strapi的**控制面板->设置->全局设置->ONLYOFFICE**来配置ONLYOFFICE应用。在设置页面，输入：

- **文档服务器地址**。已安装的ONLYOFFICE文档的URL。
- **文档服务器JWT密钥**。从7.2版本起，JWT默认开启，并自动生成密钥，用于限制对ONLYOFFICE文档的访问，保障系统安全和数据完整。在Strapi设置页面指定自己的密钥，在ONLYOFFICE文档的[配置文件](../../additional-api/signature/signature.md)中，设置相同密钥并启用验证。

## 使用Strapi ONLYOFFICE集成插件

用户可以查看、编辑和共同创作添加到Strapi媒体库中的文档。可在Strapi的ONLYOFFICE文件页面查找和排序可供查看/编辑的文档，点击文件名即可打开编辑器。

**访问权限**

- 打开文件进行编辑:具有**更新（裁剪、详情、替换）+删除**权限设置的角色。
- 打开文件进行查看:具有**访问媒体库**权限设置的角色。

## 工作原理

ONLYOFFICE集成遵循的记录的API规范。[这里](../basic-concepts.md)。

下载Strapi ONLYOFFICE集成插件地址：[这里](https://github.com/ONLYOFFICE/onlyoffice-strapi)。 
