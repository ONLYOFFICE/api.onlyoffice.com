# SetBorders

使用指定的参数设置单元格/单元格范围的边框。

## 语法

```javascript
expression.SetBorders(bordersIndex, lineStyle, oColor);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bordersIndex | 必需 | [BordersIndex](../../Enumeration/BordersIndex.md) |  | 指定单元格边框位置。 |
| lineStyle | 必需 | [LineStyle](../../Enumeration/LineStyle.md) |  | 指定用于形成单元格边框的线条样式。 |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 指定要设置给单元格边框的颜色的颜色对象。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例使用指定的参数设置单元格的边框。

```javascript editor-xlsx
// How to set the thick bottom border to a cell.

// Get a range and set its border specifying its side, type and color.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is a cell with a bottom border");
```
