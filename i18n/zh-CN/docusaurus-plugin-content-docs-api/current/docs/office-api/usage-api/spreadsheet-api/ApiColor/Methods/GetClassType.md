# GetClassType

返回 ApiColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"color"

## 示例

检索电子表格中颜色对象的类类型。

```javascript editor-xlsx
// How do I find out what class type a color object belongs to in a spreadsheet?

// Identify whether a color belongs to a specific class by reading its type label in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let colorClassType = color.GetClassType();
worksheet.GetRange("A4").SetValue("Class type = " + colorClassType);
```
