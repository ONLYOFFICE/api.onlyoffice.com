# Vue

ONLYOFFICE 文档 Vue.js[组件](https://github.com/ONLYOFFICE/document-editor-vue) 集成 ONLYOFFICE 文档到 [Vue.js](https://vuejs.org/) 项目。

## 先决条件

此过程需要 [Node.js (和 npm)](https://nodejs.org/en)。

## 使用 ONLYOFFICE 文档编辑器创建演示 Vue.js 应用程序

此过程创建一个[基本 Vue.js 应用程序](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)基本 Vue.js 应用程序并在其中安装 ONLYOFFICE 文档编辑器。

1. 打开命令行或命令提示符，并使用[创建 Vue 工具](https://github.com/vuejs/create-vue)，创建一个名为 *onlyoffice-vue-demo* 的 Vue.js 3.x 项目：

   ``` sh
   npm create vue@3
   ```

2. 进入新创建的目录：

   ``` sh
   cd onlyoffice-vue-demo
   ```

3. 从 **npm** 安装 ONLYOFFICE 文档 Vue.js 组件，并使用 *--save* 将其保存到 *package.json* 文件中：
   
   ``` sh
   npm install --save @onlyoffice/document-editor-vue
   ```

4. 打开 *onlyoffice-vue-demo* 项目中的 *./src/App.vue* 文件，并将其内容替换为以下代码：

   ``` vue
   <template>
       <DocumentEditor 
           id="docEditor" 
           documentServerUrl="http://documentserver/"
           :config="config"
           :events_onDocumentReady="onDocumentReady"
           :onLoadComponentError="onLoadComponentError"
       /> 
   </template>

   <script lang="ts">
   import { defineComponent } from 'vue';
   import { DocumentEditor } from "@onlyoffice/document-editor-vue";

   export default defineComponent({
       name: 'ExampleComponent',
       components: {
           DocumentEditor
       },
       data() {
           return {
               config: {
                   document: {
                       fileType: "docx",
                       key: "Khirz6zTPdfd7",
                       title: "Example Document Title.docx",
                       url: "https://example.com/url-to-example-document.docx"
                   },
                   documentType: "word",
                   editorConfig: {
                       callbackUrl: "https://example.com/url-to-callback.ashx"
                   }
               }
           }
       },
       methods: {
           onDocumentReady() {
               console.log("Document is loaded");
           },
           onLoadComponentError (errorCode, errorDescription) {
               switch(errorCode) {
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
       },
   });
   </script>
   ```

   将以下行替换为您自己的数据：

   - `http://documentserver/` - 替换为您的服务器的 URL；
   - `https://example.com/url-to-example-document.docx` - 替换为您的文件的 URL；
   - `https://example.com/url-to-callback.ashx` - 替换为您的回调 URL（这是保存功能正常工作所必需的）。

5. 使用 Vue 开发服务器测试应用程序：

   - 要启动开发服务器，请导航到 *onlyoffice-vue-demo* 目录并运行：

     ``` sh
     npm run dev
     ```

   - 要停止开发服务器，请选择命令行或命令提示符，然后按 *Ctrl+C*。

## 在 Vue.js 应用程序中调用编辑器方法

1. 将`DocEditor.instances` 参数添加到`window` 对象中，并通过编辑器 ID 从该对象中获取编辑器对象：

   ```vue
   const documentEditor = window.DocEditor.instances["docEditor"]
   ```

2. 从这个对象中调用任何编译器的 [方法](../../usage-api/methods.md):

   ```vue
   documentEditor.showMessage("Welcome to ONLYOFFICE Editor!")
   ```

示例:

```vue
onDocumentReady() {
  const documentEditor = window.DocEditor.instances["docEditor"]

  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!")
}
```

## 部署演示 Vue.js 应用程序

将应用程序部署到生产环境的最简单方法是安装 [serve](https://github.com/vercel/serve) 并创建静态服务器：

1. 全局安装 *serve* 包：

   ``` sh
   npm install -g serve
   ```

2. 在 3000 端口上为您的静态站点提供服务：

   ``` sh
   serve -s build
   ```

   可以使用 *-l* 或 *--listen* 标志调整另一个端口：

   ``` sh
   serve -s build -l 4000
   ```

3. 要提供项目文件夹，请转到该文件夹并运行 *serve* 命令：

   ``` sh
   cd onlyoffice-vue-demo
   serve
   ```

现在您可以将应用程序部署到创建的服务器：

1. 导航到 *onlyoffice-vue-demo* 目录并运行：

   ``` sh
   npm run build
   ```

   *dist* 目录将使用您的应用程序的产品版本创建。

2. 将 *onlyoffice-vue-demo/dist* 目录的内容复制到 Web 服务器的根目录（复制到 *onlyoffice-vue-demo* 文件夹）。

该应用程序将部署在 Web 服务器上（默认情况下 `http://localhost:3000`）。

## ONLYOFFICE 文档 Vue 组件 API

### 属性

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 名称                                 | 类型                    | 默认 | 描述                                                                                                                                                |
| ------------------------------------ | ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                                 | string                  | null    | 组件唯一标识符。                                                                                                                               |
| documentServerUrl\*                  | string                  | null    | ONLYOFFICE 文档服务器的地址。                                                                                                                                |
| config\*                             | object                  | null    | 用于使用令牌打开文件的通用[配置对象](../../usage-api/config/config.md)。                                                        |
| document\_fileType                   | string                  | null    | 文件的类型。                                                                                                                                      |
| document\_title                      | string                  | null    | 文件名。                                                                                                                                             |
| documentType                         | string                  | null    | 文档类型。                                                                                                                                         |
| height                               | string                  | null    | 定义浏览器窗口中的文档高度。                                                                                                         |
| type                                 | string                  | null    | 定义用于访问文档的平台类型（桌面、移动或嵌入式）。                                                                       |
| width                                | string                  | null    | 定义浏览器窗口中的文档宽度。                                                                                                          |
| events\_onAppReady                   | (event: object) => void | null    | 当应用程序加载到浏览器时调用的函数。 当应用程序加载到浏览器中时调用的函数。                                                                                       |
| events\_onDocumentStateChange        | (event: object) => void | null    | 修改文档时调用的函数。                                                                                                         |
| events\_onMetaChange                 | (event: object) => void | null    | 通过 meta 命令更改文档的元信息时调用的函数。                                                             |
| events\_onDocumentReady              | (event: object) => void | null    | 将文档加载到文档编辑器时调用的函数。                                                                                  |
| events\_onInfo                       | (event: object) => void | null    | 应用程序打开文件时调用的函数。                                                                                                  |
| events\_onWarning                    | (event: object) => void | null    | 发生警告时调用的函数。                                                                                                                 |
| events\_onError                      | (event: object) => void | null    | 发生错误或其他特定事件时调用的函数。                                                                                     |
| events\_onRequestSharingSettings     | (event: object) => void | null    | 当用户尝试通过单击**更改访问权限** 按钮来管理文档访问权限时调用的函数。                                 |
| events\_onRequestRename              | (event: object) => void | null    | 当用户尝试通过单击**重命名...** 按钮重命名文件时调用的函数。                                                       |
| events\_onMakeActionLink             | (event: object) => void | null    | 当用户试图获取打开包含书签的文档的链接时调用的函数，滚动到书签位置。            |
| events\_onRequestInsertImage         | (event: object) => void | null    | 当用户尝试通过单击**来自存储的图像**按钮插入图像时调用的函数。                                              |
| events\_onRequestSaveAs              | (event: object) => void | null    | 当用户尝试通过单击**另存为...**按钮来保存文件时调用的函数。                                                           |
| events\_onRequestMailMergeRecipients | (event: object) => void | null    | 当用户尝试通过单击**邮件合并**按钮来选择收件人数据时调用的函数。                                               |
| events\_onRequestCompareFile         | (event: object) => void | null    | 当用户尝试通过单击**存储中的文档**按钮来选择要比较的文档时调用的函数。                             |
| events\_onRequestEditRights          | (event: object) => void | null    | 当用户尝试通过单击**编辑文档**按钮将文档从查看模式切换到编辑模式时调用的函数。        |
| events\_onRequestHistory             | (event: object) => void | null    | 当用户尝试通过单击**版本历史记录**按钮来显示文档版本历史记录时调用的函数。.                               |
| events\_onRequestHistoryClose        | (event: object) => void | null    | 当用户试图通过单击**关闭历史记录**按钮从查看文档版本历史记录返回到文档时调用的函数。 |
| events\_onRequestHistoryData         | (event: object) => void | null    | 当用户试图单击文档版本历史记录中的特定文档版本时调用的函数。                                        |
| events\_onRequestRestore             | (event: object) => void | null    | 当用户尝试通过单击版本历史记录中的**恢复**按钮来恢复文件版本时调用的函数。                         |

```mdx-code-block
</APITable>
```

\* *- 必填字段*

## 安装 Storybook

安装 [Storybook](https://storybook.js.org/) 以独立开发 UI 组件：

1. 更改 *config/default.json* 文件中文档服务器的地址：

   ``` json
   {
     "documentServerUrl": "http://documentserver/"
   }
   ```

   其中 **documentserver** 是安装了 **ONLYOFFICE 文档** 的服务器的名称。

2. 使用以下命令生成 Storybook：

   ``` sh
   npm run build-storybook
   ```

3. 启动 Storybook:

   ``` sh
   npm run storybook
   ```

## 开发 ONLYOFFICE 文档 Vue 组件

1. 从 GitHub 存储库克隆项目：

   ``` sh
   git clone https://github.com/ONLYOFFICE/document-editor-vue
   ```

2. 安装项目依赖：

   ``` sh
   npm install
   ```

3. 测试组件：

   ``` sh
   npm run test
   ```

4. 构建项目：

   ``` sh
   npm run build
   ```

5. 创建包：

   ``` sh
   npm pack
   ```

## 反馈和支持

如果您对 ONLYOFFICE 文档 Vue有任何问题、疑问或建议，请参阅[问题](https://github.com/ONLYOFFICE/document-editor-vue/issues)部分。
