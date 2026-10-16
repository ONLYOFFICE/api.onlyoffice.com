# SetFontFamily

为当前 TextRange 设置字体系列。

## 语法

```javascript
expression.SetFontFamily(fontFamily);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontFamily | 可选 | string \| null |  | 用于当前文本范围的一个或多个字体系列。传递 *null* 或省略此参数可移除字体系列。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

为文本范围内的所有文本块设置字体系列。

```javascript editor-pptx
// Useful for applying a custom typeface to a specific selection.

// Apply the "Comic Sans MS" font to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be displayed in Comic Sans MS using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetFontFamily("Comic Sans MS");
```
