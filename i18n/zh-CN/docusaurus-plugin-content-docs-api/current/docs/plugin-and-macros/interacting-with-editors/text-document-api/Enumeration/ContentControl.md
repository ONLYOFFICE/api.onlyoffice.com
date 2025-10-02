# 内容控件

内容控件对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Id | String | 内容控件的唯一标识符。可用于搜索特定控件并在代码中引用。 |
| InternalId | String | 内容控件的内部唯一标识符。用于所有内容控件的操作。 |
| Lock | [内容控件锁定类型](../Enumeration/ContentControlLock.md) | 定义是否可以删除和/或编辑内容控制的值：0 - 仅可删除，1 - 不可删除或编辑，2 - 仅可编辑，3 - 完全访问 |
| Tag | String | 控件标签。可批量标记多个控件以便代码引用。 |
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
