# Event_ContentControl

内容控件对象。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Alias | string | 内容控件的别名。 |
| Appearance | 1 \| 2 | 内容控件的可视化类型：**1** - 边框（边界框），**2** - 隐藏。 |
| Border | Object | 内容控件的边框颜色。仅在设置了边框颜色时存在。 |
| Color | Object | 内容控件的标签颜色。仅在设置了标签颜色时存在。 |
| FormKey | string | 唯一的表单键。仅在内容控件为表单字段时存在。 |
| FormValue | string \| boolean \| Date | 表单字段的当前值。仅在内容控件为表单字段时存在。 |
| Id | string | 唯一的内容控件标识符。可用于搜索特定内容控件并在代码中引用它。 |
| InternalId | string | 内容控件的唯一内部标识符。用于所有内容控件的操作。 |
| Lock | [Event_ContentControlLock](../Enumeration/Event_ContentControlLock.md) | 定义是否可以删除和/或编辑内容控件的值。 |
| RadioGroup | string | 单选按钮的组键。仅在内容控件为单选按钮表单字段时存在。 |
| Shd | Object | 内容控件的底纹颜色。仅在设置了底纹颜色时存在。 |
| Tag | string | 分配给内容控件的标签。相同的标签可以分配给多个内容控件，以便您在代码中引用它们。 |

## 示例

```javascript
let contentControl = {
    "Tag": "Document",
    "Id": 0,
    "Lock": 0,
    "InternalId": "1_713"
};
```
