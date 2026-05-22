# PointsToInches

将磅转换为英寸。

## 语法

```javascript
expression.PointsToInches(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为英寸的磅数。 |

## 返回值

number

## 示例

在电子表格中将磅转换为英寸。

```javascript editor-xlsx
// How do I express a point value as inches in a spreadsheet?

// Get the inch equivalent of a given number of points in a spreadsheet.

const points = 1000;
const inches = Api.PointsToInches(points);
const text = points + ' points are equal to ' + inches + ' inches.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
