---
sidebar_position: -2
---

# 处理评审更改

管理来自外部来源的审核流程。

## 它是如何运作的

1. 当用户单击自定义界面中的 **接受/拒绝** 按钮时，将执行 AcceptReviewChanges / RejectReviewChanges 方法来接受/拒绝编辑器中的选定更改：

   ``` ts
   $("#accept").on("click", () => {
     connector.executeMethod("AcceptReviewChanges")
   })
   $("#reject").on("click", () => {
     connector.executeMethod("RejectReviewChanges")
   })
   ```

2. 当用户单击自定义界面中的箭头按钮时，将执行 MoveToNextReviewChange 方法，在下一次和上一次审阅更改之间移动：

   ``` ts
   $("#prev").on("click", () => {
     connector.executeMethod("MoveToNextReviewChange", [false])
   })
   $("#next").on("click", () => {
     connector.executeMethod("MoveToNextReviewChange")
   })
   ```

> 请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**.
>
> 此类是一项附加功能，默认情况下不包含在ONLYOFFICE文档开发者版中，需要额外付费。 如果您有任何疑问，请通过 [sales@onlyoffice.com](mailto:sales@onlyoffice.com)联系我们的销售团队。
