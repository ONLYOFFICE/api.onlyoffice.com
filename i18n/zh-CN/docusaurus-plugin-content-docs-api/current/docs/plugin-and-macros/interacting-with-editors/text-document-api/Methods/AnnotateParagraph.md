# AnnotateParagraph

向指定段落添加批注。

## 语法

```javascript
expression.AnnotateParagraph(data);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | Object |  | 指定批注内容的批注数据。 |
| data.type | 必需 | string |  | 批注操作的类型（例如，`"highlightText"`）。 |
| data.name | 可选 | string |  | 批注的可选名称。 |
| data.paragraphId | 必需 | string |  | 被批注段落的 ID。 |
| data.recalcId | 必需 | string |  | 段落重新计算 ID。 |
| data.ranges | 可选 | [TextAnnotationRange](../Enumeration/TextAnnotationRange.md)[] |  | 要高亮显示的文本范围数组（用于 highlightText 类型） |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod("AnnotateParagraph", [{
    type: "highlightText",
    name: "grammar",
    paragraphId: "p1",
    recalcId: "r12",
    ranges: [
        { start: 5, length: 10, id: "a1" }
    ]
}]);
```
