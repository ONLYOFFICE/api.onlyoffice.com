---
sidebar_position: 1
sidebar_class_name: hidden
---

# 快速入门

基于 JavaScript 的 [ONLYOFFICE DocSpace SDK](https://www.npmjs.com/package/@onlyoffice/docspace-sdk-js) 允许开发者通过 *api.js* 使用 DocSpace 的所有功能。您可以将 ONLYOFFICE DocSpace 集成到您自己的 Web 应用程序中，让用户直接从您的网站创建和提交文档。例如，您可以使用 ONLYOFFICE DocSpace [React 组件](./react-component.md)将 ONLYOFFICE DocSpace 集成到 React 项目中。

您无需成为一名经验丰富的 JavaScript 开发者即可使用 DocSpace JavaScript SDK，因为我们为您提供了所有基础内容。只需几行 JavaScript 代码，即可搭建功能完整的集成方案。

按照以下步骤将 DocSpace 作为框架连接到您的网站。

## 第 1 步. 指定 DocSpace URL

为使 JavaScript SDK 正常工作，必须在服务器上运行。请注意，直接运行 HTML 文件将无法正常工作。请确保您使用的是服务器环境。

您需要将服务器根目录的 URL 添加到 DocSpace 的**开发者工具**部分：

1. 进入 DocSpace 设置。
2. 导航至**开发者工具**部分。
3. 在 **JavaScript SDK** 选项卡的**输入要嵌入的 DocSpace 地址**字段中，添加您服务器根目录的 URL。

![Opening File](/assets/images/docspace/add-in-js-sdk-root-url.png#gh-light-mode-only)![Opening File](/assets/images/docspace/add-in-js-sdk-root-url.dark.png#gh-dark-mode-only)

## 第 2 步. 创建 HTML 文件

创建目标 HTML 文件，其中必须包含一个占位符 *div* 标签，用于传递有关 DocSpace 参数的所有信息：

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>DocSpace JavaScript SDK</title>
        <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
    </head>
    <body>
        <div id="ds-frame"></div>
    </body>
</html>
```

API JavaScript 文件通常位于以下 DocSpace 文件夹中：

`{PORTAL\_SRC}/static/scripts/sdk/2.1.0/api.js`

其中 **\{PORTAL\_SRC\}** 是安装了 ONLYOFFICE DocSpace 的服务器名称。

## 第 3 步. 获取基础类

当 API JavaScript 连接到页面后，获取提供 *api.js* 所有基本功能的基础类：

| 类           | 描述                                                                                                                               |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| DocSpace.SDK | 定义 DocSpace 文档管理器，允许您对 DocSpace 门户中的房间、文件夹和文档执行操作。                                                  |

## 第 4 步. 授权

*api.js* 使用活动的 DocSpace 应用程序会话对用户进行身份验证。如果用户已登录到 SDK 将连接的 DocSpace 门户，则 *api.js* 会识别并使用该活动会话。

如果用户未通过身份验证，他们首次使用时将看到要求登录 DocSpace 的页面。也可以通过 SDK [方法](../usage-sdk/classes/SDKInstance.md#login)进行身份验证。

## 第 5 步. 初始化

:::warning
通过 HTTPS 工作时，必须在 *appsettings.json* 中将 **"SameSite": "none"** 参数设置为避免在跨域请求期间阻止 Cookie 的使用。
:::

使用传入其中的 SDK 配置通过 [initFrame](../usage-sdk/classes/SDKInstance.md#initframe) 方法初始化 DocSpace 框架：

``` ts
const docSpace = DocSpace.SDK.initFrame({
  frameId: "frameId",
  showMenu: true,
})
```

您可以使用其他可用[方法](../usage-sdk/classes/SDK.md)初始化 DocSpace。

完整的[配置参数](../usage-sdk/type-aliases/TFrameConfig.md)列表可在此处找到。

## 第 6 步. 使用

初始化后，可以通过使用其 [frameId](../usage-sdk/type-aliases/TFrameConfig.md#frameid) 访问当前 SDK 实例。当前 SDK 实例列表在 *DocSpace.SDK.frames* 数组中可用。要获取特定的 SDK 实例，请使用以下字符串：

``` ts
DocSpace.SDK.frames[frameId]
```
