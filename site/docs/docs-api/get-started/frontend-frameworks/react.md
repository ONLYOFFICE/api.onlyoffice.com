# React

The ONLYOFFICE Docs React [component](https://github.com/ONLYOFFICE/document-editor-react) integrates ONLYOFFICE Docs into [React](https://react.dev/) projects.

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/en).

## Creating the demo React application with ONLYOFFICE Docs editor

This procedure creates a [basic React application](https://github.com/facebook/create-react-app) and installs an ONLYOFFICE Docs editor in it.

1. Create a new React project named *onlyoffice-react-demo* using the *Create React App* package:

   ``` sh
   npx create-react-app onlyoffice-react-demo
   ```

2. Go to the newly created directory:

   ``` sh
   cd onlyoffice-react-demo
   ```

3. Install ONLYOFFICE Docs React component from **npm** and save it to the *package.json* file with *--save*:

   ``` sh
   npm install --save @onlyoffice/document-editor-react
   ```

   You can also use the following **yarn** command:

   ``` sh
   yarn add @onlyoffice/document-editor-react
   ```

4. Open the *./src/App.js* file in the *onlyoffice-react-demo* project and replace its contents with the following code:

   ``` tsx
   import {DocumentEditor} from "@onlyoffice/document-editor-react";
   import React, {useRef} from "react";
   
   function onDocumentReady(event) {
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
             callbackUrl: "https://example.com/url-to-callback.ashx",
           },
         }}
         events_onDocumentReady={onDocumentReady}
         onLoadComponentError={onLoadComponentError}
       />
     )
   }
   ```

   Replace the following lines with your own data:

   - `http://documentserver/` - replace with the URL of your server;
   - `https://example.com/url-to-example-document.docx` - replace with the URL to your file;
   - `https://example.com/url-to-callback.ashx` - replace with your callback URL (this is required for the saving functionality to work).

   This JavaScript file will create the *App* component containing the ONLYOFFICE Docs editor configured with basic features.

5. Test the application using the Node.js development server:

   - To start the development server, navigate to the *onlyoffice-react-demo* directory and run:

     ``` sh
     npm run start
     ```

   - To stop the development server, select on the command line or command prompt and press *Ctrl+C*.

## Calling editor methods in the React component

1. Add the `DocEditor.instances` parameter to the `window` object and get the editor object from it by the editor ID:

   ```tsx
   const documentEditor = window.DocEditor.instances["docxEditor"];
   ```

2. Call any editor [method](../../usage-api/methods.md) from this object:

   ```tsx
   documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
   ```

Example:

```tsx
const onDocumentReady = () => {
  const documentEditor = window.DocEditor.instances["docxEditor"];

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
}
```

## Deploying the demo React application

The easiest way to deploy the application to a production environment is to install [serve](https://github.com/vercel/serve) and create a static server:

1. Install the *serve* package globally:

   ``` sh
   npm install -g serve
   ```

2. Serve your static site on the 3000 port:

   ``` sh
   serve -s build
   ```

   Another port can be adjusted using the *-l* or *--listen* flags:

   ``` sh
   serve -s build -l 4000
   ```

3. To serve the project folder, go to it and run the *serve* command:

   ``` sh
   cd onlyoffice-react-demo
   serve
   ```

Now you can deploy the application to the created server:

1. Navigate to the *onlyoffice-react-demo* directory and run:

   ``` sh
   npm run build
   ```

   The *build* directory will be created with a production build of your app.

2. Copy the contents of the *onlyoffice-react-demo/build* directory to the root directory of the web server (to the *onlyoffice-react-demo* folder).

The application will be deployed on the web server (`http://localhost:3000` by default).

## ONLYOFFICE Docs React component API

### Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name                                 | Type                                                  | Default | Description                                                                                                                                                |
| ------------------------------------ | ----------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                                 | string                                                | null    | Component unique identifier.                                                                                                                               |
| documentServerUrl\*                  | string                                                | null    | Address of ONLYOFFICE Docs.                                                                                                                                |
| config\*                             | object                                                | null    | Generic [configuration object](../../usage-api/config/config.md) for opening a file with token.                                                        |
| onLoadComponentError                 | (errorCode: number, errorDescription: string) => void | null    | The function called when an error occurs while loading a component.                                                                                        |
| document\_fileType                   | string                                                | null    | The type of the file.                                                                                                                                      |
| document\_title                      | string                                                | null    | The file name.                                                                                                                                             |
| documentType                         | string                                                | null    | The document type.                                                                                                                                         |
| height                               | string                                                | null    | Defines the document height in the browser window.                                                                                                         |
| type                                 | string                                                | null    | Defines the platform type used to access the document (desktop, mobile or embedded).                                                                       |
| width                                | string                                                | null    | Defines the document width in the browser window.                                                                                                          |
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
| events\_onRequestMailMergeRecipients | (event: object) => void                               | null    | The function called when the user is trying to select recipients data by clicking the **Mail merge** button.                                               |
| events\_onRequestCompareFile         | (event: object) => void                               | null    | The function called when the user is trying to select document for comparing by clicking the **Document from Storage** button.                             |
| events\_onRequestEditRights          | (event: object) => void                               | null    | The function called when the user is trying to switch the document from the viewing into the editing mode by clicking the **Edit Document** button.        |
| events\_onRequestHistory             | (event: object) => void                               | null    | The function called when the user is trying to show the document version history by clicking the **Version History** button.                               |
| events\_onRequestHistoryClose        | (event: object) => void                               | null    | The function called when the user is trying to go back to the document from viewing the document version history by clicking the **Close History** button. |
| events\_onRequestHistoryData         | (event: object) => void                               | null    | The function called when the user is trying to click the specific document version in the document version history.                                        |
| events\_onRequestRestore             | (event: object) => void                               | null    | The function called when the user is trying to restore the file version by clicking the **Restore** button in the version history.                         |

```mdx-code-block
</APITable>
```

\* *- required field*

## Installing Storybook

Install [Storybook](https://storybook.js.org/) to develop UI components in isolation:

1. Change the address of the document server in the *config/default.json* file:

   ``` json
   {
     "documentServerUrl": "http://documentserver/"
   }
   ```

   where **documentserver** is the name of the server with **ONLYOFFICE Docs** installed.

2. Build Storybook with the following command:

   ``` sh
   yarn build-storybook
   ```

3. Start Storybook:

   ``` sh
   yarn storybook
   ```

## Developing ONLYOFFICE Docs React component

1. Clone project from the GitHub repository:

   ``` sh
   git clone https://github.com/ONLYOFFICE/document-editor-react
   ```

2. Install the project dependencies:

   ``` sh
   yarn install
   ```

3. Test the component:

   ``` sh
   yarn test
   ```

4. Build the project:

   ``` sh
   yarn rollup
   ```

5. Create the package:

   ``` sh
   npm pack
   ```

## Feedback and support

In case you have any issues, questions, or suggestions for the ONLYOFFICE Docs React component, please refer to the [Issues](https://github.com/ONLYOFFICE/document-editor-react/issues) section.
