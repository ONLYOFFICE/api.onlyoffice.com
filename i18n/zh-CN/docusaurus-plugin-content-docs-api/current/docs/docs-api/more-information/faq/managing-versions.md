---
sidebar_position: -4
---

# Managing versions

## 处理文档历史事件时可以使用哪些方法？

可以使用 [onRequestHistory](../../usage-api/config/events.md#onrequesthistory) 函数显示文档历史记录（使用 *events.onRequestHistory* 事件）。若未启用相关功能，ONLYOFFICE 文档界面将不会显示**版本历史**菜单选项（位于**协作**标签页的**版本历史**按钮）。

一旦在配置文件中调用此函数（连同 [refreshHistory](../../usage-api/methods.md#refreshhistory) 方法），就会显示菜单选项和按钮，并且程序将显示现有文档版本。文档版本历史中显示的数据可以从**文档编辑服务**[回调](../../usage-api/callback-handler.md#status-2-3) 中获取。

所以文档版本历史显示的实现应该是这样的：

1. 回调处理程序从**文档编辑服务**接收到 *status* 为 **2** 的响应中的数据（这意味着文档的所有用户都关闭了它并且当前版本已经编译）。此响应将如下所示：

``` ts
const data = {
  key: "2745492410",
  status: 2,
  users: ["F89d8069ba2b"],
  url: "https://documentserver/url-to-edited-document.docx",
  history: {
    serverVersion,
    changes,
  },
}
  ```

2. 回调处理程序解析接收到的数据并将其传递给配置文件（它不需要解析可供*onRequestHistory*函数使用的 *history.serverVersion* 和 *history.changes* 数据）。

3. 配置文件必须包含以下部分：*events.onRequestHistory* 和 *onRequestHistory* 函数本身：

   ``` ts
   function onRequestHistory() {
     docEditor.refreshHistory({
       currentVersion: 2,
       history: [
         {
           created: "2019-02-01 3:03 PM",
           key: "2745492410",
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
   }
  
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestHistory,
     },
   })
   ```

   其中

   - *currentVersion* 是最新版本号，将作为当前版本显示在编辑器界面中；
   - *history* 是对象数组，每个对象代表一个文档保存的单个版本：
    - *history.changes* 和 *history.serverVersion* 和 *history.serverVersion* 是从**文档编辑服务**接收到的数据；
    - *history.user.id* 是最后一个为指定版本保存文档更改的用户的id；
    - *history.created* 是文档指定版本编译的时间（对应收到 *status* 为 **2** 的时间）；
    - *history.version* 是指定版本的编号，将显示在文档编辑器界面的版本历史记录部分。

4. 使用指定的所有上述参数打开文档。切换到**文件** > **版本历史** 菜单选项（或 **协作** > **版本历史**），将显示版本数据。

> *history.changes* 对象在版本中显示为较小的更改（修订）。

## 如何显示具有突出显示更改的文档？

**文档编辑服务**将文档的所有临时更改保存到单独的文件中，一旦编译版本并收到 *status* 为 **2**，带有版本之间所有更改的存档链接也将发送到回调处理程序。

因此，如果您想额外显示版本之间的差异，您还必须使用 [onRequestHistoryData](../../usage-api/config/events.md#onrequesthistorydata)  函数（用 *events.onRequestHistoryData* 事件），该函数必须包含**文档编辑服务**[回调](../../usage-api/callback-handler.md#changeshistory)返回的数据。

除了 [上述问题](#which-methods-can-be-used-when-working-with-the-document-history-events) 中描述的操作外，您还需要：

- 解析来自**文档编辑服务**收到的 *status* 为 **2**的响应的 *changesurl* 参数：

  ``` ts
  const config = {
    changesurl: "https://documentserver/url-to-changes.zip",
    key: "2745492410",
    status: 2,
    users: ["F89d8069ba2b"],
    url: "https://documentserver/url-to-edited-document.docx",
    history: {
      serverVersion,
      changes,
    },
  }
  ```

- 将 *onRequestHistoryData* 函数连同 *setHistoryData* 方法和 *events.onRequestHistoryData* 事件一起添加到配置文件中：

  ``` ts
  function onRequestHistoryData(event) {
    const version = event.data
    docEditor.setHistoryData({
      changesUrl: "https://example.com/url-to-changes.zip",
      key: "2745492410",
      previous: {
        key: "af86C7e71Ca8",
        url: "https://example.com/url-to-the-previous-version-of-the-document.docx",
      },
      url: "https://documentserver/url-to-edited-document.docx",
      version,
    })
  }
  
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    events: {
      onRequestHistoryData,
    },
  })
  ```

  包含指向当前文档版本 (*url*) 和先前文档版本 (*previous.url*) 的有效链接以及 ID（*key* 和 *previous.key*）的对象必须传递给配置文件。 *changesUrl* 存档文件也必须可用并可从浏览器下载，才能显示更改。

## 为什么强制保存文档后，文档历史记录中未显示新版本？

ONLYOFFICE文档突出显示从当前文档会话开始时所做的更改，而不是从文档版本开始时所作的更改。即使在一个会话中创建了多个文档版本，此会话中的所有更改也将突出显示。因此您无法在文档历史记录中看到使用[强制保存选项](../../get-started/how-it-works/saving-file.md#force-saving)创建的文档版本。
