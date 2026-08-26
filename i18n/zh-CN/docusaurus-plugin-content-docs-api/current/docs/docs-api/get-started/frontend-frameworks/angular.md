---
description: 使用 ONLYOFFICE 文档 Angular 组件将 ONLYOFFICE 文档集成到 Angular 应用程序中。
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Angular

ONLYOFFICE 文档 Angular [组件](https://github.com/ONLYOFFICE/document-editor-angular-workspace) 将 ONLYOFFICE 文档集成到 [Angular](https://angular.dev/) 项目。每个版本的更改列表发布在 [Releases](https://github.com/ONLYOFFICE/document-editor-angular-workspace/releases) 选项卡中。

## 先决条件

此过程需要 [Node.js (和 npm)](https://nodejs.org/en) 以及一个正在运行的 ONLYOFFICE 文档实例。如果您还没有，请按照[自托管](../installation/self-hosted.md)部分的说明将其安装在您自己的服务器上，或将其部署在[云端](../installation/cloud.md)。

本页假定您具备 [Angular](https://angular.dev/) 的基本使用知识。

该组件为每个 Angular 主版本发布一个独立的主版本：

| 组件版本 | Angular 版本 |
| -------- | ------------ |
| 9.x      | 22           |
| 8.x      | 21           |
| 7.x      | 20           |
| 6.x      | 19           |
| 5.x      | 18           |
| 4.x      | 17           |

请安装与您项目的 Angular 版本相匹配的组件版本。

## 使用 ONLYOFFICE 文档编辑器创建演示 Angular 应用程序

此过程创建一个基本 Angular 应用程序，并在其中安装 ONLYOFFICE 文档编辑器。

1. 打开命令行或命令提示符并安装 [Angular CLI](https://angular.dev/tools/cli) 包：

   ```sh
   npm install -g @angular/cli
   ```

2. 创建一个名为 `onlyoffice-angular-demo` 的新 Angular 项目并进入新创建的目录：

   ```sh
   ng new --defaults --skip-git onlyoffice-angular-demo
   cd onlyoffice-angular-demo
   ```

3. 从 [npm](https://www.npmjs.com/package/@onlyoffice/document-editor-angular) 公共注册表安装 ONLYOFFICE 文档 Angular 组件，并将其保存到 `package.json` 文件中：

   <Tabs>
      <TabItem value="npm" label="npm">
            ```sh
            npm install --save @onlyoffice/document-editor-angular
            ```
      </TabItem>
      <TabItem value="yarn" label="yarn">
            ```sh
            yarn add @onlyoffice/document-editor-angular @onlyoffice/doceditor-types
            ```
      </TabItem>
   </Tabs>

4. 打开 `onlyoffice-angular-demo` 项目中的 `./src/app/app.ts` 文件，并将其内容替换为以下代码：

   ```ts
   import {Component} from "@angular/core";
   import {type Config} from "@onlyoffice/doceditor-types";
   import {DocumentEditorModule} from "@onlyoffice/document-editor-angular";

   @Component({
     selector: "app-root",
     imports: [DocumentEditorModule],
     templateUrl: "./app.html",
   })
   export class App {
     config: Config = {
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
     };

     onDocumentReady = () => {
       console.log("Document is loaded");
     };

     onLoadComponentError = (errorCode: number, errorDescription: string) => {
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
     };
   }
   ```

   将以下行替换为您自己的数据：

   - `https://example.com/url-to-example-document.docx` - 替换为您文件的 URL。您可以使用我们的示例文档 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。
   - `https://example.com/url-to-callback` - 替换为您的回调 URL（保存功能需要此项才能正常工作）。
   - `TOKEN_HERE` - 替换为配置的签名。当您的文档服务器启用了 JWT 验证（默认配置）时，此项为必填项。请参阅[签名配置](#signing-the-configuration)。

   该文件创建包含 ONLYOFFICE 文档编辑器的 `App` 组件，并配置了基本功能。

   :::note
   以上步骤使用独立组件，Angular CLI 默认生成此类组件。如果您的项目仍然基于 NgModule，请改为将 `DocumentEditorModule` 添加到根模块文件中 `@NgModule` 装饰器的 `imports` 属性，而不是 `@Component` 装饰器。
   :::

5. 打开 `./src/app/app.html` 文件，并将其内容替换为 `document-editor` 组件：

   ```html
   <document-editor
       id="docxEditor"
       documentServerUrl="http://documentserver/"
       [config]="config"
       [events_onDocumentReady]="onDocumentReady"
       [onLoadComponentError]="onLoadComponentError"
   ></document-editor>
   ```

   将 `http://documentserver/` 行替换为您的服务器的 URL。您可以[注册](https://www.onlyoffice.com/zh/docs-registration?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

6. 使用 Angular CLI 开发服务器测试应用程序：

   - 要启动开发服务器，请导航到 `onlyoffice-angular-demo` 目录并运行：

     ```sh
     npm run start
     ```

     该应用程序将在 `http://localhost:4200` 上提供访问。

   - 要停止开发服务器，请切换到命令行或命令提示符，然后按 `Ctrl+C`。

## 签名配置 {#signing-the-configuration}

ONLYOFFICE 文档使用 JSON Web Token 校验编辑器配置。JWT 验证默认处于启用状态，因此 `config` 必须包含 [`token`](../how-it-works/security.md)，即配置本身的签名。该令牌不是固定值：每当任何已签名的参数发生变化时，都必须重新生成它。

签名需要使用 ONLYOFFICE 文档的密钥，因此请在您的服务器上生成令牌，并将已就绪的配置发送到浏览器。Angular 应用程序无法确保密钥不被泄露。

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

请在组件初始化时请求配置，并在配置到达后渲染编辑器：

```ts
import {Component, OnInit} from "@angular/core";
import {type Config} from "@onlyoffice/doceditor-types";
import {DocumentEditorModule} from "@onlyoffice/document-editor-angular";

@Component({
  selector: "app-root",
  imports: [DocumentEditorModule],
  templateUrl: "./app.html",
})
export class App implements OnInit {
  config: Config | null = null;

  async ngOnInit() {
    const response = await fetch("/api/editor-config");

    this.config = await response.json();
  }
}
```

由于 `config` 属性为必填项，请仅在配置加载完成后渲染编辑器：

```html
@if (config) {
  <document-editor
      id="docxEditor"
      documentServerUrl="http://documentserver/"
      [config]="config"
  ></document-editor>
}
```

组件会将 `config` 合并到发送给 ONLYOFFICE 文档的配置中，因此 `token` 字段会原样传递给编辑器。

## 在 Angular 组件中调用编辑器方法

1. 组件会将每个编辑器实例存储在 `window.DocEditor.instances` 对象中。通过组件 `id` 获取实例：

   ```ts
   const documentEditor = window.DocEditor.instances["docxEditor"];
   ```

   该包已声明 `window` 对象的 `DocEditor` 属性，因此无需额外的 TypeScript 声明。

2. 从这个对象中调用任何编辑器的 [方法](../../usage-api/methods.md)：

   ```ts
   documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
   ```

示例：

```ts
onDocumentReady = () => {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
};
```

## 在 Angular 中使用自动化 API {#using-automation-api-in-angular}

[自动化 API](../../usage-api/automation-api/automation-api.md) 通过连接器从您自己的界面与文档内容进行交互。连接器与创建它的编辑器实例绑定，只要该实例存在，连接器就保持有效。

:::info
自动化 API 仅适用于 **ONLYOFFICE 文档开发者版**。
:::

请在 `events_onDocumentReady` 处理程序中使用 [createConnector](../../usage-api/methods.md#createconnector) 方法创建连接器，并重复使用它，而不要为每次操作都创建新的连接器。请将其保存在渲染 `document-editor` 的组件的字段中：

```ts
import {Component, OnDestroy} from "@angular/core";
import {type Config} from "@onlyoffice/doceditor-types";
import {DocumentEditorModule} from "@onlyoffice/document-editor-angular";

@Component({
  selector: "app-root",
  imports: [DocumentEditorModule],
  templateUrl: "./app.html",
})
export class App implements OnDestroy {
  config: Config = {
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

  connector: any = null;

  onDocumentReady = () => {
    const documentEditor = window.DocEditor.instances["docxEditor"];

    this.connector = documentEditor.createConnector();
  };

  ngOnDestroy() {
    this.connector?.disconnect();
    this.connector = null;
  }
}
```

请在渲染 `document-editor` 的组件的 `ngOnDestroy` 钩子中调用 [disconnect](../../usage-api/automation-api/connector-class.md#disconnect) 方法，以便在编辑器仍然存在时断开连接器。

请在通过连接器发送命令之前检查连接器是否已创建，而不是重试失败的调用：

```ts
getAllComments() {
  if (!this.connector) return;   // 编辑器尚未准备就绪

  this.connector.executeMethod("GetAllComments", null, (comments: object[]) => {
    console.log("Comments:", comments);
  });
}
```

:::note
当属性更改导致组件销毁编辑器并加载新的编辑器时（详见[属性](#properties)部分），已销毁编辑器的连接器将失效：请断开该连接器，并在新编辑器的 `events_onDocumentReady` 处理程序中创建新的连接器。
:::

## 部署演示 Angular 应用程序

1. 导航到 `onlyoffice-angular-demo` 目录并创建产品版本：

   ```sh
   ng build
   ```

   `dist/onlyoffice-angular-demo/browser` 目录将使用您的应用程序的产品版本创建。

2. 使用开发服务器的产品配置在本地检查该版本：

   ```sh
   ng serve --configuration production
   ```

要将应用程序部署到您自己的 Web 服务器，请将 `dist/onlyoffice-angular-demo/browser` 目录的内容复制到 Web 服务器的根目录。

如需为开发版本和产品版本使用不同的设置（例如不同的文档服务器地址），请按照 Angular [environments](https://angular.dev/tools/cli/environments) 指南配置构建目标。

## ONLYOFFICE 文档 Angular 组件 API

### 属性 {#properties}

`config` 属性会覆盖组件的各个单独属性。该合并为浅层合并：`config` 的顶层键会完整替换相应的组件属性，而不是与其合并。

- 如果设置了 `config.document`，则 `document_fileType` 和 `document_title` 属性将被忽略。
- 如果设置了 `config.editorConfig`，则 `editorConfig_lang` 属性将被忽略。
- 如果设置了 `config.events`，则所有 `events_on*` 属性都将被忽略。

每个 `events_on*` 属性都对应编辑器配置中同名的[事件](../../usage-api/config/events.md)。

:::note
当 `config`、`document_fileType`、`document_title`、`documentType`、`editorConfig_lang`、`height`、`type` 或 `width` 属性发生更改时，组件会销毁编辑器并加载新的编辑器；当组件被卸载时，组件会销毁编辑器。
:::

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
| `events_onRequestRestore`             | (event: object) => void                               | null    | 当用户尝试通过单击版本历史记录中的**恢复**按钮来恢复文件版本时调用的函数。                         |
| `events_onRequestSelectSpreadsheet`   | (event: object) => void                               | null    | 当用户尝试通过单击**邮件合并**按钮来选择收件人数据时调用的函数。                                             |
| `events_onRequestSelectDocument`      | (event: object) => void                               | null    | 当用户尝试选择文档以进行比较、合并或插入文本时调用的函数。                                              |
| `events_onRequestUsers`               | (event: object) => void                               | null    | 当用户可以选择要在评论中提及的其他用户、授予编辑特定工作表区域的访问权限或设置用户头像时调用的函数。 |

```mdx-code-block
</APITable>
```

\* *- 必填字段*

## 反馈和支持

如果您对 ONLYOFFICE 文档 Angular 组件有任何问题、疑问或建议，请参阅[问题](https://github.com/ONLYOFFICE/document-editor-angular-workspace/issues)部分。
