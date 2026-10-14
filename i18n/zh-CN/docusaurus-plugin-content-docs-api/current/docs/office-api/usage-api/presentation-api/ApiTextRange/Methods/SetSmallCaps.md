# SetSmallCaps

指定当前文本范围中的所有小写字母字符仅格式化显示为其对应的大写字母字符，这些大写字母比为此文本指定的实际字体大小小两磅。

## 语法

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | 必需 | boolean \| null |  | 指定当前范围的内容是否以小两磅的大写字母形式显示。传递 *null* 可移除小型大写字母。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

为文本范围内的所有文本块应用小型大写字母格式。

```javascript editor-pptx
// Useful for a stylistic case change without retyping the text.

// Apply small caps formatting to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be displayed in small caps using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetSmallCaps(true);
```
