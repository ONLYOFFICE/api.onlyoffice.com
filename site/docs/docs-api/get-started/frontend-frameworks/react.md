import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# React

The ONLYOFFICE Docs React [component](https://github.com/ONLYOFFICE/document-editor-react) integrates ONLYOFFICE Docs into [React](https://react.dev/) projects. The component supports React 16.9 and later, including React 19.

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/en).

The component works in any React project. The steps below use [Vite](https://vite.dev/) to create one from scratch.

## Creating the demo React application with ONLYOFFICE Docs editor

This procedure creates a basic React application and installs an ONLYOFFICE Docs editor in it.

1. Create a new React project named `onlyoffice-react-demo`:

   ```sh
   npm create vite@latest onlyoffice-react-demo -- --template react
   ```

2. Go to the newly created directory and install the project dependencies:

   ```sh
   cd onlyoffice-react-demo
   npm install
   ```

3. Install ONLYOFFICE Docs React component and save it to the `package.json` file:

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

   TypeScript declarations come from the `@onlyoffice/doceditor-types` peer dependency. npm 7 and later installs it automatically. With yarn, add it manually:

   ```sh
   yarn add -D @onlyoffice/doceditor-types
   ```

4. Open the `./src/App.jsx` file in the `onlyoffice-react-demo` project and replace its contents with the following code:

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
         }}
         events_onDocumentReady={onDocumentReady}
         onLoadComponentError={onLoadComponentError}
       />
     )
   }
   ```

   Replace the following lines with your own data:

   - `http://documentserver/` - replace with the URL of your server. You can [register](https://www.onlyoffice.com/docs-registration?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.
   - `https://example.com/url-to-example-document.docx` - replace with the URL to your file. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing.
   - `https://example.com/url-to-callback` - replace with your callback URL (this is required for the saving functionality to work).

   This file creates the `App` component containing the ONLYOFFICE Docs editor configured with basic features.

5. Test the application using the Vite development server:

   - To start the development server, navigate to the `onlyoffice-react-demo` directory and run:

     ```sh
     npm run dev
     ```

     The application becomes available at `http://localhost:5173`.

   - To stop the development server, switch to the command line or command prompt and press `Ctrl+C`.

