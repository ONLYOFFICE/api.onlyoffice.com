# SetRowHeight

设置行高值。

## 语法

```javascript
expression.SetRowHeight(nHeight);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nHeight | 必需 | [pt](../../Enumeration/pt.md) |  | 当前范围内的行高（以磅为单位）。 |

## 返回值

boolean

## 示例

将电子表格中行的高度调整为特定大小。

```javascript editor-xlsx
// How do I make a row taller or shorter in a spreadsheet?

// Resize a row to fit content or improve the visual layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetRowHeight(32);
```
