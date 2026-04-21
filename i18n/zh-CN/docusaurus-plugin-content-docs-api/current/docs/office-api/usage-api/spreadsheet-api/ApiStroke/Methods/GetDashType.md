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

获取笔触的虚线类型。在电子表格中创建具有实线边框的形状并显示其虚线类型。返回字符串值："dash"、"dashDot"、"dot"、"lgDash"、"lgDashDot"、"lgDashDotDot"、"solid"、"sysDash"、"sysDashDot"、"sysDashDotDot"、"sysDot"。

```javascript editor-xlsx
// How can I get the dash type using a stroke in a spreadsheet?

// Get the dash type for a stroke in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
worksheet.GetRange("A1").SetValue("Dash type: " + (dashType ? dashType : "not set"));
```
