# GetRange

根据范围引用返回 ApiRange 对象。

## 语法

```javascript
expression.GetRange(sRange);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 当前工作表中的单元格范围。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

按地址选择一组单元格并在电子表格中应用背景颜色。

```javascript editor-xlsx
// How do I target a specific block of cells using their address to change formatting in a spreadsheet?

// Highlight a defined cell area by providing its coordinates and setting a fill color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = Api.GetRange("A1:C1");
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
worksheet.GetRange("A3").SetValue("The color was set to the background of cells A1:C1.");
```
