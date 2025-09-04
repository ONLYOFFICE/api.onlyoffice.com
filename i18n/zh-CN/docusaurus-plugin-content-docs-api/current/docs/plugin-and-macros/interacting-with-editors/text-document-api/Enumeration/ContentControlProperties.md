# 内容控件属性

内容控件属性。

## 属性

| 名称 | 类型 | 说明 |
| ---- | ---- | ----------- |
| Alias | string | 别名属性。 |
| Appearance | number | 定义内容控件是否显示为边界框：显示为边界框（**1**）或不显示为边界框（**2**）。 |
| Border | Object | 边框属性。 |
| Border.Color | [颜色](../Enumeration/Color.md) | 边框颜色，采用 RGBA 格式。 |
| Color | [颜色](../Enumeration/Color.md) | 当前内容控件的颜色，采用 RGBA 格式。 |
| Id | string | 内容控件的唯一标识符。可用于在代码中查找特定内容控件并引用它。 |
| InternalId | string | 内容控件的内部唯一标识符。 |
| Lock | [内容控件锁定](../Enumeration/ContentControlLock.md) | 用于定义是否可以删除和/或编辑该内容控件的值。 |
| PlaceHolderText | string | 内容控件的占位符文本。 |
| Shd | Object | 背景底纹属性。 |
| Shd.Color | [颜色](../Enumeration/Color.md) | 底纹颜色，采用 RGBA 格式。 |
| Tag | string | 分配给内容控件的标签。可将相同标签分配给多个内容控件，以便在代码中引用它们。 |
## 类型

Object（对象）



## 示例

```javascript
let contentControlPr = {
    "Id" : 7,
    "Tag" : "{tag}",
    "Lock" : 0
};
window.Asc.plugin.executeMethod ("AddContentControl", [1, contentControlPr]);
```
