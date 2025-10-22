# 删除批注回调

当使用[删除批注](../../text-document-api/Methods/RemoveComments.md)方法移除指定批注时调用的回调函数。

## 参数

| **名称** | **数据类型** | **说明** |
| --------- | ------------- | ----------- |
| comment | [事件_批注](../Enumeration/Event_comment.md) | 包含批注数据的批注对象。 |

```javascript
window.Asc.plugin.attachEditorEvent("onRemoveComment", (comment) => {
    removeComments([comment.Id]);
});
```

