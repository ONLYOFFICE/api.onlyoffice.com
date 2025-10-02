# 添加批注回调

当使用[添加批注](../../text-document-api/Methods/AddComment.md)方法向文档添加批注时调用的函数。

## 参数

| **名称** | **数据类型** | **说明** |
| --------- | ------------- | ----------- |
| comment | [事件_批注](../Enumeration/Event_comment.md) | 包含批注数据的批注对象。 |

```javascript
window.Asc.plugin.attachEditorEvent("onAddComment", (comment) => {
    Comments.push(comment);
    $('#scrollable-container-id').append(makeComment(comment.Id, comment));
});
```

