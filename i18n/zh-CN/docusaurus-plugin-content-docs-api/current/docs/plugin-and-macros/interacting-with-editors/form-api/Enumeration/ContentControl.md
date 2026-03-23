# ContentControl

内容控件对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Id | string | 内容控件的唯一标识符。可用于搜索特定内容控件并在代码中引用它。 |
| InternalId | string | 内容控件的唯一内部标识符。用于所有内容控件操作。 |
| Lock | [ContentControlLock](../Enumeration/ContentControlLock.md) | 定义是否可以删除和/或编辑内容控件的值：0 - 仅删除，1 - 不可删除或编辑，2 - 仅编辑，3 - 完全访问。 |
| Tag | string | 分配给内容控件的标签。相同的标签可以分配给多个内容控件，以便在代码中引用它们。 |
## 类型

Object



## 示例

```javascript
let contentControl = {
    "Tag": "Document",
    "Id": 0,
    "Lock": 0,
    "InternalId": "1_713"
};
```
