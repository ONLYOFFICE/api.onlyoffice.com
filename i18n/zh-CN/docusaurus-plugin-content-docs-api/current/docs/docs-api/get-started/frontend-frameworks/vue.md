---
description: 使用 ONLYOFFICE 文档 Vue.js 组件将 ONLYOFFICE 文档集成到 Vue.js 应用程序中。
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vue

ONLYOFFICE 文档 Vue.js [组件](https://github.com/ONLYOFFICE/document-editor-vue) 将 ONLYOFFICE 文档集成到 [Vue.js](https://vuejs.org/) 项目。该组件支持 Vue 3。每个版本的更改列表发布在 [Releases](https://github.com/ONLYOFFICE/document-editor-vue/releases) 选项卡中。

## 先决条件

此过程需要 [Node.js (和 npm)](https://nodejs.org/en) 以及一个正在运行的 ONLYOFFICE 文档实例。如果您还没有，请按照[自托管](../installation/self-hosted.md)部分的说明将其安装在您自己的服务器上，或将其部署在[云端](../installation/cloud.md)。

本页假定您具备 [Vue.js](https://vuejs.org/) 的基本使用知识。以下步骤使用[创建 Vue 工具](https://github.com/vuejs/create-vue)从头创建一个项目。

## 使用 ONLYOFFICE 文档编辑器创建演示 Vue.js 应用程序

此过程创建一个基本 Vue.js 应用程序，并在其中安装 ONLYOFFICE 文档编辑器。

1. 创建一个名为 `onlyoffice-vue-demo` 的新 Vue.js 项目并安装其依赖项：

   ```sh
   npm create vue@latest onlyoffice-vue-demo
   cd onlyoffice-vue-demo
   npm install
   ```

2. 从 [npm](https://www.npmjs.com/package/@onlyoffice/document-editor-vue) 公共注册表安装 ONLYOFFICE 文档 Vue.js 组件，并将其保存到 `package.json` 文件中：

   <Tabs>
      <TabItem value="npm" label="npm">
            ```sh
            npm install --save @onlyoffice/document-editor-vue
            ```
      </TabItem>
      <TabItem value="yarn" label="yarn">
            ```sh
            yarn add @onlyoffice/document-editor-vue
            ```
      </TabItem>
   </Tabs>

3. 打开 `onlyoffice-vue-demo` 项目中的 `./src/App.vue` 文件，并将其内容替换为以下代码：

   ```vue
   <template>
     <DocumentEditor
       id="docxEditor"
       documentServerUrl="http://documentserver/"
       :config="config"
       :events_onDocumentReady="onDocumentReady"
       :onLoadComponentError="onLoadComponentError"
     />
   </template>

   <script setup lang="ts">
   import {DocumentEditor, type IConfig} from "@onlyoffice/document-editor-vue";

   const config: IConfig = {
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

   function onDocumentReady() {
     console.log("Document is loaded");
   }

   function onLoadComponentError(errorCode: number, errorDescription: string) {
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
   </script>
   ```

   将以下行替换为您自己的数据：

   - `http://documentserver/` - 替换为您的服务器的 URL；您可以[注册](https://www.onlyoffice.com/zh/docs-registration?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。
   - `https://example.com/url-to-example-document.docx` - 替换为您的文件的 URL；您可以使用我们的示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。
   - `https://example.com/url-to-callback` - 替换为您的回调 URL（这是保存功能正常工作所必需的）。

   该文件创建包含 ONLYOFFICE 文档编辑器的 `App` 组件，并配置了基本功能。

   :::note
   以上步骤使用 `<script setup>` 语法，创建 Vue 工具默认生成此类语法。如果组件使用选项式 API 编写，请从 `data` 选项返回配置，并在 `methods` 选项中声明处理程序。
   :::

4. 使用 Vite 开发服务器测试应用程序：

   - 要启动开发服务器，请导航到 `onlyoffice-vue-demo` 目录并运行：

     ```sh
     npm run dev
     ```

     该应用程序将在 `http://localhost:5173` 上提供访问。

   - 要停止开发服务器，请切换到命令行或命令提示符，然后按 `Ctrl+C`。

## 在 Vue.js 组件中调用编辑器方法 {#calling-editor-methods-in-the-vuejs-component}

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
function onDocumentReady() {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
}
```

## 在 Vue.js 中使用自动化 API {#using-automation-api-in-vuejs}

[自动化 API](../../usage-api/automation-api/automation-api.md) 通过连接器从您自己的界面与文档内容进行交互。连接器与创建它的编辑器实例绑定，只要该实例存在，连接器就保持有效。

:::info
自动化 API 仅适用于 **ONLYOFFICE 文档开发者版**。
:::

请在 `events_onDocumentReady` 处理程序中使用 [createConnector](../../usage-api/methods.md#createconnector) 方法创建连接器，并重复使用它，而不要为每次操作都创建新的连接器。请将其保存在 `shallowRef` 中，以免 Vue.js 将连接器变为响应式对象：

```vue
<template>
  <DocumentEditor
    id="docxEditor"
    documentServerUrl="http://documentserver/"
    :config="config"
    :events_onDocumentReady="onDocumentReady"
  />
</template>

<script setup lang="ts">
import {onUnmounted, shallowRef, watch} from "vue";
import {DocumentEditor, type IConfig} from "@onlyoffice/document-editor-vue";

defineProps<{config: IConfig}>();

const connector = shallowRef<any>(null);

function onDocumentReady() {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  connector.value = documentEditor.createConnector();
}

onUnmounted(() => {
  connector.value?.disconnect();
  connector.value = null;
});
</script>
```

请在渲染 `DocumentEditor` 的组件的 `onUnmounted` 钩子中调用 [disconnect](../../usage-api/automation-api/connector-class.md#disconnect) 方法，以便在编辑器仍然存在时断开连接器。

请在通过连接器发送命令之前检查连接器是否已创建，而不是重试失败的调用：

```ts
watch(connector, (value) => {
  if (!value) return;   // 编辑器尚未准备就绪

  value.executeMethod("GetAllComments", null, (comments: object[]) => {
    console.log("Comments:", comments);
  });
});
```

:::note
当属性更改导致组件销毁编辑器并加载新的编辑器时（详见[属性](#properties)部分），已销毁编辑器的连接器将失效：请断开该连接器，并在新编辑器的 `events_onDocumentReady` 处理程序中创建新的连接器。
:::

## 部署演示 Vue.js 应用程序

1. 导航到 `onlyoffice-vue-demo` 目录并创建产品版本：

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

   可以使用 `-l` 或 `--listen` 标志调整其他端口：

   ```sh
   serve -s dist -l 4000
   ```

要将应用程序部署到您自己的 Web 服务器，请将 `onlyoffice-vue-demo/dist` 目录的内容复制到 Web 服务器的根目录。

## ONLYOFFICE 文档 Vue.js 组件 API

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

如果您对 ONLYOFFICE 文档 Vue.js 组件有任何问题、疑问或建议，请参阅 [Issues](https://github.com/ONLYOFFICE/document-editor-vue/issues) 部分。
