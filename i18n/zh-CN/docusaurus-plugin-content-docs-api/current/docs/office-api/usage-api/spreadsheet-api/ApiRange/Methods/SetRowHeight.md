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

此方法不返回任何数据。

## 示例

此示例设置行高值。

```javascript editor-xlsx
// How to set a row height of cells.

// Get a range and specify its row height.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetRowHeight(32);
```
