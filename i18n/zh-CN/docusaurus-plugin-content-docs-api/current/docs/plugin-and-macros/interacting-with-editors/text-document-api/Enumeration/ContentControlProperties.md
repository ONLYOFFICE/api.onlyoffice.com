# ContentControlProperties

内容控件属性。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Alias | string | 别名属性。 |
| Appearance | number | 定义内容控件是否显示为边界框（**1**）或不显示（**2**）。 |
| Border | Object | 边框属性。 |
| Border.Color | [Color](../Enumeration/Color.md) | RGBA 格式的边框颜色。 |
| Color | [Color](../Enumeration/Color.md) | RGBA 格式的当前内容控件颜色。 |
| Id | string | 内容控件的唯一标识符。可用于搜索特定内容控件并在代码中引用它。 |
| InternalId | string | 内容控件的唯一内部标识符。 |
| Lock | [ContentControlLock](../Enumeration/ContentControlLock.md) | 定义是否可以删除和/或编辑内容控件的值。 |
| PlaceHolderText | string | 内容控件占位符文本。 |
| Shd | Object | 背景底纹属性。 |
| Shd.Color | [Color](../Enumeration/Color.md) | RGBA 格式的底纹颜色。 |
| Tag | string | 分配给内容控件的标签。相同的标签可以分配给多个内容控件，以便在代码中引用它们。 |
## 类型

Object



## 示例

```javascript
let contentControlPr = {
    "Id" : 7,
    "Tag" : "{tag}",
    "Lock" : 0
};
window.Asc.plugin.executeMethod ("AddContentControl", [1, contentControlPr]);
```
