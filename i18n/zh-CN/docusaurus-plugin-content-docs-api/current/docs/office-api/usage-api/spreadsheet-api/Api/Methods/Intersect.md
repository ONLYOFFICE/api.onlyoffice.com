# Intersect

返回表示两个或多个范围的矩形交集的 ApiRange 对象。如果指定了来自不同工作表的一个或多个范围，将返回错误。

## 语法

```javascript
expression.Intersect(Range1, Range2);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 相交范围之一。必须至少指定两个 Range 对象。 |
| Range2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 相交范围之一。必须至少指定两个 Range 对象。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

查找电子表格中两个范围共享的重叠单元格。

```javascript editor-xlsx
// How do I get only the cells that belong to both of two selected ranges in a spreadsheet?

// Highlight the area where two ranges meet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range1 = worksheet.GetRange("A1:C5");
let range2 = worksheet.GetRange("B2:B4");
let range = Api.Intersect(range1, range2);
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
