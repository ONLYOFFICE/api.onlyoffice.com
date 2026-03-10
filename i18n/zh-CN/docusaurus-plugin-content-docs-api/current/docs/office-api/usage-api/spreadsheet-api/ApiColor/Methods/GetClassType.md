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

此示例获取类类型并将其插入到表格中。

```javascript editor-xlsx
// How to get a color class type.

// Get an RGB color type.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let colorClassType = color.GetClassType();
worksheet.GetRange("A4").SetValue("Class type = " + colorClassType);
```
