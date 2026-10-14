# SetFontSize

设置当前文本范围中字符的字号。

## 语法

```javascript
expression.SetFontSize(fontSize);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontSize | 必需 | [hps](../../Enumeration/hps.md) \| null |  | 文本大小值，以半磅（1/144 英寸）为单位。传递 *null* 可移除字号。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

为文本范围内的所有文本块设置字号。

```javascript editor-pptx
// Useful for resizing text within a selection independently of the rest.

// Apply a 36 pt font size to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be displayed at 36 pt using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetFontSize(36);
```
