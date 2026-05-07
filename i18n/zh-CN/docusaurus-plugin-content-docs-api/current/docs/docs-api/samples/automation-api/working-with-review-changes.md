---
sidebar_position: -2
hide_table_of_contents: true
---

import { ReviewChangesExternalToolbar } from '@site/src/components/BrowserWindow';

# 处理评审更改

使用自动化 API 从外部 UI 接受或拒绝跟踪的更改，无需用户直接操作编辑器。

:::info
文档以 **修订模式** 打开。您的代码调用 `connector.executeMethod()` 来导航和处理更改。编辑器会实时更新。
:::

<ReviewChangesExternalToolbar/>

## 它是如何运作的

1. 文档就绪时，通过 `connector.callCommand` 使用 [GetReviewReport](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetReviewReport.md) 获取评审更改的总数，并显示在计数器中：

   ``` ts
   connector.callCommand(() => {
     const doc = Api.GetDocument();
     const report = doc.GetReviewReport();
     let total = 0;
     for (const user in report) {
       total += report[user].length;
     }
     return total;
   }, (total) => {
     reviewCount = total;
     reviewIndex = total > 0 ? 1 : 0;
     updateCounter();
   });
   ```

2. 当用户单击自定义界面中的 **接受/拒绝** 按钮时，将执行 [AcceptReviewChanges](/docs/plugin-and-macros/interacting-with-editors/document-api/Methods/AcceptReviewChanges.md) / [RejectReviewChanges](/docs/plugin-and-macros/interacting-with-editors/document-api/Methods/RejectReviewChanges.md) 方法来接受/拒绝编辑器中的选定更改：

   ``` ts
   document.getElementById("accept").addEventListener("click", () => {
     connector.executeMethod("AcceptReviewChanges");
   });
   document.getElementById("reject").addEventListener("click", () => {
     connector.executeMethod("RejectReviewChanges");
   });
   ```

3. 当用户单击自定义界面中的 **上一个/下一个** 按钮时，将执行 [MoveToNextReviewChange](/docs/plugin-and-macros/interacting-with-editors/document-api/Methods/MoveToNextReviewChange.md) 方法，在评审更改之间导航：

   ``` ts
   document.getElementById("prev").addEventListener("click", () => {
     connector.executeMethod("MoveToNextReviewChange", [false]);
   });
   document.getElementById("next").addEventListener("click", () => {
     connector.executeMethod("MoveToNextReviewChange");
   });
   ```

:::note
请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**.

此类是一项附加功能，默认情况下不包含在ONLYOFFICE 文档开发者版中，需要额外付费。 如果您有任何疑问，请通过 [sales@onlyoffice.com](mailto:sales@onlyoffice.com)联系我们的销售团队。
:::
