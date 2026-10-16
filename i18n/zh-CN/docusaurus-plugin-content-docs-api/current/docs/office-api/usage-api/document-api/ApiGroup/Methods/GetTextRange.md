# GetTextRange

返回覆盖当前绘图对象全部文本的范围。如果绘图对象还没有文本主体，则会创建一个。

继承自 [ApiDrawing.GetTextRange](../../ApiDrawing/Methods/GetTextRange.md)。

## 语法

```javascript
expression.GetTextRange();
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在文档中获取覆盖形状全部文本的范围并将其设为粗体。

```javascript editor-docx
// Returns null for drawings that are not shapes, such as images or charts.

// Add a shape with text, get its text range, then apply bold formatting to it.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.GetContent().GetElement(0).AddText("ONLYOFFICE Document Builder");
const range = drawing.GetTextRange();
range.SetBold(true);
```
