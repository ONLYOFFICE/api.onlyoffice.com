---
sidebar_position: -1
---

# 打开编辑器的生命周期

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';
```

[opening](./opening-file.md)编辑器的生命周期可以通过一系列事件来定义。

添加用于初始化文档编辑器的脚本，并配置你要打开的文档：

``` ts
const config = {
  document: {
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    title: "Example Document Title.docx",
    url: "https://example.com/url-to-example-document.docx",
  },
  documentType: "word",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCJ9.7IpEJxdOvBQ0kJ8l6ZegIV4tX5vsPbZZCDDVmcFROXc",
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

在其中指定以下事件：

1. 当应用程序加载到浏览器中时，会执行[onAppReady](../../usage-api/config/events.md#onappready)事件：

   ``` ts
   function onAppReady() {
     console.log("ONLYOFFICE Document Editor is ready");
   }

   const config = {
     events: {
       onAppReady,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   之后，可以调用[showMessage](../../usage-api/methods.md#showmessage)方法，该方法会显示一个带有消息的工具提示：

   ``` ts
   docEditor.showMessage(message);
   ```

   ```mdx-code-block
   <APITable>
   ```
      | 范围 | 类型   | 在场 | 描述               |
      | --------- | ------ | -------- | ------------------------- |
      | 信息   | 字符串 | 必需 | 定义消息文本。 |
  
     ```mdx-code-block
     </APITable>
     ```
   :::note
   请注意，在嵌入式平台[type](../../usage-api/config/config.md#type)中不支持显示带有消息的工具提示。
   :::

2. 当发生错误或其他特定事件时，会执行[onError](../../usage-api/config/events.md#onerror)事件：

   ``` ts
   function onError(event) {
     console.log(`ONLYOFFICE Document Editor reports an error: code ${event.data.errorCode}, description ${event.data.errorDescription}`);
   }

   const config = {
     events: {
       onError,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   例如，可能是转换错误或加载某个编辑器组件时出错。此时将无法继续进行后续操作。

3. 当使用旧的[document.key](../../usage-api/config/document/document.md#key)值打开文档进行编辑时（该值曾用于编辑上一版本的文档并已成功保存），会执行[onOutdatedVersion](../../usage-api/config/events.md#onoutdatedversion)事件：

   ``` ts
   function onOutdatedVersion() {
     location.reload(true);
   }

   const config = {
     events: {
       onOutdatedVersion,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   会出现一个[error](../../more-information/troubleshooting.md#the-file-version-has-been-changed)，并且无法继续进行后续操作。如果不处理此事件，文件将仅以只读模式打开。必须使用新的密钥重新初始化编辑器。

   此事件从8.3版本开始已弃用。请使用[onRequestRefreshFile](../../usage-api/config/events.md#onrequestrefreshfile)事件代替。

   当使用已成功保存文件的[key](../../usage-api/config/document/document.md#key)打开编辑器时，将执行`onRequestRefreshFile`事件，而不是`onOutdatedVersion`事件：

   ``` ts
   function onRequestRefreshFile() {
     refreshFile({
       document: {
         key: "Khirz6zTPdfd7",
         title: "Example Document Title.docx",
         url: "https://example.com/url-to-example-document.docx",
         permissions: {},
       },
       editorConfig: {
         callbackUrl: "https://example.com/url-to-callback.ashx",
         mode: "edit",
       },
       token: "...",
     });
   }

   const config = {
     events: {
       onRequestHistory,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   在这种情况下，会调用[refreshFile](../../usage-api/methods.md#refreshfile)方法，并使用新的密钥值更新文件版本，而无需重新加载编辑器。

4. 当需要用户采取操作才能打开文档时，会执行[onUserActionRequired](../../usage-api/config/events.md#onuseractionrequired)事件：

   ``` ts
   function onUserActionRequired() {
     console.log("Enter a password");
   }

   const config = {
     events: {
       onUserActionRequired,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   当用户需要输入密码才能打开受保护的文档，或者需要为`txt`或`csv`文件选择编码或分隔符时，就会发生这种情况。

5. 当文档加载完成且编辑器准备好工作时，会执行[onDocumentReady](../../usage-api/config/events.md#ondocumentready)事件：

   ``` ts
   function onDocumentReady() {
     console.log("Document is loaded");
   }

   const config = {
     events: {
       onDocumentReady,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   之后，可以向[Automation API](../../usage-api/automation-api.md)发送请求。
   
   在以下情况下，`onDocumentReady`事件之后也可能会调用`onOutdatedVersion`或`onRequestRefreshFile`事件：

   1. 文档已被修改；
   2. 网络连接中断；
   3. 文档已成功保存；
   4. 编辑器已重新连接到服务器。

6. 当用户试图结束与编辑器的交互并通过点击关闭按钮关闭编辑器时，会执行[onRequestClose](../../usage-api/config/events.md#onrequestclose)事件：

   ```ts
   function onRequestClose() {
     if (window.opener) {
       window.close();
       return;
     }
     docEditor.destroyEditor();
   }

   const config = {
     events: {
       onRequestClose,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   在调用[requestClose](../../usage-api/methods.md#requestclose)方法之后，也可能会执行`onRequestClose`事件。建议在调用[destroyEditor](../../usage-api/methods.md#destroyeditor)方法之前调用此方法，以检查编辑器中是否有未保存的数据。如果存在未保存的数据，将显示一个对话框，询问用户是要继续编辑还是关闭编辑器并丢失所有未保存的数据。如果选择`关闭`选项，则会调用`onRequestClose`事件：

   ``` ts
   docEditor.requestClose();
   ```

   `destroyEditor`  方法用于销毁 `docEditor` 对象。当需要使用其他配置重新初始化文档编辑器时，可以调用此方法：

   ``` ts
   docEditor.destroyEditor();
   ```
