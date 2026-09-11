---
description: Integrate ONLYOFFICE Docs into an Angular application using the ONLYOFFICE Docs Angular component.
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Angular

The ONLYOFFICE Docs Angular [component](https://github.com/ONLYOFFICE/document-editor-angular-workspace) integrates ONLYOFFICE Docs into [Angular](https://angular.dev/) projects. The list of changes for each version is published on the [Releases](https://github.com/ONLYOFFICE/document-editor-angular-workspace/releases) tab.

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/en) version 20.6 or later and a running ONLYOFFICE Docs instance. If you do not have one, install it on your own server as described in the [self-hosted](../installation/self-hosted.md) section, or deploy it in the [cloud](../installation/cloud.md).

It also requires the secret key of your ONLYOFFICE Docs. The editor configuration is validated with a JSON Web Token signed with this key, and the validation is enabled by default. See [Signing the configuration](#signing-the-configuration).

The page assumes a basic working knowledge of [Angular](https://angular.dev/).

The component is released as a separate major version for each Angular major version:

| Component version | Angular version |
| ----------------- | --------------- |
| 9.x               | 22              |
| 8.x               | 21              |
| 7.x               | 20              |
| 6.x               | 19              |
| 5.x               | 18              |
| 4.x               | 17              |

Install the component version that matches the Angular version of your project.

## Creating the demo Angular application with ONLYOFFICE Docs editor

This procedure creates a basic Angular application and installs an ONLYOFFICE Docs editor in it.

1. Open a command line or command prompt, install the [Angular CLI](https://angular.dev/tools/cli) package, and create a new Angular project named `onlyoffice-angular-demo`:

   ```sh
   npm install -g @angular/cli
   ng new --defaults --skip-git onlyoffice-angular-demo
   cd onlyoffice-angular-demo
   ```

2. Install the ONLYOFFICE Docs Angular component from the [npm](https://www.npmjs.com/package/@onlyoffice/document-editor-angular) public registry, together with the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package that signs the editor configuration and the [concurrently](https://www.npmjs.com/package/concurrently) package that starts the signing server, and save them to the `package.json` file.

   TypeScript declarations come from the [`@onlyoffice/doceditor-types`](https://www.npmjs.com/package/@onlyoffice/doceditor-types) peer dependency, which npm 7 and later installs automatically and yarn does not. The `jsonwebtoken` and `concurrently` packages run in the demo application only, so they are development dependencies. In a production application, `jsonwebtoken` belongs to the backend that signs the configuration.

   <Tabs>
      <TabItem value="npm" label="npm">
            ```sh
            npm install --save @onlyoffice/document-editor-angular
            npm install --save-dev jsonwebtoken concurrently
            ```
      </TabItem>
      <TabItem value="yarn" label="yarn">
            ```sh
            yarn add @onlyoffice/document-editor-angular
            yarn add -D @onlyoffice/doceditor-types jsonwebtoken concurrently
            ```
      </TabItem>
   </Tabs>

3. Replace the contents of the `./src/app/app.ts` and `./src/app/app.html` files in the `onlyoffice-angular-demo` project, and create the remaining files:

   <Tabs>
      <TabItem value="app-ts" label="src/app/app.ts">

      The `App` component, which requests the signed configuration when it initializes and renders the ONLYOFFICE Docs editor once the configuration arrives.

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

        onDocumentReady = () => {
          console.log("Document is loaded");
        };

        onLoadComponentError = (errorCode: number, errorDescription: string) => {
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
        };
      }
      ```

      </TabItem>
      <TabItem value="app-html" label="src/app/app.html">

      The template of the `App` component. The `config` property is required, so `@if` keeps the editor out of the template until the configuration is loaded.

      The editor fills the element it is rendered into, so the wrapper gives it an explicit height.

      Replace `http://documentserver/` with the address of your server, the same address as `DOCUMENT_SERVER_URL` in `.env.local`. You can [register](https://www.onlyoffice.com/docs-registration?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

      ```html
      <div style="display: flex; height: 100svh">
        @if (config) {
          <document-editor
              id="docxEditor"
              documentServerUrl="http://documentserver/"
              [config]="config"
              [events_onDocumentReady]="onDocumentReady"
              [onLoadComponentError]="onLoadComponentError"
          ></document-editor>
        }
      </div>
      ```

      </TabItem>
      <TabItem value="server" label="server.mjs">

      The signing server, which stands in for your backend: the configuration is built and signed in Node.js, and only the signed configuration reaches the browser.

      The `callbackUrl` points to the `dummyCallback` endpoint of ONLYOFFICE Docs, which accepts the save request and discards it, so the demo application needs no callback handler of its own. To [save](../how-it-works/saving-file.md) the document, replace it with the URL of your [callback handler](../../usage-api/callback-handler.md).

      Replace `https://static.onlyoffice.com/assets/docs/samples/demo.docx` with the URL to your file, or keep the URL of our sample document for testing.

      ```js
      import {createServer} from "node:http";
      import jwt from "jsonwebtoken";

      const documentServerUrl = process.env.DOCUMENT_SERVER_URL;

      createServer((request, response) => {
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

        config.token = jwt.sign(config, process.env.DOCUMENT_SERVER_SECRET, {algorithm: "HS256"});

        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(config));
      }).listen(3000);
      ```

      </TabItem>
      <TabItem value="proxy" label="proxy.conf.json">

      The proxy configuration, which makes the development server forward the configuration requests to the signing server.

      ```json
      {
        "/api/editor-config": {
          "target": "http://localhost:3000",
          "secure": false
        }
      }
      ```

      Add the file to the `serve` target of the project in the `./angular.json` file, under `projects` → `onlyoffice-angular-demo` → `architect`:

      ```json
      "serve": {
        "options": {
          "proxyConfig": "proxy.conf.json"
        }
      }
      ```

      </TabItem>
      <TabItem value="package" label="package.json">

      Replace the `start` script with the following line, which starts the signing server and the Angular CLI development server together.

      ```json
      "start": "concurrently \"node --env-file=.env.local server.mjs\" \"ng serve\""
      ```

      </TabItem>
      <TabItem value="env" label=".env.local">

      The address of your ONLYOFFICE Docs and its secret key, both read by `server.mjs`. The address ends with a slash, as the signing server appends `dummyCallback` to it.

      Add the file to `.gitignore`, as the Angular CLI does not ignore it.

      ```ini
      DOCUMENT_SERVER_URL=http://documentserver/
      DOCUMENT_SERVER_SECRET=your-secret-key
      ```

      </TabItem>
   </Tabs>

   :::note
   The steps above use standalone components, which the Angular CLI generates by default. If your project is still based on NgModules, add `DocumentEditorModule` to the `imports` property of the `@NgModule` decorator in the root module file instead of the `@Component` decorator.
   :::

4. Start the signing server and the Angular CLI development server in the `onlyoffice-angular-demo` directory:

   ```sh
   npm run start
   ```

   Open `http://localhost:4200` in the browser. The editor opens the document from the signed configuration, and the `events_onDocumentReady` handler prints `Document is loaded` to the browser console.

## Signing the configuration

ONLYOFFICE Docs validates the editor configuration with a JSON Web Token. JWT validation is enabled by default, so the `config` must include a [`token`](../how-it-works/security.md) — a signature of the configuration itself. The token is not a constant: regenerate it whenever any signed parameter changes.

Signing requires the secret key of your ONLYOFFICE Docs, so generate the token on your server and send the ready configuration to the browser. An Angular application cannot keep the secret key private.

The component merges `config` into the configuration it sends to ONLYOFFICE Docs, so the `token` field reaches the editor unchanged.

The demo application above signs the configuration in a Node.js server that runs next to the development server. In a production application, move the same code to your backend and keep the endpoint path, as the component requests the configuration in the same way.

See the [Signature](../../additional-api/signature/signature.md) section for the signing code in other languages.

## Calling editor methods in the Angular component

The component stores every editor instance in the `window.DocEditor.instances` object. Get the instance by the component `id`, then call any editor [method](../../usage-api/methods.md) from it:

```ts
onDocumentReady = () => {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
};
```

The package declares the `DocEditor` property of the `window` object, so no additional TypeScript declaration is required.

## Using Automation API in Angular

[Automation API](../../usage-api/automation-api/automation-api.md) interacts with the document content from your own interface through a connector. A connector is bound to the editor instance that created it and remains valid as long as this instance exists.

:::info
Automation API is available only for **ONLYOFFICE Docs Developer**.
:::

Create the connector with the [createConnector](../../usage-api/methods.md#createconnector) method in the `events_onDocumentReady` handler, and reuse it instead of creating a new one for each operation. Store it in a field of the component that renders `document-editor`:

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

Call the [disconnect](../../usage-api/automation-api/connector-class.md#disconnect) method in the `ngOnDestroy` hook of the component that renders `document-editor`, so that the connector is disconnected while the editor still exists.

Check that the connector is created before sending commands through it instead of retrying the failed calls:

```ts
getAllComments() {
  if (!this.connector) return;   // the editor is not ready yet

  this.connector.executeMethod("GetAllComments", null, (comments: object[]) => {
    console.log("Comments:", comments);
  });
}
```

:::note
When a property change destroys the editor and loads a new one, as described in the [Properties](#properties) section, the connector of the destroyed editor becomes invalid: disconnect it and create a new one in the `events_onDocumentReady` handler of the new editor.
:::

## Deploying the demo Angular application

:::note
The `proxy.conf.json` file configures the development server only, so the production build does not reach the signing server. Serve the `/api/editor-config` endpoint from your own backend, as described in [Signing the configuration](#signing-the-configuration), and keep the path that `app.ts` requests.
:::

Create a production build in the `onlyoffice-angular-demo` directory and check it locally with the production configuration of the development server:

```sh
ng build
ng serve --configuration production
```

The build goes to the `dist/onlyoffice-angular-demo/browser` directory. To deploy the application to your own web server, copy the contents of this directory to the root directory of the web server.

To use different settings for the development and production builds, such as separate document server addresses, configure the build targets as described in the Angular [environments](https://angular.dev/tools/cli/environments) guide.

## Properties

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

In case you have any issues, questions, or suggestions for the ONLYOFFICE Docs Angular component, please refer to the [Issues](https://github.com/ONLYOFFICE/document-editor-angular-workspace/issues) section.
