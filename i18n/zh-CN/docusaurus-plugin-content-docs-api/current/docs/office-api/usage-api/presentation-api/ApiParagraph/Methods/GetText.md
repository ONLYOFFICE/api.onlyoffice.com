# GetText

返回段落文本。

## 语法

```javascript
expression.GetText(options);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | object |  | 返回文本的格式选项。 |
| options.Numbering | 可选 | boolean | false | 定义结果字符串是否包含编号。 |
| options.Math | 可选 | boolean | false | 定义结果字符串是否包含数学表达式。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何字符串。默认分隔符为 “\r”。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符（不适用于编号）。可以使用任何字符串。默认符号为 “\t”。 |

## 返回值

string

## 示例

```javascript editor-pptx
// How do I retrieve the plain text of a paragraph inside a shape in a presentation?

// Extract a paragraph's text and display it in a second paragraph within the same shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Sample paragraph text.");
const text = paragraph.GetText();
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Paragraph text: " + text);
docContent.Push(infoParagraph);
slide.AddObject(shape);
```
