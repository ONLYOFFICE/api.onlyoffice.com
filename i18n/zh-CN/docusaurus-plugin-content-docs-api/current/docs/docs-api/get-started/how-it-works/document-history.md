---
sidebar_position: -19
---

# 文档历史记录

您可以使用**文档编辑器**查看文本文档、电子表格或演示文稿的历史记录。

文档历史记录存储在文档存储服务中。**文档编辑器**在左侧面板中将文档历史记录显示为版本列表。当您从列表中选择一个文档版本时，它将显示出来以供预览。

以下参考图和步骤解释了在ONLYOFFICE文档中查看历史记录的过程。

![文档历史](/assets/images/editor/viewing-history.svg)

1. 用户在**文档编辑器**中编辑文档时，点击*版本历史记录*按钮
2. **文档编辑器**向**文档存储服务**请求文档版本列表。
3. **文档存储服务**发送带有要显示的版本号的文档版本列表。
4. **文档编辑器**向**文档存储服务**请求有关所选文档版本的信息。
5. **文档存储服务**发送所选文档版本的链接。
6. **文档编辑器**显示所选的文档版本。
7. 当用户点击文档版本列表中的另一个版本时，**文档编辑器**会重新请求要显示的该版本的信息。
8. 用户点击*关闭历史记录*按钮，**文档编辑器**隐藏文档版本列表。

## 实际操作方法 {#how-this-can-be-done-in-practice}

1. 创建一个*html*文件，用于[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在文档编辑器初始化的配置脚本中，指定用于打开[版本历史记录](../../usage-api/config/events.md#onrequesthistory)列表的事件处理程序。当调用[onRequestHistory](../../usage-api/config/events.md#onrequesthistory)事件时，必须执行[refreshHistory](../../usage-api/methods.md#refreshhistory)方法。如果每个版本都存在历史记录参数，此方法包含每个文档版本的文档历史记录。

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

   <img alt="Opening File" src="/assets/images/editor/history_open.png" width="300px" />

3. 在文档编辑器初始化的配置脚本中，指定将从[历史记录中选择版本](../../usage-api/config/events.md#onrequesthistorydata)的事件处理程序。当调用[onRequestHistoryData](../../usage-api/config/events.md#onrequesthistorydata)事件时，必须执行[setHistoryData](../../usage-api/methods.md#sethistorydata)方法。此方法包含相应版本文件的绝对URL。

   调用*setHistoryData*方法查看文档历史版本时，必须添加令牌以验证参数。

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

4. 在文档编辑器初始化的配置脚本中，指定当用户点击版本历史记录中的*恢复*按钮时将[恢复](../../usage-api/config/events.md#onrequestrestore)文件版本的事件处理程序。当调用[onRequestRestore](../../usage-api/config/events.md#onrequestrestore)事件时，必须执行[refreshHistory](../../usage-api/methods.md#refreshhistory)方法以再次初始化版本历史记录。如果每个版本都存在历史记录参数，此方法包含每个文档版本的文档历史记录。

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
   
   const cconfig = {
     events: {
       onRequestRestore,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![onRequestRestore](/assets/images/editor/onRequestRestore.png)

5. 在浏览器中打开您的*html*文件，

6. 在文档编辑器菜单中打开*版本历史记录*选项。

7. 在文档编辑器初始化的配置脚本中，指定用于显示*关闭历史记录*按钮的事件处理程序。当用户点击*关闭历史记录*按钮，试图从查看文档版本历史记录返回文档时，将调用[onRequestHistoryClose](../../usage-api/config/events.md#onrequesthistoryclose)事件，版本历史记录列表将被隐藏。调用该函数时，必须在编辑模式下再次初始化编辑器。

   ``` ts
   function onRequestHistoryClose() {
     document.location.reload()
   };
   
   const configg = {
     events: {
       onRequestHistoryClose,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.png)

## 打开带有更改突出显示的文档历史记录

如果文档版本是使用文档编辑器创建的，那么在查看文档历史记录时可以显示文档的更改。为了实现这一点，在[保存](./saving-file.md)编辑会话时，除了文档版本本身之外，还必须将额外的数据保存到**文档存储服务**中。在**文档编辑器**中编辑后，有关编辑会话期间的更改信息将与已更改的文档一起发送：

> 当服务器版本更新时，**文档编辑器**不会使用*changes*s数据来突出显示历史记录中的更改。它只会在*changesurl*参数中返回已更改的文档。

- [历史记录](../../usage-api/callback-handler.md#history)：当您在侧面板中查看文档历史记录时，此信息允许显示每个文档版本的时间和作者。必须作为发送给[refreshHistory](../../usage-api/methods.md#refreshhistory)方法的对象的属性changes发送。

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

  其中**changes**是保存文档后从[历史记录对象](../../usage-api/callback-handler.md#history)返回的*changes*。

  其中**serverVersion**是保存文档后从[历史记录对象](../../usage-api/callback-handler.md#history)返回的*serverVersion*。

  > ONLYOFFICE文档会突出显示从当前文档会话开始所做的更改，而不是从文档版本开始时的更改。即使在一个会话期间创建了多个文档版本，该会话中的所有更改都将被突出显示。因此，您无法在文档历史记录中看到使用[强制保存选项](./saving-file.md#force-saving)创建的文档版本。

- [changesurl](../../usage-api/callback-handler.md#changesurl)：包含文档编辑数据的文件的绝对URL，用于显示与特定文档版本相对应的更改。必须保存该文件，并且必须使用[setHistoryData](../../usage-api/methods.md#sethistorydata)方法将其地址作为*changesUrl*参数发送。必须将前一个文档版本的链接(*previous.url*)添加到对象中。

  调用*setHistoryData*方法查看文档历史版本时，必须添加令牌以验证参数。

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

  > *changesurl*请求是在浏览器中从添加的具有**documentserver**域的iframe中发出的，其中**documentserver**是安装了ONLYOFFICE文档的服务器名称。为了使其正常工作，必须允许跨源HTTP请求（CORS）。这可以通过使用*Access-Control-Allow-Origin*标头来实现。您可以[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

  ![变更目录](/assets/images/editor/changesurl.png)
