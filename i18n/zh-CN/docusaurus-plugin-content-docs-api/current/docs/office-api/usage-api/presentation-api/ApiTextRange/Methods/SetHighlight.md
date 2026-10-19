# SetHighlight

指定作为背景应用于当前范围内容的突出显示颜色。

## 语法

```javascript
expression.SetHighlight(colorName);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| colorName | 必需 | [highlightColor](../../Enumeration/highlightColor.md) |  | 未提供描述。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

使用命名颜色突出显示范围内的文本。

```javascript editor-pptx
// Useful for drawing attention to a specific portion of text.

// Apply a red highlight to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be highlighted in yellow using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetHighlight("red");
```
