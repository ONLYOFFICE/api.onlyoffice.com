# PointsToPixels

将磅转换为像素。

## 语法

```javascript
expression.PointsToPixels(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为像素的磅数。 |

## 返回值

number

## 示例

此示例展示如何将磅转换为像素。

```javascript editor-xlsx
const points = 1000;
const pixels = Api.PointsToPixels(points);
const text = points + ' points are equal to ' + pixels + ' pixels.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
