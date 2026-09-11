---
description: Integrate ONLYOFFICE Docs into a React application using the ONLYOFFICE Docs React component.
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# React

The ONLYOFFICE Docs React [component](https://github.com/ONLYOFFICE/document-editor-react) integrates ONLYOFFICE Docs into [React](https://react.dev/) projects. The component supports React 16.9 and later, including React 19. The list of changes for each version is published on the [Releases](https://github.com/ONLYOFFICE/document-editor-react/releases) tab.

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/en) and a running ONLYOFFICE Docs instance. If you do not have one, install it on your own server as described in the [self-hosted](../installation/self-hosted.md) section, or deploy it in the [cloud](../installation/cloud.md).

It also requires the secret key of your ONLYOFFICE Docs. The editor configuration is validated with a JSON Web Token signed with this key, and the validation is enabled by default. See [Signing the configuration](#signing-the-configuration).

The page assumes a basic working knowledge of [React](https://react.dev/). The component works in any React project. The steps below use [Vite](https://vite.dev/) to create one from scratch.

## Creating the demo React application with ONLYOFFICE Docs editor

This procedure creates a basic React application and installs an ONLYOFFICE Docs editor in it.

1. Create a new React project named `onlyoffice-react-demo` and install its dependencies:

   ```sh
   npm create vite@latest onlyoffice-react-demo -- --template react
   cd onlyoffice-react-demo
   npm install
   ```

2. Install the ONLYOFFICE Docs React component from the [npm](https://www.npmjs.com/package/@onlyoffice/document-editor-react) public registry, together with the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package that signs the editor configuration, and save them to the `package.json` file.

   TypeScript declarations come from the [`@onlyoffice/doceditor-types`](https://www.npmjs.com/package/@onlyoffice/doceditor-types) peer dependency, which npm 7 and later installs automatically and yarn does not. The `jsonwebtoken` package runs in the development server only, so it is a development dependency of the demo application. In a production application, it belongs to the backend that signs the configuration.

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

3. Replace the contents of the `./src/App.jsx` and `./vite.config.js` files in the `onlyoffice-react-demo` project, and create the `./.env.local` file:

   <Tabs>
      <TabItem value="app" label="src/App.jsx">

      The `App` component, which requests the signed configuration when it mounts and renders the ONLYOFFICE Docs editor once the configuration arrives. The `config` property is required, so the component returns `null` until then.

      The editor fills the element it is rendered into, so the wrapper gives it an explicit height.

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

        if (!config) return null;   // the configuration is not loaded yet

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

      The `/api/editor-config` endpoint of the development server, which stands in for your backend: the configuration is built and signed in Node.js, and only the signed configuration reaches the browser.

      :::warning
      The `callbackUrl` points to the `dummyCallback` endpoint of ONLYOFFICE Docs, which accepts the save request and discards it, so the demo application needs no callback handler of its own. To [save](../how-it-works/saving-file.md) the document, replace it with the URL of your [callback handler](../../usage-api/callback-handler.md).
      :::

      Replace `https://static.onlyoffice.com/assets/docs/samples/demo.docx` with the URL to your file, or keep the URL of our sample document for testing.

      :::warning
      The `key` identifies the version of the document, not the editing session: everyone who opens the same key shares one session, and a document with a known key is served from the cache. The demo application keeps one key, as the sample document never changes. Generate a new [key](../../usage-api/config/document/document.md#key) whenever the document is edited and saved, or the editor keeps serving the cached version.
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

      The address of your ONLYOFFICE Docs and its secret key. `VITE_DOCUMENT_SERVER_URL` carries the `VITE_` prefix, so Vite inlines it into the client bundle, where the component needs it. `DOCUMENT_SERVER_SECRET` has no prefix, so the key stays in Node.js and out of the bundle. The address ends with a slash, as the endpoint appends `dummyCallback` to it.

      Replace `http://documentserver/` with the address of your server. You can [register](https://www.onlyoffice.com/docs-registration?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console. The Vite template ignores `*.local` files, so the secret key stays out of the repository.

      ```ini
      VITE_DOCUMENT_SERVER_URL=http://documentserver/
      DOCUMENT_SERVER_SECRET=your-secret-key
      ```

      </TabItem>
   </Tabs>

4. Start the Vite development server in the `onlyoffice-react-demo` directory:

   ```sh
   npm run dev
   ```

   Open `http://localhost:5173` in the browser. The editor opens the document from the signed configuration, and the `events_onDocumentReady` handler prints `Document is loaded` to the browser console.

## Signing the configuration

ONLYOFFICE Docs validates the editor configuration with a JSON Web Token. JWT validation is enabled by default, so the `config` must include a [`token`](../how-it-works/security.md) — a signature of the configuration itself. The token is not a constant: regenerate it whenever any signed parameter changes.

Signing requires the secret key of your ONLYOFFICE Docs, so generate the token on your server and send the ready configuration to the browser. A React application cannot keep the secret key private.

The component merges `config` into the configuration it sends to ONLYOFFICE Docs, so the `token` field reaches the editor unchanged.

The demo application above signs the configuration in the Vite development server, which exists in development only. In a production application, move the same code to your backend and keep the endpoint path, as the component requests the configuration in the same way.

See the [Signature](../../additional-api/signature/signature.md) section for the signing code in other languages.

## Calling editor methods in the React component

The component stores every editor instance in the `window.DocEditor.instances` object. Get the instance by the component `id`, then call any editor [method](../../usage-api/methods.md) from it:

```js
function onDocumentReady() {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
}
```

## Using Automation API in React

[Automation API](../../usage-api/automation-api/automation-api.md) interacts with the document content from your own interface through a connector. A connector is bound to the editor instance that created it and remains valid as long as this instance exists.

:::info
Automation API is available only for **ONLYOFFICE Docs Developer**.
:::

Create the connector with the [createConnector](../../usage-api/methods.md#createconnector) method in the `events_onDocumentReady` handler, and reuse it instead of creating a new one for each operation. Store it in a ref for the cleanup and in the state for the components that use it:

```jsx
import {DocumentEditor} from "@onlyoffice/document-editor-react";
import {useEffect, useRef, useState} from "react";

export default function Editor({config}) {
  const [connector, setConnector] = useState(null);
  const connectorRef = useRef(null);

  const onDocumentReady = () => {
    const documentEditor = window.DocEditor.instances["docxEditor"];
    const created = documentEditor.createConnector();

    connectorRef.current = created;   // for the cleanup
    setConnector(created);            // for the components that use the connector
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

Call the [disconnect](../../usage-api/automation-api/connector-class.md#disconnect) method in the cleanup function of the component that renders `DocumentEditor`, so that the connector is disconnected while the editor still exists.

Check that the connector is created before sending commands through it instead of retrying the failed calls:

```jsx
useEffect(() => {
  if (!connector) return;   // the editor is not ready yet

  connector.executeMethod("GetAllComments", null, (comments) => {
    console.log("Comments:", comments);
  });
}, [connector]);
```

[executeMethod](../../usage-api/automation-api/connector-class.md#executemethod) runs one editor method by name, as above. [callCommand](../../usage-api/automation-api/connector-class.md#callcommand) runs a function of [Office JavaScript API](../../../office-api/get-started/overview.md) commands inside the editor, which is how the content of the document is changed. That function has a context of its own and cannot read the component state, so pass the data it needs through the `Asc.scope` object:

```jsx
function insertText(text) {
  if (!connector) return;

  Asc.scope.text = text;   // the command below has a context of its own

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
The component destroys the editor when it is unmounted and when the `documentServerUrl`, `config`, `document_fileType`, `document_title`, `documentType`, `editorConfig_lang`, `height`, `type`, or `width` property changes, and then loads a new editor. The connector of the destroyed editor becomes invalid: disconnect it and create a new one in the `events_onDocumentReady` handler of the new editor.
:::

## Deploying the demo React application

:::note
The `/api/editor-config` endpoint is a part of the Vite development server, so it does not exist in the production build. Serve the endpoint from your own backend, as described in [Signing the configuration](#signing-the-configuration), and keep the path that `App.jsx` requests.
:::

Create a production build in the `onlyoffice-react-demo` directory and check it locally with the Vite preview server:

```sh
npm run build
npm run preview
```

The build goes to the `dist` directory. To deploy the application to your own web server, copy the contents of this directory to the root directory of the web server.

## Using the component with Next.js

The component renders the editor in the browser and does not contain the `"use client"` directive. The editor configuration also includes event handler functions, which cannot be passed from a server component. For these reasons, render the component from a client component.

In the App Router, sign the configuration in a route handler, which runs on the server, and request it from a client component:

<Tabs>
<TabItem value="editor" label="app/editor.jsx">

The client component, which carries the `"use client"` directive, requests the signed configuration, and renders the editor once the configuration arrives.

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

The route handler, which builds and signs the configuration on the server.

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

A server component can also build the configuration and pass it to the client component as a prop, but the event handlers stay in the client component: functions cannot be passed from a server component.

Server rendering does not require any additional settings: the component renders an empty container on the server and loads the ONLYOFFICE Docs API script after hydration. Importing the component with `next/dynamic` and the `{ssr: false}` option is only needed to exclude it from prerendering completely. In the App Router, this option is available in client components only.

To deploy the application, use the `next start` command. A static build with the `output: "export"` option cannot run route handlers, so it needs the endpoint served by a separate backend.

## Properties

The `config` property is merged over the separate properties of the component. The merge is shallow: a top-level key of `config` replaces the corresponding component properties entirely instead of merging with them.

- If `config.document` is set, the `document_fileType` and `document_title` properties are ignored.
- If `config.editorConfig` is set, the `editorConfig_lang` property is ignored.
- If `config.events` is set, all the `events_on*` properties are ignored.

Each `events_on*` property corresponds to the [event](../../usage-api/config/events.md) with the same name in the editor configuration.

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
| `events_onRequestRefreshFile`         | (event: object) => void                               | null    | The function called when the file must be updated in the editor without reloading the page.                                                                |
| `events_onRequestRestore`             | (event: object) => void                               | null    | The function called when the user is trying to restore the file version by clicking the **Restore** button in the version history.                         |
| `events_onRequestSelectSpreadsheet`   | (event: object) => void                               | null    | The function called when the user is trying to select recipients data by clicking the **Mail merge** button.                                                |
| `events_onRequestSelectDocument`      | (event: object) => void                               | null    | The function called when the user is trying to select a document for comparing, combining, or inserting text.                                              |
| `events_onRequestUsers`               | (event: object) => void                               | null    | The function called when the user can select other users to mention in the comments, grant the access rights to edit the specific sheet ranges, or set the user avatars. |

```mdx-code-block
</APITable>
```

\* *- required field*

## Feedback and support

In case you have any issues, questions, or suggestions for the ONLYOFFICE Docs React component, please refer to the [Issues](https://github.com/ONLYOFFICE/document-editor-react/issues) section.
