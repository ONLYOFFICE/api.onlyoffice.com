---
description: 使用 ONLYOFFICE 文档 React 组件将 ONLYOFFICE 文档集成到 React 应用程序中。
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# React

ONLYOFFICE 文档 React [组件](https://github.com/ONLYOFFICE/document-editor-react) 将ONLYOFFICE 文档集成到 [React](https://react.dev/) 项目。该组件支持 React 16.9 及更高版本，包括 React 19。每个版本的更改列表发布在 [Releases](https://github.com/ONLYOFFICE/document-editor-react/releases) 选项卡中。

## 先决条件

此过程需要 [Node.js (和 npm)](https://nodejs.org/en) 以及一个正在运行的 ONLYOFFICE 文档实例。如果您还没有，请按照[自托管](../installation/self-hosted.md)部分的说明将其安装在您自己的服务器上，或将其部署在[云端](../installation/cloud.md)。

本页假定您具备 [React](https://react.dev/) 的基本使用知识。该组件可用于任何 React 项目。以下步骤使用 [Vite](https://vite.dev/) 从头创建一个项目。

## 使用 ONLYOFFICE 文档编辑器创建演示 React 应用程序

此过程创建一个基本 React 应用程序，并在其中安装 ONLYOFFICE 文档编辑器。

1. 创建一个名为 `onlyoffice-react-demo` 的新 React 项目并安装其依赖项：

   ```sh
   npm create vite@latest onlyoffice-react-demo -- --template react
   cd onlyoffice-react-demo
   npm install
   ```

2. 从 [npm](https://www.npmjs.com/package/@onlyoffice/document-editor-react) 公共注册表安装 ONLYOFFICE 文档 React 组件，并将其保存到 `package.json` 文件中：

   <Tabs>
      <TabItem value="npm" label="npm">
            ```sh
            npm install --save @onlyoffice/document-editor-react
            ```
      </TabItem>
      <TabItem value="yarn" label="yarn">
            ```sh
            yarn add @onlyoffice/document-editor-react
            ```
      </TabItem>
   </Tabs>

   TypeScript 类型声明来自 [`@onlyoffice/doceditor-types`](https://www.npmjs.com/package/@onlyoffice/doceditor-types) 对等依赖项。npm 7 及更高版本会自动安装该依赖项。使用 yarn 时，请手动安装：

   ```sh
   yarn add -D @onlyoffice/doceditor-types
   ```

3. 打开 `onlyoffice-react-demo` 项目中的 `./src/App.jsx` 文件，并将其内容替换为以下代码：

   ```jsx
   import {DocumentEditor} from "@onlyoffice/document-editor-react";

   function onDocumentReady() {
     console.log("Document is loaded");
   }

   function onLoadComponentError(errorCode, errorDescription) {
     switch (errorCode) {
       case -1: // Unknown error loading component
         console.log(errorDescription);
         break;

       case -2: // Error load DocsAPI from http://documentserver/
         console.log(errorDescription);
         break;

       case -3: // DocsAPI is not defined
         console.log(errorDescription);
         break;
     }
   }

   export default function App() {
     return (
       <DocumentEditor
         id="docxEditor"
         documentServerUrl="http://documentserver/"
         config={{
           document: {
             fileType: "docx",
             key: "Khirz6zTPdfd7",
             title: "Example Document Title.docx",
             url: "https://example.com/url-to-example-document.docx",
           },
           documentType: "word",
           editorConfig: {
             callbackUrl: "https://example.com/url-to-callback",
           },
           token: "TOKEN_HERE",
         }}
         events_onDocumentReady={onDocumentReady}
         onLoadComponentError={onLoadComponentError}
       />
     )
   }
   ```

   将以下行替换为您自己的数据：

   - `http://documentserver/` - 替换为您的服务器的 URL；您可以[注册](https://www.onlyoffice.com/zh/docs-registration?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。
   - `https://example.com/url-to-example-document.docx` - 替换为您的文件的 URL；您可以使用示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。
   - `https://example.com/url-to-callback` - 替换为您的回调 URL（这是保存功能正常工作所必需的）。
   - `TOKEN_HERE` - 替换为配置的签名。当您的文档服务器启用了 JWT 验证（默认配置）时，此项为必填项。请参阅[签名配置](#signing-the-configuration)。

   此文件将创建 `App` 组件，其中包含配置了基本功能的 ONLYOFFICE 文档编辑器。

4. 使用 Vite 开发服务器测试应用程序：

   - 要启动开发服务器，请导航到 `onlyoffice-react-demo` 目录并运行：

     ```sh
     npm run dev
     ```

     该应用程序将在 `http://localhost:5173` 上可用。

   - 要停止开发服务器，请切换到命令行或命令提示符，然后按 `Ctrl+C`。

## 签名配置 {#signing-the-configuration}

ONLYOFFICE 文档使用 JSON Web Token 校验编辑器配置。JWT 验证默认处于启用状态，因此 `config` 必须包含 [`token`](../how-it-works/security.md)，即配置本身的签名。该令牌不是固定值：每当任何已签名的参数发生变化时，都必须重新生成它。

签名需要使用 ONLYOFFICE 文档的密钥，因此请在您的服务器上生成令牌，并将已就绪的配置发送到浏览器。React 应用程序无法确保密钥不被泄露。

### 在服务器上签名配置 {#signing-the-configuration-on-the-server}

请在您的后端构建配置、对其进行签名，并通过一个接口将其返回：

```js
// npm install jsonwebtoken
import jwt from "jsonwebtoken";

app.get("/api/editor-config", (request, response) => {
  const config = {
    document: {
      fileType: "docx",
      key: "Khirz6zTPdfd7",
      title: "Example Document Title.docx",
      url: "https://example.com/url-to-example-document.docx",
    },
    documentType: "word",
    editorConfig: {
      callbackUrl: "https://example.com/url-to-callback",
    },
  };

  config.token = jwt.sign(config, process.env.DOCUMENT_SERVER_SECRET, {algorithm: "HS256"});

  response.json(config);
});
```

有关其他语言的签名代码，请参阅[签名](../../additional-api/signature/signature.md)部分。

### 将已签名的配置传递给组件 {#passing-the-signed-configuration-to-the-component}

请在组件挂载时请求配置，并在配置到达后渲染编辑器：

```jsx
import {DocumentEditor} from "@onlyoffice/document-editor-react";
import {useEffect, useState} from "react";

export default function Editor() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/api/editor-config")
      .then((response) => response.json())
      .then(setConfig);
  }, []);

  if (!config) return null;   // 配置尚未加载

  return (
    <DocumentEditor
      id="docxEditor"
      documentServerUrl="http://documentserver/"
      config={config}
    />
  )
}
```

组件会将 `config` 合并到发送给 ONLYOFFICE 文档的配置中，因此 `token` 字段会原样传递给编辑器。

## 在 React 组件中调用编辑器方法 {#calling-editor-methods-in-the-react-component}

1. 组件会将每个编辑器实例存储在 `window.DocEditor.instances` 对象中。通过组件 `id` 获取实例：

   ```js
   const documentEditor = window.DocEditor.instances["docxEditor"];
   ```

2. 从这个对象中调用任何编辑器的 [方法](../../usage-api/methods.md)：

   ```js
   documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
   ```

示例：

```js
const onDocumentReady = () => {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
}
```

## 在 React 中使用自动化 API {#using-automation-api-in-react}

[自动化 API](../../usage-api/automation-api/automation-api.md) 通过连接器从您自己的界面与文档内容进行交互。连接器与创建它的编辑器实例绑定，只要该实例存在，连接器就保持有效。

:::info
自动化 API 仅适用于 **ONLYOFFICE 文档开发者版**。
:::

请在 `events_onDocumentReady` 处理程序中使用 [createConnector](../../usage-api/methods.md#createconnector) 方法创建连接器，并重复使用它，而不要为每次操作都创建新的连接器。请将其保存在 ref 中以便清理，并保存在 state 中以供使用它的组件访问：

```jsx
import {DocumentEditor} from "@onlyoffice/document-editor-react";
import {useEffect, useRef, useState} from "react";

export default function Editor({config}) {
  const [connector, setConnector] = useState(null);
  const connectorRef = useRef(null);

  const onDocumentReady = () => {
    const documentEditor = window.DocEditor.instances["docxEditor"];
    const created = documentEditor.createConnector();

    connectorRef.current = created;   // 用于清理
    setConnector(created);            // 供使用连接器的组件访问
  };

  useEffect(() => {
    return () => {
      connectorRef.current?.disconnect();
      connectorRef.current = null;
    };
  }, []);

  return (
    <DocumentEditor
      id="docxEditor"
      documentServerUrl="http://documentserver/"
      config={config}
      events_onDocumentReady={onDocumentReady}
    />
  )
}
```

请在渲染 `DocumentEditor` 的组件的清理函数中调用 [disconnect](../../usage-api/automation-api/connector-class.md#disconnect) 方法，以便在编辑器仍然存在时断开连接器。

请在通过连接器发送命令之前检查连接器是否已创建，而不是重试失败的调用：

```jsx
useEffect(() => {
  if (!connector) return;   // 编辑器尚未准备就绪

  connector.executeMethod("GetAllComments", null, (comments) => {
    console.log("Comments:", comments);
  });
}, [connector]);
```

:::note
当组件被卸载时，以及当 `documentServerUrl`、`config`、`document_fileType`、`document_title`、`documentType`、`editorConfig_lang`、`height`、`type` 或 `width` 属性发生更改时，组件会销毁编辑器，然后加载新的编辑器。已销毁编辑器的连接器将失效：请断开该连接器，并在新编辑器的 `events_onDocumentReady` 处理程序中创建新的连接器。
:::

## 部署演示 React 应用程序

1. 导航到 `onlyoffice-react-demo` 目录并创建生产版本：

   ```sh
   npm run build
   ```

   `dist` 目录将使用您的应用程序的产品版本创建。

2. 使用 Vite 预览服务器在本地检查该版本：

   ```sh
   npm run preview
   ```

3. 要使用独立的静态服务器提供该版本，请全局安装 [serve](https://github.com/vercel/serve) 包：

   ```sh
   npm install -g serve
   ```

4. 在 3000 端口上为 `dist` 目录提供服务：

   ```sh
   serve -s dist
   ```

   可以使用 `-l` 或 `--listen` 标志调整另一个端口：

   ```sh
   serve -s dist -l 4000
   ```

要将应用程序部署到您自己的 Web 服务器，请将 `onlyoffice-react-demo/dist` 目录的内容复制到 Web 服务器的根目录。

## 将组件与 Next.js 结合使用 {#using-the-component-with-nextjs}

组件在浏览器中渲染编辑器，并且不包含 `"use client"` 指令。编辑器配置中还包含事件处理函数，而这些函数无法从服务器组件传递。因此，请从客户端组件渲染该组件。

在 App Router 中，请为渲染该组件的文件添加 `"use client"` 指令，并在同一文件中设置配置：

```jsx
"use client";

import {DocumentEditor} from "@onlyoffice/document-editor-react";

export default function Editor() {
  return (
    <DocumentEditor
      id="docxEditor"
      documentServerUrl="http://documentserver/"
      config={{
        document: {
          fileType: "docx",
          key: "Khirz6zTPdfd7",
          title: "Example Document Title.docx",
          url: "https://example.com/url-to-example-document.docx",
        },
        documentType: "word",
        editorConfig: {
          callbackUrl: "https://example.com/url-to-callback",
        },
        token: "TOKEN_HERE",
      }}
      events_onDocumentReady={() => console.log("Document is loaded")}
    />
  )
}
```

服务器端渲染不需要任何额外设置：组件在服务器上渲染一个空容器，并在水合后加载 ONLYOFFICE 文档 API 脚本。只有在需要将组件完全排除在预渲染之外时，才需要使用 `next/dynamic` 和 `{ssr: false}` 选项导入组件。在 App Router 中，该选项仅在客户端组件中可用。

要部署应用程序，请使用 `next start` 命令，或者设置 `output: "export"` 选项以托管静态版本，因为编辑器完全在浏览器中工作。

## ONLYOFFICE 文档 React 组件 API

### 属性

`config` 属性会覆盖组件的各个单独属性。该合并为浅层合并：`config` 的顶层键会完整替换相应的组件属性，而不是与其合并。

- 如果设置了 `config.document`，则 `document_fileType` 和 `document_title` 属性将被忽略。
- 如果设置了 `config.editorConfig`，则 `editorConfig_lang` 属性将被忽略。
- 如果设置了 `config.events`，则所有 `events_on*` 属性都将被忽略。

每个 `events_on*` 属性都对应编辑器配置中同名的[事件](../../usage-api/config/events.md)。

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 名称                                  | 类型                                                  | 默认 | 描述                                                                                                                                                |
| ------------------------------------- | ----------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`\*                                | string                                                | -       | 组件唯一标识符。                                                                                                                               |
| `documentServerUrl`\*                 | string                                                | -       | ONLYOFFICE 文档服务器的地址。                                                                                                                                |
| `config`\*                            | object                                                | -       | 用于打开文件的通用[配置对象](../../usage-api/config/config.md)。                                                        |
| `shardkey`                            | string \| boolean                                     | true    | 添加到 ONLYOFFICE 文档 API 脚本请求查询字符串中的 [shardkey](../configuration/shard-key.md) 参数，用于负载均衡。如果设置为 `true`，则使用 `config` 中的文档 [`key`](../../usage-api/config/document/document.md#key) 作为其值。设置为 `false` 可在发送请求时不带此参数。 |
| `onLoadComponentError`                | (errorCode: number, errorDescription: string) => void | null    | 加载组件时发生错误时调用的函数。                                                                                        |
| `document_fileType`                   | string                                                | null    | 文件的类型。                                                                                                                                      |
| `document_title`                      | string                                                | null    | 文件名。                                                                                                                                             |
| `documentType`                        | string                                                | null    | 文档类型。                                                                                                                                         |
| `editorConfig_lang`                   | string                                                | null    | 编辑器界面[语言](../../usage-api/config/editor/editor.md#lang)。                                                                                     |
| `height`                              | string                                                | null    | 浏览器窗口中的文档高度。                                                                                                             |
| `type`                                | string                                                | null    | 用于访问文档的平台类型：`desktop`、`mobile` 或 `embedded`。                                                                          |
| `width`                               | string                                                | null    | 浏览器窗口中的文档宽度。                                                                                                              |
| `events_onAppReady`                   | (event: object) => void                               | null    | 当应用程序加载到浏览器中时调用的函数。                                                                                       |
| `events_onDocumentStateChange`        | (event: object) => void                               | null    | 修改文档时调用的函数。                                                                                                         |
| `events_onMetaChange`                 | (event: object) => void                               | null    | 通过 meta 命令更改文档的元信息时调用的函数。                                                             |
| `events_onDocumentReady`              | (event: object) => void                               | null    | 将文档加载到文档编辑器时调用的函数。                                                                                  |
| `events_onInfo`                       | (event: object) => void                               | null    | 应用程序打开文件时调用的函数。                                                                                                  |
| `events_onWarning`                    | (event: object) => void                               | null    | 发生警告时调用的函数。                                                                                                                 |
| `events_onError`                      | (event: object) => void                               | null    | 发生错误或其他特定事件时调用的函数。                                                                                     |
| `events_onRequestSharingSettings`     | (event: object) => void                               | null    | 当用户尝试通过单击**更改访问权限**按钮来管理文档访问权限时调用的函数。                                  |
| `events_onRequestRename`              | (event: object) => void                               | null    | 当用户尝试通过单击**重命名...** 按钮重命名文件时调用的函数。                                                       |
| `events_onMakeActionLink`             | (event: object) => void                               | null    | 当用户试图获取打开包含书签的文档的链接时调用的函数，滚动到书签位置。            |
| `events_onRequestInsertImage`         | (event: object) => void                               | null    | 当用户尝试通过单击**来自存储的图像**按钮插入图像时调用的函数。                                              |
| `events_onRequestSaveAs`              | (event: object) => void                               | null    | 当用户尝试通过单击**另存为...**按钮来保存文件时调用的函数。                                                           |
| `events_onRequestMailMergeRecipients` | (event: object) => void                               | null    | 自 7.5 版起已弃用，请改用 `events_onRequestSelectSpreadsheet`。当用户尝试通过单击**邮件合并** 按钮来选择收件人数据时调用的函数。 |
| `events_onRequestCompareFile`         | (event: object) => void                               | null    | 自 7.5 版起已弃用，请改用 `events_onRequestSelectDocument`。当用户尝试通过单击**存储中的文档**按钮来选择要比较的文档时调用的函数。 |
| `events_onRequestEditRights`          | (event: object) => void                               | null    | 当用户尝试通过单击**编辑文档**按钮将文档从查看模式切换到编辑模式时调用的函数。        |
| `events_onRequestHistory`             | (event: object) => void                               | null    | 当用户尝试通过单击**版本历史记录**按钮来显示文档版本历史记录时调用的函数。                               |
| `events_onRequestHistoryClose`        | (event: object) => void                               | null    | 当用户试图通过单击**关闭历史记录**按钮从查看文档版本历史记录返回到文档时调用的函数。 |
| `events_onRequestHistoryData`         | (event: object) => void                               | null    | 当用户试图单击文档版本历史记录中的特定文档版本时调用的函数。                                        |
| `events_onRequestRefreshFile`         | (event: object) => void                               | null    | 当必须在不重新加载页面的情况下更新编辑器中的文件时调用的函数。                                          |
| `events_onRequestRestore`             | (event: object) => void                               | null    | 当用户尝试通过单击版本历史记录中的**恢复**按钮来恢复文件版本时调用的函数。                         |
| `events_onRequestSelectSpreadsheet`   | (event: object) => void                               | null    | 当用户尝试通过单击**邮件合并**按钮来选择收件人数据时调用的函数。                                             |
| `events_onRequestSelectDocument`      | (event: object) => void                               | null    | 当用户尝试选择文档以进行比较、合并或插入文本时调用的函数。                                              |
| `events_onRequestUsers`               | (event: object) => void                               | null    | 当用户可以选择要在评论中提及的其他用户、授予编辑特定工作表区域的访问权限或设置用户头像时调用的函数。 |

```mdx-code-block
</APITable>
```

\* *- 必填字段*

## 反馈和支持

如果您对 ONLYOFFICE 文档 React 组件有任何问题、疑问或建议，请参阅[问题](https://github.com/ONLYOFFICE/document-editor-react/issues)部分。
