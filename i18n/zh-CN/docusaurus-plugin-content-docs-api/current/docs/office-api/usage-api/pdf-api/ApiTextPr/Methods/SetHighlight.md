# SetHighlight

指定添加到文本属性并作为背景应用于当前文本块/范围/段落内容的高亮颜色。

## 语法

```javascript
expression.SetHighlight(sColor);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | 必需 | [highlightColor](../../Enumeration/highlightColor.md) |  | 可用的突出显示颜色。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在 PDF 中为文本添加背景颜色。

```javascript editor-pdf
// How do I add highlighting to text in a PDF?

// Apply a colored background to selected text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetHighlight("lightGray");
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the text highlighted with light gray color using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);
```
