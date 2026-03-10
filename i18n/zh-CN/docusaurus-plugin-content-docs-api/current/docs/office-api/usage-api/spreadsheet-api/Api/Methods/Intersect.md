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

此示例演示如何获取表示两个或多个范围的矩形交集的 ApiRange 对象。

```javascript editor-xlsx
// How to find intersection of two ranges and highlight it.

// Find common cells of two ranges and fill them with a color.

let worksheet = Api.GetActiveSheet();
let range1 = worksheet.GetRange("A1:C5");
let range2 = worksheet.GetRange("B2:B4");
let range = Api.Intersect(range1, range2);
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
