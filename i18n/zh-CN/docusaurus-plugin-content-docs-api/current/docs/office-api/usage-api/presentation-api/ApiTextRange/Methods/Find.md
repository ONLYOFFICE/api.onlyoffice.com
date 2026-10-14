# Find

在此范围内查找给定文本的第一个匹配项，并将其作为新的 ApiTextRange 返回。如果未找到文本，则返回 null。

## 语法

```javascript
expression.Find(findWhat, after, matchCase, wholeWords);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| findWhat | 必需 | string |  | 要搜索的文本。 |
| after | 可选 | number | 1 | 在此范围内开始搜索的位置（从 1 开始）。 |
| matchCase | 可选 | boolean | false | 区分大小写搜索。 |
| wholeWords | 可选 | boolean | false | 仅匹配整个单词。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在文本范围内搜索单词并返回其子范围。

```javascript editor-pptx
// Useful for locating a substring and acting on its exact position.

// Find the word "World" in the shape text and display its start position.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello World");
slide.AddObject(shape);

const range = shape.GetTextRange();
const found = range.Find("World");

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
const msg = "Found at pos " + found.GetStartPos() + ": " + found.GetText();
shape2.GetDocContent().GetElement(0).AddText(msg);
slide.AddObject(shape2);
```
