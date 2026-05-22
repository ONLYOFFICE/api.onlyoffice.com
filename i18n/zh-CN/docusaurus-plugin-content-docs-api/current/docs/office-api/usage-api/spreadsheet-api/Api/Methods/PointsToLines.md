# PointsToLines

将磅转换为行（1 行 = 12 磅）。

## 语法

```javascript
expression.PointsToLines(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为行的磅数。 |

## 返回值

number

## 示例

在电子表格中将磅转换为行。

```javascript editor-xlsx
// How do I express a point value as lines in a spreadsheet?

// Get the line-unit equivalent of a given number of points in a spreadsheet.

const points = 100;
const lines = Api.PointsToLines(points);
const text = points + ' points are equal to ' + lines + ' lines.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
