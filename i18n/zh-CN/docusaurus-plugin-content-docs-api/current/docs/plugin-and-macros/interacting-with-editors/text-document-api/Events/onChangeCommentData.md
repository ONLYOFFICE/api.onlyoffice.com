# onChangeCommentData

使用 [ChangeComment](../../text-document-api/Methods/ChangeComment.md) 方法更改指定批注时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | 定义包含批注数据的批注对象。 |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeCommentData", (comment) => {
    changeComment(comment);
});
```

