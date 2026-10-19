# GetTextRange

返回覆盖当前绘图对象全部文本的文本范围。如果绘图对象还没有文本主体，则会创建一个。

继承自 [ApiDrawing.GetTextRange](../../ApiDrawing/Methods/GetTextRange.md)。

## 语法

```javascript
expression.GetTextRange();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

通过文本区域读取 PDF 页面上图形对象的全部文本。

```javascript editor-pdf
// The range covers the entire text body of the drawing, so no positions have to be given.

// Read the text covered by the range and show it in a second drawing.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 150 * 36000, 65 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("GetTextRange result: " + range.GetText());
```
