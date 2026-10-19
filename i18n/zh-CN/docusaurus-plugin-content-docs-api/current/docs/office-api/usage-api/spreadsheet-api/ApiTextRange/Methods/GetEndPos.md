# GetEndPos

返回当前范围的结束位置。

## 语法

```javascript
expression.GetEndPos();
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在工作表的形状中读取文本范围的结束位置。

```javascript editor-xlsx
// The end position points right after the last character of the range.

// Read where a sub-range covering the second word ends.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let word = range.GetRange(6, 11);
let end = word.GetEndPos();

worksheet.GetRange("A1").SetValue("GetEndPos: " + end);
```
