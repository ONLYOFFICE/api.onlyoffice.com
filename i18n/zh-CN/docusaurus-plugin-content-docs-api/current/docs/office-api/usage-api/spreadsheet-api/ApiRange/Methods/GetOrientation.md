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

此示例演示如何获取范围角度。

```javascript editor-xlsx
// How to find out cell orientation of a range.

// Get a range, get its orientation (upward, downward, etc.) and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
let orientation = range.GetOrientation();
worksheet.GetRange("A3").SetValue("Orientation: " + orientation);
```
