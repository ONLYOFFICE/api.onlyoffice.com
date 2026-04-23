# GetCols

返回表示指定范围中的列的 Range 对象。

## 语法

```javascript
expression.GetCols(nCol);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCol | 必需 | number |  | 列号。* |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例演示如何获取表示指定范围中的列的 Range 对象。

```javascript editor-xlsx
// How to get columns from a range.

// Get a range, get its first two columns and fill them with a color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCols(2).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

```
