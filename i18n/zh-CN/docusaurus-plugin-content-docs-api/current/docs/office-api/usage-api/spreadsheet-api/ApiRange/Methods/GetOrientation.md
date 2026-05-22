# GetOrientation

返回当前范围的角度。

## 语法

```javascript
expression.GetOrientation();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Angle](../../Enumeration/Angle.md)

## 示例

读取电子表格中应用于单元格范围的文本旋转角度。

```javascript editor-xlsx
// How do I find out the current text orientation of a range in a spreadsheet?

// Confirm the direction cells are tilted after applying a rotation style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
let orientation = range.GetOrientation();
worksheet.GetRange("A3").SetValue("Orientation: " + orientation);
```
