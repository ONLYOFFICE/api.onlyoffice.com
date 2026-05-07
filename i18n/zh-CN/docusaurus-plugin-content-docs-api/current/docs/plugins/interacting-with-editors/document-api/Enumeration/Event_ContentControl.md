# Event_ContentControl

内容控件对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Id | string | 唯一的内容控件标识符。可用于搜索特定内容控件并在代码中引用它。 |
| InternalId | string | 内容控件的唯一内部标识符。用于所有内容控件的操作。 |
| Lock | [Event_ContentControlLock](../Enumeration/Event_ContentControlLock.md) | 定义是否可以删除和/或编辑内容控件的值。 |
| Tag | string | 分配给内容控件的标签。相同的标签可以分配给多个内容控件，以便您在代码中引用它们。 |
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
