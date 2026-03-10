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

此方法不返回任何数据。

## 示例

此示例设置单元格偏移量。

```javascript editor-xlsx
// How to set an offset of cells.

// Get a range and specify its cells offset.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("Old Range");
let range = worksheet.GetRange("B3");
range.SetOffset(2, 2);
range.SetValue("New Range");
```
