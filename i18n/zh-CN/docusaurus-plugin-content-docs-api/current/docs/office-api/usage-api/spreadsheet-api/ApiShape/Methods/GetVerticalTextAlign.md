# GetVerticalTextAlign

获取可插入段落或文本块的形状内容的垂直对齐方式。

## 语法

```javascript
expression.GetVerticalTextAlign();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[VerticalTextAlign](../../Enumeration/VerticalTextAlign.md)

## 示例

读取电子表格中形状的垂直文本对齐方式。

```javascript editor-xlsx
// Useful for verifying vertical text placement before adjusting shape layout in a spreadsheet.

// Retrieve the current vertical alignment of a shape's inner content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 50 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
content.RemoveAllElements();
shape.SetVerticalTextAlign("center");
let verticalAlign = shape.GetVerticalTextAlign();
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
content.Push(paragraph);
```
