# onAddComment

使用 [AddComment](../../text-document-api/Methods/AddComment.md) 方法向文档添加批注时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | 定义包含批注数据的批注对象。 |

```javascript
window.Asc.plugin.attachEditorEvent("onAddComment", (comment) => {
    Comments.push(comment);
    $('#scrollable-container-id').append(makeComment(comment.Id, comment));
});
```

