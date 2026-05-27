# SetOffset

设置单元格偏移量。

## 语法

```javascript
expression.SetOffset(nRow, nCol);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | 必需 | number |  | 行号。 |
| nCol | 必需 | number |  | 列号。 |

## 返回值

boolean

## 示例

在电子表格中将单元格引用按给定的行数和列数偏移。

```javascript editor-xlsx
// How do I move a range reference to a different position in a spreadsheet?

// Target a new location relative to the original range without selecting it manually in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("Old Range");
let range = worksheet.GetRange("B3");
range.SetOffset(2, 2);
range.SetValue("New Range");
```
