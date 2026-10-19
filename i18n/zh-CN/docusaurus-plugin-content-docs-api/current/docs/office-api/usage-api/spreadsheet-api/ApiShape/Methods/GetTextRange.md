# GetTextRange

返回覆盖当前绘图对象全部文本的文本范围。如果绘图对象还没有文本主体，则会创建一个。

继承自 [ApiDrawing.GetTextRange](../../ApiDrawing/Methods/GetTextRange.md)。

## 语法

```javascript
expression.GetTextRange();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

通过文本区域读取工作表上图形对象的全部文本。

```javascript editor-xlsx
// The range covers the entire text body of the drawing, so no positions have to be given.

// Read the text covered by the range and put it into a cell.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();
worksheet.GetRange("A1").SetValue(range.GetText());
```
