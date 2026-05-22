# Copy

复制当前形状。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

复制形状并将副本添加到文档中的同一段落。

```javascript editor-docx
// How do I make a copy of a shape in a document?

// Clone a shape so that two identical shapes appear in a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("flowChartMagneticTape", 130 * 36000, 65 * 36000, fill, stroke);
paragraph.AddDrawing(shape);

let copyShape = shape.Copy();
paragraph.AddDrawing(copyShape);
```
