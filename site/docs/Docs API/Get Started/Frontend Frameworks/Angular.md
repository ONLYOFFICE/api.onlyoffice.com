The ONLYOFFICE Docs Angular [component](https://github.com/ONLYOFFICE/document-editor-angular-workspace) integrates ONLYOFFICE Docs into [Angular](https://angularjs.org/) projects.

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/en).

## Creating the demo Angular application with ONLYOFFICE Docs editor

This procedure creates a [basic Angular application](https://angular.io/guide/setup-local) and installs an ONLYOFFICE Docs editor in it.

1. Open a command line or command prompt and install the [Angular CLI Tool](https://angular.io/cli) package:

   ``` sh
   npm install -g @angular/cli
   ```

2. Create a new Angular project named *onlyoffice-angular-demo*:

   ``` sh
   ng new --defaults --skip-git onlyoffice-angular-demo
   ```

3. Go to the newly created directory:

   ``` sh
   cd onlyoffice-angular-demo
   ```

4. Install ONLYOFFICE Docs Angular component from **npm** and save it to the *package.json* file with *--save*:

   ``` sh
   npm install --save @onlyoffice/document-editor-angular
   ```

   You can also use the following **yarn** command:

   ``` sh
   yarn add @onlyoffice/document-editor-angular
   ```

The following steps depend on the Angular version you use. To check the installed version, run the following command:

``` sh
ng version
```

### Versions prior to 17.0.0

1. Open the *./src/app/app.module.ts* file in the *onlyoffice-angular-demo* project and import the **DocumentEditorModule**:

   ``` ts
   import {NgModule} from "@angular/core"
   import {BrowserModule} from "@angular/platform-browser"
   import {DocumentEditorModule} from "@onlyoffice/document-editor-angular"
   import {AppComponent} from "./app.component"
   
   @NgModule({
     declarations: [
       AppComponent,
     ],
     imports: [
       DocumentEditorModule,
       BrowserModule,
     ],
     bootstrap: [AppComponent],
   })

   export class AppModule {}
   
   ```

2. Open the *./src/app/app.component.ts* file in the *onlyoffice-angular-demo* project and define options in your consuming component:

   ``` ts
   import {Component} from "@angular/core"
   import {type IConfig} from "@onlyoffice/document-editor-angular"
   
   @Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
   })
   export class AppComponent {
     config: IConfig = {
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
     }
     onDocumentReady = () => {
       console.log("Document is loaded")
     }
     onLoadComponentError = (errorCode, errorDescription) => {
       switch (errorCode) {
       case -1: // Unknown error loading component
         console.log(errorDescription)
         break
  
       case -2: // Error load DocsAPI from http://documentserver/
         console.log(errorDescription)
         break
  
       case -3: // DocsAPI is not defined
         console.log(errorDescription)
         break
       }
     }
   }
   ```

   Replace the following lines with your own data:

   - `https://example.com/url-to-example-document.docx` - replace with the URL to your file;
   - `https://example.com/url-to-callback.ashx` - replace with your callback URL (this is required for the saving functionality to work).

   This TypeScript file will create the *AppComponent* component containing the ONLYOFFICE Docs editor configured with basic features.

3. In template, use the *document-editor* component with your options:

   ``` xml
   <document-editor
       id="docxEditor"
       documentServerUrl="http://documentserver/"
       [config]="config"
       [events_onDocumentReady]="onDocumentReady"
       [onLoadComponentError]="onLoadComponentError"
   ></document-editor>
   ```

   Replace the `http://documentserver/` line with the URL of your server.

### Versions 17.0.0 and above

1. Open the *./src/app/app.component.ts* file in the *onlyoffice-angular-demo* project and define options in your consuming component:

   > Please note that starting from Angular v17.0.0, the *app.module.ts* file is not added to the new projects by default. You must specify *DocumentEditorModule* in the *imports* property of the *Component* decorator and set *standalone* to *true*.

   ``` ts
   import {Component} from "@angular/core"
   import {DocumentEditorModule, type IConfig} from "@onlyoffice/document-editor-angular"

   @Component({
     selector: "app-root",
     standalone: true,
     imports: [DocumentEditorModule],
     templateUrl: "./app.component.html",
   })
   export class AppComponent {
     config: IConfig = {
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
     }
     onDocumentReady = () => {
       console.log("Document is loaded")
     }
     onLoadComponentError = (errorCode, errorDescription) => {
       switch (errorCode) {
       case -1: // Unknown error loading component
         console.log(errorDescription)
         break
       case -2: // Error load DocsAPI from http://documentserver/
         console.log(errorDescription)
         break
       case -3: // DocsAPI is not defined
         console.log(errorDescription)
         break
       }
     }
   }
   ```

   Replace the following lines with your own data:

   - `https://example.com/url-to-example-document.docx` - replace with the URL to your file;
   - `https://example.com/url-to-callback.ashx` - replace with your callback URL (this is required for the saving functionality to work).

   This TypeScript file will create the *AppComponent* component containing the ONLYOFFICE Docs editor configured with basic features.

2. In template, use the *document-editor* component with your options:

   ``` xml
   <document-editor
       id="docxEditor"
       documentServerUrl="http://documentserver/"
       [config]="config"
       [events_onDocumentReady]="onDocumentReady"
       [onLoadComponentError]="onLoadComponentError"
   ></document-editor>
   ```

   Replace the `http://documentserver/` line with the URL of your server.

Test the application using the Node.js development server:

- To start the development server, navigate to the *onlyoffice-angular-demo* directory and run:

  ``` sh
  npm run start
  ```

- To stop the development server, select on the command line or command prompt and press *Ctrl+C*.

## Deploying the demo Angular application

To deploy the application to a production environment, create the build-specific configuration options for Angular projects:

1. Create the *src/environments/* directory and configure the project to use these files by running the following command:

   ``` sh
   ng generate environments
   ```

   The newly created directory contains the *environment.ts* base configuration file, which provides configuration for the default *production* environment. The default values can be overridden for the additional environments, such as *development* and *staging*, in target-specific configuration files.

   The base *environment.ts* file contains the default environment settings:

   ``` ts
   export const environment = {
     production: false,
   }
   ```

   The *build* command uses this as the build target when no environment is specified.

   You can add additional properties to the *environment* object, or as separate objects. For example, the default *apiUrl* variable is added to the default environment:

   ``` ts
   export const environment = {
     production: true,
     apiUrl: "http://my-prod-url",
   }
   ```

   The target-specific configuration files, such as *environment.development.ts*, set default values for the *development* build target:

   ``` ts
   export const environment = {
     production: true,
   }
   ```

2. Import the original environment file in the *app.component.ts* component file to use the environment configurations you have defined:

   ``` ts
   import {environment} from "./../environments/environment"
   ```

   This ensures that the *build* and *serve* commands can find the configurations for the specific build targets.

3. Add the *fileReplacements* parameter to the configuration for each build target of the *angular.json* configuration file. This parameter replaces any file in the TypeScript program with the target-specific file version and includes the target-specific code or variables in a build that targets a specific environment, such as *development* or *staging*.

   By default no files are replaced. But you can add file replacements for the specific build targets:

   ```json
   {
     "configurations": {
       "development": {
         "fileReplacements": [
           {
             "replace": "src/environments/environment.ts",
             "with": "src/environments/environment.development.ts"
           }
         ]
       }
     }
   }
   ```

   This means that when you build your development configuration with *ng build --configuration development*, the *src/environments/environment.ts* file is replaced with the *src/environments/environment.development.ts* target-specific version of the file.

   You can add additional configurations. For example, to add a *staging* environment, copy the *src/environments/environment.ts* file with the *src/environments/environment.staging.ts* title, then add a *staging* configuration to *angular.json*:

  ``` json
  {
    "configurations": {
      "production": {},
      "staging": {
        "fileReplacements": [
          {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.staging.ts"
          }
        ]
      }
    }
  }
  ```

4. Configure the *serve* command to use the targeted build configuration by adding it to the *serve.configurations* section of *angular.json*:

  ``` json
  {
    "serve": {
      "builder": "@angular-devkit/build-angular:dev-server",
      "configurations": {
        "production": {
          "browserTarget": "document-editor-angular-workspace:build:production"
        },
        "development": {
          "browserTarget": "document-editor-angular-workspace:build:development"
        }
      }
    }
  }
   
  ```

Now you can deploy the application to the created server:

1. Navigate to the *onlyoffice-angular-demo* directory and run:

   ``` sh
   ng build
   ```

   The *dist* directory will be created with a production build of your app.

2. Copy the contents of the *dist/onlyoffice-angular-demo* directory to the root directory of the web server (to the *onlyoffice-angular-demo* folder).

The application will be deployed on the web server (`http://localhost:3000` by default).

## ONLYOFFICE Docs Angular component API

### Properties

| Name                                 | Type                    | Default | Description                                                                                                                                                |
| ------------------------------------ | ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                                 | string                  | null    | Component unique identifier.                                                                                                                               |
| documentServerUrl\*                  | string                  | null    | Address of ONLYOFFICE Docs.                                                                                                                                |
| config\*                             | object                  | null    | Generic [configuration object](../../Usage%20API/Config/Config.md) for opening a file with token.                                                        |
| document\_fileType                   | string                  | null    | The type of the file.                                                                                                                                      |
| document\_title                      | string                  | null    | The file name.                                                                                                                                             |
| documentType                         | string                  | null    | The document type.                                                                                                                                         |
| height                               | string                  | null    | Defines the document height in the browser window.                                                                                                         |
| type                                 | string                  | null    | Defines the platform type used to access the document (desktop, mobile or embedded).                                                                       |
| width                                | string                  | null    | Defines the document width in the browser window.                                                                                                          |
| events\_onAppReady                   | (event: object) => void | null    | The function called when the application is loaded into the browser.                                                                                       |
| events\_onDocumentStateChange        | (event: object) => void | null    | The function called when the document is modified.                                                                                                         |
| events\_onMetaChange                 | (event: object) => void | null    | The function called when the meta information of the document is changed via the meta command.                                                             |
| events\_onDocumentReady              | (event: object) => void | null    | The function called when the document is loaded into the document editor.                                                                                  |
| events\_onInfo                       | (event: object) => void | null    | The function called when the application opened the file.                                                                                                  |
| events\_onWarning                    | (event: object) => void | null    | The function called when a warning occurs.                                                                                                                 |
| events\_onError                      | (event: object) => void | null    | The function called when an error or some other specific event occurs.                                                                                     |
| events\_onRequestSharingSettings     | (event: object) => void | null    | The function called when the user is trying to manage document access rights by clicking **Change access rights** button.                                  |
| events\_onRequestRename              | (event: object) => void | null    | The function called when the user is trying to rename the file by clicking the **Rename...** button.                                                       |
| events\_onMakeActionLink             | (event: object) => void | null    | The function called when the user is trying to get link for opening the document which contains a bookmark, scrolling to the bookmark position.            |
| events\_onRequestInsertImage         | (event: object) => void | null    | The function called when the user is trying to insert an image by clicking the **Image from Storage** button.                                              |
| events\_onRequestSaveAs              | (event: object) => void | null    | The function called when the user is trying to save file by clicking **Save Copy as...** button.                                                           |
| events\_onRequestMailMergeRecipients | (event: object) => void | null    | The function called when the user is trying to select recipients data by clicking the **Mail merge** button.                                               |
| events\_onRequestCompareFile         | (event: object) => void | null    | The function called when the user is trying to select document for comparing by clicking the **Document from Storage** button.                             |
| events\_onRequestEditRights          | (event: object) => void | null    | The function called when the user is trying to switch the document from the viewing into the editing mode by clicking the **Edit Document** button.        |
| events\_onRequestHistory             | (event: object) => void | null    | The function called when the user is trying to show the document version history by clicking the **Version History** button.                               |
| events\_onRequestHistoryClose        | (event: object) => void | null    | The function called when the user is trying to go back to the document from viewing the document version history by clicking the **Close History** button. |
| events\_onRequestHistoryData         | (event: object) => void | null    | The function called when the user is trying to click the specific document version in the document version history.                                        |
| events\_onRequestRestore             | (event: object) => void | null    | The function called when the user is trying to restore the file version by clicking the **Restore** button in the version history.                         |

\* *- required field*

## Developing ONLYOFFICE Docs Angular component

1. Clone project from the GitHub repository:

   ``` sh
   git clone https://github.com/ONLYOFFICE/document-editor-angular-workspace.git
   ```

2. Install the project dependencies:

   ``` sh
   npm install
   ```

3. Build the project:

   ``` sh
   cd ./projects

   ng build @onlyoffice/document-editor-angular
   ```

4. Create the package:

   ``` sh
   cd ./dist/onlyoffice/document-editor-angular

   npm pack
   ```

5. Test the component:

   ``` sh
   cd ./projects

   ng test @onlyoffice/document-editor-angular
   ```

## Feedback and support

In case you have any issues, questions, or suggestions for the ONLYOFFICE Docs Angular component, please refer to the [Issues](https://github.com/ONLYOFFICE/document-editor-angular-workspace/issues) section.
