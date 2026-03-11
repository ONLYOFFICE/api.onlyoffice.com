# RemoveAnnotationRange

从文档中删除特定的批注范围。

## 语法

```javascript
expression.RemoveAnnotationRange(annotation);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| annotation | 必需 | [TextAnnotation](../Enumeration/TextAnnotation.md) |  | 批注删除对象。 |
| annotation.all | 可选 | boolean | false | 可选参数，用于删除当前段落所有批注的标志。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod("RemoveAnnotationRange", [{
    paragraphId: "p1",
    rangeId: "a1",
    name: "grammar"
}]);
```
