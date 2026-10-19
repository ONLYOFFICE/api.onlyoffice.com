# SetFillColor

使用之前创建的颜色对象为当前单元格范围设置背景色。

当之前创建的颜色对象为 'No Fill' 或 null 时，设置为“无填充”。

## 语法

```javascript
expression.SetFillColor(color);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) \| 'No Fill' \| null |  | 指定要为单元格/单元格范围设置的背景色的颜色对象。传递 'No Fill' 或 null 可清除背景色。 |

## 返回值

boolean

## 示例

在电子表格中用颜色填充单元格范围的背景。

```javascript editor-xlsx
// How do I set a background color on a group of cells in a spreadsheet?

// Paint the background of cells with a chosen color to visually distinguish them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetFillColor(Api.RGB(255, 213, 191));
worksheet.GetRange("A2").SetValue("This is the cell with a color set to its background");
worksheet.GetRange("A4").SetValue("This is the cell with a default background color");
```
