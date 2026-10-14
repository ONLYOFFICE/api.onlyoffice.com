# GetText

返回当前数学元素的内部文本。

## 语法

```javascript
expression.GetText(format);
```

`expression` - 表示 [ApiMath](../ApiMath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 可选 | "unicode" \| "latex" | "unicode" | 返回文本时所采用的格式。 |

## 返回值

string

## 示例

在演示文稿中以 Unicode 线性文本或 LaTeX 格式读取数学公式的文本表示形式。

```javascript editor-pptx
// Get the formula of an equation back as plain text or as LaTeX in a presentation.

// Build a fraction equation, then read it back both as unicode text and as LaTeX.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const math = Api.CreateMath("dx/dy", "unicode");
paragraph.AddElement(math);
const unicodeText = math.GetText("unicode");
const latexText = math.GetText("latex");

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Unicode: " + unicodeText + ", LaTeX: " + latexText);
docContent.Push(paragraph2);
```
