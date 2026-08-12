---
description: Integrate ONLYOFFICE Docs into a Vue.js application using the ONLYOFFICE Docs Vue.js component.
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vue

The ONLYOFFICE Docs Vue.js [component](https://github.com/ONLYOFFICE/document-editor-vue) integrates ONLYOFFICE Docs into [Vue.js](https://vuejs.org/) projects. The component supports Vue 3. The list of changes for each version is published on the [Releases](https://github.com/ONLYOFFICE/document-editor-vue/releases) tab.

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/en) and a running ONLYOFFICE Docs instance. If you do not have one, install it on your own server as described in the [self-hosted](../installation/self-hosted.md) section, or deploy it in the [cloud](../installation/cloud.md).

The page assumes a basic working knowledge of [Vue.js](https://vuejs.org/). The steps below use the [Create Vue Tool](https://github.com/vuejs/create-vue) to create a project from scratch.

## Creating the demo Vue.js application with ONLYOFFICE Docs editor

This procedure creates a basic Vue.js application and installs an ONLYOFFICE Docs editor in it.

1. Create a new Vue.js project named `onlyoffice-vue-demo` and install its dependencies:

   ```sh
   npm create vue@latest onlyoffice-vue-demo
   cd onlyoffice-vue-demo
   npm install
   ```

2. Install the ONLYOFFICE Docs Vue.js component from the [npm](https://www.npmjs.com/package/@onlyoffice/document-editor-vue) public registry and save it to the `package.json` file:

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

3. Open the `./src/App.vue` file in the `onlyoffice-vue-demo` project and replace its contents with the following code:

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

   Replace the following lines with your own data:

   - `http://documentserver/` - replace with the URL of your server. You can [register](https://www.onlyoffice.com/docs-registration?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.
   - `https://example.com/url-to-example-document.docx` - replace with the URL to your file. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing.
   - `https://example.com/url-to-callback` - replace with your callback URL (this is required for the saving functionality to work).

   This file creates the `App` component containing the ONLYOFFICE Docs editor configured with basic features.

   :::note
   The steps above use the `<script setup>` syntax, which the Create Vue Tool generates by default. In a component written with the Options API, return the configuration from the `data` option and declare the handlers in the `methods` option.
   :::

4. Test the application using the Vite development server:

   - To start the development server, navigate to the `onlyoffice-vue-demo` directory and run:

     ```sh
     npm run dev
     ```

     The application becomes available at `http://localhost:5173`.

   - To stop the development server, switch to the command line or command prompt and press `Ctrl+C`.

## Calling editor methods in the Vue.js component

1. The component stores every editor instance in the `window.DocEditor.instances` object. Get the instance by the component `id`:

   ```js
   const documentEditor = window.DocEditor.instances["docxEditor"];
   ```

2. Call any editor [method](../../usage-api/methods.md) from this object:

   ```js
   documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
   ```

Example:

```js
function onDocumentReady() {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
}
```

## Using Automation API in Vue.js

[Automation API](../../usage-api/automation-api/automation-api.md) interacts with the document content from your own interface through a connector. A connector is bound to the editor instance that created it and remains valid as long as this instance exists.

:::info
Automation API is available only for **ONLYOFFICE Docs Developer**.
:::

Create the connector with the [createConnector](../../usage-api/methods.md#createconnector) method in the `events_onDocumentReady` handler, and reuse it instead of creating a new one for each operation. Store it in a `shallowRef` so that Vue.js does not make the connector reactive:

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

Call the [disconnect](../../usage-api/automation-api/connector-class.md#disconnect) method in the `onUnmounted` hook of the component that renders `DocumentEditor`, so that the connector is disconnected while the editor still exists.

Check that the connector is created before sending commands through it instead of retrying the failed calls:

```ts
watch(connector, (value) => {
  if (!value) return;   // the editor is not ready yet

  value.executeMethod("GetAllComments", null, (comments: object[]) => {
    console.log("Comments:", comments);
  });
});
```

:::note
When a property change destroys the editor and loads a new one, as described in the [Properties](#properties) section, the connector of the destroyed editor becomes invalid: disconnect it and create a new one in the `events_onDocumentReady` handler of the new editor.
:::

## Deploying the demo Vue.js application

1. Navigate to the `onlyoffice-vue-demo` directory and create a production build:

   ```sh
   npm run build
   ```

   The `dist` directory will be created with a production build of your app.

2. Check the build locally using the Vite preview server:

   ```sh
   npm run preview
   ```

3. To serve the build with a standalone static server, install the [serve](https://github.com/vercel/serve) package globally:

   ```sh
   npm install -g serve
   ```

4. Serve the `dist` directory on the 3000 port:

   ```sh
   serve -s dist
   ```

   Another port can be adjusted using the `-l` or `--listen` flags:

   ```sh
   serve -s dist -l 4000
   ```

To deploy the application to your own web server, copy the contents of the `onlyoffice-vue-demo/dist` directory to the root directory of the web server.

## ONLYOFFICE Docs Vue.js component API

### Properties

The `config` property is merged over the separate properties of the component. The merge is shallow: a top-level key of `config` replaces the corresponding component properties entirely instead of merging with them.

- If `config.document` is set, the `document_fileType` and `document_title` properties are ignored.
- If `config.editorConfig` is set, the `editorConfig_lang` property is ignored.
- If `config.events` is set, all the `events_on*` properties are ignored.

Each `events_on*` property corresponds to the [event](../../usage-api/config/events.md) with the same name in the editor configuration.

:::note
The component destroys the editor and loads a new one when the `config`, `document_fileType`, `document_title`, `documentType`, `editorConfig_lang`, `height`, `type`, or `width` property changes, and destroys it when the component is unmounted.
:::

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name                                  | Type                                                  | Default | Description                                                                                                                                                |
| ------------------------------------- | ----------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`\*                                | string                                                | -       | Component unique identifier.                                                                                                                               |
| `documentServerUrl`\*                 | string                                                | -       | Address of ONLYOFFICE Docs.                                                                                                                                |
| `config`\*                            | object                                                | -       | Generic [configuration object](../../usage-api/config/config.md) for opening a file.                                                                   |
| `shardkey`                            | string \| boolean                                     | true    | The [shardkey](../configuration/shard-key.md) parameter added to the query string of the ONLYOFFICE Docs API script request for load balancing. If set to `true`, the document [`key`](../../usage-api/config/document/document.md#key) from `config` is used as a value. Set to `false` to send the request without this parameter. |
| `onLoadComponentError`                | (errorCode: number, errorDescription: string) => void | null    | The function called when an error occurs while loading a component.                                                                                        |
| `document_fileType`                   | string                                                | null    | The type of the file.                                                                                                                                      |
| `document_title`                      | string                                                | null    | The file name.                                                                                                                                             |
| `documentType`                        | string                                                | null    | The document type.                                                                                                                                         |
| `editorConfig_lang`                   | string                                                | null    | The editor interface [language](../../usage-api/config/editor/editor.md#lang).                                                                              |
| `height`                              | string                                                | null    | The document height in the browser window.                                                                                                                 |
| `type`                                | string                                                | null    | The platform type used to access the document: `desktop`, `mobile`, or `embedded`.                                                                          |
| `width`                               | string                                                | null    | The document width in the browser window.                                                                                                                  |
| `events_onAppReady`                   | (event: object) => void                               | null    | The function called when the application is loaded into the browser.                                                                                       |
| `events_onDocumentStateChange`        | (event: object) => void                               | null    | The function called when the document is modified.                                                                                                         |
| `events_onMetaChange`                 | (event: object) => void                               | null    | The function called when the meta information of the document is changed via the meta command.                                                             |
| `events_onDocumentReady`              | (event: object) => void                               | null    | The function called when the document is loaded into the document editor.                                                                                  |
| `events_onInfo`                       | (event: object) => void                               | null    | The function called when the application opened the file.                                                                                                  |
| `events_onWarning`                    | (event: object) => void                               | null    | The function called when a warning occurs.                                                                                                                 |
| `events_onError`                      | (event: object) => void                               | null    | The function called when an error or some other specific event occurs.                                                                                     |
| `events_onRequestSharingSettings`     | (event: object) => void                               | null    | The function called when the user is trying to manage document access rights by clicking **Change access rights** button.                                  |
| `events_onRequestRename`              | (event: object) => void                               | null    | The function called when the user is trying to rename the file by clicking the **Rename...** button.                                                       |
| `events_onMakeActionLink`             | (event: object) => void                               | null    | The function called when the user is trying to get link for opening the document which contains a bookmark, scrolling to the bookmark position.            |
| `events_onRequestInsertImage`         | (event: object) => void                               | null    | The function called when the user is trying to insert an image by clicking the **Image from Storage** button.                                              |
| `events_onRequestSaveAs`              | (event: object) => void                               | null    | The function called when the user is trying to save file by clicking **Save Copy as...** button.                                                           |
| `events_onRequestMailMergeRecipients` | (event: object) => void                               | null    | Deprecated since version 7.5, use `events_onRequestSelectSpreadsheet` instead. The function called when the user is trying to select recipients data by clicking the **Mail merge** button. |
| `events_onRequestCompareFile`         | (event: object) => void                               | null    | Deprecated since version 7.5, use `events_onRequestSelectDocument` instead. The function called when the user is trying to select document for comparing by clicking the **Document from Storage** button. |
| `events_onRequestEditRights`          | (event: object) => void                               | null    | The function called when the user is trying to switch the document from the viewing into the editing mode by clicking the **Edit Document** button.        |
| `events_onRequestHistory`             | (event: object) => void                               | null    | The function called when the user is trying to show the document version history by clicking the **Version History** button.                               |
| `events_onRequestHistoryClose`        | (event: object) => void                               | null    | The function called when the user is trying to go back to the document from viewing the document version history by clicking the **Close History** button. |
| `events_onRequestHistoryData`         | (event: object) => void                               | null    | The function called when the user is trying to click the specific document version in the document version history.                                        |
| `events_onRequestRestore`             | (event: object) => void                               | null    | The function called when the user is trying to restore the file version by clicking the **Restore** button in the version history.                         |
| `events_onRequestSelectSpreadsheet`   | (event: object) => void                               | null    | The function called when the user is trying to select recipients data by clicking the **Mail merge** button.                                                |
| `events_onRequestSelectDocument`      | (event: object) => void                               | null    | The function called when the user is trying to select a document for comparing, combining, or inserting text.                                              |
| `events_onRequestUsers`               | (event: object) => void                               | null    | The function called when the user can select other users to mention in the comments, grant the access rights to edit the specific sheet ranges, or set the user avatars. |

```mdx-code-block
</APITable>
```

\* *- required field*

## Feedback and support

In case you have any issues, questions, or suggestions for the ONLYOFFICE Docs Vue.js component, please refer to the [Issues](https://github.com/ONLYOFFICE/document-editor-vue/issues) section.
