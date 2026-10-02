# SetIndLeft

设置段落左侧缩进。

继承自 [ApiParaPr.SetIndLeft](../../ApiParaPr/Methods/SetIndLeft.md)。

## 语法

```javascript
expression.SetIndLeft(nValue);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 段落左侧缩进值，以磅的二十分之一（1/1440 英寸）为单位。 |

## 返回值

boolean

## 示例

在 PDF 中为段落添加左边距间距。

```javascript editor-pdf
// How do I indent text from the left edge in a PDF?

// Push paragraph content away from the left side in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetIndLeft(2880);

paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any indent set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
docContent.Push(paragraph);
page.AddObject(shape);
```
