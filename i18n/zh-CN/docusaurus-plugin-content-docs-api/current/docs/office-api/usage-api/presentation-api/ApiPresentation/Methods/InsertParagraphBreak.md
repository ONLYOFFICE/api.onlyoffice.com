# InsertParagraphBreak

在光标位置向文档添加段落。

## 语法

```javascript
expression.InsertParagraphBreak();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在形状内的当前光标位置插入段落分隔符。

```javascript editor-pptx
// Splits the text at the cursor into two separate paragraphs.

// Create a shape, position the cursor after the first word, and insert a paragraph break.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1500000);
const range = shape.GetTextRange();
range.SetText("Hello World");
range.SetColor(Api.RGB(0, 0, 0));
range.MoveCursorToPos(5);
presentation.InsertParagraphBreak();
slide.RemoveAllObjects();
slide.AddObject(shape);
```
