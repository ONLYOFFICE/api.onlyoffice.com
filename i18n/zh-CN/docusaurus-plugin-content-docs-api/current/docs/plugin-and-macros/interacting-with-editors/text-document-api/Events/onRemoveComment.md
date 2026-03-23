# onRemoveComment

使用 [RemoveComments](../../text-document-api/Methods/RemoveComments.md) 方法删除指定批注时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | 定义包含批注数据的批注对象。 |

```javascript
window.Asc.plugin.attachEditorEvent("onRemoveComment", (comment) => {
    removeComments([comment.Id]);
});
```

