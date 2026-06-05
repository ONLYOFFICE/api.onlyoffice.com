# SelectAnnotationRange

使用给定的注解在文档中选择文本。

:::note
此功能在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SelectAnnotationRange(annotation);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| annotation | 必需 | [TextAnnotation](../Enumeration/TextAnnotation.md) |  | 注解选择对象。 |

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
