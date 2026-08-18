---
description: Integrate ONLYOFFICE Docs into an Angular application using the ONLYOFFICE Docs Angular component.
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Angular

The ONLYOFFICE Docs Angular [component](https://github.com/ONLYOFFICE/document-editor-angular-workspace) integrates ONLYOFFICE Docs into [Angular](https://angular.dev/) projects. The list of changes for each version is published on the [Releases](https://github.com/ONLYOFFICE/document-editor-angular-workspace/releases) tab.

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/en) and a running ONLYOFFICE Docs instance. If you do not have one, install it on your own server as described in the [self-hosted](../installation/self-hosted.md) section, or deploy it in the [cloud](../installation/cloud.md).

The page assumes a basic working knowledge of [Angular](https://angular.dev/).

The component is released as a separate major version for each Angular major version:

| Component version | Angular version |
| ----------------- | --------------- |
| 8.x               | 21              |
| 7.x               | 20              |
| 6.x               | 19              |
| 5.x               | 18              |
| 4.x               | 17              |

Install the component version that matches the Angular version of your project. Angular 22 is not supported yet, so the steps below pin the Angular CLI to version 21.

## Creating the demo Angular application with ONLYOFFICE Docs editor

This procedure creates a basic Angular application and installs an ONLYOFFICE Docs editor in it.

1. Open a command line or command prompt and install the [Angular CLI](https://angular.dev/tools/cli) package:

   ```sh
   npm install -g @angular/cli@21
   ```

2. Create a new Angular project named `onlyoffice-angular-demo` and go to the newly created directory:

   ```sh
   ng new --defaults --skip-git onlyoffice-angular-demo
   cd onlyoffice-angular-demo
   ```

3. Install the ONLYOFFICE Docs Angular component from the [npm](https://www.npmjs.com/package/@onlyoffice/document-editor-angular) public registry and save it to the `package.json` file:

   <Tabs>
      <TabItem value="npm" label="npm">
            ```sh
            npm install --save @onlyoffice/document-editor-angular
            ```
      </TabItem>
      <TabItem value="yarn" label="yarn">
            ```sh
            yarn add @onlyoffice/document-editor-angular
            ```
      </TabItem>
   </Tabs>

4. Open the `./src/app/app.ts` file in the `onlyoffice-angular-demo` project and replace its contents with the following code:

   ```ts
   import {Component} from "@angular/core";
   import {DocumentEditorModule, type IConfig} from "@onlyoffice/document-editor-angular";

   @Component({
     selector: "app-root",
     imports: [DocumentEditorModule],
     templateUrl: "./app.html",
   })
   export class App {
     config: IConfig = {
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

   Replace the following lines with your own data:

   - `https://example.com/url-to-example-document.docx` - replace with the URL to your file. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing.
   - `https://example.com/url-to-callback` - replace with your callback URL (this is required for the saving functionality to work).
   - `TOKEN_HERE` - replace with the signature of the configuration. It is required when JWT validation is enabled on your document server, which is the default configuration. See [Signing the configuration](#signing-the-configuration).

   This file creates the `App` component containing the ONLYOFFICE Docs editor configured with basic features.

   :::note
   The steps above use standalone components, which the Angular CLI generates by default. If your project is still based on NgModules, add `DocumentEditorModule` to the `imports` property of the `@NgModule` decorator in the root module file instead of the `@Component` decorator.
   :::

5. Open the `./src/app/app.html` file and replace its contents with the `document-editor` component:

   ```html
   <document-editor
       id="docxEditor"
       documentServerUrl="http://documentserver/"
       [config]="config"
       [events_onDocumentReady]="onDocumentReady"
       [onLoadComponentError]="onLoadComponentError"
   ></document-editor>
   ```

   Replace the `http://documentserver/` line with the URL of your server. You can [register](https://www.onlyoffice.com/docs-registration?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

6. Test the application using the Angular CLI development server:

   - To start the development server, navigate to the `onlyoffice-angular-demo` directory and run:

     ```sh
     npm run start
     ```

     The application becomes available at `http://localhost:4200`.

   - To stop the development server, switch to the command line or command prompt and press `Ctrl+C`.

## Signing the configuration

ONLYOFFICE Docs validates the editor configuration with a JSON Web Token. JWT validation is enabled by default, so the `config` must include a [`token`](../how-it-works/security.md) — a signature of the configuration itself. The token is not a constant: regenerate it whenever any signed parameter changes.

Signing requires the secret key of your ONLYOFFICE Docs, so generate the token on your server and send the ready configuration to the browser. An Angular application cannot keep the secret key private.

### Signing the configuration on the server

Build the configuration on your backend, sign it, and return it from an endpoint:

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

See the [Signature](../../additional-api/signature/signature.md) section for the signing code in other languages.

### Passing the signed configuration to the component

Request the configuration when the component initializes and render the editor once it arrives:

```ts
import {Component, OnInit} from "@angular/core";
import {DocumentEditorModule, type IConfig} from "@onlyoffice/document-editor-angular";

@Component({
  selector: "app-root",
  imports: [DocumentEditorModule],
  templateUrl: "./app.html",
})
export class App implements OnInit {
  config: IConfig | null = null;

  async ngOnInit() {
    const response = await fetch("/api/editor-config");

    this.config = await response.json();
  }
}
```

Render the editor only when the configuration is loaded, as the `config` property is required:

```html
@if (config) {
  <document-editor
      id="docxEditor"
      documentServerUrl="http://documentserver/"
      [config]="config"
  ></document-editor>
}
```

The component merges `config` into the configuration it sends to ONLYOFFICE Docs, so the `token` field reaches the editor unchanged.

## Calling editor methods in the Angular component

1. The component stores every editor instance in the `window.DocEditor.instances` object. Get the instance by the component `id`:

   ```ts
   const documentEditor = window.DocEditor.instances["docxEditor"];
   ```

   The package declares the `DocEditor` property of the `window` object, so no additional TypeScript declaration is required.

2. Call any editor [method](../../usage-api/methods.md) from this object:

   ```ts
   documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
   ```

Example:

```ts
onDocumentReady = () => {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
};
```

## Using Automation API in Angular

[Automation API](../../usage-api/automation-api/automation-api.md) interacts with the document content from your own interface through a connector. A connector is bound to the editor instance that created it and remains valid as long as this instance exists.

:::info
Automation API is available only for **ONLYOFFICE Docs Developer**.
:::

Create the connector with the [createConnector](../../usage-api/methods.md#createconnector) method in the `events_onDocumentReady` handler, and reuse it instead of creating a new one for each operation. Store it in a field of the component that renders `document-editor`:

```ts
import {Component, OnDestroy} from "@angular/core";
import {DocumentEditorModule, type IConfig} from "@onlyoffice/document-editor-angular";

@Component({
  selector: "app-root",
  imports: [DocumentEditorModule],
  templateUrl: "./app.html",
})
export class App implements OnDestroy {
  config: IConfig = {
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

1. Navigate to the `onlyoffice-angular-demo` directory and create a production build:

   ```sh
   ng build
   ```

   The `dist/onlyoffice-angular-demo/browser` directory will be created with a production build of your app.

2. Check the build locally using the production configuration of the development server:

   ```sh
   ng serve --configuration production
   ```

To deploy the application to your own web server, copy the contents of the `dist/onlyoffice-angular-demo/browser` directory to the root directory of the web server.

To use different settings for the development and production builds, such as separate document server addresses, configure the build targets as described in the Angular [environments](https://angular.dev/tools/cli/environments) guide.

## ONLYOFFICE Docs Angular component API

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

In case you have any issues, questions, or suggestions for the ONLYOFFICE Docs Angular component, please refer to the [Issues](https://github.com/ONLYOFFICE/document-editor-angular-workspace/issues) section.
