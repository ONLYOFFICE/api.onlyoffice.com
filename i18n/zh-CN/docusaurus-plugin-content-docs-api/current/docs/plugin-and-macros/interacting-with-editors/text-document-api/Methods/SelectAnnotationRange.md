# SelectAnnotationRange

使用给定的批注选择文档中的文本。

## 语法

```javascript
expression.SelectAnnotationRange(annotation);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| annotation | 必需 | [TextAnnotation](../Enumeration/TextAnnotation.md) |  | 批注选择对象。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod("SelectAnnotationRange", [{
    paragraphId: "p1",
    rangeId: "a1",
    name: "grammar"
}]);
```