## Calling editor methods in the React component

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
const onDocumentReady = () => {
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
    <DocumentEditor
      id="docxEditor"
      documentServerUrl="http://documentserver/"
      config={config}
      events_onDocumentReady={onDocumentReady}
    />
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

:::note
The component destroys the editor when it is unmounted and when the `documentServerUrl`, `config`, `document_fileType`, `document_title`, `documentType`, `editorConfig_lang`, `height`, `type`, or `width` property changes, and then loads a new editor. The connector of the destroyed editor becomes invalid: disconnect it and create a new one in the `events_onDocumentReady` handler of the new editor.
:::

## Deploying the demo React application

1. Navigate to the `onlyoffice-react-demo` directory and create a production build:

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

To deploy the application to your own web server, copy the contents of the `onlyoffice-react-demo/dist` directory to the root directory of the web server.

## Using the component with Next.js

The component renders the editor in the browser and does not contain the `"use client"` directive. The editor configuration also includes event handler functions, which cannot be passed from a server component. For these reasons, render the component from a client component.

In the App Router, mark the file that renders the component with the `"use client"` directive and set the configuration in the same file:

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
      }}
      events_onDocumentReady={() => console.log("Document is loaded")}
    />
  )
}
```

Server rendering does not require any additional settings: the component renders an empty container on the server and loads the ONLYOFFICE Docs API script after hydration. Importing the component with `next/dynamic` and the `{ssr: false}` option is only needed to exclude it from prerendering completely. In the App Router, this option is available in client components only.

To deploy the application, use the `next start` command, or set the `output: "export"` option to host the static build, as the editor works entirely in the browser.

## ONLYOFFICE Docs React component API

### Properties

The `config` property is merged over the separate properties of the component. The merge is shallow: a top-level key of `config` replaces the corresponding component properties entirely instead of merging with them.

- If `config.document` is set, the `document_fileType` and `document_title` properties are ignored.
- If `config.editorConfig` is set, the `editorConfig_lang` property is ignored.
- If `config.events` is set, all the `events_on*` properties are ignored.

Each `events_on*` property corresponds to the [event](../../usage-api/config/events.md) with the same name in the editor configuration.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name                                 | Type                                                  | Default | Description                                                                                                                                                |
| ------------------------------------ | ----------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                                 | string                                                | -       | Component unique identifier.                                                                                                                               |
| documentServerUrl\*                  | string                                                | -       | Address of ONLYOFFICE Docs.                                                                                                                                |
| config\*                             | object                                                | -       | Generic [configuration object](../../usage-api/config/config.md) for opening a file with token.                                                        |
| shardkey                             | string \| boolean                                     | true    | The [shardkey](../configuration/shard-key.md) parameter added to the query string of the ONLYOFFICE Docs API script request for load balancing. If set to `true`, the document [`key`](../../usage-api/config/document/document.md#key) from `config` is used as a value. Set to `false` to send the request without this parameter. |
| onLoadComponentError                 | (errorCode: number, errorDescription: string) => void | null    | The function called when an error occurs while loading a component.                                                                                        |
| document\_fileType                   | string                                                | null    | The type of the file.                                                                                                                                      |
| document\_title                      | string                                                | null    | The file name.                                                                                                                                             |
| documentType                         | string                                                | null    | The document type.                                                                                                                                         |
| editorConfig\_lang                   | string                                                | null    | The editor interface [language](../../usage-api/config/editor/editor.md#lang).                                                                              |
| height                               | string                                                | null    | The document height in the browser window.                                                                                                                 |
| type                                 | string                                                | null    | The platform type used to access the document: `desktop`, `mobile`, or `embedded`.                                                                          |
| width                                | string                                                | null    | The document width in the browser window.                                                                                                                  |
| events\_onAppReady                   | (event: object) => void                               | null    | The function called when the application is loaded into the browser.                                                                                       |
| events\_onDocumentStateChange        | (event: object) => void                               | null    | The function called when the document is modified.                                                                                                         |
| events\_onMetaChange                 | (event: object) => void                               | null    | The function called when the meta information of the document is changed via the meta command.                                                             |
| events\_onDocumentReady              | (event: object) => void                               | null    | The function called when the document is loaded into the document editor.                                                                                  |
| events\_onInfo                       | (event: object) => void                               | null    | The function called when the application opened the file.                                                                                                  |
| events\_onWarning                    | (event: object) => void                               | null    | The function called when a warning occurs.                                                                                                                 |
| events\_onError                      | (event: object) => void                               | null    | The function called when an error or some other specific event occurs.                                                                                     |
| events\_onRequestSharingSettings     | (event: object) => void                               | null    | The function called when the user is trying to manage document access rights by clicking **Change access rights** button.                                  |
| events\_onRequestRename              | (event: object) => void                               | null    | The function called when the user is trying to rename the file by clicking the **Rename...** button.                                                       |
| events\_onMakeActionLink             | (event: object) => void                               | null    | The function called when the user is trying to get link for opening the document which contains a bookmark, scrolling to the bookmark position.            |
| events\_onRequestInsertImage         | (event: object) => void                               | null    | The function called when the user is trying to insert an image by clicking the **Image from Storage** button.                                              |
| events\_onRequestSaveAs              | (event: object) => void                               | null    | The function called when the user is trying to save file by clicking **Save Copy as...** button.                                                           |
| events\_onRequestMailMergeRecipients | (event: object) => void                               | null    | Deprecated since version 7.5, use `events_onRequestSelectSpreadsheet` instead. The function called when the user is trying to select recipients data by clicking the **Mail merge** button. |
| events\_onRequestCompareFile         | (event: object) => void                               | null    | Deprecated since version 7.5, use `events_onRequestSelectDocument` instead. The function called when the user is trying to select document for comparing by clicking the **Document from Storage** button. |
| events\_onRequestEditRights          | (event: object) => void                               | null    | The function called when the user is trying to switch the document from the viewing into the editing mode by clicking the **Edit Document** button.        |
| events\_onRequestHistory             | (event: object) => void                               | null    | The function called when the user is trying to show the document version history by clicking the **Version History** button.                               |
| events\_onRequestHistoryClose        | (event: object) => void                               | null    | The function called when the user is trying to go back to the document from viewing the document version history by clicking the **Close History** button. |
| events\_onRequestHistoryData         | (event: object) => void                               | null    | The function called when the user is trying to click the specific document version in the document version history.                                        |
| events\_onRequestRefreshFile         | (event: object) => void                               | null    | The function called when the file must be updated in the editor without reloading the page.                                                                |
| events\_onRequestRestore             | (event: object) => void                               | null    | The function called when the user is trying to restore the file version by clicking the **Restore** button in the version history.                         |
| events\_onRequestSelectSpreadsheet   | (event: object) => void                               | null    | The function called when the user is trying to select recipients data by clicking the **Mail merge** button.                                                |
| events\_onRequestSelectDocument      | (event: object) => void                               | null    | The function called when the user is trying to select a document for comparing, combining, or inserting text.                                              |
| events\_onRequestUsers               | (event: object) => void                               | null    | The function called when the user can select other users to mention in the comments, grant the access rights to edit the specific sheet ranges, or set the user avatars. |

```mdx-code-block
</APITable>
```

\* *- required field*

## Feedback and support

In case you have any issues, questions, or suggestions for the ONLYOFFICE Docs React component, please refer to the [Issues](https://github.com/ONLYOFFICE/document-editor-react/issues) section.
