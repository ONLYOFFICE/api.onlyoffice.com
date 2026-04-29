---
sidebar_position: -6
---

# 插入外部数据

下图和步骤说明了在ONLYOFFICE 文档中如何通过外部链接将一个电子表格的数据插入到另一个电子表格中。

![插入外部数据](/assets/images/editor/insert-external-data.svg)

1. 用户从源电子表格的**文档编辑器**中将单元格值复制到剪贴板。连同可见内容，特殊元数据也会被复制。
2. 用户将复制的数据粘贴到目标电子表格的**文档编辑器**中。
3. **文档编辑器**将元数据发送到**文档管理器**，请求源文件的链接。
4. **文档管理器**将源电子表格的链接返回给**文档编辑器**。
5. **文档编辑器**向**文档编辑服务**发送下载请求。
6. **文档编辑服务**从**文档存储服务**下载源电子表格。
7. **文档编辑服务**将必要的数据发送回目标电子表格的**文档编辑器**以供显示。

## 实际操作方法

1. 创建要从中复制数据的源电子表格。

2. 在源电子表格的初始化配置中指定[`document.referenceData`](../../usage-api/config/document/document.md#referencedata)参数：

   ``` ts
   const config = {
     document: {
       referenceData: {
         fileKey: "BCFA2CED",
         instanceId: "https://example.com",
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 当用户从源电子表格复制数据时，剪贴板会接收到以下内容：

   - 工作表名称和单元格范围——稍后用于刷新复制的数据；
   - [`document.referenceData`](../../usage-api/config/document/document.md#referencedata)对象——用于验证是否可以通过外部链接向目标电子表格插入数据；
   - 文件名——用于在编辑器中显示公式。

4. 创建要插入外部数据的目标电子表格。

5. 在目标电子表格的初始化配置中指定[`onRequestReferenceData`](../../usage-api/config/events.md#onrequestreferencedata)事件处理程序。这将启用*粘贴链接*和*更新值*按钮：

   ``` ts
   const config = {
     events: {
       onRequestReferenceData,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

6. 如果剪贴板包含步骤3中的源电子表格元数据，并且目标电子表格配置包含`onRequestReferenceData`处理程序，则*粘贴链接*按钮将出现在粘贴对话框中。

   <img alt="Paste link" src="/assets/images/editor/paste-link.png" width="550px" />

7. 当用户点击*粘贴链接*时，公式将插入到当前单元格中，并且`referenceData`对象将保存到目标文件中。公式格式如下：

   ``` txt
   ='[fileName]sheetName'!cell
   ```

   | 参数      | 类型   | 示例      | 描述                       |
   | --------- | ------ | --------- | -------------------------- |
   | cell      | string | E5        | 从中复制数据的单元格。     |
   | fileName  | string | new\.xlsx | 从中复制数据的文件名。     |
   | sheetName | string | Sheet1    | 从中复制数据的工作表名称。 |

   数据更新请求将发送到源文件URL。

   :::note
   您也可以手动输入此格式的公式——外部数据将以相同方式插入。但在这种情况下，`onRequestReferenceData`事件仅使用`path`参数触发。
   :::

8. 当用户点击*数据*选项卡中*外部链接*对话框的*更新值*按钮以刷新源文件数据时，[`onRequestReferenceData`](../../usage-api/config/events.md#onrequestreferencedata)事件将触发。`data`参数包含一个对象，其中包含来自源文件的唯一文件数据、文件路径或名称以及文件URL。

   :::note
   要将数据发送到[`setReferenceData`](../../usage-api/methods.md#setreferencedata)方法，请首先通过`referenceData`搜索文件。如果该字段不存在或找不到文件，则回退到`path`或`link`参数。
   :::

   ``` ts
   function onRequestReferenceData(event) {
     const link = event.data.link;
     const referenceData = event.data.referenceData;
     const path = event.data.path;
   }
   ```

   <img alt="Update values" src="/assets/images/editor/update-values.png" width="700px" />

9. 要刷新数据，请调用[`setReferenceData`](../../usage-api/methods.md#setreferencedata)方法。调用时必须包含[`token`](./security.md)以验证参数。

   :::note
   此方法仅在用户对源文件具有权限时执行。
   :::

   ``` ts
   docEditor.setReferenceData({
     fileType: "xlsx",
     key: "Khirz6zTPdfd7",
     path: "sample.xlsx",
     referenceData: {
       fileKey: "BCFA2CED",
       instanceId: "https://example.com",
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w",
     url: "https://example.com/url-to-example-document.xlsx",
   });
   ```


## 使用外部链接

1. 在初始化配置中指定[`onRequestOpen`](../../usage-api/config/events.md#onrequestopen)事件处理程序，以显示*打开源*按钮。当用户点击*打开源*打开外部链接时，此事件将触发。

   `data`参数包含一个对象，其中包含唯一文件数据、文件路径和新浏览器选项卡名称。要在新选项卡中打开引用的外部文件，请使用源URL和`windowName`调用[`window.open`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)。

   <img alt="Open source" src="/assets/images/editor/open-source.png" width="498px" />

   示例：

   ``` ts
   function onRequestOpen(event) {
     const path = event.data.path;
     const referenceData = event.data.referenceData;
     const windowName = event.data.windowName;
     window.open("https://example.com/external-url.docx", windowName);
   }

   const config = {
     events: {
       onRequestOpen,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```


2. 在初始化配置中指定[`onRequestReferenceSource`](../../usage-api/config/events.md#onrequestreferencesource)事件处理程序，以显示*更改源*按钮。当用户点击*更改源*更改外部链接时，此事件将触发。如果未声明该事件，*更改源*按钮将不会显示。

   `data`参数包含一个对象，其中包含唯一文件数据和文件路径或名称。点击按钮时，调用[`setReferenceSource`](../../usage-api/methods.md#setreferencesource)方法来更改外部数据的源。调用时必须包含[`token`](./security.md)以验证参数。

   :::note
   要将数据发送到`setReferenceSource`方法，请首先通过`referenceData`搜索文件。如果该字段不存在或找不到文件，则回退到`path`参数。
   :::

   <img alt="Change source" src="/assets/images/editor/change-source.png" width="498px" />

   示例：

   ``` ts
   function onRequestReferenceSource(event) {
     const referenceData = event.data.referenceData;
     const path = event.data.path;

     docEditor.setReferenceSource({
       fileType: "xlsx",
       key: "Khirz6zTPdfd7",
       path: "sample.xlsx",
       referenceData: {
         fileKey: "BCFA2CED",
         instanceId: "https://example.com",
       },
       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w",
       url: "https://example.com/url-to-example-document.xlsx",
     });
   }

   const config = {
     events: {
       onRequestReferenceSource,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```
