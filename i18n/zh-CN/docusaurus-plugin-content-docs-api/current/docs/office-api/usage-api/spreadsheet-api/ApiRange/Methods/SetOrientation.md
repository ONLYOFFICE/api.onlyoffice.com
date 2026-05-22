# SetOrientation

设置当前单元格范围的角度。

## 语法

```javascript
expression.SetOrientation(angle);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| angle | 必需 | [Angle](../../Enumeration/Angle.md) |  | 指定范围角度。 |

## 返回值

此方法不返回任何数据。

## 示例

旋转电子表格中单元格范围内的文本。

```javascript editor-xlsx
// How do I tilt or angle the text in a group of cells in a spreadsheet?

// Change the direction text flows within cells to improve layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
```
