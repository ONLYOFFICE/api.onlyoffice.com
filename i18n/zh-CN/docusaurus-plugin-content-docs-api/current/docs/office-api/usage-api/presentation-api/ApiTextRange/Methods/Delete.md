# Delete

删除当前文本范围的内容。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在演示文稿形状中删除文本范围所涵盖的字符。

```javascript editor-pptx
// Useful for removing a portion of a shape's text without recreating the whole run.

// Select the first five characters of the text and delete them.

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
const sub = range.GetRange(0, 5);
const deleted = sub.Delete();
```
