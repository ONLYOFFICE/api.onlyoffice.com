# SetRowHeight

设置以磅为单位的指定行高度。
一磅等于 1/72 英寸。

## 语法

```javascript
expression.SetRowHeight(nRow, nHeight);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | 必需 | number |  | 要设置高度的行号。 |
| nHeight | 必需 | number |  | 以磅为单位的行高度。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置以磅为单位的指定行高度。

```javascript editor-xlsx
// How to resize the height of the row.

// Set a row height.

let worksheet = Api.GetActiveSheet();
worksheet.SetRowHeight(0, 30);

```
