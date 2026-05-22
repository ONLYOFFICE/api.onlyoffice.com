# GetClassType

返回 ApiSchemeColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSchemeColor](../ApiSchemeColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"schemeColor"

## 示例

读取配色方案颜色的类型标签并写入电子表格的单元格。

```javascript editor-xlsx
// How do I find out what type a scheme color object is in a spreadsheet?

// Confirm the category of a color object by printing its type to the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let schemeColor = Api.CreateSchemeColor("dk1");
let fill = Api.CreateSolidFill(schemeColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("curvedUpArrow", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
let classType = schemeColor.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = ");
worksheet.GetRange("B1").SetValue(classType);
```
