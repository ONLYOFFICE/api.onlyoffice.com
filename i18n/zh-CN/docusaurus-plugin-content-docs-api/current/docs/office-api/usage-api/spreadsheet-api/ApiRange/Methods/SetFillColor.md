# SetFillColor

使用先前创建的颜色对象设置当前单元格范围的背景颜色。
当先前创建的颜色对象为空时设置为“No Fill”。

## 语法

```javascript
expression.SetFillColor(oColor);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 指定要设置给单元格/单元格范围背景的颜色的颜色对象。 |

## 返回值

boolean

## 示例

在电子表格中用颜色填充单元格范围的背景。

```javascript editor-xlsx
// How do I set a background color on a group of cells in a spreadsheet?

// Paint the background of cells with a chosen color to visually distinguish them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
worksheet.GetRange("A2").SetValue("This is the cell with a color set to its background");
worksheet.GetRange("A4").SetValue("This is the cell with a default background color");
```
