# MoveCursorToAnnotationRange

将光标移动到指定批注范围的开头或结尾，但不选中该范围。

:::note
此功能在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.MoveCursorToAnnotationRange(annotation, isBegin);
```

`expression` - 表示 [Api](../document-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| annotation | 必需 | [TextAnnotation](../Enumeration/TextAnnotation.md) |  | 批注对象。 |
| isBegin | 可选 | boolean | true | 如果为 true，则移动到范围的开头；否则移动到结尾。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod("MoveCursorToAnnotationRange", [{
    paragraphId: "p1",
    rangeId: "a1",
    name: "grammar"
}, true]);
```
