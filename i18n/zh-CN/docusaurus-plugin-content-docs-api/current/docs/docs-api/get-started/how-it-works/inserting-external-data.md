---
sidebar_position: -6
---

# 插入外部数据

以下步骤解释了在ONLYOFFICE文档中通过外部链接向电子表格插入数据的过程。

![插入外部数据](/assets/images/editor/insert-external-data.svg)

1. 用户从源电子表格的**文档编辑器**中将单元格值复制到剪贴板。与此同时，特殊数据也会被复制。
2. 用户将复制的数据插入到目标电子表格的**文档编辑器**中。
3. **文档编辑器**通过将数据发送给**文档管理器**来请求源文件的链接。
4. **文档管理器**将源电子表格的链接发送给**文档编辑器**。
5. **文档编辑器**向**文档编辑服务**发送下载电子表格的请求。
6. **文档编辑服务**从**文档存储服务**下载源电子表格。
7. **文档编辑服务**发送所有必要的数据，以便在目标电子表格的**文档编辑器**中显示。

## 实际操作方法

1. 创建一个将从中复制数据的源电子表格。

2. 在源电子表格的初始化配置中指定[document.referenceData](../../usage-api/config/document/document.md#referencedata)参数：

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     document: {
       referenceData: {
         fileKey: "BCFA2CED",
         instanceId: "https://example.com",
       },
     },
   })
   ```

3. 当用户从源电子表格复制数据时，剪贴板会接收到以下值的列表：

   - 工作表名称和复制数据的范围，稍后将用于刷新复制的数据；
   - [document.referenceData](../../usage-api/config/document/document.md#referencedata)对象，将用于检查通过外部链接向目标电子表格插入数据的可行性；
   - 文件名，将用于在编辑器中显示公式。

4. 创建一个将插入外部数据的目标电子表格。

5. 在目标电子表格的初始化配置中指定[onRequestReferenceData](../../usage-api/config/events.md#onrequestreferencedata)事件处理程序，以便显示*粘贴链接*和*更新值*按钮：

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestReferenceData,
     },
   })
   ```

6. 如果剪贴板中有步骤3中指定的源电子表格数据，并且目标电子表格的初始化配置中有*onRequestReferenceData*事件处理程序，那么*粘贴链接*按钮将显示在对话框中。

   <img alt="Paste link" src="/assets/images/editor/paste-link.png" width="550px" />

7. 当用户点击*粘贴链接*按钮时，公式将插入到当前单元格中，并且*referenceData*对象将保存到目标文件中。插入的公式显示如下：

   ``` txt
   ='[fileName]sheetName'!cell
   ```

   | 参数      | 类型    | 示例      |               描述                                           |
   | --------- | ------ | --------- | ---------------------------------------------- |
   | cell      | string | E5        | 从中复制数据的单元格。                          |
   | fileName  | string | new\.xlsx | 从中复制数据的文件名。                          |
   | sheetName | string | Sheet1    |  从中复制数据的工作表名称。                          |

   对文件的数据更新请求将发送到文件的URL。

   > 请注意，您可以在单元格中输入指定格式的公式，来自外部文件的数据也将被插入。但在这种情况下，*onRequestReferenceData*事件将仅使用*path*参数执行。

8. 当用户试图通过点击*数据*选项卡的*外部链接*对话框中的*更新值*按钮来刷新源文件中的数据时，将调用[onRequestReferenceData](../../usage-api/config/events.md#onrequestreferencedata)事件。包含从源文件接收到的唯一文件数据、文件路径或名称以及文件URL的对象将在*data*参数中发送。

   > 为了将数据发送到*setReferenceData*，建议首先通过*referenceData*参数搜索文件。如果没有这样的字段或找不到文件，则使用*path*或*link*参数。

   ``` ts
   function onRequestReferenceData(event) {
     const link = event.data.link
     const referenceData = event.data.referenceData
     const path = event.data.path
   }
   ```

<img alt="Update values" src="/assets/images/editor/update-values.png" width="700px" />

9. 为了刷新源文件中的数据，必须调用[setReferenceData](../../usage-api/methods.md#setreferencedata)方法。调用此方法时，必须添加令牌以验证参数。

   > 请注意，只有当用户对源文件具有权限时，才会执行此方法

   ``` ts
   docEditor.setReferenceData({
     fileType: "xlsx",
     path: "sample.xlsx",
     referenceData: {
       fileKey: "BCFA2CED",
       instanceId: "https://example.com",
       key: "Khirz6zTPdfd7",
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w",
     url: "https://example.com/url-to-example-document.xlsx",
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。有关ONLYOFFICE文档服务客户端-服务器交互的更多信息，请参阅[工作原理](./inserting-external-data.md)部分。

## 使用外部链接

1. 指定要在文档编辑器初始化的配置脚本中显示的*打开源*按钮的事件处理程序。当用户试图通过点击*打开源*按钮打开外部链接时，将调用[onRequestOpen](../../usage-api/config/events.md#onrequestopen)事件。

   要在新选项卡中打开带有由*path*或*referenceData*参数引用的外部文件的编辑器，您必须通过使用*path*和*windowName*参数调用[window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)方法来传递指向该选项卡的链接。

   包含唯一文件数据、文件路径和新浏览器选项卡名称的对象将在*data*参数中发送。

   <img alt="open-source" src="/assets/images/editor/open-source.png" width="498px" />

   示例:

   ``` ts
   function onRequestOpen(event) {
     const path = event.data.path
     const referenceData = event.data.referenceData
     const windowName = event.data.windowName
     window.open({
       path: "https://example.com/external-url.docx",
       windowName: event.data.windowName,
     })
   }
   
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestOpen,
     },
   })
   ```

   此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](./how-it-works.md)章节。

2. 指定要在文档编辑器初始化的配置脚本中显示的*更改源*按钮的事件处理程序。当用户试图通过点击*更改源*按钮更改外部链接时，将调用[onRequestReferenceSource](../../usage-api/config/events.md#onrequestreferencesource)事件。

   包含唯一文件数据和文件路径或名称的对象将在*data*参数中发送。

   当点击该按钮时，您必须调用[setReferenceSource](../../usage-api/methods.md#setreferencesource)方法来更改外部数据的源。调用此方法时，必须添加令牌以验证参数。如果未声明该事件，则*更改源*按钮将不会显示。

   > 为了将数据发送到*setReferenceSource*方法，建议首先通过*referenceData*参数搜索文件。如果没有这样的字段或找不到文件，则使用*path*参数。
   
   <img alt="Change source" src="/assets/images/editor/change-source.png" width="498px" />

   示例：

   ``` ts
   function onRequestReferenceSource() {
     const referenceData = event.data.referenceData
     const path = event.data.path
   
     docEditor.setReferenceSource({
       fileType: "xlsx",
       path: "sample.xlsx",
       referenceData: {
         fileKey: "BCFA2CED",
         instanceId: "https://example.com",
         key: "Khirz6zTPdfd7",
       },
       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w",
       url: "https://example.com/url-to-example-document.xlsx",
     })
   }
   
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestReferenceSource,
     },
   })
   ```
