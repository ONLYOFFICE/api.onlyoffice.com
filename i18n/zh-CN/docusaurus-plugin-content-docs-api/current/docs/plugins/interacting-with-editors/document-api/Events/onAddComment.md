# onAddComment

使用 [AddComment](../../../../../docs/plugins/interacting-with-editors/document-api/Methods/AddComment.md) 方法向文档添加评论时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | 定义包含批注数据的批注对象。 |

## 示例

```javascript
window.Asc.plugin.attachEditorEvent("onAddComment", (comment) => {
    console.log("event: onAddComment");
    console.log("Id: " + comment.Id);
    console.log("UserName: " + comment.Data.UserName);
    console.log("Text: " + comment.Data.Text);
    console.log("Time: " + comment.Data.Time);
    console.log("Solved: " + comment.Data.Solved);
    console.log("QuoteText: " + comment.Data.QuoteText);
});
```
