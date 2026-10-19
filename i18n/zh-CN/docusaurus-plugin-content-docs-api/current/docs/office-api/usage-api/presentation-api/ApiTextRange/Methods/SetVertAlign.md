# SetVertAlign

指定将应用于范围内容的对齐方式，相对于范围文本的默认外观：**"baseline"** - 当前文本范围中的字符将按默认文本基线对齐。**"subscript"** - 当前文本范围中的字符将对齐到默认文本基线下方。**"superscript"** - 当前文本范围中的字符将对齐到默认文本基线上方。

## 语法

```javascript
expression.SetVertAlign(type);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "baseline" \| "subscript" \| "superscript" \| null |  | 应用于文本内容的垂直对齐类型。传递 *null* 可移除垂直对齐。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

将文本范围内文本块的垂直对齐方式设置为上标。

```javascript editor-pptx
// Useful for creating superscript or subscript effects on part of text.

// Apply superscript vertical alignment to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.AddText("2", "after");

shape.GetTextRange().GetRange(4, 5).SetVertAlign("superscript");
```
