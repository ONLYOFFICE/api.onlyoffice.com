# EnterText

在光标位置向文档添加文本。

## 语法

```javascript
expression.EnterText(text);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要添加到文档的文本。 |

## 返回值

boolean

## 示例

在形状文本范围内的当前光标位置插入文本。

```javascript editor-pptx
// The cursor must be positioned first using MoveCursorToPos before calling EnterText.

// Create a shape, place the cursor mid-text, and insert a word at that position.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("Hello World");
range.MoveCursorToPos(6);
presentation.EnterText("Beautiful ");
```
