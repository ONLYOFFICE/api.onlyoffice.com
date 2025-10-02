# 事件_内容控件

内容控件对象。

## 属性

| 名称 | 类型 | 说明 |
| ---- | ---- | ----------- |
| Id | string | 内容控件的唯一标识符，可用于在代码中查找并引用该内容控件。 |
| InternalId | string | 内容控件的唯一内部标识符，所有针对内容控件的操作均使用该标识符。 |
| Lock | [事件_内容控件锁定](../Enumeration/Event_ContentControlLock.md) | 用于定义是否允许删除和/或编辑该内容控件的值。 |
| Tag | string | 分配给内容控件的标签，可将相同标签分配给多个内容控件，以便在代码中统一引用。 |
## 类型

Object（对象）



## 示例

```javascript
let contentControl = {
    "Tag": "Document",
    "Id": 0,
    "Lock": 0,
    "InternalId": "1_713"
};
```
