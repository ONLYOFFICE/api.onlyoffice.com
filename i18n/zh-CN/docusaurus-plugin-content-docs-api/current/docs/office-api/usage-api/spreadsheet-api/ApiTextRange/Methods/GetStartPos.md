# GetStartPos

返回当前范围的起始位置。

## 语法

```javascript
expression.GetStartPos();
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在工作表的形状中读取文本范围的起始位置。

```javascript editor-xlsx
// Positions are counted in characters from the beginning of the text body.

// Read where a sub-range covering the second word starts.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let word = range.GetRange(6, 11);
let start = word.GetStartPos();

worksheet.GetRange("A1").SetValue("GetStartPos: " + start);
```
