# SetTextPr

为当前文本范围设置文本属性。

## 语法

```javascript
expression.SetTextPr(textPr);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将应用于当前范围的文本属性。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

将 ApiTextPr 对象应用于文本范围内的所有文本块。

```javascript editor-pptx
// Useful for applying a reusable formatting profile to a selection.

// Build an ApiTextPr with bold and large font, then apply it to the range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will receive custom formatting via SetTextPr.");
slide.AddObject(shape);

const helperRun = Api.CreateRun();
const textPr = helperRun.GetTextPr();
textPr.SetBold(true);
textPr.SetFontSize(32);

const range = shape.GetTextRange();
range.SetTextPr(textPr);
```
