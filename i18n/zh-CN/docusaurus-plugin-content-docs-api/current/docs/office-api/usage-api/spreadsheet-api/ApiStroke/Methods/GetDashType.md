# GetDashType

获取笔触的虚线类型。

## 语法

```javascript
expression.GetDashType();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[DashType](../../Enumeration/DashType.md) \| null

## 示例

读取形状边框的线条样式以了解其在电子表格中是实线、虚线还是点线。

```javascript editor-xlsx
// How do I check what dash pattern a shape's border uses in a spreadsheet?

// Inspect the border line style of a shape so you can verify or display the pattern name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
worksheet.GetRange("A1").SetValue("Dash type: " + (dashType ? dashType : "not set"));
```
