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

查看为电子表格创建的颜色对象所报告的类类型。

```javascript editor-xlsx
// How do I confirm the type name of a color object before passing it on in a spreadsheet?

// Apply a color to a cell and write the class type reported by that color into another cell.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
worksheet.GetRange("A4").SetValue("Class type = " + color.GetClassType());
```
