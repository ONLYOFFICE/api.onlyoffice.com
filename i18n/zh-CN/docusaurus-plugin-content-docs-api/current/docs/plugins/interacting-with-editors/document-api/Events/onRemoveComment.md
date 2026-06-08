# onRemoveComment

使用 [RemoveComments](../../../../../docs/plugins/interacting-with-editors/document-api/Methods/RemoveComments.md) 方法删除指定评论时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | 定义包含批注数据的批注对象。 |

## 示例

```javascript
window.Asc.plugin.attachEditorEvent("onRemoveComment", (comment) => {
    console.log("event: onRemoveComment");
    console.log("Id: " + comment.Id);
});
```
