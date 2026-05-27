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

从电子表格中的范围提取一组列作为其自己的子范围。

```javascript editor-xlsx
// How do I select only the first few columns of a range in a spreadsheet?

// Isolate the leading columns from a wider selection and fill them with a highlight color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCols(2).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
