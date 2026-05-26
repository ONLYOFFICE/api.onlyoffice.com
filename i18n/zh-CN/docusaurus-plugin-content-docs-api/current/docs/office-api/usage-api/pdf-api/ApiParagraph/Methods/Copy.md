# Copy

创建段落副本。忽略批注、脚注引用和复杂域。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

在 PDF 中复制段落。

```javascript editor-pdf
// How do I make a copy of a paragraph in a PDF?

// Create a duplicate and add it to a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
docContent.RemoveAllElements();

const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is just a sample text that was copied.");
docContent.Push(paragraph);

const copyParagraph = paragraph.Copy();
docContent.Push(copyParagraph);
page.AddObject(shape);
```
