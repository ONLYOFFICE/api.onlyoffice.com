# SetCaps

指定当前文本范围中的任何小写字符仅格式化显示为其对应的大写字母字符。

## 语法

```javascript
expression.SetCaps(isCaps);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | 必需 | boolean \| null |  | 指定范围内容是否以大写形式显示。传递 *null* 可移除大写设置。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

为文本范围内的所有文本块应用全部大写格式。

```javascript editor-pptx
// Useful for changing letter case display without altering the underlying text.

// Apply all caps formatting to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be displayed in all caps using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetCaps(true);
```
