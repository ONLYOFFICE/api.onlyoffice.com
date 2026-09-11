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

此过程还需要您的 ONLYOFFICE 文档的密钥。编辑器配置将使用以该密钥签名的 JSON Web Token 进行校验，并且该校验默认处于启用状态。请参阅[签名配置](#signing-the-configuration)。

本页假定您具备 [React](https://react.dev/) 的基本使用知识。该组件可用于任何 React 项目。以下步骤使用 [Vite](https://vite.dev/) 从头创建一个项目。

## 使用 ONLYOFFICE 文档编辑器创建演示 React 应用程序

此过程创建一个基本 React 应用程序，并在其中安装 ONLYOFFICE 文档编辑器。

1. 创建一个名为 `onlyoffice-react-demo` 的新 React 项目并安装其依赖项：

   ```sh
   npm create vite@latest onlyoffice-react-demo -- --template react
   cd onlyoffice-react-demo
   npm install
   ```

2. 从 [npm](https://www.npmjs.com/package/@onlyoffice/document-editor-react) 公共注册表安装 ONLYOFFICE 文档 React 组件，以及用于对编辑器配置进行签名的 [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 包，并将它们保存到 `package.json` 文件中。

   TypeScript 类型声明来自 [`@onlyoffice/doceditor-types`](https://www.npmjs.com/package/@onlyoffice/doceditor-types) 对等依赖项，npm 7 及更高版本会自动安装该依赖项，而 yarn 不会。`jsonwebtoken` 包仅在开发服务器中运行，因此它是演示应用程序的开发依赖项。在生产应用程序中，它属于对配置进行签名的后端。

   <Tabs>
      <TabItem value="npm" label="npm">
            ```sh
            npm install --save @onlyoffice/document-editor-react
            npm install --save-dev jsonwebtoken
            ```
      </TabItem>
      <TabItem value="yarn" label="yarn">
            ```sh
            yarn add @onlyoffice/document-editor-react
            yarn add -D @onlyoffice/doceditor-types jsonwebtoken
            ```
      </TabItem>
   </Tabs>

3. 替换 `onlyoffice-react-demo` 项目中 `./src/App.jsx` 和 `./vite.config.js` 文件的内容，并创建 `./.env.local` 文件：

   <Tabs>
      <TabItem value="app" label="src/App.jsx">

      `App` 组件，它在挂载时请求已签名的配置，并在配置到达后渲染 ONLYOFFICE 文档编辑器。`config` 属性为必填项，因此在此之前该组件将返回 `null`。

      编辑器会填满其渲染所在的元素，因此外层容器为其设置了明确的高度。

      ```jsx
      import {DocumentEditor} from "@onlyoffice/document-editor-react";
      import {useEffect, useState} from "react";

      function onDocumentReady() {
        console.log("Document is loaded");
      }

      function onLoadComponentError(errorCode, errorDescription) {
        switch (errorCode) {
          case -1: // Unknown error loading component
            console.log(errorDescription);
            break;

          case -2: // Error load DocsAPI from documentServerUrl
            console.log(errorDescription);
            break;

          case -3: // DocsAPI is not defined
            console.log(errorDescription);
            break;
        }
      }

      export default function App() {
        const [config, setConfig] = useState(null);

        useEffect(() => {
          fetch("/api/editor-config")
            .then((response) => response.json())
            .then(setConfig);
        }, []);

        if (!config) return null;   // 配置尚未加载

        return (
          <div style={{display: "flex", height: "100svh"}}>
            <DocumentEditor
              id="docxEditor"
              documentServerUrl={import.meta.env.VITE_DOCUMENT_SERVER_URL}
              config={config}
              events_onDocumentReady={onDocumentReady}
              onLoadComponentError={onLoadComponentError}
            />
          </div>
        )
      }
      ```

      </TabItem>
      <TabItem value="vite" label="vite.config.js">

      开发服务器的 `/api/editor-config` 接口，它代替您的后端：配置在 Node.js 中构建并签名，只有已签名的配置才会发送到浏览器。

      :::warning
      `callbackUrl` 指向 ONLYOFFICE 文档的 `dummyCallback` 接口，该接口会接收保存请求并将其丢弃，因此该演示应用程序无需自己的回调处理程序。要[保存](../how-it-works/saving-file.md)文档，请将其替换为您的[回调处理程序](../../usage-api/callback-handler.md)的 URL。
      :::

      请将 `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 替换为您的文件的 URL，或保留我们示例文档的 URL 以进行测试。

      :::warning
      `key` 标识文档的版本，而不是编辑会话：打开相同 `key` 的所有用户共享同一个会话，并且具有已知 `key` 的文档会直接从缓存中提供。该演示应用程序始终使用同一个 `key`，因为示例文档不会发生变化。每当文档被编辑并保存后，请生成新的 [key](../../usage-api/config/document/document.md#key)，否则编辑器将继续提供缓存中的版本。
      :::

      ```js
      import react from "@vitejs/plugin-react";
      import jwt from "jsonwebtoken";
      import {defineConfig, loadEnv} from "vite";

      function editorConfigApi(secret, documentServerUrl) {
        return {
          name: "onlyoffice-editor-config",
          configureServer(server) {
            server.middlewares.use("/api/editor-config", (request, response) => {
              const config = {
                document: {
                  fileType: "docx",
                  key: "Khirz6zTPdfd7",
                  title: "Example Document Title.docx",
                  url: "https://static.onlyoffice.com/assets/docs/samples/demo.docx",
                },
                documentType: "word",
                editorConfig: {
                  callbackUrl: documentServerUrl + "dummyCallback",
                },
              };

              config.token = jwt.sign(config, secret, {algorithm: "HS256"});

              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify(config));
            });
          },
        };
      }

      export default defineConfig(({mode}) => {
        const env = loadEnv(mode, process.cwd(), "");

        return {
          plugins: [react(), editorConfigApi(env.DOCUMENT_SERVER_SECRET, env.VITE_DOCUMENT_SERVER_URL)],
        };
      });
      ```

      </TabItem>
      <TabItem value="env" label=".env.local">

      您的 ONLYOFFICE 文档的地址及其密钥。`VITE_DOCUMENT_SERVER_URL` 带有 `VITE_` 前缀，因此 Vite 会将其内联到客户端包中，组件需要在其中使用该地址。`DOCUMENT_SERVER_SECRET` 没有前缀，因此密钥会保留在 Node.js 中，不会进入客户端包。该地址以斜杠结尾，因为接口会在其后追加 `dummyCallback`。

      请将 `http://documentserver/` 替换为您的服务器的地址；您可以[注册](https://www.onlyoffice.com/zh/docs-registration?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。Vite 模板会忽略 `*.local` 文件，因此密钥不会进入代码仓库。

      ```ini
      VITE_DOCUMENT_SERVER_URL=http://documentserver/
      DOCUMENT_SERVER_SECRET=your-secret-key
      ```

      </TabItem>
   </Tabs>

4. 在 `onlyoffice-react-demo` 目录中启动 Vite 开发服务器：

   ```sh
   npm run dev
   ```

   在浏览器中打开 `http://localhost:5173`。编辑器将打开已签名配置中的文档，并且 `events_onDocumentReady` 处理程序会在浏览器控制台中输出 `Document is loaded`。

## 签名配置 {#signing-the-configuration}

ONLYOFFICE 文档使用 JSON Web Token 校验编辑器配置。JWT 验证默认处于启用状态，因此 `config` 必须包含 [`token`](../how-it-works/security.md)，即配置本身的签名。该令牌不是固定值：每当任何已签名的参数发生变化时，都必须重新生成它。

签名需要使用 ONLYOFFICE 文档的密钥，因此请在您的服务器上生成令牌，并将已就绪的配置发送到浏览器。React 应用程序无法确保密钥不被泄露。

组件会将 `config` 合并到发送给 ONLYOFFICE 文档的配置中，因此 `token` 字段会原样传递给编辑器。

上述演示应用程序在 Vite 开发服务器中对配置进行签名，而该服务器仅存在于开发环境中。在生产应用程序中，请将相同的代码移至您的后端，并保留该接口路径，因为组件请求配置的方式完全相同。

有关其他语言的签名代码，请参阅[签名](../../additional-api/signature/signature.md)部分。

## 在 React 组件中调用编辑器方法 {#calling-editor-methods-in-the-react-component}

组件会将每个编辑器实例存储在 `window.DocEditor.instances` 对象中。请通过组件 `id` 获取实例，然后从该实例调用任何编辑器[方法](../../usage-api/methods.md)：

```js
function onDocumentReady() {
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
    <div style={{display: "flex", height: "100svh"}}>
      <DocumentEditor
        id="docxEditor"
        documentServerUrl="http://documentserver/"
        config={config}
        events_onDocumentReady={onDocumentReady}
      />
    </div>
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

[executeMethod](../../usage-api/automation-api/connector-class.md#executemethod) 按名称运行单个编辑器方法，如上所示。[callCommand](../../usage-api/automation-api/connector-class.md#callcommand) 在编辑器内部运行一个包含 [Office JavaScript API](../../../office-api/get-started/overview.md) 命令的函数，文档内容正是通过这种方式进行修改的。该函数拥有自身的上下文，无法读取组件状态，因此请通过 `Asc.scope` 对象传递它所需的数据：

```jsx
function insertText(text) {
  if (!connector) return;

  Asc.scope.text = text;   // 下面的命令拥有自身的上下文

  connector.callCommand(() => {
    const document = Api.GetDocument();
    const paragraph = Api.CreateParagraph();

    paragraph.AddText(Asc.scope.text);
    document.InsertContent([paragraph]);
  }, () => {
    console.log("Text is inserted");
  });
}
```

:::note
当组件被卸载时，以及当 `documentServerUrl`、`config`、`document_fileType`、`document_title`、`documentType`、`editorConfig_lang`、`height`、`type` 或 `width` 属性发生更改时，组件会销毁编辑器，然后加载新的编辑器。已销毁编辑器的连接器将失效：请断开该连接器，并在新编辑器的 `events_onDocumentReady` 处理程序中创建新的连接器。
:::

## 部署演示 React 应用程序

:::note
`/api/editor-config` 接口是 Vite 开发服务器的一部分，因此它不存在于生产版本中。请按照[签名配置](#signing-the-configuration)中的说明，从您自己的后端提供该接口，并保留 `App.jsx` 所请求的路径。
:::

在 `onlyoffice-react-demo` 目录中创建生产版本，并使用 Vite 预览服务器在本地检查该版本：

```sh
npm run build
npm run preview
```

生产版本将生成在 `dist` 目录中。要将应用程序部署到您自己的 Web 服务器，请将该目录的内容复制到 Web 服务器的根目录。

## 将组件与 Next.js 结合使用 {#using-the-component-with-nextjs}

组件在浏览器中渲染编辑器，并且不包含 `"use client"` 指令。编辑器配置中还包含事件处理函数，而这些函数无法从服务器组件传递。因此，请从客户端组件渲染该组件。

在 App Router 中，请在服务器上运行的路由处理程序中对配置进行签名，并从客户端组件请求该配置：

<Tabs>
<TabItem value="editor" label="app/editor.jsx">

客户端组件，它带有 `"use client"` 指令，请求已签名的配置，并在配置到达后渲染编辑器。

```jsx
"use client";

import {DocumentEditor} from "@onlyoffice/document-editor-react";
import {useEffect, useState} from "react";

export default function Editor() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/api/editor-config")
      .then((response) => response.json())
      .then(setConfig);
  }, []);

  if (!config) return null;

  return (
    <div style={{display: "flex", height: "100svh"}}>
      <DocumentEditor
        id="docxEditor"
        documentServerUrl="http://documentserver/"
        config={config}
        events_onDocumentReady={() => console.log("Document is loaded")}
      />
    </div>
  )
}
```

</TabItem>
<TabItem value="route" label="app/api/editor-config/route.js">

路由处理程序，在服务器上构建配置并对其进行签名。

```js
import jwt from "jsonwebtoken";

export async function GET() {
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

  return Response.json(config);
}
```

</TabItem>
</Tabs>

服务器组件也可以构建配置并将其作为属性传递给客户端组件，但事件处理程序仍需保留在客户端组件中：函数无法从服务器组件传递。

服务器端渲染不需要任何额外设置：组件在服务器上渲染一个空容器，并在水合后加载 ONLYOFFICE 文档 API 脚本。只有在需要将组件完全排除在预渲染之外时，才需要使用 `next/dynamic` 和 `{ssr: false}` 选项导入组件。在 App Router 中，该选项仅在客户端组件中可用。

要部署应用程序，请使用 `next start` 命令。使用 `output: "export"` 选项的静态版本无法运行路由处理程序，因此需要由单独的后端提供该接口。

## 属性 {#properties}

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
