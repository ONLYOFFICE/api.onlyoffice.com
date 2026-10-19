# GetEndArrow

返回笔触的结束箭头属性。

## 语法

```javascript
expression.GetEndArrow();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Object \| null

## 示例

读取电子表格中形状边框的结束箭头。

```javascript editor-xlsx
// How do I find out which arrow is applied to the end of a shape's outline in a spreadsheet?

// Apply an ending arrow to a shape's stroke, then read back its type, width, and length in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetEndArrow("stealth", "medium", "large");
let arrow = retrievedStroke.GetEndArrow();
worksheet.GetRange("A1").SetValue("End arrow type: " + (arrow ? arrow.Type : "not set"));
```
