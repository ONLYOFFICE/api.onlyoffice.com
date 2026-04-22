---
sidebar_position: -19
---

# 文档历史记录

**文档编辑器**可以显示文本文档、电子表格、演示文稿和PDF的版本历史记录。版本数据本身由**文档存储服务**存储——每次编辑会话结束后，ONLYOFFICE文档会返回变更信息，集成商将其与文档一起保存。然后，**文档编辑器**在侧面板中将此历史记录显示为版本列表，用户可以选择任何版本进行预览。

以下图表和步骤解释了在ONLYOFFICE文档中查看文档历史记录的工作方式。

![文档历史](/assets/images/editor/viewing-history.svg)

1. 用户在**文档编辑器**中点击*版本历史记录*按钮。
2. **文档编辑器**向**文档存储服务**请求文档版本列表。
3. **文档存储服务**返回版本列表，包括要显示的版本。
4. **文档编辑器**向**文档存储服务**请求所选版本的数据。
5. **文档存储服务**返回所选版本文件的链接。
6. **文档编辑器**显示所选版本。如果用户选择其他版本，则重复步骤4–6。
7. 用户点击*关闭历史记录*按钮，**文档编辑器**返回正常编辑模式。

## 实际操作方法 {#how-this-can-be-done-in-practice}

1. 创建一个`.html`文件，用于[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在编辑器配置中添加[onRequestHistory](../../usage-api/config/events.md#onrequesthistory)事件处理程序。当用户打开版本历史记录时，此事件将触发。在处理程序中，调用[refreshHistory](../../usage-api/methods.md#refreshhistory)方法并传入完整的版本列表。要突出显示每个版本中的各个更改，请按照[突出显示更改](#highlighting-changes)中的说明传递额外数据。

   ``` ts
   function onRequestHistory() {
     docEditor.refreshHistory({
       currentVersion: 2,
       history: [
         {
           created: "2010-07-06 10:13 AM",
           key: "af86C7e71Ca8",
           user: {
             id: "F89d8069ba2b",
             name: "Kate Cage",
           },
           version: 1,
         },
         {
           created: "2010-07-07 3:46 PM",
           key: "Khirz6zTPdfd7",
           user: {
             id: "78e1e841",
             name: "John Smith",
           },
           version: 2,
         },
       ],
     })
   };
   
   const config = {
     events: {
       onRequestHistory,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![打开文件](/assets/images/editor/history_open.png)

3. 添加[onRequestHistoryData](../../usage-api/config/events.md#onrequesthistorydata)事件处理程序。当用户从列表中选择一个版本时，此事件将触发并传入版本号。在处理程序中，调用[setHistoryData](../../usage-api/methods.md#sethistorydata)方法并传入该版本文件的绝对URL。

   调用`setHistoryData`时，必须包含[`token`](./security.md)以验证参数。

   ``` ts
   function onRequestHistoryData(event) {
     const version = event.data
     docEditor.setHistoryData({
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4IiwidmVyc2lvbiI6Mn0.iRcdHve235L5K1e29SmUBkuHcxb63WHRko51WMJlmS0",
       url: "https://example.com/url-to-example-document.docx",
       version: 2,
     })
   };
   
   const config = {
     events: {
       onRequestHistoryData,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![历史记录](/assets/images/editor/history.png)

4. 添加[onRequestRestore](../../usage-api/config/events.md#onrequestrestore)事件处理程序。当用户点击*恢复*按钮时，此事件将触发并传入所选版本的数据。在处理程序中，将恢复的版本保存到您的服务器上，然后调用[refreshHistory](../../usage-api/methods.md#refreshhistory)重新加载版本列表。

   ``` ts
   function onRequestRestore(event) {
     const fileType = event.data.fileType
     const url = event.data.url
     const version = event.data.version
   
     docEditor.refreshHistory({
       currentVersion: 2,
       history: [
         {
           created: "2010-07-06 10:13 AM",
           key: "af86C7e71Ca8",
           user: {
             id: "F89d8069ba2b",
             name: "Kate Cage",
           },
           version: 1,
         },
         {
           changes,
           created: "2010-07-07 3:46 PM",
           key: "Khirz6zTPdfd7",
           serverVersion,
           user: {
             id: "78e1e841",
             name: "John Smith",
           },
           version: 2,
         },
       ],
     })
   };
   
   const config = {
     events: {
       onRequestRestore,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![onRequestRestore](/assets/images/editor/onRequestRestore.png#gh-light-mode-only)![onRequestRestore](/assets/images/editor/onRequestRestore.dark.png#gh-dark-mode-only)

5. 添加[onRequestHistoryClose](../../usage-api/config/events.md#onrequesthistoryclose)事件处理程序。当用户点击*关闭历史记录*按钮时，此事件将触发。在处理程序中，重新初始化编辑器为编辑模式——例如，通过重新加载页面。

   ``` ts
   function onRequestHistoryClose() {
     document.location.reload()
   };
   
   const config = {
     events: {
       onRequestHistoryClose,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.png#gh-light-mode-only)![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.dark.png#gh-dark-mode-only)

6. 在浏览器中打开您的`.html`文件。

7. 在文档编辑器菜单中打开*版本历史记录*选项。

## 突出显示更改 {#highlighting-changes}

如果文档版本是使用**文档编辑器**创建的，则在查看历史记录时可以突出显示该版本中的各个更改。要启用此功能，**文档存储服务**必须保存ONLYOFFICE文档在[保存](./saving-file.md)每次编辑会话时返回的额外数据。

:::note
当服务器版本更新时，**文档编辑器**不会使用`changes`数据来突出显示历史记录中的更改。它只会在`changesurl`参数中返回已更改的文档。
:::

除了已更改的文档本身之外，**文档编辑服务**还会发送：

- [history](../../usage-api/callback-handler.md#history)——包含每个更改的时间戳和作者，显示在版本历史记录侧面板中。将此数据作为传递给[refreshHistory](../../usage-api/methods.md#refreshhistory)的对象中每个版本的`changes`属性传递。

  ``` ts
  docEditor.refreshHistory({
    currentVersion: 2,
    history: [
      {
        created: "2010-07-06 10:13 AM",
        key: "af86C7e71Ca8",
        user: {
          id: "F89d8069ba2b",
          name: "Kate Cage",
        },
        version: 1,
      },
      {
        changes,
        created: "2010-07-07 3:46 PM",
        key: "Khirz6zTPdfd7",
        serverVersion,
        user: {
          id: "78e1e841",
          name: "John Smith",
        },
        version: 2,
      },
    ],
  })
  ```

  其中`changes`和`serverVersion`是保存文档后从[历史记录对象](../../usage-api/callback-handler.md#history)返回的值。

  :::note
  ONLYOFFICE文档会突出显示从当前文档会话开始所做的更改，而不是从文档版本开始时的更改。即使在一个会话期间创建了多个文档版本，该会话中的所有更改都将被突出显示。因此，您无法在文档历史记录中看到使用[强制保存选项](./saving-file.md#force-saving)创建的文档版本。
  :::

- [changesurl](../../usage-api/callback-handler.md#changesurl)——包含编辑数据的zip文件的绝对URL，用于突出显示特定版本的更改。保存此文件，并在调用[setHistoryData](../../usage-api/methods.md#sethistorydata)时将其地址作为`changesUrl`参数传递。还必须在`previous.url`中包含前一个文档版本的链接。

  调用`setHistoryData`时，必须包含[`token`](./security.md)以验证参数。

  ``` ts
  docEditor.setHistoryData({
    changesUrl: "https://example.com/url-to-changes.zip",
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    previous: {
      fileType: "docx",
      key: "af86C7e71Ca8",
      url: "https://example.com/url-to-the-previous-version-of-the-document.docx",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFuZ2VzVXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tY2hhbmdlcy56aXAiLCJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwicHJldmlvdXMiOnsiZmlsZVR5cGUiOiJkb2N4Iiwia2V5IjoiYWY4NkM3ZTcxQ2E4IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tdGhlLXByZXZpb3VzLXZlcnNpb24tb2YtdGhlLWRvY3VtZW50LmRvY3gifSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4IiwidmVyc2lvbiI6Mn0.ril3Ol3rvYne3g0dG8TdKCiwJ7-7kkYGc6-XWMvp8FU",
    url: "https://example.com/url-to-example-document.docx",
    version: 2,
  })
  ```

  :::warning
  `changesurl`请求是在浏览器中从添加的具有`documentserver`域的iframe中发出的，其中`documentserver`是安装了ONLYOFFICE文档的服务器名称。为了正常运行，必须允许跨源HTTP请求（CORS）。这可以通过使用`Access-Control-Allow-Origin`标头来实现。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的ONLYOFFICE云，并使用其公共IP地址或公共DNS，这些可以在云控制台的**实例**部分找到。
  :::

  ![变更目录](/assets/images/editor/changesurl.png)
