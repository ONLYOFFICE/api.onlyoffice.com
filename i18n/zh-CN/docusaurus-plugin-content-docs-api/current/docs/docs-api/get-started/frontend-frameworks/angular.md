# Angular

ONLYOFFICE 文档 Angular [组件](https://github.com/ONLYOFFICE/document-editor-angular-workspace) 将 ONLYOFFICE 文档集成到 [Angular](https://angularjs.org/) 项目。

## 先决条件

此过程需要 [Node.js (和 npm)](https://nodejs.org/en).

## 使用 ONLYOFFICE 文档编辑器创建演示 Angular 应用程序

此过程创建一个 [基本 Angular 应用程序](https://angular.io/guide/setup-local)，并在其中安装 ONLYOFFICE 文档编辑器。

1. 打开命令行或命令提示符并安装 [Angular CLI Tool](https://angular.io/cli) 包：

   ``` sh
   npm install -g @angular/cli
   ```

2. 创建一个名为 *onlyoffice-angular-demo* 的新 Angular 项目：

   ``` sh
   ng new --defaults --skip-git onlyoffice-angular-demo
   ```

3. 进入新创建的目录：

   ``` sh
   cd onlyoffice-angular-demo
   ```

4. 从 **npm** 安装 ONLYOFFICE Docs Angular 组件，并使用 *--save* 将其保存到 *package.json* 文件中：

   ``` sh
   npm install --save @onlyoffice/document-editor-angular
   ```

   您还可以使用以下 **yarn** 命令：

   ``` sh
   yarn add @onlyoffice/document-editor-angular
   ```

以下步骤取决于您使用的 Angular 版本。 要检查已安装的版本，请运行以下命令：

``` sh
ng version
```

### 17.0.0 之前的版本

1. 打开 *onlyoffice-angular-demo* 项目中的 *./src/app/app.module.ts* 文件并导入 **DocumentEditorModule**：

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

2. 打开 *onlyoffice-angular-demo* 项目中的 *./src/app/app.component.ts* 文件，并在您的使用组件中定义选项：

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

   将以下行替换为您自己的数据：

   - `https://example.com/url-to-example-document.docx` - 替换为您的文件的 URL；
   - `https://example.com/url-to-callback.ashx` - 替换为您的回调 URL（这是保存功能正常工作所必需的）。

   此 TypeScript 文件将创建 *AppComponent* 组件，其中包含配置了基本功能的 ONLYOFFICE 文档编辑器。

3. 在模板中，将*文档编辑器*组件与您的选项一起使用：

   ``` xml
   <document-editor
       id="docxEditor"
       documentServerUrl="http://documentserver/"
       [config]="config"
       [events_onDocumentReady]="onDocumentReady"
       [onLoadComponentError]="onLoadComponentError"
   ></document-editor>
   ```

   将 `http://documentserver/` 行替换为您的服务器的 URL。

### 17.0.0 及更高版本

1. 打开 *onlyoffice-angular-demo* 项目中的 *./src/app/app.component.ts* 文件，并在您的使用组件中定义选项：

   > 请注意，从 Angular v17.0.0 开始，默认情况下，*app.module.ts* 文件不会添加到新项目中。您必须在 *Component* 装饰器的 *imports* 属性中指定 *DocumentEditorModule*，并将 *standalone* 设置为 *true*。

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

   将以下行替换为您自己的数据：

   - `https://example.com/url-to-example-document.docx` - 替换为您的文件的 URL；
   - `https://example.com/url-to-callback.ashx` - 替换为您的回调 URL（这是保存功能正常工作所必需的）。

   此 TypeScript 文件将创建 *AppComponent* 组件，其中包含配置了基本功能的 ONLYOFFICE 文档编辑器。

2. 在模板中，将 *document-editor* 组件与您的选项一起使用：

   ``` xml
   <document-editor
       id="docxEditor"
       documentServerUrl="http://documentserver/"
       [config]="config"
       [events_onDocumentReady]="onDocumentReady"
       [onLoadComponentError]="onLoadComponentError"
   ></document-editor>
   ```

   将 `http://documentserver/` 行替换为您的服务器的 URL。

使用 Node.js 开发服务器测试应用程序：

- 要启动开发服务器，请导航到 *onlyoffice-angular-demo* 目录并运行：

  ``` sh
  npm run start
  ```

- 要停止开发服务器，请选择命令行或命令提示符，然后按 *Ctrl+C*。

## 在 Angular 组件中调用编辑器方法

1. 将`DocEditor.instances` 参数添加到`window` 对象中，并通过编辑器 ID 从该对象中获取编辑器对象：

   ```ts
   const documentEditor = window.DocEditor.instances["docxEditor"]
   ```

2. 从这个对象中调用任何编译器的 [方法](../../usage-api/methods.md):

   ```ts
   documentEditor.showMessage("Welcome to ONLYOFFICE Editor!")
   ```

示例:

```ts
onDocumentReady = () => {
  const documentEditor = window.DocEditor.instances["docxEditor"]

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!")
}
```

## 部署演示 Angular 应用程序

要将应用程序部署到产品环境，请为 Angular 项目创建特定于构建的配置选项：

1. 创建 *src/environments/* 目录并通过运行以下命令将项目配置来使用这些文件：

   ``` sh
   ng generate environments
   ```

   新创建的目录包含 *environment.ts* 基本配置文件，它提供默认 *production* 环境的配置。可以在特定于目标的配置文件中覆盖其他环境的默认值，例如 *development* 和 *staging*。

   基础 *environment.ts* 文件包含默认环境设置：

   ``` ts
   export const environment = {
     production: false,
   }
   ```

   当未指定环境时，*build* command 命令使用它作为构建目标。

   您可以将其他属性添加到 *environment* 对象中，或者作为单独的对象。例如，默认的 *apiUrl* 变量被添加到默认环境中：

   ``` ts
   export const environment = {
     production: true,
     apiUrl: "http://my-prod-url",
   }
   ```

   特定于目标的配置文件（例如 *environment.development.ts*）为 *development* 构建目标设置默认值：

   ``` ts
   export const environment = {
     production: true,
   }
   ```

2. 在 *app.component.ts* 组件文件中导入原始环境文件，以使用您定义的环境配置：

   ``` ts
   import {environment} from "./../environments/environment"
   ```

   这可确保 *build* 和 *serve* 命令可以找到特定构建目标的配置。

3. 将 *fileReplacements* 参数添加到 *angular.json* 配置文件的每个构建目标的配置中。此参数将 TypeScript 程序中的任何文件替换为特定于目标的文件版本，并在针对特定环境的构建中包含特定于目标的代码或变量，例如 *development* 或 *staging*.

   默认情况下不替换任何文件。 但您可以为特定构建目标添加文件替换：

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

   这意味着当您使用 *ng build --configuration development* 构建开发配置时，*src/environments/environment.ts* 文件将替换为 *src/environments/environment.development.ts* 特定目标的文件版本。

   您可以添加其他配置。例如，要添加 *staging* 环境，请复制 *src/environments/environment.ts* 文件以及 *src/environments/environment.staging.ts* 标题，然后将 *staging* 配置添加到 *angular.json*：

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

4. 将 *serve* 命令配置为使用目标构建配置，方法是将其添加到 *angular.json* 的 *serve.configurations* 部分：

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

现在您可以将应用程序部署到创建的服务器：

1. 导航到 *onlyoffice-angular-demo* 目录并运行：

   ``` sh
   ng build
   ```

   *dist* 目录将使用您的应用程序的产品版本创建。

2. 将 *dist/onlyoffice-angular-demo* 目录的内容复制到 Web 服务器的根目录（复制到 *onlyoffice-angular-demo* 文件夹）。

该应用程序将部署在 Web 服务器上（默认情况下 `http://localhost:3000`）。

## ONLYOFFICE 文档 Angular 组件API

### 属性

| 名称                                 | 类型                    | 默认 | 描述                                                                                                                                                |
| ------------------------------------ | ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                                 | string                  | null    | 组件唯一标识符。                                                                                                                               |
| documentServerUrl\*                  | string                  | null    | ONLYOFFICE 文档服务器的地址。                                                                                                                                |
| config\*                             | object                  | null    | 用于使用令牌打开文件的通用[配置对象](../../usage-api/config/config.md)。                                                       |
| document\_fileType                   | string                  | null    | 文件的类型。                                                                                                                                      |
| document\_title                      | string                  | null    | 文件名。                                                                                                                                             |
| documentType                         | string                  | null    | 文档类型。                                                                                                                                         |
| height                               | string                  | null    | 定义浏览器窗口中的文档高度。                                                                                                         |
| type                                 | string                  | null    | 定义用于访问文档的平台类型（桌面、移动或嵌入式）。                                                                       |
| width                                | string                  | null    | 定义浏览器窗口中的文档宽度。                                                                                                          |
| events\_onAppReady                   | (event: object) => void | null    | 当应用程序加载到浏览器中时调用的函数。                                                                                       |
| events\_onDocumentStateChange        | (event: object) => void | null    | 修改文档时调用的函数。                                                                                                         |
| events\_onMetaChange                 | (event: object) => void | null    | 通过 meta 命令更改文档的元信息时调用的函数。                                                             |
| events\_onDocumentReady              | (event: object) => void | null    | 将文档加载到文档编辑器时调用的函数。                                                                                  |
| events\_onInfo                       | (event: object) => void | null    | 应用程序打开文件时调用的函数。                                                                                                  |
| events\_onWarning                    | (event: object) => void | null    | 发生警告时调用的函数。                                                                                                                 |
| events\_onError                      | (event: object) => void | null    | 发生错误或其他特定事件时调用的函数。                                                                                     |
| events\_onRequestSharingSettings     | (event: object) => void | null    | 当用户尝试通过单击**更改访问权限**按钮来管理文档访问权限时调用的函数。                                  |
| events\_onRequestRename              | (event: object) => void | null    | 当用户尝试通过单击**重命名...**按钮重命名文件时调用的函数。                                                      |
| events\_onMakeActionLink             | (event: object) => void | null    | 当用户试图获取打开包含书签的文档的链接，滚动到书签位置时，调用的函数。            |
| events\_onRequestInsertImage         | (event: object) => void | null    | 当用户尝试通过单击**来自存储的图像**按钮插入图像时调用的函数。                                               |
| events\_onRequestSaveAs              | (event: object) => void | null    | 当用户尝试通过单击**另存为...**按钮来保存文件时调用的函数。                                                            |
| events\_onRequestMailMergeRecipients | (event: object) => void | null    | 当用户尝试通过单击**邮件合并**按钮来选择收件人数据时调用的函数。                                                |
| events\_onRequestCompareFile         | (event: object) => void | null    | 当用户尝试通过单击**编辑文档**按钮将文档从查看模式切换到编辑模式时调用的函数。                             |
| events\_onRequestEditRights          | (event: object) => void | null    | 当用户尝试通过单击**编辑文档**按钮将文档从查看模式切换到编辑模式时调用的函数。        |
| events\_onRequestHistory             | (event: object) => void | null    | 当用户尝试通过单击**版本历史记录** 按钮来显示文档版本历史记录时调用的函数。                               |
| events\_onRequestHistoryClose        | (event: object) => void | null    | 当用户试图通过单击**关闭历史记录**按钮从查看文档版本历史记录返回到文档时调用的函数。 |
| events\_onRequestHistoryData         | (event: object) => void | null    | 当用户试图单击文档版本历史记录中的特定文档版本时调用的函数。                                        |
| events\_onRequestRestore             | (event: object) => void | null    | 当用户尝试通过单击版本历史记录中的**恢复**按钮来恢复文件版本时调用的函数。                         |

\* *- 必填字段*

## 开发 ONLYOFFICE 文档 Angular 组件

1. 从 GitHub 存储库克隆项目：

   ``` sh
   git clone https://github.com/ONLYOFFICE/document-editor-angular-workspace.git
   ```

2. 安装项目依赖：

   ``` sh
   npm install
   ```

3. 构建项目：

   ``` sh
   cd ./projects

   ng build @onlyoffice/document-editor-angular
   ```

4. 创建包：

   ``` sh
   cd ./dist/onlyoffice/document-editor-angular

   npm pack
   ```

5. 测试组件：

   ``` sh
   cd ./projects

   ng test @onlyoffice/document-editor-angular
   ```

## 反馈和支持

如果您对 ONLYOFFICE 文档 Angular 组件有任何问题、疑问或建议，请参阅[问题](https://github.com/ONLYOFFICE/document-editor-angular-workspace/issues)部分。
