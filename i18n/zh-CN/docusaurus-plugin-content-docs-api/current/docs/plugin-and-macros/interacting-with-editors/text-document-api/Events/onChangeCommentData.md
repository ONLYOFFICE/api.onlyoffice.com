# onChangeCommentData

使用 [ChangeComment](../../../../../docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/ChangeComment.md) 方法更改指定评论时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | 定义包含批注数据的批注对象。 |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeCommentData", (comment) => {
    console.log("event: onChangeCommentData");
    console.log("Id: " + comment.Id);
    console.log("UserName: " + comment.Data.UserName);
    console.log("Text: " + comment.Data.Text);
    console.log("Time: " + comment.Data.Time);
    console.log("Solved: " + comment.Data.Solved);
    console.log("QuoteText: " + comment.Data.QuoteText);
});
```

